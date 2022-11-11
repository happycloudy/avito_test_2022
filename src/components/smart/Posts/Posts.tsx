import React, {useState} from 'react';
import {Divider, List as AntList, Skeleton} from 'antd'
import PostsItem from "../PostsItem/PostsItem";
import InfiniteScroll from "react-infinite-scroll-component";

interface IProps {
    postsIds: number[]
}

const partLength = 10

const Posts = ({postsIds}: IProps) => {
    const [ids, setIds] = useState<number[]>(postsIds.slice(0,partLength) || [])

    const handleLoadMore = () => setIds(prevIds => postsIds.slice(0, prevIds.length + partLength))

    return (
        <InfiniteScroll next={handleLoadMore}
                        hasMore={ids.length !== postsIds.length}
                        scrollableTarget={'App'}
                        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                        endMessage={<Divider plain>Больше новостей нету</Divider>}
                        dataLength={ids.length}>
            <AntList
                bordered
                itemLayout="vertical"
                dataSource={ids}
                renderItem={id => <PostsItem postId={id}/>}
            />
        </InfiniteScroll>
    );
};

export default Posts;