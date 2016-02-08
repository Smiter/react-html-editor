
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './style.css';

export default class TextBox extends Component {

  static propTypes = {
    block: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  initMediumEditor() {
    this.editor = new MediumEditor('.' + style.editorwrap, {
      toolbar: {
        // static: true,
        // align: 'center',
        // diffLeft: 100,
        // diffTop: -100,
        // sticky: false,
        // updateOnEmptySelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor',
          'h1', 'h2', 'h3', 'orderedlist', 'unorderedlist',
          'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull']
      },
      anchorPreview: {
        hideDelay: 500,
        previewValueSelector: 'a',
        showWhenToolbarIsVisible: true    
      },
      anchor: {
        targetCheckbox: true,
        targetCheckboxText: 'Open in new window'
      },
      placeholder: false
    });
  }

  componentDidMount() {
    const { block } = this.props;
    this.initMediumEditor();
    this.refs.editorwrap.innerHTML = block.content || '';
  }

  handleChange(){
    const { actions, indexes } = this.props
    actions.saveTextBlock({'content': this.refs.editorwrap.innerHTML, 'indexes': indexes})
  }

  render() {
    return (
      <section ref="editorwrap" onKeyUp={this.handleChange.bind(this)} className={style.editorwrap}> 
      </section>
    );
  }
}
