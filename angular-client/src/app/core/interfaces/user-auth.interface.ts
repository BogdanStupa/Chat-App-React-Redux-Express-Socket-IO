export interface ReqAuthUser {
  nickname: string;
  password: string;
}

export interface User {
  nickname: string;
  _id: string;
  profileColor: string;
}

export interface Tokens {
  token: string;
  refreshToken: string;
}

export interface AuthenticatedUser extends Tokens {
  user: User;
  errors: Object;
  success: boolean;
}