import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import { usersActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { UserResponsePayload } from "../types/user";

export const getUsers$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService))=>{
    return actions$.pipe(
      ofType(usersActions.getUsers),
      switchMap(({page})=>{
        return userService.getUsers(page).pipe(
          map((users:UserResponsePayload)=>{
            return usersActions.getUsersSuccess(users)
          }),
          catchError(()=>{
            return of(usersActions.getUsersFailure())
          })
        )
      })
    )
  },{functional:true}
)
