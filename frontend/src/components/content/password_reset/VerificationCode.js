import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VerificationCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            verification_code_error: {
                show : false,
                title: '',
                message: ''
            },
        }
    }

    verifyCode = () => {
        let login_data = {
            mobile_number: $('#number').val(),
        }

        // make api call with login credantials here

        let verification_code_error = {
            show : true,
            title: 'login failed',
            message: 'wrong inptus'
        }

        this.setState({verification_code_error: verification_code_error}, () => setTimeout(() => {
            let verification_code_error = {...this.state.verification_code_error}
            verification_code_error.show = false
            this.setState({verification_code_error: verification_code_error})
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
                                                this.state.verification_code_error.show ? 
                                                <div class="alert alert-danger alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <div class="alert-icon">
                                                        <i class="fe fe-bell"></i>
                                                    </div>
                                                    <div class="alert-message">
                                                        <strong>{this.state.verification_code_error.title}!</strong> {this.state.verification_code_error.message}!
                                                    </div>
                                                </div> : null
                                            }
                                            <MobileNumberForm verifyCode={this.verifyCode}/>
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
                    <input class="form-control form-control-lg mt-4" type="text" id="number" placeholder="Enter verification code"/>
                </div>
                <div class="text-center mt-3">
                {/* <a class="btn btn-lg btn-secondary" onClick={() => this.props.verifyCode()}>
                    <i class="fe fe-hash mr-3"></i> Enter code
                </a> */}
                <Link to='/update/password'>
                    <span class="btn btn-lg btn-secondary">
                        <i class="fe fe-hash mr-3 "></i> Enter code
                    </span>
                </Link>
                </div>
            </form>
        )
    }
}