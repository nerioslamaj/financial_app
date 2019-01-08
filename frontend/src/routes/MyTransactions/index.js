import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestMyTransactions } from '../../modules/transaction/actions';

function mapStateToProps(state) {
  return {
    myTransactions: state.myTransactions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestMyTransactions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
