import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login_error: {
                show : false,
                title: '',
                message: ''
            },
        }
    }

    login = () => {
        let login_data = {
            mobile_number: $('#number').val(),
            password: $('#password').val()
        }

        // make api call with login credantials here

        let login_error = {
            show : true,
            title: 'login failed',
            message: 'wrong inptus'
        }

        this.setState({login_error: login_error}, () => setTimeout(() => {
            let login_error = {...this.state.login_error}
            login_error.show = false
            this.setState({login_error: login_error})
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
                                                this.state.login_error.show ? 
                                                <div class="alert alert-danger alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <div class="alert-icon">
                                                        <i class="fe fe-bell"></i>
                                                    </div>
                                                    <div class="alert-message">
                                                        <strong>{this.state.login_error.title}!</strong> {this.state.login_error.message}!
                                                    </div>
                                                </div> : null
                                            }
                                            <LoginForm login={this.login}/>
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


class LoginForm extends Component {
    render () {
        return (
            <form>
                <div class="form-group">
                    <input class="form-control form-control-lg mt-4" type="password" name="password" placeholder="new password"/>
                </div>
                <div class="form-group">
                    <input class="form-control form-control-lg mt-4" type="password" name="password" placeholder="confirm new password"/>
                </div>
                <div class="text-center mt-3">
                <a class="btn btn-lg btn-secondary" onClick={() => this.props.login()}>
                    <i class="fe fe-edit-3 mr-3"></i> Update Password
                </a>
                </div>
            </form>
        )
    }
}