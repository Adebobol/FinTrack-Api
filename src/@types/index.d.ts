export interface User {
  name: string;
  email: string;
  password: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: any;
    }
  }
}
