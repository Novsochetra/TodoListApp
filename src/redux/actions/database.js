import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { mySchema } from 'src/models/schema'
import { CATEGORY_MODEL_TYPES, TASK_MODEL_TYPES } from './../types'

import Comment from 'src/models/category'
import Task from 'src/models/task'


const adapter = new SQLiteAdapter({
  dbName: 'WatermelonDemo',
  schema: mySchema,
})

const database = new Database({
  adapter,
  modelClasses: [Task, Comment],
  actionsEnabled: true,
})

getCategoryRequest = () => ({
  type: CATEGORY_MODEL_TYPES.CATEGORY_REQUEST
})

getCategorySuccess = data => ({
  type: CATEGORY_MODEL_TYPES.CATEGORY_SUCCESS,
  data
})

getCategoryFail = error => ({
  type: CATEGORY_MODEL_TYPES.CATEGORY_FAIL,
  error
})

getTaskRequest = () => ({
  type: TASK_MODEL_TYPES.TASK_REQUEST
})

getTaskSuccess = data => ({
  type: TASK_MODEL_TYPES.TASK_SUCCESS,
  data
})

getTaskFail = error => ({
  type: TASK_MODEL_TYPES.TASK_FAIL,
  error
})

export const getCategories = () => {
  const categoriesCollection = database.collections.get('categories')

  return async (dispatch, getState) => {

    dispatch(getCategoryRequest())
    try {
      const data = await categoriesCollection.query().fetch()
      console.log('the categories ', data)
      dispatch(getCategorySuccess(data))
    } catch (error) {
      console.log("am error category", error);
      dispatch(getCategoryFail('Something went wrong category'))
    }
  }
}

export const insertCategories = () => {
  return async (dispatch, getState) => {
    dispatch(getCategoryRequest())

    const categoriesCollection = database.collections.get('categories')
    try {

      await database.action(async () => {
        const newPost = await categoriesCollection.create(post => {
          post.name = 'Personal'
          post.color = '#FFD506'
        })

        dispatch(getCategorySuccess(newPost._raw))
      })

    } catch (error) {
      console.log('I am error', error)
      dispatch(getCategoryFail('Something went wrong'))
    }
  }
}

export const getTasks = () => {
  return async (dispatch, getState) => {
    const tasksCollection = database.collections.get('tasks')

    try {
      const data = await tasksCollection.query().fetch()
      console.log('All tasks ', data)
      dispatch(getCategorySuccess(data))
    } catch (error) {
      console.log('the error', error)
      dispatch(getCategoryFail('Something went wrong'))
    }
  }
}

export const insertTasks = () => {
  return async (dispatch, getState) => {
    const tasksCollection = database.collections.get('tasks')
    try {
      await database.action(async () => {
        const newTask = await tasksCollection.create(task => {
          task.title = 'first task'
          task.deadline = new Date()
        })

        dispatch(getTaskSuccess(newTask))
      })

    } catch (error) {
      console.log('the error', error)
      dispatch(getCategoryFail('Something went wrong'))
    }
  }
}



customCreateTable = async () => {
  const postsCollection = database.collections.get('categories')
  await database.action(async () => {
    const newPost = await postsCollection.create(post => {
      post.name = 'first'
      post.color = 'red'
      post.icon = 'book-icon'
    })
  })

  // await database.action(async () => {
  //   await somePost.markAsDeleted() // syncable
  //   await somePost.destroyPermanently() // permanent
  // })
  const allPosts = await postsCollection.query().fetch()
  console.log('all post customCreateTable ', allPosts)
}