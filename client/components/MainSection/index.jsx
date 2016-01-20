
import React, { Component, PropTypes } from 'react'
import LayoutBoxes from '../LayoutBoxes'
import EditBox from '../EditBox'
import AddBlockBtn from '../AddBlockBtn'
import style from './style.css'


class Col extends Component {
  render(){
      return (
        <div style={{"float": "left", "width": 100/this.props.cols + "%"}}>
          {this.props.children}
        </div>
      )
  }
}

class MainSection extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { blocks, actions } = this.props

    return (
      <section className={style.normal}>
        {blocks.map((row,row_idx) =>
          row.map((col,col_idx) => 
            <Col cols={row.length}>
              { col.map((block,block_idx) =>
                  <div>
                    <EditBox block={block} indexes={{row_idx, col_idx, block_idx}} {...actions} />
                    <AddBlockBtn {...actions} indexes={{row_idx, col_idx, block_idx}} />
                  </div>
                )
              } 
            </Col>
          
          )
        )}
      </section>
    )
  }
  
}

MainSection.propTypes = {
  blocks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection