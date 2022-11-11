import React from 'react';
import {useParams} from "react-router-dom";
import {Button, Card, message, Space, Tooltip} from "antd";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";
import Comments from "../../simple/Comments/Comments";
import {FieldTimeOutlined, UserOutlined, CommentOutlined, RightOutlined} from '@ant-design/icons'
import Title from "../../simple/Title/Title";
import {ReloadOutlined} from '@ant-design/icons'


const Post = () => {
    const {id} = useParams<{ id: string }>()
    const {data: post, isLoading, refetch} = useGetPostByIdQuery(parseInt(id))
    const date = post ? (new Date(post.time * 1000).toLocaleString()) : undefined

    const handleRefetch = () => {
        refetch().then(() => {
            message.success('Комментарии обновлены')
        })
    }

    return (
        <>
            <Card loading={isLoading}
                  title={
                      <Space>
                          {post?.title}
                          {
                              post?.url ?
                                  <a href={post.url}>
                                      <Tooltip title="Ссылка на оригинал">
                                          <Button shape="circle">
                                              <RightOutlined/>
                                          </Button>
                                      </Tooltip>
                                  </a> :
                                  <></>
                          }
                      </Space>
                  }
                  extra={
                      <Space direction={'vertical'} align={'start'}>
                             <span className={'post-card-badge'}>
                              <CommentOutlined/>
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
                    <>
                        <Title title={
                            <Space align={'center'}>
                                Комментарии
                                <Button onClick={handleRefetch}>
                                    <Space align={'center'}>
                                        <ReloadOutlined/>
                                        Обновить список комментариев
                                    </Space>
                                </Button>
                            </Space>
                        }/>
                        <div className={'comments-wrap'}>
                            <Comments comments={post?.comments || undefined}/>
                        </div>
                    </> :
                    <></>
            }
        </>
    );
};

export default Post;