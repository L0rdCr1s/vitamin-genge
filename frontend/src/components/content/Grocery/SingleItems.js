import React, { Component } from 'react'

export default class SingleItems extends Component {

    deleteItem = (item_id) => {
        this.setState({
            items: this.state.items.filter(item => item.id != item_id )
        })
    }

    addNewItem = () => {
        let new_item = {
            name: $('#new_item_name').val(),
            unit: $('#new_item_unit').val(),
            price_per_unit: $('#new_item_price').val(),
            category: $('#new_item_category').val(),
            image: $('#new_item_image').val(),
        }

        // make api call here
    }

    editItem = () => {
        let new_item = {
            name: $('#new_item_name').val(),
            unit: $('#new_item_unit').val(),
            price_per_unit: $('#new_item_price').val(),
            category: $('#new_item_category').val(),
            image: $('#new_item_image').val(),
        }

        // make api call for update here
    }

    render() {
        return (
            <table className="table .table-responsive " border='0'>
                <thead>
                    <tr>
                        <td style={{width: 2 + '%', border: 'none'}}><i className="fe fe-image text-secondary ml-3"></i></td>
                        <td style={{width: 15 + '%', border: 'none'}}>Name</td>
                        <td style={{width: 10 + '%', border: 'none'}}>Unit</td>
                        <td style={{width: 18 + '%', border: 'none'}}>Price per unit</td>
                        <td style={{width: 11 + '%', border: 'none'}}>category</td>
                        <td style={{width: 18 + '%', border: 'none'}}>image</td>
                        <td style={{width: 24 + '%', border: 'none'}}>Actions
                            <a className="btn btn-secondary ml-5" data-toggle="modal" data-target='#addItemModal'>
                                <i className="fe fe-plus mr-2"></i>
                                <span className="">add item</span>
                            </a>

                            <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog modal-md" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header m-3">
                                            <h3> 
                                                <img className="rounded mr-4" src="../../static/img/add-item.png" alt="Placeholder" width="60" height="60"></img>
                                                Add new item
                                             </h3>
                                        </div>
                                        <div className="modal-body m-3">
                                            <form>
                                                <div class="form-group">
                                                    <label class="form-label">Item name</label>
                                                    <input type="text" class="form-control" placeholder="item name" id="new_item_name"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Item unit</label>
                                                    <input type="text" class="form-control" placeholder="last name" id="new_item_unit"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Price per unit</label>
                                                    <input type="text" class="form-control" placeholder="price" id="new_item_price" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Category</label>
                                                    <select id="new_item_category" class="form-control">
                                                        <option selected="">matunda</option>
                                                        <option>Mapishi</option>
                                                        <option>viungo</option>
                                                        <option>mboga</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Image</label>
                                                    <input type="file" class="form-control" placeholder="price" id="new_item_image" style={{border: 'none'}} />
                                                </div>
                                                <button type="submit" class="btn btn-secondary" data-dismiss="modal" onClick={(e) => this.addUser(e)}>
                                                    add item
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>
                </thead>
                <tbody>
                    
                {
                    this.state.items.map(item => (
                        <tr key={item.id}>
                            <td style={{border: 'none'}}><img className="rounded mr-4" src={item.image} alt="Placeholder" width="40" height="40"></img></td>
                            <td style={{border: 'none'}}>{item.name}</td>
                            <td style={{border: 'none'}}>{item.unit}</td>
                            <td style={{border: 'none'}}>{item.price} Tsh.</td>
                            <td style={{border: 'none'}}>{item.category}</td>
                            <td style={{border: 'none'}}>
                                <a href="" data-toggle="modal" data-target={'#item' + item.id}>
                                    <i className="fe fe-eye text-secondary mr-2"></i>
                                    <span>see {item.name}</span>
                                </a>

                                <div className="modal fade" id={'item' + item.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                    <div className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            <img className="rounded mr-4" src={item.image} alt="Placeholder" width="400" height="400"></img>
                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td style={{border: 'none'}}>
                                <a href="#" className="btn btn-secondary mr-3" data-toggle="modal" data-target={'#editItem' + item.id}>
                                    <i className="fe fe-edit-2 mr-2"></i>
                                    <span className="">edit</span>
                                </a>

                                <div className="modal fade" id={"editItem" + item.id} tabIndex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-md" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header m-3">
                                                <h3> 
                                                    <img className="rounded mr-4" src="../../static/img/edit.png" alt="Placeholder" width="60" height="60"></img>
                                                    Edit {item.name}
                                                </h3>
                                            </div>
                                            <div className="modal-body m-3">
                                                <form>
                                                    <div class="form-group">
                                                        <label class="form-label">Item name</label>
                                                        <input type="text" class="form-control" placeholder="item name" id="new_item_name"
                                                        defaultValue={item.name}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-label">Item unit</label>
                                                        <input type="text" class="form-control" placeholder="last name" id="new_item_unit"
                                                        defaultValue={item.unit}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-label">Price per unit</label>
                                                        <input type="text" class="form-control" placeholder="price" id="new_item_price"
                                                        defaultValue={item.price} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-label">Category</label>
                                                        <select id="new_item_category" class="form-control">
                                                            <option selected="">{item.category}</option>
                                                            <option>matunda</option>
                                                            <option>Mapishi</option>
                                                            <option>viungo</option>
                                                            <option>mboga</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-label">Image</label>
                                                        <input type="file" class="form-control" placeholder="price" id="new_item_image" style={{border: 'none'}} />
                                                    </div>
                                                    <button type="submit" class="btn btn-secondary" data-dismiss="modal" onClick={(e) => this.addUser(e)}>
                                                        update item
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-danger" data-toggle="modal" data-target={'#deleteModal' + item.id}>
                                    <i className="fe fe-trash-2 mr-2"></i>
                                    <span className="">delete</span>
                                </a>

                                <div className="modal fade" id={'deleteModal' + item.id} tabIndex="-1" role="dialog" style={{display: 'none'}} aria-hidden="true">
                                    <div style={{ marginTop: 15 + "rem" }} className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            <div className="modal-body m-3">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <i className="fe fe-alert-triangle text-danger" style={{fontSize: 4 + 'rem'}}></i>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>Are you sure you want to delete {item.name}?</p>
                                                        <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={() => this.deleteItem(item.id)}>
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
        )
    }

    state = {
        items : [
            {id: 1, name: 'ndizi', unit: 'kg', price: '200', category: 'Tunda', image: "../../static/img/ndizi.jpg"},
            {id: 2, name: 'parachichi', unit: 'kg', price: '400', category: 'Tunda', image: '../../static/img/avocado.jpg'},
            {id: 3, name: 'nanasi', unit: 'kg', price: '3000', category: 'Tunda', image: '../../static/img/pineapple.jpg'},
            {id: 4, name: 'nyaya', unit: 'kg', price: '1500', category: 'Mapishi', image: '../../static/img/nyanya.JPG'},
            {id: 5, name: 'pilipili hoho', unit: 'kg', price: '750', category: 'Mapishi', image: '../../static/img/hoho.jpg'},
        ]
    }
}
