import { connect } from 'react-redux';
import firebase from 'firebase';
import Component from './component';

const handleOnFacebookSignIn = dispatch => () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => console.log(result))
    .catch(error => console.log('err', error));
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onFacebookSignIn: handleOnFacebookSignIn(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
