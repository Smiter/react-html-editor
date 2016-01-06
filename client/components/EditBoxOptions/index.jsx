import React, { Component, PropTypes } from 'react'
import style from './style.css'

class EditBoxOptions extends Component {
  render() {
    const { deleteBlock, block } = this.props;
    return (
      <section className={style.normal}>
        <div>
          <div onClick={() => deleteBlock(block.id)}>delete</div>
        </div>
      </section>
    )
  }
}

EditBoxOptions.propTypes = {
  block: PropTypes.object.isRequired,
  deleteBlock: PropTypes.func.isRequired
}

export default EditBoxOptions
