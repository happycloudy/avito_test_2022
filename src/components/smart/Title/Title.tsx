import React from 'react';
import {PageHeader} from "antd";
import {useHistory} from "react-router-dom";

interface IProps {
    title: React.ReactNode
    subtitle?: string
    actions?: JSX.Element[]
    haveBackButton?: boolean
}

const Title = ({title = '', subtitle = '', actions, haveBackButton}: IProps) => {
    const navigate = useHistory()

    const handleGoHome = () => navigate.push('/')

    return (
        <PageHeader
            onBack={haveBackButton ? handleGoHome: undefined}
            title={title}
            subTitle={subtitle}
            extra={actions}
        />
    );
};

export default Title;