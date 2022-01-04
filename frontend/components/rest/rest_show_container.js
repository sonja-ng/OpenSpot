import { connect } from 'react-redux';
import RestShow from './rest_show';

const mSTP = (state, ownProps) => ({
    rest: state.entities.rests[ownProps.match.params.restId]
});

// const mDTP = dispatch => ({

// });

export default connect(mSTP, null)(RestShow);