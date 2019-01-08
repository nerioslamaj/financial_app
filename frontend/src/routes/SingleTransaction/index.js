import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestTransaction } from '../../modules/transaction/actions';

function mapStateToProps(state) {
  return {
    currTransaction: state.currTransaction,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestTransaction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
