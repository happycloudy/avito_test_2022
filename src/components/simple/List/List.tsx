import React from 'react';
import {List as AntList} from 'antd'
import ListItem from "../ListItem/ListItem";

interface IProps {
    postsIds: number[]
}

const List = ({postsIds}: IProps) => {
    return (
        <AntList
            bordered
            itemLayout="vertical"
            dataSource={postsIds}
            renderItem={id => <ListItem postId={id}/>}
        />
    );
};

export default List;