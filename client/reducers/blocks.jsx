
import { handleActions } from 'redux-actions'

const initialState = [
// [{ id: 0}, { id: 1}],[{id: 2}, { id: 3}]
// [{ id: 0}],[{id: 2}, { id: 3}]
// [{ id: 0}, { id: 1}],[{id: 2}]
// [{ id: 0}],[{id: 2}, { id: 3}, { id: 4}]
[{ id: 0}],[{id: 2}, { id: 3}]

]

export default handleActions({
  'add block' (state, action) {
    const idx = action.payload.index
    return [
      ...state.slice(0, idx), 
      {
        id: state.reduce((maxId, block) => Math.max(block.id, maxId), -1) + 1,
      },
      ...state.slice(idx)
    ]
  },

  'delete block' (state, action) {
    return state.filter(block => block.id !== action.payload )
  }
}, initialState)
