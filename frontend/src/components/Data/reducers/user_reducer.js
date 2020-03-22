const INITALIZE_USER = 'user:initialize'

const createUserAction = (action, user) => ({
    type: action,
    payload: {
        user: user
    }
})

const initializeUser = user => createUserAction(INITALIZE_USER, user)

export const user_reducer = (state = userState, {type, payload}) => {
    switch (type) {
        case INITALIZE_USER:
            let new_user = {...state.user}
            new_user = payload.user
            let newUserState = {
                ...state,
                user: new_user
            }
            return newUserState
        
        case "login":
          return {
              is_loading: true,
          }

          case "loginSuccess":
            return {
                is_loading: true,
            }

            case "loginfailed":
                return {
                    is_loading: true,
                }

            case "logout":
                return {
                    is_loading: true,
                }
            

        default:
            return state
    }
}

const userState = {
    user : {},
    is_logged_in: false,
    is_loading: false,
    user_manager: {
        user: {},
        is_logged_in: false,
        is_loading: false,
    },
    actions : {
        initializeUser,
    }
}