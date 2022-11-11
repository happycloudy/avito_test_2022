import React from 'react';
import {Button, Space, Tooltip} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {IPost} from "../../../interfaces/IPost";

interface IProps {
    post?: IPost
}

const PostTitle = ({post}: IProps) => {
    return (
        <Space>
            {post?.title}
            {
                post?.url ?
                    <a href={post.url}>
                        <Tooltip title="Ссылка на оригинал">
                            <Button shape="circle">
                                <RightOutlined/>
                            </Button>
                        </Tooltip>
                    </a> :
                    <></>
            }
        </Space>
    );
};

export default PostTitle;