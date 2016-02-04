import React, { Component, PropTypes } from 'react'
import style from './style.css'
import classnames from 'classnames'

class TextBox extends Component {

  componentDidMount(){
    const {block} = this.props;
    this.refs.editorwrap.innerHTML = block.content || ""
  }

  render() {
    const { block } = this.props
    return (
      <section> 
        Upload image<input type="file" />
      </section>
    )
  }
}

TextBox.propTypes = {
  block: PropTypes.object.isRequired
}

export default TextBox
