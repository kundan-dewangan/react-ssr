import fetch from "isomorphic-fetch";

export function fetchCircuits() {
    return fetch("http://ergast.com/api/f1/2018/circuits.json")
        .then(res => res.json())
        .then(res => res.MRData.CircuitTable.Circuits);
}

export function fetchMainData() {
    return fetch("https://reqres.in/api/users/2")
        .then(res => res.json())
        .then(res => res.data);
}
export function fetchLogin(email, password) {
    console.log("From api call::", email, password)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
    };

    return fetch("https://reqres.in/api/login", requestOptions)
        .then(res => res.json())
        .then(res => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('token', JSON.stringify(res.token));
            }
            return res.token;
        });
}
