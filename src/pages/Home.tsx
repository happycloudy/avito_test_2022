import React, {useRef, useState} from 'react';
import {Button, Layout, message} from "antd";
import Title from "../components/simple/Title/Title";
import PostsListContainer from "../containers/PostsListContainer";

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
        <Content>
            <Title title={'Главная'}
                   actions={[
                       <Button key='reload'
                               type="primary"
                               loading={loadingPosts || false}
                               onClick={handleRefetch}>
                           Обновить список
                       </Button>
                   ]}
                   subtitle={'Здесь располагаются последние 100 новостей'}/>
            <PostsListContainer refetchRef={refetchRef} handleLoading={handleLoadingPosts}/>
        </Content>
    );
};

export default Home;