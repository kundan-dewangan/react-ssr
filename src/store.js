import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchCircuits, fetchMainData, fetchLogin } from "./api";

export const initializeSession = () => ({
    type: "INITIALIZE_SESSION",
});

const storeData = (data) => ({
    type: "STORE_DATA",
    data,
});
const storeMainData = (data) => ({
    type: "STORE_MAIN_DATA",
    data,
});
const loginStoreData = (data) => ({
    type: "LOGIN_STORE_DATA",
    data,
});

export const fetchData = () => (dispatch) =>
    fetchCircuits().then(res => dispatch(storeData(res)));


export const mainDataCall = () => (dispatch) =>
    fetchMainData().then(res => dispatch(storeMainData(res)));

export const loginFetchData = (email, password) => (dispatch) =>
    fetchLogin(email, password).then(res => dispatch(loginStoreData(res)));


const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};
const mainDataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_MAIN_DATA":
            return action.data;
        default: return state;
    }
};


const loginReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers({
    loggedIn: sessionReducer,
    data: dataReducer,
    maindata: mainDataReducer,
    logindata: loginReducer,
});

export default (initialState) =>
    createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
