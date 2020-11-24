import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../store";

function Header(props) {
    const logoutSubmit = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('token')
            console.log("token remove successfully");
        }
    }
    return (
        <div>
            <Link to="/login" className="link">Login</Link>
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/contact" className="link">Contact</Link>
            <Link to="/secret" className="link">Secret</Link>
            { props.login.length !== 0 && <span className="link" onClick={logoutSubmit}>Logout</span>}
        </div>
    )

};

Header.serverFetch = fetchData;

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    circuits: state.data,
    login: state.logindata,
});
const mapDispatchToProps = () => ({
    fetchData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
