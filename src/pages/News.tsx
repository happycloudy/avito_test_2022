import React from 'react';
import {Layout} from "antd";
import Title from "../components/smart/Title/Title";

const { Content } = Layout;

const News = () => {
    return (
        <Content>
            <Title title={'Новости'} subtitle={''}/>
        </Content>
    );
};

export default News;