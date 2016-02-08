import React, { Component, PropTypes } from 'react';
import * as blocktypes from '../../constants/blocktypes';
import style from './style.css';

const options = [
  {
    'type': blocktypes.TEXT,
    'label': 'set as text'
  },
  {
    'type': blocktypes.IMAGE,
    'label': 'set as image'
  },
  {
    'type': blocktypes.VIDEO,
    'label': 'set as video'
  },
  {
    'type': blocktypes.IFRAME,
    'label': 'set as frame'
  }
]

export default class EditBoxOptions extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { indexes, actions: { deleteBlock, changeBlockType } } = this.props;
    return (
      <section className={style.normal}>
        <div>
          {
            options.map( option => 
              <div key={option.type} onClick={() => changeBlockType({'type': option.type, 'indexes': indexes})}>{option.label}</div>
            )
          }
          <div onClick={() => deleteBlock({"indexes": this.props.indexes})}>delete</div>
        </div>
      </section>
    )
  }
}
