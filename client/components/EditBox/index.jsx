import React, { Component, PropTypes } from 'react'
import style from './style.css'
import classnames from 'classnames'
import EditBoxOptions from '../EditBoxOptions'

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
    this.initMediumEditor();
  }

  render() {

    const classes = classnames({
      [style.hover]: this.state.hover
    }, style.normal)

    return (
      <section onMouseEnter={::this.showEditToolbox} onMouseLeave={::this.HideEditToolbox} className={classes}>
       <div className={style.editorwrap}></div>
       {this.state.hover?<EditBoxOptions {...this.props} />: null}
      </section>
    )
  }
}

EditBox.propTypes = {
  block: PropTypes.object.isRequired
}

export default EditBox
