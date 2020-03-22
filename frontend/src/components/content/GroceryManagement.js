import React, { Component } from 'react'
import SingleItems from './Grocery/SingleItems'
import Package from './Grocery/Package'

export default class GroceryManagement extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="media">
                                    <div className="d-inline-block">
                                        <img className="rounded mr-4" src="../../static/img/grocerries.png" alt="Placeholder" width="60" height="60"></img>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="mb-1 mt-2 text-uppercase">Grocery Management</h3>
                                        <div className="mb-0 text-secondary">control what users can see</div>
                                    </div>
                                    <div className="col-auto">
                                        
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-2">
                            <div className="card-header">
                                <ul className="nav nav-pills card-header-pills pull-right" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" 
                                            href="#tab-1"><i className="fe fe-package mr-2"></i> Single items
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" 
                                            href="#tab-2"> <i className="fe fe-shopping-bag mr-2"></i> Packages
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                                        <SingleItems />
                                    </div>
                                    <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                        <Package />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}