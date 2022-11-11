import React, {useRef, useState} from 'react';
import {Button, Layout, message} from "antd";
import Title from "../components/smart/Title/Title";
import PostsListContainer from "../containers/PostsListContainer";
import {motion} from 'framer-motion'

const {Content} = Layout;

const Home = () => {
    const refetchRef = useRef<() => Promise<void>>(null)
    const [loadingPosts, setLoadingPosts] = useState<boolean>(false)

    const handleRefetch = () => {
        if (refetchRef.current) {
            refetchRef.current().then(() => {
                message.success('Список новостей обновлен')
            })
        }
    }

    const handleLoadingPosts = (state: boolean) => setLoadingPosts(state)

    return (
        <motion.div initial={{transform: 'translateX(-120%)'}}
                    animate={{transform: 'translateX(0%)', transition: {duration: 0.7}}}
                    exit={{transform: 'translateX(-120%)', transition: {duration: 0.7}}}>
            <Content className={'page'}>
                <Title title={'Главная'}
                       actions={[
                           <Button key='reload'
                                   type="primary"
                                   loading={loadingPosts}
                                   onClick={handleRefetch}>
                               Обновить список
                           </Button>
                       ]}
                       subtitle={'Здесь располагаются последние 100 новостей'}/>
                <PostsListContainer refetchRef={refetchRef} handleLoading={handleLoadingPosts}/>
            </Content>
        </motion.div>
    );
};

export default Home;