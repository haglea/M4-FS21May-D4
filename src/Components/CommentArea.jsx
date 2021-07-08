import React from 'react';
import CommentsList from "./CommentsList";

const CommentArea = (props) => {

        return (
            <div>
             <CommentsList book={props.book.asin} />
            </div>
        );
   
}

export default CommentArea;