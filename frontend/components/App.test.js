// Write your tests here
import AppFunctional from "./AppFunctional"
import React from 'react'
import { screen, render } from '@testing-library/react'
import server from '../../backend/mock-server'

beforeAll(() => {
  server.listen()
})
afterAll(() => {
  server.close()
})

// beforeEach(() => {
//   render(<AppFunctional />)
// })

// test('sanity', () => {
//   expect(screen.getByText(/GRID/i)).toBeVisible()
//   screen.debug()
// })

test('myTest', () => {
  expect(true).toBe(true)
})

// test('rendersComp', async () => {
//   render(<AppFunctional />)
//   expect( await screen.getByText(/coordinates/i)).toBeInTheDocument()
// })