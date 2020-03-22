import React, { Component } from 'react'

export default class UserManagement extends Component {

    deleteUser = (user_id) => {
        let new_users = this.state.users.filter(user => user.id != user_id)
        this.setState({
            users: new_users
        })
    }

    blockUser = (user) => {
        let users = [...this.state.users]
        let index = users.indexOf(user)
        users[index].is_blocked = true
        this.setState({
            users: users
        })
    }

    unblockUser = (user) => {
        let users = [...this.state.users]
        let index = users.indexOf(user)
        users[index].is_blocked = false
        this.setState({
            users: users
        })
    }

    addUser = (e) => {
        e.preventDefault()
        const new_user = {
                            id: 20 + this.state.users.length,
                            first_name: $('#first_name').val(),
                            last_name: $('#last_name').val(),
                            mobile_number: $('#mobile_number').val(),
                            joined_at: '19 june 2019',
                            user_role: $('#user_role').val(),
                            gender: $('#gender').val(),
                            is_blocked: false
                        }

        let users = [...this.state.users]
        users.push(new_user)
        this.setState({
            users: users
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="media">
                                    <div className="d-inline-block">
                                        <img className="rounded mr-4" src="../../static/img/users.png" alt="Placeholder" width="60" height="60"></img>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="mb-1 mt-2 text-uppercase">user management</h3>
                                        <div className="mb-0 text-secondary"> { this.state.users.length } users</div>
                                    </div>
                                    <div className="col-auto">
                                        <img className="rounded mr-4" src="../../static/img/add_users.png" data-toggle="modal" data-target='#addUser'
                                         alt="Placeholder" width="40" height="40"></img><br />
                                        <span className="">add user</span>
                                    </div>

                                    <div className="modal fade" id="addUser" tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                        <div className="modal-dialog modal-sm" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header m-3">
                                                    <h3> <img className="rounded mr-4" src="../../static/img/add_users.png" alt="Placeholder" width="60" height="60"></img> Add new user</h3>
                                                </div>
                                                <div className="modal-body m-3">
                                                    <form>
                                                        <div class="form-group">
                                                            <label class="form-label">First Name</label>
                                                            <input type="text" class="form-control" placeholder="first name" id="first_name"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="form-label">Last Name</label>
                                                            <input type="text" class="form-control" placeholder="last name" id="last_name"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="form-label">Mobile</label>
                                                            <input type="text" class="form-control" placeholder="(+255) XXX XXX XXX" id="mobile_number" />
                                                            <span class="text-secondary">currently only tanzanian numbers are supported</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="form-label">Gender</label>
                                                            <select id="gender" class="form-control">
                                                                <option selected="">male</option>
                                                                <option>female</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="form-label">User role</label>
                                                            <select id="user_role" class="form-control">
                                                                <option selected="">customer</option>
                                                                <option>delivery person</option>
                                                            </select>
                                                        </div>
                                                        <button type="submit" class="btn btn-secondary" data-dismiss="modal" onClick={(e) => this.addUser(e)}>add user</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card flex-fill">
                            <div className="card-body">
                            <table className="table .table-responsive " border='0'>
									<thead>
										<tr>
                                            <th style={{width: 2 + '%', border: 'none'}}><i className="fe fe-users text-secondary ml-3"></i></th>
											<th style={{width: 15 + '%', border: 'none'}}>First name</th>
											<th style={{width: 15 + '%', border: 'none'}}>Last name</th>
											<th style={{width: 18 + '%', border: 'none'}}>Mobile</th>
											<th style={{width: 12 + '%', border: 'none'}}>Role</th>
                                            <th style={{width: 12 + '%', border: 'none'}}>Joined at</th>
											<th style={{width: 24 + '%', border: 'none'}}>Actions</th>
										</tr>
									</thead>
									<tbody>
                                        {
                                            this.state.users.map(user => (
                                                user.is_blocked ?

                                                <tr key={user.id}>
                                                    <td style={{border: 'none'}}>
                                                    {
                                                            (user.gender == 'male') ?
                                                            <img className="rounded mr-4" src="../../static/img/deactivated-male.png" alt="Placeholder" width="40" height="40"></img>:
                                                            <img className="rounded mr-4" src="../../static/img/deactivated-female.png" alt="Placeholder" width="40" height="40"></img>
                                                        }
                                                    </td>
                                                    <td style={{border: 'none'}}><strike>{user.first_name}</strike></td>
                                                    <td style={{border: 'none'}}><strike>{user.last_name}</strike></td>
                                                    <td style={{border: 'none'}}><strike>{user.mobile_number}</strike></td>
                                                    {
                                                        (user.user_role == 'customer') ?
                                                        <td style={{border: 'none'}}><strike>{user.user_role}</strike></td> :
                                                        <td style={{border: 'none'}} className="text-primary"><strike>{user.user_role}</strike></td>
                                                    }

                                                    <td className="d-none d-md-table-cell" style={{border: 'none'}}><strike>{user.joined_at}</strike></td>
                                                    <td className="table-action" style={{border: 'none'}}>
                                                        <a href="#" className="btn btn-secondary mr-3" data-toggle="modal" data-target={'#unblockModal' + user.id}>
                                                            <i className="fe fe-slash mr-2"></i>
                                                            <span className="">reactivate</span>
                                                        </a>

                                                        <div className="modal fade" id={'unblockModal' + user.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                                            <div style={{ marginTop: 15 + "rem" }} className="modal-dialog modal-sm" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-body m-3">
                                                                        <div className="row">
                                                                            <div className="col-3">
                                                                                <i className="fe fe-alert-triangle text-secondary" style={{fontSize: 4 + 'rem'}}></i>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <p>Are you sure you want to reactivate user {user.first_name +  " " + user.last_name}?</p>
                                                                                <a href="#" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.unblockUser(user)}>
                                                                                    <i className="fe fe-check mr-2"></i>
                                                                                    <span className="">yes</span>
                                                                                </a>
                                                                                <a href="#" className="btn btn-warning ml-3" data-dismiss="modal">
                                                                                    <i className="fe fe-x-circle mr-2"></i>
                                                                                    <span className="">no, cancel</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <a href="#" className="btn btn-danger" data-toggle="modal" data-target={'#deleteModal' + user.id}>
                                                            <i className="fe fe-trash-2 mr-2"></i>
                                                            <span className="">delete</span>
                                                        </a>

                                                        <div className="modal fade" id={'deleteModal' + user.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                                            <div style={{ marginTop: 15 + "rem" }} className="modal-dialog modal-sm" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-body m-3">
                                                                        <div className="row">
                                                                            <div className="col-3">
                                                                                <i className="fe fe-alert-triangle text-danger" style={{fontSize: 4 + 'rem'}}></i>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <p>Are you sure you want to delete user {user.first_name +  " " + user.last_name}?</p>
                                                                                <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={() => this.deleteUser(user.id)}>
                                                                                    <i className="fe fe-trash-2 mr-2"></i>
                                                                                    <span className="">yes</span>
                                                                                </a>
                                                                                <a href="#" className="btn btn-warning ml-3" data-dismiss="modal">
                                                                                    <i className="fe fe-x-circle mr-2"></i>
                                                                                    <span className="">no, cancel</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                                :
                                                <tr key={user.id}>
                                                    <td style={{border: 'none'}}>
                                                        {
                                                            (user.gender == 'male') ?
                                                            (user.user_role == 'customer') ?
                                                        <img className="rounded mr-4" src="../../static/img/male-user.png" alt="Placeholder" width="40" height="40"></img>:
                                                        <img className="rounded mr-4" src="../../static/img/delivery_boy.png" alt="Placeholder" width="40" height="40"></img>:

                                                        (user.user_role == 'customer') ?
                                                        <img className="rounded mr-4" src="../../static/img/female-user.png" alt="Placeholder" width="40" height="40"></img>:
                                                        <img className="rounded mr-4" src="../../static/img/delivery_girl.png" alt="Placeholder" width="40" height="40"></img>
                                                        }
                                                    </td>
                                                    <td style={{border: 'none'}}>{user.first_name}</td>
                                                    <td style={{border: 'none'}}>{user.last_name}</td>
                                                    <td style={{border: 'none'}}>{user.mobile_number}</td>
                                                    {
                                                        (user.user_role == 'customer') ?
                                                        <td style={{border: 'none'}}>{user.user_role}</td> :
                                                        <td style={{border: 'none'}} className="text-primary">{user.user_role}</td>
                                                    }
                                                    <td className="d-none d-md-table-cell" style={{border: 'none'}}>{user.joined_at}</td>
                                                    <td className="table-action" style={{border: 'none'}}>
                                                        <a href="#" className="btn btn-warning mr-3" data-toggle="modal" data-target={'#blockModal' + user.id}>
                                                            <i className="fe fe-slash mr-2"></i>
                                                            <span className="">deactivate</span>
                                                        </a>

                                                        <div className="modal fade" id={'blockModal' + user.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                                            <div style={{ marginTop: 15 + "rem" }} className="modal-dialog modal-sm" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-body m-3">
                                                                        <div className="row">
                                                                            <div className="col-3">
                                                                                <i className="fe fe-alert-triangle text-danger" style={{fontSize: 4 + 'rem'}}></i>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <p>Are you sure you want to deactivate user {user.first_name +  " " + user.last_name}?</p>
                                                                                <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={() => this.blockUser(user)}>
                                                                                    <i className="fe fe-slash mr-2"></i>
                                                                                    <span className="">yes</span>
                                                                                </a>
                                                                                <a href="#" className="btn btn-warning ml-3" data-dismiss="modal">
                                                                                    <i className="fe fe-x-circle mr-2"></i>
                                                                                    <span className="">no, cancel</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <a href="#" className="btn btn-danger" data-toggle="modal" data-target={'#deleteModal' + user.id}>
                                                            <i className="fe fe-trash-2 mr-2"></i>
                                                            <span className="">delete</span>
                                                        </a>

                                                        <div className="modal fade" id={'deleteModal' + user.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                                            <div style={{ marginTop: 15 + "rem" }} className="modal-dialog modal-sm" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-body m-3">
                                                                        <div className="row">
                                                                            <div className="col-3">
                                                                                <i className="fe fe-alert-triangle text-danger" style={{fontSize: 4 + 'rem'}}></i>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <p>Are you sure you want to delete user {user.first_name +  " " + user.last_name}?</p>
                                                                                <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={() => this.deleteUser(user.id)}>
                                                                                    <i className="fe fe-trash-2 mr-2"></i>
                                                                                    <span className="">yes</span>
                                                                                </a>
                                                                                <a href="#" className="btn btn-warning ml-3" data-dismiss="modal">
                                                                                    <i className="fe fe-x-circle mr-2"></i>
                                                                                    <span className="">no, cancel</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }


									</tbody>
								</table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    state = {
      users : [
        {id: 1, first_name: 'Mariamu', last_name: 'Bakari', mobile_number: '+255 738 223 090', gender: 'female', joined_at: '19 june 2019', user_role: 'customer', is_blocked: false},
        {id: 2, first_name: 'christopher', last_name: 'shoo', mobile_number: '+255 625 434 323', gender: 'male', joined_at: '19 june 2019', user_role: 'delivery person', is_blocked: false},
        {id: 3, first_name: 'Juliana', last_name: 'Urassa', mobile_number: '+255 713 234 090', gender: 'female', joined_at: '19 june 2019', user_role: 'customer', is_blocked: false},
        {id: 4, first_name: 'Michael', last_name: 'Assey', mobile_number: '+255 654 988 312', gender: 'male', joined_at: '19 june 2019', user_role: 'customer', is_blocked: false},
        {id: 5, first_name: 'Glory', last_name: 'Benson', mobile_number: '+255 714 000 980', gender: 'female', joined_at: '19 june 2019', user_role: 'delivery person', is_blocked: false},
        {id: 6, first_name: 'Mansoor', last_name: 'Mansoor', mobile_number: '+255 683 456 866', gender: 'male', joined_at: '19 june 2019', user_role: 'customer', is_blocked: false}
      ]
    }
}
