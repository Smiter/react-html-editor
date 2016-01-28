
import { handleActions } from 'redux-actions'
import * as blocktypes from '../constants/blocktypes'

const layouts = [
  [
    [
      [{ type: blocktypes.TEXT}]       
    ],
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
    ]
  ],

  [
    [
      [{ type: blocktypes.TEXT}]       
    ],
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
      [{ type: blocktypes.TEXT }]
    ]
  ],
    [
    [
      [{ type: blocktypes.TEXT}]       
    ],
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
      [{ type: blocktypes.TEXT }],
      [{ type: blocktypes.TEXT }]
    ]
  ],
  [
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
      [{ type: blocktypes.TEXT }]
    ],
    [
      [{ type: blocktypes.TEXT}]       
    ],
  ],
  [
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
      [{ type: blocktypes.TEXT }]
    ],
    [
      [{ type: blocktypes.IMAGE, src: 'http://vacations2discover.com/media/cache/11/90/11905b46e07600590d8bbee8b994c57c.jpg' }],
      [{ type: blocktypes.TEXT }]
    ],
  ],

]
const initialState = {
  'blocks': layouts[0],
  'layout': 0,
  'showLayouts': true
}

let id = 10;

export default handleActions({
  'add block' (state, action) {
    const {blockType, indexes: {row_idx, col_idx, block_idx}} = action.payload
    let a = Object.assign({}, state, {})
    let b = a.blocks[row_idx][col_idx];
    b = [...b.slice(0, block_idx+1), { type: blockType }, ...b.slice(block_idx+1)]
    a.blocks[row_idx][col_idx] = b
    return a
  },

  'delete block' (state, action) {
    const {row_idx, col_idx, block_idx} = action.payload.indexes
    let a = Object.assign({}, state, {})
    let b = a.blocks[row_idx][col_idx];
    b = [...b.slice(0, block_idx), ...b.slice(block_idx+1)]
    a.blocks[row_idx][col_idx] = b
    return a
  },

  'change layout' (state, action) {
    const layout = action.payload;
    return {
      layout: layout,
      blocks: layouts[layout],
      showLayouts: false
    }
  },

  'show layouts' (state, action) {
    return Object.assign({}, state, {showLayouts: true})
  }


}, initialState)
