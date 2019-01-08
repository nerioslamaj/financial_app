import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecentTransactions } from '../../modules/transaction/actions';

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecentTransactions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
