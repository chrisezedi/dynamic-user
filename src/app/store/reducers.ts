import { createFeature, createReducer, on } from "@ngrx/store"
import { usersActions } from "./actions"
import { UsersState } from "./store.types"

const initialState:UsersState = {
  isFetching:false,
  users:undefined,
  pagination:{
    length:0,
    size:0
  },
  user:undefined
}

const usersFeature = createFeature({
  name:"users",
  reducer:createReducer(initialState,
    on(usersActions.getUsers,(state)=>({...state,isFetching:true})),
    on(usersActions.getUsersSuccess,(state,action)=>({...state,isFetching:false,users:action.data,pagination:{length:action.total,size:action.per_page}})),
    on(usersActions.getUserDetail,(state)=>({...state,isFetching:true})),
    on(usersActions.getUserDetailSuccess,(state,action)=>({...state,isFetching:false,user:action.data}))
  )
})

export const {
  name:usersFeatureKey,
  reducer:usersReducer,
  selectIsFetching,
  selectUsers,
  selectPagination,
  selectUser
} = usersFeature
