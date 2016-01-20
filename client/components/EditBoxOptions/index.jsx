import React, { Component, PropTypes } from 'react'
import style from './style.css'

class EditBoxOptions extends Component {
  render() {
    const { deleteBlock } = this.props;
    return (
      <section className={style.normal}>
        <div>
          <div onClick={() => deleteBlock({"indexes": this.props.indexes})}>delete</div>
        </div>
      </section>
    )
  }
}

EditBoxOptions.propTypes = {
  deleteBlock: PropTypes.func.isRequired
}

export default EditBoxOptions
