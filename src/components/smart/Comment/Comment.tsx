import React from 'react';
import {Col, Comment as AntComment, Row} from 'antd';
import {useGetCommentByIdQuery} from "../../../services/CommentsService/CommentsService";

interface IProps {
    id: number
}

const Comment = ({id}: IProps) => {
    const {data: comment} = useGetCommentByIdQuery(id)
    return (
        comment && !comment.deleted ?
            <Row>
                <Col span={21} offset={1}>
                    <AntComment
                        actions={[<span key="comment-nested-reply-to">Ответы</span>]}
                        content={<p>{comment.text}</p>}
                    >
                        {
                            comment.nestedComments ?
                                // TODO: поменять на вложенный коммент
                                comment.nestedComments.map(comment => (
                                    comment
                                )):
                                <></>
                        }
                    </AntComment>
                </Col>
            </Row> :
            <></>
    );
};

export default Comment;