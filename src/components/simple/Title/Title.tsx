import React from 'react';
import {PageHeader} from "antd";

interface IProps {
    title: string
    subtitle?: string
    actions?: JSX.Element[]
}

const Title = ({title = '', subtitle = '', actions}: IProps) => {
    return (
        <PageHeader
            title={title}
            subTitle={subtitle}
            extra={actions}
        />
    );
};

export default Title;