export const CREATE_USER = 'CREATE_USER';
export const create = (name, email, password) => ({
    type: CREATE_USER,
    create: create
});


export const USER_LOGIN = 'USER_LOGIN';
export const login = (name, email, password) => ({
    type: USER_LOGIN,
    login: login
});




