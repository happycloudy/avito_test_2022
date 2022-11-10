import React from 'react';
import {Space} from "antd";
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons';
import {List as AntList} from 'antd'
import {Link} from "react-router-dom";
import {useGetPostByIdQuery} from "../../../services/PostService/PostService";

interface IProps {
    postId: number
}

const ListItem = ({postId}: IProps) => {
    const {data: post, isSuccess} = useGetPostByIdQuery(postId)

    return (
        isSuccess ?
            <AntList.Item
                actions={[
                    <Space>
                        <StarOutlined/>
                        {post.score}
                    </Space>,
                    <Space>
                        <FieldTimeOutlined/>
                        {(new Date(post.time * 1000)).toLocaleString()}
                    </Space>,

                ]}>
                <AntList.Item.Meta title={<Link to={`/news/${post.id}`}>{post.title}</Link>} description={post.by}/>
            </AntList.Item> :
            <></>
    );
};

export default ListItem;