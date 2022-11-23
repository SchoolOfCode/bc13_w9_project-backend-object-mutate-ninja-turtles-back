import { resetAllTables } from '../db/helpers.js'

import { pool } from '../db/index.js'
// import supertest into our test file ✅
import supertest from 'supertest'
// import the Express app ✅
import app from '../app.js'
// import what we need from jest (expect, test) ✅
import { test, expect } from '@jest/globals'
// when we give supertest our app, it makes a request style object (pretend request)
const request = supertest(app)

beforeEach(() => {
  return resetAllTables()
})

test('GET /api/topics - gets all of the topics', async () => {
  // simulate a request object
  const response = await request.get('/api/topics')
  // check the server status (200)
  expect(response.status).toBe(200)
  // checks the response
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array)
  })
})