import React from 'react';
import {List as AntList} from 'antd'
import ListItem from "../ListItem/ListItem";
import {IPost} from "../../../interfaces/IPost";

const exampleData: IPost[] = [
    {
        title: 'Название1',
        rating: 0,
        author: 'Автор1',
        publishDate: new Date()
    },
    {
        title: 'Название2',
        rating: 3,
        author: 'Автор2',
        publishDate: new Date()
    },
]

const List = () => {
    return (
        <AntList
            bordered
            itemLayout="vertical"
            dataSource={exampleData}
            renderItem={post => <ListItem post={post}/>}
        />
    );
};

export default List;