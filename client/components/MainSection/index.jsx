
import React, { Component, PropTypes } from 'react';
import LayoutBoxes from '../LayoutBoxes';
import EditBox from '../EditBox';
import AddBlockBtn from '../AddBlockBtn';
import style from './style.css';
import ReactDOM from 'react-dom';

class Col extends Component {
  render() {
    const { children, width } = this.props;
    return (
      <div style={{"float": "left", "width": width}}>
        {children}
      </div>
    );
  }
}

export default class MainSection extends Component {

  static propTypes = {
    blocks: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = { is_show_layouts: false };
  }

  selectLayout() {
    const { actions } = this.props;
    actions.showLayouts();
  }

  generateHtml() {
    const html = ReactDOM.findDOMNode(this.refs.blocks);
  }

  render() {
    const { blocks: { blocks, layout, showLayouts }, actions } = this.props
    return (
      <section className={style.normal}>
        <button onClick={this.selectLayout.bind(this)}>select layout</button>
        <button onClick={this.generateHtml.bind(this)}>generate html</button>
        { 
          !showLayouts ? 
            <div ref="blocks">
              {
                blocks.map((row,row_idx) =>
                  row.map((col,col_idx) => 
                    <Col width={col.width}>
                      { col.col_blocks.map((block,block_idx) =>
                        <div key={block_idx}>
                          <EditBox block={block} indexes={{row_idx, col_idx, block_idx}} actions={actions} />
                          <AddBlockBtn {...actions} indexes={{row_idx, col_idx, block_idx}} />
                        </div>
                        )
                      } 
                    </Col>
                    )
                  )
              }
            </div>
          :
          <LayoutBoxes {...this.props } />
        }
      </section>
    );
  }
}
