import React from 'react';
import {Col, List, Row, Typography} from "antd";
import Comment from "../../smart/Comment/Comment";

interface IProps {
    comments?: number[]
}

const Comments = ({comments}: IProps) => {
    return (
        comments ?
            <List>
                {comments.map(id => (
                    <Comment key={id} id={id}/>
                ))}
            </List> :
            <Row>
                <Col span={4} offset={10}>
                    <Typography.Text className={'d-center'}>
                        Нет комментариев
                    </Typography.Text>
                </Col>
            </Row>
    );
};

export default Comments;