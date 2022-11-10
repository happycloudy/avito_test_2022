import React from 'react';
import {Layout} from "antd";
import Title from "../components/simple/Title/Title";
import Post from "../components/smart/Post/Post";

const { Content } = Layout;

const News = () => {
    return (
        <Content style={{height: '100%'}}>
            <Title title={'Новость'}/>
            <Post/>
        </Content>
    );
};

export default News;