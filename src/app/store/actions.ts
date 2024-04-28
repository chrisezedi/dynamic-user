import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserResponsePayload } from "../types/user";

export const usersActions = createActionGroup({
  source:'users',
  events:{
    GetUsers:props<{page:number}>(),
    GetUsersSuccess:props<UserResponsePayload>(),
    GetUsersFailure:emptyProps()
  }
})
