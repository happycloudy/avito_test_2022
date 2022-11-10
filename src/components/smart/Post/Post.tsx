import React from 'react';
import {useParams} from "react-router-dom";
import {Card, Space} from "antd";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";
import Comments from "../../simple/Comments/Comments";
import {UserOutlined} from '@ant-design/icons'


const Post = () => {
    const {id} = useParams<{ id: string }>()
    const {data: post, isLoading} = useGetPostByIdQuery(parseInt(id))
    const date = post ? (new Date(post.time * 1000).toLocaleDateString()) : undefined

    return (
        <>
            <Card loading={isLoading} title={post?.title} extra={[<span key={'date'}>{date}</span>]}>
                <Space>
                    <UserOutlined/>
                    {post?.by || 'Нет автора'}
                </Space>
            </Card>
            {
                post ?
                    <div className={'comments-wrap'}>
                        <Comments comments={post?.comments || undefined}/>
                    </div> :
                    <></>
            }
        </>
    );
};

export default Post;