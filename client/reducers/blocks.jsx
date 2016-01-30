
import { handleActions } from 'redux-actions'
import * as blocktypes from '../constants/blocktypes'

const layouts = [
  [
    [
      {
        width: "100%",
        col_blocks: [{ type: blocktypes.TEXT}]
      } 
    ],
    [
      {
        width: "100%",
        col_blocks: [{ type: blocktypes.IMAGE, src: ''}]
      } 
    ]
  ],

  [
    [
      {
        width: "100%",
        col_blocks: [{ type: blocktypes.TEXT}]  
      }     
    ],
    [
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.IMAGE, src: '' }]
      },
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }
    ]
  ],
    [
    [
      {
        width: "100%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }     
    ],
    [
      {
        width: "33.3333%",
        col_blocks: [{ type: blocktypes.TEXT }]
      },
      {
        width: "33.3333%",
        col_blocks: [{ type: blocktypes.TEXT }]
      },
      {
        width: "33.3333%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }
    ]
  ],
  [
    [
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      },
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }
    ],
    [
      {
        width: "100%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }       
    ],
  ],
  [
    [
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      },
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }
    ],
    [
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      },
      {
        width: "50%",
        col_blocks: [{ type: blocktypes.TEXT }]
      }
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
    let b = a.blocks[row_idx][col_idx].col_blocks;
    b = [...b.slice(0, block_idx+1), { type: blockType }, ...b.slice(block_idx+1)]
    a.blocks[row_idx][col_idx].col_blocks = b
    return a
  },

  'delete block' (state, action) {
    const {row_idx, col_idx, block_idx} = action.payload.indexes
    let a = Object.assign({}, state, {})
    let b = a.blocks[row_idx][col_idx].col_blocks;
    b = [...b.slice(0, block_idx), ...b.slice(block_idx+1)]
    a.blocks[row_idx][col_idx].col_blocks = b
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
