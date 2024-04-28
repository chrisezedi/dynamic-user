import { User } from "../types/user";

export type UsersState = {
  isFetching:boolean;
  users:User[] | null | undefined;
  pagination:{
    length:number;
    size:number;
  }
}
