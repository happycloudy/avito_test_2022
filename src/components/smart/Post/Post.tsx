import React from 'react';
import {useParams} from "react-router-dom";
import {Card, Space} from "antd";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";
import Comments from "../../simple/Comments/Comments";
import {FieldTimeOutlined, UserOutlined, CommentOutlined} from '@ant-design/icons'


const Post = () => {
    const {id} = useParams<{ id: string }>()
    const {data: post, isLoading} = useGetPostByIdQuery(parseInt(id))
    const date = post ? (new Date(post.time * 1000).toLocaleString()) : undefined

    return (
        <>
            <Card loading={isLoading}
                  title={post?.title}
                  extra={
                      <Space direction={'vertical'} align={'start'}>
                             <span className={'post-card-badge'}>
                              <CommentOutlined />
                              <p>{post?.comments?.length || 0}</p>
                          </span>
                          <span className={'post-card-badge'}>
                              <FieldTimeOutlined/>
                              <p>{date}</p>
                          </span>
                      </Space>
                  }>
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