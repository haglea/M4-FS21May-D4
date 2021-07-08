import React, { Component } from 'react';
import SingleComment from './SingleComment';

class CommentsList extends Component {

    state = {
        comments: []
    }

    componentDidMount = async () => {

        try {
            
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" 
            + this.props.book.asin, {
                headers: {
                "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmMwMGIzNTgxNzAwMTVjMjI3NDkiLCJpYXQiOjE2MjUwNTgzMDQsImV4cCI6MTYyNjI2NzkwNH0.Ibc--VACzfbnbVnmlo0H7tPvvmxWZW_tKIx3RWPsOSE",
             }
            });
            const data = await response.json();
            this.setState({
                comments: [data.comment]
            })
        } catch (error) {
            console.log(error)
        }

    }
    

    render() {
        return (
            <div>
                {this.state.comments.map(comment => (
                    <SingleComment book={this.props.book.asin} />
                )
                )}
               
               
            </div>
        );
    }
}

export default CommentsList;