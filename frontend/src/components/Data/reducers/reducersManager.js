import { combineReducers } from 'redux'
import { user_reducer } from './user_reducer'
import { material_reducer } from './material_reducer'
import { authentication } from './authentication_reducer'
import { users } from './users_reducer'

export const reducers_manager = combineReducers({
    user_provider: user_reducer,
    material_provider: material_reducer, 
    users_provider: users,
    authentication_provider: authentication,

    
});

