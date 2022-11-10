import React from 'react';
import {Button, Col, Comment as AntComment, Row, Skeleton} from 'antd';
import {useGetCommentByIdQuery} from "../../../services/CommentsService/CommentsService";
import {useToggle} from "../../../hooks/useToggle";

interface IProps {
    id: number
}

const Comment = ({id}: IProps) => {
    const [showNested, toggleShowNested] = useToggle(false)
    const {data: comment, isLoading} = useGetCommentByIdQuery(id)

    return (
        comment && !comment.dead && !comment.deleted ?
                <Row>
                    <Col span={21} offset={1} >
                        {
                            isLoading ?
                                <Skeleton/>:
                                <AntComment
                                    actions={[comment.nestedComments &&
                                    <Button onClick={toggleShowNested} key="comment-nested">Ответы</Button>]}
                                    content={<p>{comment.text}</p>}
                                    author={comment.by || 'Без автора'}
                                >
                                    {
                                        showNested && comment.nestedComments ?
                                            comment.nestedComments.map(commentId => (
                                                <Comment key={commentId} id={commentId}/>
                                            )) :
                                            <></>
                                    }
                                </AntComment>
                        }
                    </Col>
                </Row> :
            <></>
    );
};

export default Comment;