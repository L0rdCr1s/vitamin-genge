import React, { Component } from 'react'
import Topnav from '../Topnav'
import Sidenav from '../Sidenav'


export default class Main extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
            <Sidenav />
            <div className="main">
              <Topnav />
              <main className="content">
                <div className="container-fluid p-0">
                  {this.props.view}
                </div>
              </main>
            </div>
        </div> 
      </React.Fragment>
    )
  }
}