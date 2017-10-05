export const CREATE_USER = 'CREATE_USER';
export const createUser = (name, email, password) => ({
    type: CREATE_USER,
    createUser: {name, email, password}
});

export const USER_LOGIN = 'USER_LOGIN';
export const loginUser = (email, password) => ({
    type: USER_LOGIN,
    loginUser: {email, password}
});




