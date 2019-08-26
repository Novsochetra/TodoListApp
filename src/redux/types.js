import createConstants from '../utils/createConstrants'

export const AUTH_TYPES = createConstants('AUTH_REQUEST', 'AUTH_SUCCESS', 'AUTH_FAIL')
export const CATEGORY_MODEL_TYPES = createConstants('CATEGORY_REQUEST', 'CATEGORY_SUCCESS', 'CATEGORY_FAIL')
export const TASK_MODEL_TYPES = createConstants('TASK_REQUEST', 'TASK_SUCCESS', 'TASK_FAIL')