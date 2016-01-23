
import { handleActions } from 'redux-actions'
import * as blocktypes from '../constants/blocktypes'

const initialState = [
  [
    [{ type: blocktypes.TEXT}]       
  ],
  [
    [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
    [{ type: blocktypes.TEXT }]
  ]
]

let id = 10;

export default handleActions({
  'add block' (state, action) {
    const {blockType, indexes: {row_idx, col_idx, block_idx}} = action.payload
    let a = [...state]
    let b = a[row_idx][col_idx];
    b = [...b.slice(0, block_idx+1), { type: blockType }, ...b.slice(block_idx+1)]
    a[row_idx][col_idx] = b
    return a
  },

  'delete block' (state, action) {
    const {row_idx, col_idx, block_idx} = action.payload.indexes
    let a = [...state]
    let b = a[row_idx][col_idx];
    b = [...b.slice(0, block_idx), ...b.slice(block_idx+1)]
    a[row_idx][col_idx] = b
    return a
  }
}, initialState)
