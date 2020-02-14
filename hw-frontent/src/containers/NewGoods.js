import React, {Component} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {createGoods} from "../store/action";
import {connect} from "react-redux";


class NewGoods extends Component {
    state = {
        author: '',
        message: '',
        image: null
    };

    inputOnClickHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    fileChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.files[0]})
    };

    submitHandler = async e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        await this.props.createGoods(formData);
        this.props.history.push('/')
    };


    render() {
        return (
            <Container>
                <div style={{padding: '15px 15px 0 15px'}}>
                    <h1>New Goods</h1>
                </div>
                <hr style={{paddingBottom: '15px'}}/>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input
                            onChange={this.inputOnClickHandler}
                            value={this.state.author}
                            type="text"
                            name="author"
                            id="author"
                            placeholder="Enter your name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input
                            value={this.state.message}
                            onChange={this.inputOnClickHandler}
                            required
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                        />
                    </FormGroup>
                    <FormGroup
                        style={{border: '1px solid #ccc', padding: '20px', width: '35%'}}>
                        <Label for="image">Image</Label>
                        <Input
                            onChange={this.fileChangeHandler}
                            type="file"
                            name="image"
                            id="image"
                        />
                    </FormGroup>
                    <Button>Add new goods</Button>
                </Form>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGoods: (data) => dispatch(createGoods(data))
    }
};
export default connect(null, mapDispatchToProps)(NewGoods);