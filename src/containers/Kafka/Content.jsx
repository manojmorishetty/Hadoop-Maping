import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Card, Table, Collapse } from 'reactstrap';
import Filter from './Filter'
import * as kafkaAPI from 'API/test.js'


const Content = () => {
    const [contentType, setContentType] = useState('serviceOwner');
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});

    const handleContent = (content) => {
        setContentType(content);
        setSearchText('');
        setResult({});
    }

    const handleSearch = (search) => {
        setSearchText(search);
        setResult({});
    }


    const getData = async () => {
        if (contentType == "serviceOwner") {
            const APIresult = await kafkaAPI.getServiceOwnerDetails(searchText);
            if (APIresult) {
                setResult(APIresult)
            }
        }
        else if (contentType == "topic") {
            const APIresult = await kafkaAPI.getTopicDetails(searchText);
            if (APIresult) {
                setResult(APIresult)
            }
        }
        else {
            const APIresult = await kafkaAPI.getUserDetails(searchText);
            debugger
            if (APIresult) {
                setResult(APIresult)
            }
        }
    }

    return (
        <div className="content">
            <Filter contentType={handleContent} searchText={searchText} setSearchText={handleSearch} getData={getData} />
            <div style={{ marginTop: "50px" }}>
                <Card body>
                    {
                        (Object.keys(result).length == 0 || searchText == '') ? '' :
                            <ContentView contentType={contentType} result={result} />
                    }
                </Card>
            </div>
        </div>
    );
}

const ContentView = ({ contentType, result }) => {

    const serviceOwnerJSON = {
        "topics": {
            "log-11-5click-111-accesslog": "T0",
            "log-11-5click-111-squid-access": "T2",
            "log-11-5click-111-applog": "T1"
        }
    }
    const topicJSON = {
        "retention_period": {
            "12": "RP2"
        },
        "users": {
            "hadoop-admins": "U1",
            "5click_logs": "U2",
            "la-app-dev-adm": "U0"
        },
        "serviceOwner": {
            "5click_logs": "S2"
        },
        "serviceOwnerGroup": {
            "bb_5click_logs": "SG2"
        },
        "topic": "log-11-5click-111-accesslog"
    }

    const userJSON = {
        "topics": {
            "log-11-auth-applog": "T0"
        },
        "serviceOwners": {
            "auth_logs": "S0"
        },
        "serviceOwnerGroup": {
            "bb_auth_logs": "SG0"
        }
    }

    switch (contentType) {
        case "serviceOwner":
            return (
                <React.Fragment>
                    <h4>Topics</h4>
                    <Table>
                        <thead>
                            <tr>
                                <th>Topic Key</th>
                                <th>Topic Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(result.topics).map(each => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td>{result.topics[each]}</td>
                                                <td>{each}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </React.Fragment>
            )
        case "topic":
            return (
                <React.Fragment>
                    <Row>
                        <Col>
                            <b>Retention Period</b>
                        </Col>
                        <Col>
                            <b>Service Owner</b>
                        </Col>
                        <Col>
                            <b>Service Owner Group</b>
                        </Col>
                        <Col>
                            <b>Topic</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {`${result['retention_period'][Object.keys(result['retention_period'])[0]]} - ${Object.keys(result['retention_period'])[0]} months`}
                        </Col>
                        <Col>
                            {`${result['serviceOwner'][Object.keys(result['serviceOwner'])[0]]} - ${Object.keys(result['serviceOwner'])[0]}`}
                        </Col>
                        <Col>
                            {`${result['serviceOwnerGroup'][Object.keys(result['serviceOwnerGroup'])[0]]} - ${Object.keys(result['serviceOwnerGroup'])[0]}`}
                        </Col>
                        <Col>
                            {`${result['topic']}`}
                        </Col>
                    </Row>
                    <div style={{ marginTop: "10px" }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Topic Key</th>
                                    <th>User Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(result.users).map(each => {
                                        return (
                                            <React.Fragment>
                                                <tr>
                                                    <td>{result.users[each]}</td>
                                                    <td>{each}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </React.Fragment>
            )
        case "user":
            return (
                <React.Fragment>
                    {/* <Row>
                        <Col>
                            <b>Service Owners</b>
                        </Col>
                        <Col>
                            <b>Service Owner Group</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {`${userJSON['serviceOwners'][Object.keys(userJSON['serviceOwners'])[0]]} - ${Object.keys(userJSON['serviceOwners'])[0]}`}
                        </Col>
                        <Col>
                            {`${userJSON['serviceOwnerGroup'][Object.keys(userJSON['serviceOwnerGroup'])[0]]} - ${Object.keys(userJSON['serviceOwnerGroup'])[0]}`}
                        </Col>
                    </Row> */}
                    <div style={{ marginTop: "10px" }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Service Owners</th>
                                    <th>Service Owner Group</th>
                                    <th>Topic Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(result.topics).map(each => {
                                        return (
                                            <React.Fragment>
                                                <tr>
                                                    <td>{`${Object.keys(result['serviceOwners'])[0]}`}</td>
                                                    <td>{`${result['serviceOwnerGroup'][Object.keys(result['serviceOwnerGroup'])[0]]} - ${Object.keys(result['serviceOwnerGroup'])[0]}`}</td>
                                                    <td>{each}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </React.Fragment >
            )
        default:
            return ''

    }
}

export default Content

