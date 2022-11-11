import React from 'react';
import {useParams} from "react-router-dom";
import {Button, Card, message, Space} from "antd";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";
import Comments from "../../simple/Comments/Comments";
import {UserOutlined} from '@ant-design/icons'
import Title from "../../simple/Title/Title";
import {ReloadOutlined} from '@ant-design/icons'
import PostTitle from "./PostTitle";
import PostExtra from "./PostExtra";


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
                  title={<PostTitle post={post}/>}
                  extra={<PostExtra post={post} date={date}/>}>
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