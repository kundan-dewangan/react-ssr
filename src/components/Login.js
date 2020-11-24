import React from 'react'
import { connect } from "react-redux";
import { fetchData, mainDataCall, loginFetchData } from "../store";

function Login(props) {
    var email = '';
    var password = '';
    const handleChange = (e) => {
        if (e.target.id == "email") {
            email = e.target.value;
        }
        if (e.target.id == "password") {
            password = e.target.value;
        }
    }

    const loginSubmit = () => {
        props.loginFetchData(email, password);
    }

    return (
        <div className="wrapper">
            <h2>This is the Login page</h2>
            <div><span>Email : </span><b>eve.holt@reqres.in</b></div>
            <div><span>Password : </span><b>cityslickasdsf</b></div>
            <div style={{ marginTop: '20px' }}>
                <input type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={handleChange}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <input type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </div>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <button type="submit" onClick={loginSubmit}>Login</button>
            </div>
        </div>
    )
}

Login.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = (state) => ({
    circuits: state.data,
    actualData: state.maindata,
});

const mapDispatchToProps = {
    fetchData,
    mainDataCall,
    loginFetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
