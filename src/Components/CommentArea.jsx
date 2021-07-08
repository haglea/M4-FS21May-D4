import React, { Component } from 'react';
import CommentsList from "./CommentsList";

class CommentArea extends Component {

    state = {
        comments: []
    }

    componentDidMount = async () => {

        try {
            
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" 
            + this.props.asin, {
                headers: {
                "Content-Type": "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmMwMGIzNTgxNzAwMTVjMjI3NDkiLCJpYXQiOjE2MjUwNTgzMDQsImV4cCI6MTYyNjI2NzkwNH0.Ibc--VACzfbnbVnmlo0H7tPvvmxWZW_tKIx3RWPsOSE",
             }
            });
            const comments = await response.json();
            if(response.ok) {
                this.setState({
                comments: comments
            })
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div>
             
             <CommentsList comments={this.state.comments} />
            </div>
        );
    }
           
}

export default CommentArea;