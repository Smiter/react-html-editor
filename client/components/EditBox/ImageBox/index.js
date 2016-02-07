import React, { Component } from 'react';
import style from './style.css';
import classnames from 'classnames';

export default class ImageBox extends Component {
  render() {
    return (
      <section> 
        Upload image<input type="file" />
      </section>
    );
  }
}
