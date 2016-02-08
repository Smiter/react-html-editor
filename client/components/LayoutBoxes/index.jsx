import React, { Component, PropTypes } from 'react';
import style from './style.css';

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
];

export default class LayoutBoxes extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  changeLayout(idx) {
    const { actions } = this.props;
    actions.changeLayout(idx);
  }

  render() {
    return (
      <section className={style.normal}>
        <ul className={style.layoutbox}>
          {
            layouts.map((layout, index) =>
              <li key={index} onClick={this.changeLayout.bind(this, index)}>
                <p>{layout.txt}</p>
                <a>
                  <div className={style[layout.class]}></div>
                </a>
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}
