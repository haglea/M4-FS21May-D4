import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SingleComment = ({comment}) => {
    
        return (
            <> 
                 <ListGroup.Item className="bg-secondary text-white">
                     {comment.comment}</ListGroup.Item>
            </>
        );
}

export default SingleComment;