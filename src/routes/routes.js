import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../components/authorization/Landing'
import Registration from '../components/authorization/Registration'
import Login from '../components/authorization/Login'
import Dashboard from '../components/shop/Dashboard'

export default (
    <Switch>
        <Route component={Landing} exact path ='/' />
        <Route component={Registration} path='/register'/>
        <Route component= {Login} path="/login"/>
        <Route component= {Dashboard} path = '/dashboard' />
    </Switch>
)