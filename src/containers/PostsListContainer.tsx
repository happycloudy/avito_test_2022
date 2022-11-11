import React, {useEffect} from 'react';
import Posts from "../components/smart/Posts/Posts";
import {useGetLastPostsIdsQuery} from "../services/PostService/PostService";

// TODO: Нужно поменять на конкретные тип для ref... но я не смог узнать на какие:)
interface IProps {
    refetchRef: any
    handleLoading: (loading: boolean) => void
}

const MS_IN_MINUTE = 1000 * 60


const PostsListContainer = ({refetchRef, handleLoading}: IProps) => {
    const {data: ids, refetch, isLoading} = useGetLastPostsIdsQuery(undefined, {
        pollingInterval: MS_IN_MINUTE
    })

    refetchRef.current = refetch

    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])

    return (
        ids ?
            <Posts postsIds={ids}/> :
            <></>
    );
};

export default PostsListContainer;