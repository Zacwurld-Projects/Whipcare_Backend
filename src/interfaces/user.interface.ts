import { Request } from "express";

export interface UserRequest extends Request {
  user?: User;
}

export interface User {
  id: string;
  email: string;
  password: string;
  image?: string;
  car?: string[];
}
