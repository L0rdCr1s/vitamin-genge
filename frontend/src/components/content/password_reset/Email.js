import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Email extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile_number_error: {
                show : false,
                title: '',
                message: ''
            },
        }
    }

    verifyEmail = () => {
        let login_data = {
            mobile_number: $('#number').val(),
        }

        // make api call with login credantials here

        let mobile_number_error = {
            show : true,
            title: 'login failed',
            message: 'wrong inptus'
        }

        this.setState({mobile_number_error: mobile_number_error}, () => setTimeout(() => {
            let mobile_number_error = {...this.state.mobile_number_error}
            mobile_number_error.show = false
            this.setState({mobile_number_error: mobile_number_error})
        }, 5000))

    }


    render() {
        return (
            <main class="main h-100 w-100">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-sm-10 col-md-8 col-lg-4 mx-auto d-table h-100 mt-5">
                            <div class="d-table-cell align-middle pt-t mt-5">
                                <div class="card mt-5">
                                    <div class="card-body">
                                        <div class="m-sm-4">
                                            <div class="text-center">
                                                <img src={'../../static/img/admin.png'} class="img-fluid rounded-circle" width="132" height="132"/>
                                            </div>
                                            {
                                                this.state.mobile_number_error.show ? 
                                                <div class="alert alert-danger alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <div class="alert-icon">
                                                        <i class="fe fe-bell"></i>
                                                    </div>
                                                    <div class="alert-message">
                                                        <strong>{this.state.mobile_number_error.title}!</strong> {this.state.mobile_number_error.message}!
                                                    </div>
                                                </div> : null
                                            }
                                            <MobileNumberForm verifyEmail={this.verifyEmail}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


class MobileNumberForm extends Component {
    render () {
        return (
            <form>
                <div class="form-group">
                    <input class="form-control form-control-lg mt-4" type="text" id="number" placeholder="Enter your mobile number"/>
                </div>
                <div class="text-center mt-3">
                {/* <a class="btn btn-lg btn-secondary" onClick={() => this.props.verifyEmail()}>
                    <i class="fe fe-lock mr-3"></i> Request code
                </a> */}
                <Link to='/verify/code'>
                    <span class="btn btn-lg btn-secondary">
                        <i class="fe fe-lock mr-3"></i> Request code
                    </span>
                </Link>
                </div>
            </form>
        )
    }
}