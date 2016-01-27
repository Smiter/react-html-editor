
import React, { Component, PropTypes } from 'react'
import LayoutBoxes from '../LayoutBoxes'
import EditBox from '../EditBox'
import AddBlockBtn from '../AddBlockBtn'
import style from './style.css'
import ReactDOM from 'react-dom'


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
    this.state = {
      is_show_layouts: false
    }
  }

  selectLayout(){
    const { actions } = this.props
    actions.showLayouts();
  }

  generateHtml(){
    const html = ReactDOM.findDOMNode(this.refs['blocks'])
    console.log(html)
  }

  render() {
    const { blocks: {blocks, layout, showLayouts}, actions } = this.props

    return (
      <section className={style.normal}>
        <button onClick={this.selectLayout.bind(this)}>select layout</button>
        <button onClick={this.generateHtml.bind(this)}>generate html</button>
        { 
          !showLayouts ? 
            <div ref="blocks">
              {
                blocks.map((row,row_idx) =>
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
                  )
              }
            </div>
          :
          <LayoutBoxes {...this.props } />
        }
        
      </section>
    )
  }

}

MainSection.propTypes = {
  blocks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection