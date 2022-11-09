import React from 'react';
import {List} from "antd";
import Comment from "../../smart/Comment/Comment";

interface IProps {
    comments: number[]
}

const Comments = ({comments}: IProps) => {
    return (
        comments ?
            <List>
                {comments.map(id => (
                    <Comment key={id} id={id}/>
                ))}
            </List> :
            <></>
    );
};

export default Comments;