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

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => ({
    type: FETCH_DESCRIPTION_SUCCESS,
    repository,
    description
});

export const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repository, error) => ({
    type: FETCH_DESCRIPTION_ERROR,
    repository,
    error
});


