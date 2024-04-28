import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserDetailResponsePayload, UserResponsePayload } from "../types/user";

export const usersActions = createActionGroup({
  source:'users',
  events:{
    GetUsers:props<{page:number}>(),
    GetUsersSuccess:props<UserResponsePayload>(),
    GetUsersFailure:emptyProps(),
    GetUserDetail:props<{id:number}>(),
    GetUserDetailSuccess:props<UserDetailResponsePayload>(),
    GetUserDetailFailure:emptyProps()
  }
})
