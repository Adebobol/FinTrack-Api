export interface User {
  name: string;
  email: string;
  password: string;
}

export interface TransactionCreation {
  type: string;

  amount: number;

  description: string;

  category: string;

  userId: number;
}

declare global {
  namespace Express {
    export interface Request {
      user?: any;
    }
  }
}
