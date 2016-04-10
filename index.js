//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import todoApp from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import appReducers from './reducers/AppReducer'
import { fetchArticleList } from './actions/AriticleListAction'
import App from './components/App'
import Home from './containers/Home/Home'
import ArticleListContainer from './containers/ArticleList/ArticleListContainer'
import ClassListContainer from './containers/ArticleList/ClassListContainer'
import CampusListContainer from './containers/ArticleList/CampusListContainer'
import ProvinceListContainer from './containers/ArticleList/ProvinceListContainer'
import CountryListContainer from './containers/ArticleList/CountryListContainer'
import SubscribeContainer from './containers/Subscribe/SubscribeContainer'
import { Router, Route, Redirect , Link ,IndexRoute,hashHistory } from 'react-router'

//let store = createStore(todoApp)
function init(){
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore),
        store = createStoreWithMiddleware(appReducers);
    //store.dispatch(fetchArticleList({pageNum: 1}))
    store.subscribe(()=>{console.log(store.getState())})
    console.log(store.getState())
    render((
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/home" component={Home} >
                    <Route path="campus" component={CampusListContainer} />
                    <Route path="province" component={ProvinceListContainer} />
                    <Route path="country" component={CountryListContainer} />
                    <Route path="class" component={ClassListContainer} />
                </Route>
                <Route path="/subscribe" component={SubscribeContainer} />
            </Router>
        </Provider>
        ),
        document.getElementById('app')
    )
}
init()
