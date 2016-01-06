import React, { Component, PropTypes } from 'react'
import style from './style.css'

class LayoutBoxes extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { actions } = this.props;

    return (
      <section className={style.normal}>
       <ul className={style.layoutbox}>
       <li><p>1 Column</p><a ><div className={style.col1}></div></a></li>
       <li><p>1:2 Column</p><a><div className={style.col12}></div></a></li>
       <li><p>1:3 Column</p><a><div className={style.col13}></div></a></li>
       <li><p>2:1 Column</p><a><div className={style.col21}></div></a></li>
       <li><p>2:2 Column</p><a><div className={style.col2}></div></a></li>
       <li><p>Left Sidebar</p><a><div className={style.leftsb}></div></a></li>
       <li><p>Right Sidebar</p><a><div className={style.rightsb}></div></a></li>
       </ul>
      </section>
    )
  }
}

LayoutBoxes.propTypes = {
  actions: PropTypes.object.isRequired
}

export default LayoutBoxes