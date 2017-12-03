import { createStore, applyMiddleware } from 'redux'
import rootreducer from './reducers'
// import { appReducer } from '../App'
import thunkMiddleware from 'redux-thunk'

// let initialState = {};
export default function configureStore() {
    let store   =   createStore(rootreducer,
                        applyMiddleware(
                            thunkMiddleware
                        )
                    );
    return store
}
