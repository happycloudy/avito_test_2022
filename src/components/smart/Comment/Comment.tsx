import React from 'react';
import {Button, Col, Comment as AntComment, Row} from 'antd';
import {useGetCommentByIdQuery} from "../../../services/CommentsService/CommentsService";
import {useToggle} from "../../../hooks/useToggle";

interface IProps {
    id: number
}

const Comment = ({id}: IProps) => {
    const [showNested, toggleShowNested] = useToggle(false)
    const {data: comment} = useGetCommentByIdQuery(id)

    return (
        comment && !comment.dead && !comment.deleted ?
            <Row>
                <Col span={21} offset={1}>
                    <AntComment
                        actions={[comment.nestedComments && <Button onClick={toggleShowNested} key="comment-nested">Ответы</Button>]}
                        content={<p>{comment.text}</p>}
                    >
                        {
                            showNested && comment.nestedComments ?
                                comment.nestedComments.map(commentId => (
                                    <Comment key={commentId} id={commentId}/>
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