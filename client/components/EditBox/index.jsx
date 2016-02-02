import React, { Component, PropTypes } from 'react'
import style from './style.css'
import classnames from 'classnames'
import EditBoxOptions from '../EditBoxOptions'
import * as blocktypes from '../../constants/blocktypes'
import TextBox from './TextBox'

class EditBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"hover": false}
  }

  showEditToolbox(){
    this.setState({"hover":true})
  }

  HideEditToolbox(){
    this.setState({"hover":false})
  }

  getBlockByType(block){
    let html = <div>undefined block type</div>
    switch(block.type){
      case blocktypes.TEXT:
        html = <TextBox {...this.props} />
        break
      case blocktypes.IMAGE:
        html = <div>Upload image<input type="file" /></div>
        break
      case blocktypes.VIDEO:
        html = ( <div><input type="text" placeholder="Insert video link" />
          <input type="text" placeholder="width" />
          <input type="text" placeholder="height" />
        </div>)
        break
      case blocktypes.IFRAME:
        html = ( <div><input type="text" placeholder="Insert iframe link" />
          <input type="text" placeholder="width" />
          <input type="text" placeholder="height" />
        </div>)
        break
    }
    return html
  }

  render() {
    const { block } = this.props;
    const classes = classnames({
      [style.hover]: this.state.hover
    }, style.normal)

    return (
      <section onMouseEnter={::this.showEditToolbox} onMouseLeave={::this.HideEditToolbox} className={classes}>
       {this.getBlockByType(block)}

       {this.state.hover?<EditBoxOptions {...this.props} />: null}
      </section>
    )
  }
}

EditBox.propTypes = {
  block: PropTypes.object.isRequired
}

export default EditBox
