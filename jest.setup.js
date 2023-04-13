jest.mock('zustand', async () => {
  const originalModule = await jest.requireActual('zustand')
  const create = (createState) => {
    const store = originalModule((set) => {
      const state = createState(set)
      return {
        ...state,
      }
    })
    return store
  }
  return { __esModule: true, default: create }
})
