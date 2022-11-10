import React from 'react';
import List from "../components/simple/List/List";
import {useGetLastPostsIdsQuery} from "../services/PostService/PostService";

const MS_TO_MINUTE = 1000*60

const PostsListContainer = () => {
    const {data: ids} = useGetLastPostsIdsQuery(undefined, {
        pollingInterval: MS_TO_MINUTE
    })
    return (
        <List postsIds={ids ? ids: []}/>
    );
};

export default PostsListContainer;