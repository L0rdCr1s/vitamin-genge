import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {
  render() {
    return (
        
        <React.Fragment>
            <nav className="sidebar">
                <div className="sidebar-content" id="sidebar">
                    <a class="sidebar-brand mb-3" href="">
                        <span class="align-middle mt-2 text-secondary pt-1">VITAMIN</span><br />
                        <span class="align-middle mt-2 ml-4 text-secondary pt-1">GENGE</span>
                    </a>
                    <div className="mb-4">
                    
                    <img className="rounded ml-4 mr-4 mb-2" src="../../static/img/side_icon.jpg" alt="Placeholder" width="140" height="200"></img>
                    </div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <Link to='/usermanagement' className="sidebar-link">
                                <i className="align-middle fe fe-user text-secondary mr-2"></i> <span className="align-middle">User Management</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to='/grocerymanagement' className="sidebar-link">
                                <i className="align-middle fe fe-toggle-left text-secondary mr-2"></i> <span className="align-middle">Grocerry Management</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
  }
}
