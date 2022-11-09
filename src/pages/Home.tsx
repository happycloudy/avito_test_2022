import React from 'react';
import {Button, Layout} from "antd";
import Title from "../components/simple/Title/Title";
import List from "../components/simple/List/List";

const {Content} = Layout;

const Home = () => {
    return (
        <Content>
            <Title title={'Главная'}
                   actions={[<Button key='reload' type="primary">Обновить список</Button>]}
                   subtitle={'Здесь распологаются последние 100 новостей'}/>
            <List/>
        </Content>
    );
};

export default Home;