import React, { Component, PropTypes } from 'react'
import style from './style.css'

class AddBlockBtn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"show_links": false}
  }

  showLinks(){
    this.setState({"show_links": true})
  }

  addEditBox(text) {
    this.props.addBlock({"indexes": this.props.indexes})
    this.setState({"show_links": false})
  }

  render() {

    let element
    if(this.state.show_links){
      element = (
        <ul className={style["content-links"]}>
          <li onClick={::this.addEditBox}>
            Text
          </li>
        </ul>
      )
    }else{
      element = (
        <button onClick={::this.showLinks} className={style["add-button"]}>
        Add block
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
