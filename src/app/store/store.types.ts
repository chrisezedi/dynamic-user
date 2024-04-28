import { User, UserDetail } from "../types/user";

export type UsersState = {
  isFetching:boolean;
  users:User[] | null | undefined;
  pagination:{
    length:number;
    size:number;
  }
  user:UserDetail | null | undefined;
}
