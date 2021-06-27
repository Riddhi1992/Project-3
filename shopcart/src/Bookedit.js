import React, {Component} from "react";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class Bookedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: {
          title: '',
          res_review: ''
        }
    };
  }
  async componentDidMount() {
    if (!!this.props.match.params.id) {
      const list = 
        await (await fetch(`/api/list/${this.props.match.params.id}`)).json();
        this.setState({item: list});
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }
  handleSubmit = async (event) => {
    console.log('Hello');
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/list', {
        method: (item._id) ? 'PUT' : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    })
    .then(() => this.props.history.push('/reviews')) 
  }
    render() {
      console.log(this.props)
      const {item} = this.state;
      const title = 
            <h2 className="mt-3">
                {/* if item has an id number, otherwise.. */}
                {item._id ? 'Edit Review' : 'Add Review'}
            </h2>;
            return(
                <div>
                    <Container>
                        {/* display the appropriate title */}
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="title" className="h5 mt-3">Title</Label>
                                <Input type="text" name="title" id="title" value={item.title || ''} onChange={this.handleChange} autoComplete="title" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="res_review" className="h5 mt-3">Review</Label>
                                <Input type="textarea" name="res_review" id="res_review" value={item.res_review || ''} onChange={this.handleChange} autoComplete="res_review" style={{ height: '100px' }} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit" className="mt-3" >Submit</Button>{' '}
                                <Button color="secondary" className="mt-3" tag={Link} to="/reviews">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            )
    }
  }

  export default withRouter(Bookedit);