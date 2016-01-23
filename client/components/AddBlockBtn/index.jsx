import React, { Component, PropTypes } from 'react'
import style from './style.css'
import * as blocktypes from '../../constants/blocktypes'

class AddBlockBtn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"show_links": false}
  }

  showLinks(){
    this.setState({"show_links": true})
  }

  addEditBox(blockType) {
    this.props.addBlock({"indexes": this.props.indexes, blockType: blockType})
    this.setState({"show_links": false})
  }

  render() {

    let element
    if(this.state.show_links){
      element = (
        <ul className={style["content-links"]}>
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
    }else{
      element = (
        <button onClick={::this.showLinks} className={style["add-button"]}>
        Add block section
        </button>
      )
    }
    return (
      <section className={style.normal}>
        {element}
      </section>
    )
  }
}

AddBlockBtn.propTypes = {
  indexes: PropTypes.object.isRequired
}

export default AddBlockBtn
