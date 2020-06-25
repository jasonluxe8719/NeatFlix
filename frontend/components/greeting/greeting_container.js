import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return { 
    currentUser: users[session.id],
    demoUser: {email: "demouser@neatflix.com", password: "123456"}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);