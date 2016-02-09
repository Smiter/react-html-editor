import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import EditBoxOptions from '../EditBoxOptions';
import * as blocktypes from '../../constants/blocktypes';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import style from './style.css';

export default class EditBox extends Component {

  static propTypes = {
    block: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = { 'hover': false };
  }

  showEditToolbox() {
    this.setState({ 'hover': true });
  }

  hideEditToolbox() {
    this.setState({ 'hover': false });
  }

  getBlockByType(block) {
    let html = (<div>undefined block type</div>);
    switch(block.type){
      case blocktypes.HTML:
        html = (
          <div>
            <textarea placeholder="set you html"></textarea>
          </div>
        )
        break;
      case blocktypes.TEXT:
        html = (<TextBox {...this.props} />);
        break;
      case blocktypes.IMAGE:
        html = (<ImageBox {...this.props} />);
        break;
      case blocktypes.VIDEO:
        html = (
          <div>
            <input type="text" placeholder="Insert video link" />
            <input type="text" placeholder="width" />
            <input type="text" placeholder="height" />
          </div>
        )
        break;
      case blocktypes.IFRAME:
        html = (
          <div>
            <input type="text" placeholder="Insert iframe link" />
            <input type="text" placeholder="width" />
            <input type="text" placeholder="height" />
          </div>
        )
        break;
      default:
        html = (<TextBox {...this.props} />)
    }
    return html;
  }

  render() {
    const { block } = this.props;
    const classes = classnames({
      [style.hover]: this.state.hover
    }, style.normal)
    return (
      <section onMouseEnter={::this.showEditToolbox} onMouseLeave={::this.hideEditToolbox} className={classes}>
        {this.getBlockByType(block)}
        {this.state.hover?<EditBoxOptions {...this.props} />: null}
      </section>
    );
  }
}
