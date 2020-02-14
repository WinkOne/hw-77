import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchGoods} from "../store/action";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import Container from "reactstrap/es/Container";


class Main extends Component {
    componentDidMount() {
        this.props.fetchGoods()
    }

    render() {


        return (
            <Container style={{display: "flex", flexWrap: 'wrap'}}>
                {this.props.goodsThis.map(item => (
                    <Card key={item.id} style={{width: "30%", margin: '10px', padding: '10px'}}>
                       {item.image !== "null" ? <CardImg style={{width: "100px", margin: '0 auto'}} top width="100%" src={'http://localhost:8000/uploads/' + item.image}/> : null}
                        <CardBody>
                            <CardTitle>{item.author}</CardTitle>
                            <CardText>{item.message}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        goodsThis: state.goods
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoods: () => dispatch(fetchGoods())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
