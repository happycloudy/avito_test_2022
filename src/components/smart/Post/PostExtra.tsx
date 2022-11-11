import React from 'react';
import {IPost} from "../../../interfaces/IPost";
import {CommentOutlined, FieldTimeOutlined} from "@ant-design/icons";
import {Space} from "antd";

interface IProps {
    post?: IPost
    date?: string
}

const PostExtra = ({post, date}: IProps) => {
    return (
        <Space direction={'vertical'} align={'start'}>
                             <span className={'post-card-badge'}>
                              <CommentOutlined/>
                              <p>{post?.comments?.length || 0}</p>
                          </span>
            <span className={'post-card-badge'}>
                              <FieldTimeOutlined/>
                              <p>{date}</p>
                          </span>
        </Space>
    );
};

export default PostExtra;