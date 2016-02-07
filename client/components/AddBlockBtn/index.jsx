import React, { Component, PropTypes } from 'react';
import style from './style.css';
import * as blocktypes from '../../constants/blocktypes';

export default class AddBlockBtn extends Component {

  static propTypes = {
    indexes: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = { 'showLinks': false };
  }

  showLinks() {
    this.setState({ 'showLinks': true });
  }

  addEditBox(blockType) {
    const { indexes } = this.props;
    this.props.addBlock({ 'indexes': indexes, blockType: blockType });
    this.setState({ 'showLinks': false });
  }

  render() {
    const { showLinks } = this.state;
    let element;
    if (showLinks) {
      element = (
        <ul className={style.contentLinks}>
          <li onClick={::this.addEditBox.bind(this, blocktypes.TEXT)}>
            Text
          </li>
          <li onClick={::this.addEditBox.bind(this, blocktypes.IMAGE)}>
            Image
          </li>
          <li onClick={::this.addEditBox.bind(this, blocktypes.VIDEO)}>
            Video
          </li>
          <li onClick={::this.addEditBox.bind(this, blocktypes.IFRAME)}>
            Iframe
          </li>
        </ul>
      )
    } else {
      element = (
        <button onClick={::this.showLinks} className={style.addButton}>
        Add block section
        </button>
      )
    }
    return (
      <section className={style.normal}>
        {element}
      </section>
    );
  }
}
