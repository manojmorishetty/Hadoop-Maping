import React, { useState, useEffect } from 'react';
import {
    ButtonToolbar, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Col, Row, Button, Input, Card
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';


const Filter = ({ contentType, getData, searchText, setSearchText }) => {
    let contentTypes = [{ "name": "Service owner", "key": "serviceOwner" },
    { "name": "Topic", "key": "topic" }, { "name": "User", "key": "user" }]
    const [selectedContent, setSelectedContent] = useState('serviceOwner')

    let clusterTypes = [{ "name": "Cluster 1", "key": "Cluster1" },
    { "name": "Cluster 2", "key": "Cluster2" }, { "name": "Cluster 3", "key": "Cluster3" }]
    const [selectedCluster, setSelectedCluster] = useState('Cluster1')
    return (
        <Card body>
            <Row>
                <Col md={12} lg={12} xl={3} xs={12}>
                    <ButtonToolbar style={{ justifyContent: "center" }}>
                        <UncontrolledDropdown>
                            <DropdownToggle className="icon">
                                <p style={{ marginBottom: "0px" }}>{selectedCluster}<ChevronDownIcon /></p>
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    clusterTypes.map(each => {
                                        return <DropdownItem key={each.key} id={each.key}
                                            onClick={(e => {
                                                setSelectedCluster(e.currentTarget.getAttribute("id"));
                                                contentType(e.currentTarget.getAttribute("id"))
                                            })}>
                                            {each.name}</DropdownItem>
                                    })
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ButtonToolbar>
                </Col>
                <Col md={12} lg={12} xl={3} xs={12}>
                    <ButtonToolbar style={{ justifyContent: "center" }}>
                        <UncontrolledDropdown>
                            <DropdownToggle className="icon">
                                <p style={{ marginBottom: "0px" }}>{selectedContent}<ChevronDownIcon /></p>
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    contentTypes.map(each => {
                                        return <DropdownItem key={each.key} id={each.key}
                                            onClick={(e => {
                                                setSelectedContent(e.currentTarget.getAttribute("id"));
                                                contentType(e.currentTarget.getAttribute("id"))
                                            })}>
                                            {each.name}</DropdownItem>
                                    })
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ButtonToolbar>
                </Col>
                <Col md={12} lg={12} xl={3} xs={12}>
                    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </Col>
                <Col md={12} lg={12} xl={3} xs={12}>
                    <Button onClick={getData}>Submit</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default Filter

