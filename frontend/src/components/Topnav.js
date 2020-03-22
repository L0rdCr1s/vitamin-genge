import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Topnav extends Component {
    state = {
        
    }
  
  render() {
    return (
        
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-white" id="topnavbar">
                <a className="sidebar-toggle d-flex mr-2">
                    <i className="align-self-center fe fe-align-right mt-2" style={{ fontSize: 1.7 + 'em'}}></i>
                </a>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">
                                {/* <div className="position-relative">
                                    <i className="align-middle" data-feather="bell"></i>
                                    <span className="indicator">4</span>
                                </div> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
                                <div className="dropdown-menu-header">
                                    <div className="position-relative">
                                        4 New Messages
                                    </div>
                                </div>
                                <div className="list-group">
                                    <Link to='/somenot' className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Ashley Briggs"></img>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Ashley Briggs</div>
                                                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                <div className="text-muted small mt-1">15m ago</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="Carl Jenkins"></img>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Carl Jenkins</div>
                                                <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Stacie Hall"></img>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Stacie Hall</div>
                                                <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                <div className="text-muted small mt-1">4h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Bertha Martin"></img>
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">Bertha Martin</div>
                                                <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                <div className="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all messages</a>
                                </div>
                            </div>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown">
                                <span className="d-inline-block d-md-none">
                                    <i className="align-middle" data-feather="settings"></i>
                                </span>
                                <span className="d-none d-sm-inline-block">
                                    <img src={'../static/img/admin.png'} className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood" />
                                    <span className="text-dark"></span>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <Link to='/profile' className="dropdown-item">
                                    <i className="align-middle mr-1" data-feather="user"></i> Profile
                                </Link>
                                <Link to='/subscriptions' className="dropdown-item">
                                    <i className="align-middle mr-1" data-feather="slack"></i> Subscriptions
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/settings' className="dropdown-item">
                                    Settings & Privacy
                                </Link>
                                <a className="dropdown-item" href="#">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
  }
}
