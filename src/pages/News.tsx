import React from 'react';
import {Layout} from "antd";
import Title from "../components/simple/Title/Title";
import Post from "../components/smart/Post/Post";
import {motion} from 'framer-motion'

const {Content} = Layout;

const News = () => {
    return (
        <motion.div initial={{transform: 'translateX(100%)'}}
                    animate={{transform: 'translateX(0%)', transition: {duration: 0.7}}}
                    exit={{transform: 'translateX(100%)', transition: {duration: 0.7}}}>
            <Content className={'page'} style={{height: '100%'}}>
                <Title haveBackButton title={'Новость'}/>
                <Post/>
            </Content>
        </motion.div>
    );
};

export default News;