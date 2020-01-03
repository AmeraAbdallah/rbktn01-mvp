import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
    auth,
    component,
    ...rest
}) => (
    <Route {...rest} component = {(props) => (
        auth ? (
            <div>
                <Component {...props}/>
            </div>
        ):(
            <Redirect to = '/' />
        )
    )} />
)

const mapStateToProps = (state) => ({
    auth: !!state.user._id
})

export default connect(mapStateToProps)(PrivateRoute)
