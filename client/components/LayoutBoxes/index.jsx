import React, { Component, PropTypes } from 'react'
import style from './style.css'

const layouts = [
  {
    'class': 'col1',
    'txt': '1 Column'
  },
  {
    'class': 'col12',
    'txt': '1:2 Column'
  },
  {
    'class': 'col13',
    'txt': '1:3 Column'
  },
  {
    'class': 'col21',
    'txt': '2:1 Column'
  },
  {
    'class': 'col2',
    'txt': '2:2 Column'
  },
  {
    'class': 'leftsb',
    'txt': 'Left Sidebar'
  },
  {
    'class': 'rightsb',
    'txt': 'Right Sidebar'
  }
]

class LayoutBoxes extends Component {

  changeLayout(idx){
    const { actions } = this.props;
    actions.changeLayout(idx)
  }

  render() {
    return (
      <section className={style.normal}>
        <ul className={style.layoutbox}>
          {
            layouts.map((l, index) =>
              <li onClick={this.changeLayout.bind(this, index)}>
                <p>{l.txt}</p>
                <a>
                  <div className={style[l.class]}></div>
                </a>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}

LayoutBoxes.propTypes = {
  actions: PropTypes.object.isRequired
}

export default LayoutBoxes
