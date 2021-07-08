import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SingleComment = (props) => {
    
        return (
            <>
                 <ListGroup.Item>{props.book.comment}</ListGroup.Item>
            </>
        );
}

export default SingleComment;