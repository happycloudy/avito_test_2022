import React from 'react';
import {PageHeader} from "antd";

interface IProps {
    title: string
    subtitle?: string
}

const Title = ({title = '', subtitle = ''}: IProps) => {
    return (
        <PageHeader
            title={title}
            subTitle={subtitle}
        />
    );
};

export default Title;