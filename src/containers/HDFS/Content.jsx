import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Card, Table, Collapse } from 'reactstrap';
import Filter from './Filter'


const Content = () => {
    return (
        <div className="content">
            <Filter contentType={setContentType} />
            <div style={{ marginTop: "50px" }}>
                <Card body>
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
                                                    <td>{serviceOwnerJSON.topics[each]}</td>
                                                    <td>{each}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </React.Fragment>
                </Card>
            </div>
        </div>
    );
}


export default Content

