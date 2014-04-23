export interface ILogin {
    Login(userName: string, password: string, callback: any, callerObject: any);
    token: string;
    isSuccessful: boolean;
}