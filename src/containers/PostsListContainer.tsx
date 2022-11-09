import React from 'react';
import List from "../components/simple/List/List";
import {useGetLastPostsIdsQuery} from "../services/PostService/PostService";


const PostsListContainer = () => {
    const {data: ids} = useGetLastPostsIdsQuery()
    return (
        <List postsIds={ids ? ids: []}/>
    );
};

export default PostsListContainer;