import fetch from 'isomorphic-fetch';

class Http {

    setCredentials(username, password) {
        this._token = 'Basic ' + btoa(username + ':' + password);
    }

    get(url) {
        let headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        if (this._token != null) {
            headers.Authorization = this._token;
        }

        return new Promise(async (resolve, reject) => {
            let response = await fetch(url, {
                                    method: "GET",
                                    headers: new Headers(headers)
                                 });
            if (!response.ok) {
                reject(response.statusText);
            }
            
            try {
                let json = await response.json();
                resolve(json);
            } catch (err) {
                reject(err);
            }
        });
    }

    post(url, data) {
        let headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        if (this._token != null) {
            headers.Authorization = this._token;
        }

        return new Promise(async (resolve, reject) => {
            let response = await fetch(url, {
                                    method: "POST",
                                    body: (data == null) ? null: JSON.stringify(data),
                                    headers: new Headers(headers)
                                 });
            if (!response.ok) {
                reject(response.statusText);
            }
            
            try {
                let json = await response.json();
                resolve(json);
            } catch (err) {
                reject(err);
            }
        });
    }
}

let instance = new Http();

export default instance;