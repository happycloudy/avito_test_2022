import React, {ReactNode} from 'react';
import {Col, Row} from "antd";

interface IProps {
    children: ReactNode
}


const PageContainer = ({children}: IProps) => {
    return (
        <Row>
            <Col offset={2} span={20}>
                {children}
            </Col>
        </Row>
    );
};

export default PageContainer;