
import React, { Component, PropTypes } from 'react'
import LayoutBoxes from '../LayoutBoxes'
import EditBox from '../EditBox'
import AddBlockBtn from '../AddBlockBtn'
import style from './style.css'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { blocks, actions } = this.props
    console.log(this.props)
 
    // return (
    //   <section className={style.normal}>
    //     <AddBlockBtn {...actions} index={0}/>
    //     {todos.map((todo,index) =>
    //       <div key={todo.id}>
    //         <EditBox todo={todo} {...actions} />
    //         <AddBlockBtn {...actions} index={index+1} />
    //       </div>
    //     )}
    //   </section>
    // )
    return (
      <section className={style.normal}>
        {blocks.map((blocks,index) =>
          blocks.map((block,inxex) =>
            <div style={{"float": "left", "width": 100/blocks.length + "%"}} key={block.id}>
              <EditBox block={block} {...actions} />
              <AddBlockBtn {...actions} index={index+1} />
            </div>  
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