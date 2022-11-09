import React from 'react';
import {List as AntList} from 'antd'
import ListItem from "../ListItem/ListItem";
import {IPost} from "../../../interfaces/IPost";

const exampleData: IPost[] = [
    {
        title: 'Название1',
        score: 0,
        by: 'Автор1',
        time: new Date(),
        id: 0,
    },
    {
        title: 'Название2',
        score: 3,
        by: 'Автор2',
        time: new Date(),
        id: 1,
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