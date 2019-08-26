import { CATEGORY_MODEL_TYPES } from 'src/redux/types'
import Immutable from 'seamless-immutable'

const initialState = {
  data: [],
  error: '',
  loading: false,
  success: false,
} // LIMIT OF IMMUTABLE IS 64 so we set it to 100000

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_MODEL_TYPES.CATEGORY_REQUEST:
      state.data = []
      state.error = ''
      state.loading = true
      state.success = false
      return state

    case CATEGORY_MODEL_TYPES.CATEGORY_SUCCESS:
      state.data = action.data
      state.error = ''
      state.loading = false
      state.success = true
      return state

    case CATEGORY_MODEL_TYPES.CATEGORY_FAIL:
      state.data = []
      state.error = action.error
      state.loading = false
      state.success = false
      return state

    default:
      return state;
  }
}