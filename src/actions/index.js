import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const SMURF_LOAD = "SMURF_LOAD";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";


export const fetchSmurfs = () => {
    return (dispatch) => {  
        dispatch({ type: SMURF_LOAD })
        axios.get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log(res.data)
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: FETCH_FAIL, payload: err.message})
            })
        }
}

export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf }
}

export const setFormError = error => {
    return { type: SET_ERROR, payload: error}
}
