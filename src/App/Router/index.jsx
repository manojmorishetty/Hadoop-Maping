import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Home from 'containers/Home/Home'
import Kafka from 'containers/Kafka/Content'
import HDFS from 'containers/Home/Home'

const Router = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/kafka" component={Kafka} />
                    <Route path="/hdfs" component={HDFS} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        </React.Fragment >
    )
}
export default Router
