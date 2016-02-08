
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../../components/MainSection';
import * as BlocksActions from '../../actions/blocks';
import style from './style.css';

class App extends Component {
  
  static propTypes = {
    blocks: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { blocks, actions } = this.props;
    return (
      <div className={style.normal}>
        <MainSection blocks={blocks} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blocks: state.blocks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlocksActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
