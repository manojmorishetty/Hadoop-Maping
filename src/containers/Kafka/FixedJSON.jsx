import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Card, Table, Collapse } from 'reactstrap';
import * as kafkaAPI from 'API/test.js'


const FixedJSON = () => {
    const [fixedType, setFixedType] = useState('services');
    const [isOpen, setIsOpen] = useState(true);

    const handleFixedType = (type) => {
        setFixedType(type)
    }

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div style={{ marginTop: "50px" }}>
            <Card body>
                <Row>
                    <Col xl={3}>
                        <Button onClick={() => handleFixedType("services")} color={fixedType == "services" ? "success" : ""}>Services Information</Button>
                    </Col>
                    <Col xl={3}>
                        <Button onClick={() => handleFixedType("orphanServices")} color={fixedType == "orphanServices" ? "success" : ""}>Orphan Services</Button>
                    </Col>
                    <Col xl={3}>
                        <Button onClick={() => handleFixedType("orphanTopics")} color={fixedType == "orphanTopics" ? "success" : ""}>Orphan Topics</Button>
                    </Col>
                    <Col xl={3}>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>↓</Button>
                    </Col>
                </Row>
                <div style={{ marginBottom: "10px" }}>
                    <Collapse isOpen={isOpen}>
                        <Row>
                            <GetFixedData selectType={fixedType} />
                        </Row>
                    </Collapse>
                </div>
            </Card>
        </div>
    );
}

const GetFixedData = ({ selectType }) => {
    return (
        selectType == "services" ?
            Object.keys(services).map(main => {
                return (
                    <Col xl={4}>
                        <b>{main}</b>
                        {
                            Object.keys(services[main]).map(sub => {
                                return <p>{sub}</p>
                            })
                        }
                    </Col>
                )
            }) : selectType == "orphanServices" ? (
                <div style={{ marginLeft: "30px" }}>
                    <b>Accounts</b>
                    {
                        Object.keys(orphanServices['accounts']).map(each => {
                            return <p>{each}</p>
                        })
                    }
                </div>
            ) : selectType == "orphanTopics" ? (
                <div style={{ marginLeft: "30px" }}>
                    <b>Topics</b>
                    {
                        Object.keys(orphanTopics['topics']).map(each => {
                            return <p>{each}</p>
                        })
                    }
                </div>
            ) : ''
    )
}

const services = {
    "service_account": {
        "auth_logs": "SA1",
        "bbid_logs": "SA2",
        "bbidxp_logs": "SA3",
        "5click_logs": "SA0"
    },
    "service_QA_group": {
        "qa_bbid_logs": "SG_QA2",
        "qa_bbidxp_logs": "SG_QA3",
        "qa_auth_logs": "SG_QA1",
        "qa_5click_logs": "SG_QA0"
    },
    "service_group": {
        "bb_auth_logs": "SG1",
        "bb_bbidxp_logs": "SG3",
        "bb_5click_logs": "SG0",
        "bb_bbid_logs": "SG2"
    },
    "service": {
        "BBID Cross-Platform": "S3",
        "Auth": "S1",
        "5Click": "S0",
        "BBID": "S2"
    },
    "owner_DL": {
        "BBID - BB Service Engineering <bbidbbserviceengineering@blackberry.com>": "O3",
        "PUSHWEB - BB Service Engineering <pushwebbbserviceengineering@blackberry.com>": "O1",
        "BBID - BB Service Engineering <bbidbbserviceengineering@blackberry.com>": "O2",
        "PUSHWEB - BB Service Engineering <pushwebbbserviceengineering@blackberry.com>": "O0"
    }
}

const orphanServices = {
    "accounts": {
        "bb_bpds_logs": "SA1",
        "bb_bes_logs": "SA2",
        "bb_athoc_logs": "SA5",
        "bb_bdp_logs": "SA4",
        "bb_bdptest_logs": "SA3",
        "bb_secusuite_logs": "SA0"
    }
}

const orphanTopics = {
    "topics": {
        "log-29-cvt-svc02-chef-sync": "T3",
        "log-11-kelly-test-9": "T4",
        "metrics-11-rsyslog-pstats": "T5",
        "component": "T8",
        "metrics-24-rsyslog-pstats": "T6",
        "_consumer_offsets": "T7",
        "log-29-cvt-svc01-chef-platform": "T0",
        "log-29-cvt-svc02-chef-platform": "T2",
        "log-29-cvt-svc01-chef-sync": "T1"
    }
}


export default FixedJSON

