import { createFeature, createReducer, on } from "@ngrx/store"
import { usersActions } from "./actions"
import { UsersState } from "./store.types"

const initialState:UsersState = {
  isFetching:false,
  users:undefined,
  pagination:{
    length:0,
    size:0
  }
}

const usersFeature = createFeature({
  name:"users",
  reducer:createReducer(initialState,
    on(usersActions.getUsers,(state)=>({...state,isFetching:true})),
    on(usersActions.getUsersSuccess,(state,action)=>({...state,isFetching:false,users:action.data,pagination:{length:action.total,size:action.per_page}}))
  )
})

export const {
  name:usersFeatureKey,
  reducer:usersReducer,
  selectIsFetching,
  selectUsers,
  selectPagination
} = usersFeature
