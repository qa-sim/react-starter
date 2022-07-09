import appSlice from 'features/app/reducers'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  app: appSlice.reducer,
})

export default rootReducers
