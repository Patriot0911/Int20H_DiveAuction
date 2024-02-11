import {
    AuthActionsTypes,
    AuthPathes,
    ICreateProfileSetup,
    TAuthActions
} from "@/types";

const AUTH_API = `http://localhost:8000/api/auth`;

const authApiOptions = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    }
};

const signUp = async (userInfo: ICreateProfileSetup) => {
    const options = {
        body: JSON.stringify(userInfo),
        ...authApiOptions
    };
    const response = await fetch(
        AUTH_API + AuthPathes.SignUp,
        options
    );
    if(response.ok)
        return {
            status: response.status,
            message: ''
        };
    const data = await response.json();
    if(data)
        return {
            status: response.status,
            message: response.ok ? '' : data.message
        };
    return {
        status: response.status,
        message: response.ok ? '' : response.statusText
    };
};

const signIn = async ({ name, ...userInfo }: ICreateProfileSetup) => {
    const options = {
        body: JSON.stringify(userInfo),
        ...authApiOptions
    };
    const response = await fetch(
        AUTH_API + AuthPathes.SignIn,
        options
    );
    const data = await response.json();
    if(!response.ok)
        return {
            status: response.status,
            message: data.message
        };
    const {
        token,
        user
    } = data;
    localStorage.setItem('token', token);
    return {
        status: response.status,
        message: user
    };
};

const authActions: TAuthActions = {
    [AuthActionsTypes.SignIn]: signIn,
    [AuthActionsTypes.SignUp]: signUp
};

export default authActions;
