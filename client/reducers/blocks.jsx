
import { handleActions } from 'redux-actions'

const initialState = [
// [{ id: 0}, { id: 1}],[{id: 2}, { id: 3}]
// [{ id: 0}],[{id: 2}, { id: 3}]
// [{ id: 0}, { id: 1}],[{id: 2}]
// [{ id: 0}],[{id: 2}, { id: 3}, { id: 4}]
  [
 
    [{ id: 0 }] 
      
  ],

  [
    [{ id: 2 }],
    [{ id: 3 }]
  ]

]

let id = 10;

export default handleActions({
  'add block' (state, action) {
    const {row_idx, col_idx, block_idx} = action.payload.indexes
    let a = [...state]
    let b = a[row_idx][col_idx];
    b = [...b.slice(0, block_idx+1), {"id":id++}, ...b.slice(block_idx+1)]
    a[row_idx][col_idx] = b
    // console.log(a)
    return a
  },

  'delete block' (state, action) {
    const {row_idx, col_idx, block_idx} = action.payload.indexes
    console.log(action.payload.indexes)
    let a = [...state]
    let b = a[row_idx][col_idx];
    b = [...b.slice(0, block_idx), ...b.slice(block_idx+1)]
    a[row_idx][col_idx] = b
    console.log(a)
    return a
  }
}, initialState)
