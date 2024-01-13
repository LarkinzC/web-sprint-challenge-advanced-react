// Write your tests here
import AppFunctional from "./AppFunctional"

test('sanity', async () => {
  expect(screen.findByText('Welcome to the GRID').toBeVisible())
  })
