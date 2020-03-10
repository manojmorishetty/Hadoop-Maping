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
    return (
        <Card body>
            <Row>
                <Col md={12} lg={12} xl={4} xs={12}>
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
                <Col md={12} lg={12} xl={4} xs={12}>
                    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </Col>
                <Col md={12} lg={12} xl={4} xs={12}>
                    <Button onClick={getData}>Submit</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default Filter

