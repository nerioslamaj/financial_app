import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreateTransaction } from '../../modules/transaction/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreateTransaction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
