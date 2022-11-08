import React from 'react';
import {Layout} from "antd";
import Title from "../components/smart/Title/Title";

const { Content } = Layout;

const Home = () => {
    return (
        <Content>
            <Title title={'Главная'} subtitle={'Здесь распологаются последние 100 новостей'}/>
        </Content>
    );
};

export default Home;