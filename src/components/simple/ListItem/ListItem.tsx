import React from 'react';
import {Space} from "antd";
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons';
import {List as AntList} from 'antd'
import {IPost} from "../../../interfaces/IPost";
import {Link} from "react-router-dom";

interface IProps {
    post: IPost
}

const ListItem = ({post}: IProps) => {
    return (
        <AntList.Item
            actions={[
                <Space>
                    {React.createElement(StarOutlined)}
                    {post.score}
                </Space>,
                <Space>
                    {React.createElement(FieldTimeOutlined)}
                    {post.time.toLocaleDateString()}
                </Space>,

            ]}>
            <AntList.Item.Meta title={<Link to={`/news/${post.id}`}>{post.title}</Link>} description={post.by}/>
        </AntList.Item>
    );
};

export default ListItem;