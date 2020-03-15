import React from 'react'
import {
    Button, Row, Col, Card, CardTitle, CardText
} from 'reactstrap';
import { useHistory } from 'react-router-dom'

const Home = () => {
    let history = useHistory()
    return (
        <div className="content">
            <h3 className="main__heading">Welcome to Hadoop Customer Mapping</h3>
            <div className="heading_margin">
                <Row>
                    <Col xl={6}>
                        <Card body>
                            <CardTitle>Kafka</CardTitle>
                            <CardText>Get all the details about Kafka</CardText>
                            <Button onClick={() => history.push("kafka")}>Click me</Button>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card body>
                            <CardTitle>HDFS</CardTitle>
                            <CardText>Get all the details about HDFS</CardText>
                            <Button onClick={() => history.push("hdfs")}>Click me</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home