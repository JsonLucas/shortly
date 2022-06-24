export interface ISignUserData { 
    name?: String, 
    email: String, 
    password: String, 
    confirmPassword?: String 
}

export interface IPageLocation {
    pageLocation: String
};

export interface ILoadingStatus {
    status: boolean,
    error?: string
}