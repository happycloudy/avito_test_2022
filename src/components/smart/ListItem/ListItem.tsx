import React from 'react';
import {Typography} from "antd";
import {List as AntList} from 'antd'
import {IPost} from "../../../interfaces/IPost";

interface IProps {
    post: IPost
}

const ListItem = ({post}: IProps) => {
    return (
        <AntList.Item>
            <Typography.Text>
                {post.title}
            </Typography.Text>
        </AntList.Item>
    );
};

export default ListItem;