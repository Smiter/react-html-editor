import React, { Component, PropTypes } from 'react'
import style from './style.css'
import classnames from 'classnames'

class TextBox extends Component {

  initMediumEditor(){
    const that = this;
    this.editor = new MediumEditor("."+style.editorwrap, {
      toolbar:{
        // static: true,
        // align: 'center',
        // diffLeft: 100,
        // diffTop: -100,
        // sticky: false,
        // updateOnEmptySelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'orderedlist', 'unorderedlist', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull', ]
      },
      anchorPreview: {
        hideDelay: 500,
        previewValueSelector: 'a',
        showWhenToolbarIsVisible: true    
      },
      anchor: {
        targetCheckbox: true,
        targetCheckboxText: 'Open in new window'
      }
    });
  }

  componentDidMount(){
    const {block} = this.props;
    this.initMediumEditor();
    this.refs.editorwrap.innerHTML = block.content
  }

  handleChange(e){
    const { actions, indexes } = this.props
    actions.saveTextBlock({"content": this.refs['editorwrap'].innerHTML, "indexes": indexes})
  }

  render() {
    const { block } = this.props
    console.log(block.content)
    return (
      <section ref="editorwrap" onKeyUp={this.handleChange.bind(this)} className={style.editorwrap}> 

      </section>
    )
  }
}

TextBox.propTypes = {
  block: PropTypes.object.isRequired
}

export default TextBox
