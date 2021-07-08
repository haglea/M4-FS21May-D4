import { Component } from "react";
import { Card } from "react-bootstrap";
import "./SingleBook.css";
import MyBadge from "./MyBadge";
import CommentArea from "./CommentArea";

class SingleBook extends Component {

    state = {
        selected: false
    } 

    render() {

  return (
        
          <Card 
          className="mb-3 cardstyle"           
          onClick={() =>  this.setState({ selected: !this.state.selected }) }
          style={{ border: this.state.selected ? "3px solid red" : "none" }} 
          >
            <Card.Link href="#">
              <Card.Img className="img" variant="top" src={this.props.book.img} />
            </Card.Link>
            <MyBadge color="success" text={this.props.book.price} />
            <Card.Body>
              <Card.Title>
                <small>{this.props.book.title.slice(0, 35)}...</small>
              </Card.Title>
              {this.state.selected && <CommentArea book={this.props.book} />}
            </Card.Body>
          </Card>
        
  );
}

};

export default SingleBook;
