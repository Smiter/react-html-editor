import React, { Component, PropTypes } from 'react'

import * as blocktypes from '../../constants/blocktypes'
import style from './style.css'

class EditBoxOptions extends Component {
  render() {
    const { actions: {deleteBlock, changeBlockType} } = this.props;
    console.log(this.props)
    return (
      <section className={style.normal}>
        <div>
          <div onClick={() => changeBlockType({"type": blocktypes.TEXT, "indexes": this.props.indexes})}>set as text</div>
          <div onClick={() => changeBlockType({"type": blocktypes.IMAGE, "indexes": this.props.indexes})}>set as image</div>
          <div onClick={() => changeBlockType({"type": blocktypes.VIDEO, "indexes": this.props.indexes})}>set as video</div>
          <div onClick={() => changeBlockType({"type": blocktypes.IFRAME, "indexes": this.props.indexes})}>set as iframe</div>

          <div onClick={() => deleteBlock({"indexes": this.props.indexes})}>delete</div>
        </div>
      </section>
    )
  }
}

EditBoxOptions.propTypes = {
  deleteBlock: PropTypes.func.isRequired,
  changeBlockType: PropTypes.func.isRequired
}

export default EditBoxOptions
