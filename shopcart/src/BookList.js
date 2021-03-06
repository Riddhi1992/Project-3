import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class BookList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/lists')
            .then(response => response.json())
            .then(data => this.setState({lists: data, isLoading: false }));
    }

    removeList = async(id) => {
        await fetch(`/api/list/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        })
        console.log("Remove Done!")
        let updatedLists = 
            [...this.state.lists].filter(i => i._id !== id);
        this.setState({lists: updatedLists});
    }

    render() {
        const {lists, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const bookList = lists.map(list => {
            return (
                <tr key={list._id}>
                    <td style={{whiteSpace: 'nowrap'}}>{list.title}</td>
                    <td>{list.res_review}</td>
                    <tb>
                        <ButtonGroup>
                            <Button 
                                size="sm"
                                color="primary"
                                tag={Link}
                                to={"/lists/" + list._id}
                            >Edit</Button>
                            <Button 
                                size="sm"
                                color="danger"
                                onClick={() => this.removeList(list._id)}
                            >Delete</Button>
                        </ButtonGroup>
                    </tb>
                </tr>
            )
        });
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        {/* <Button 
                            color="success"
                            className="my-4"
                            tag={Link}
                            to="/lists/new"
                        >Add Review</Button> */}
                        <Link to="/lists" className="btn btn-primary mt-5 mb-5 mr-5">Add Review</Link>
                    </div>
                    <h3 className="mt-5">All Review</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="15%">Name</th>
                                <th width="50%">Review</th>
                                <th width="15%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default BookList;