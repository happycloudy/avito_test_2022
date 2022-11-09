import React from 'react';
import {Space} from "antd";
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons';
import {List as AntList} from 'antd'
import {IPost} from "../../../interfaces/IPost";

interface IProps {
    post: IPost
}

const ListItem = ({post}: IProps) => {
    return (
        <AntList.Item
            actions={[
                <Space>
                    {React.createElement(StarOutlined)}
                    {post.rating}
                </Space>,
                <Space>
                    {React.createElement(FieldTimeOutlined)}
                    {post.publishDate.toLocaleDateString()}
                </Space>,

            ]}>
            <AntList.Item.Meta title={post.title} description={post.author}/>
        </AntList.Item>
    );
};

export default ListItem;