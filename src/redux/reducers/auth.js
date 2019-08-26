
import { AUTH_TYPES } from 'src/redux/types'

const initialState = {
  data: null,
  error: '',
  loading: false,
  success: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH_REQUEST:
      return state
        .set('error', '')
        .set('success', false)
        .set('loading', true)

    case AUTH_TYPES.AUTH_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false)
        .set('error', '')

    case AUTH_TYPES.AUTH_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('success', false)

    default:
      return state
  }
}