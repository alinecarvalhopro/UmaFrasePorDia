export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IUserResult {
  accessToken: 'string';
  user: IUser;
}

export interface IUserStore {
  user?: IUserResult;
}
