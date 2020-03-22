import React, { Component } from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'
import Content from './Content'


export default class Container extends Component {

  render() {
    return (
      <React.Fragment>
        <Content />
      </React.Fragment>
    )
  }
}