import React from 'react';
import {useParams} from "react-router-dom";
import {Card} from "antd";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";
import Comments from "../../simple/Comments/Comments";

const Post = () => {
    const {id} = useParams<{ id: string }>()
    const {data: post} = useGetPostByIdQuery(parseInt(id))
    const date = post ? (new Date(post.time * 1000).toLocaleDateString()) : 0

    return (
        post ?
            <>
                <Card title={post.title} extra={<span>{date}</span>}/>
                <Comments/>
            </> :
            <></>
    );
};

export default Post;