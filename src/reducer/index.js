import react from 'react'
import { combineReducers } from 'redux'
import reducer from '../modules/reducer'
import signUpReducer from '../modules/screens/setupNavigation/reducer'
import newHotReducer from '../modules/screens/components/new&hotComponents/reducer'

const rootReducer = combineReducers({
    reducer,signUpReducer,newHotReducer
})
export default rootReducer