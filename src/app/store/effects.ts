import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import { usersActions } from "./actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { UserDetailResponsePayload, UserResponsePayload } from "../types/user";

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

export const getUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService))=>{
    return actions$.pipe(
      ofType(usersActions.getUserDetail),
      switchMap(({id})=>{
        return userService.getUser(id).pipe(
          map((user:UserDetailResponsePayload)=>{
            return usersActions.getUserDetailSuccess(user)
          }),tap(res => console.log(res)),
          catchError(()=>{
            return of(usersActions.getUsersFailure())
          })
        )
      })
    )
  },{functional:true}
)
