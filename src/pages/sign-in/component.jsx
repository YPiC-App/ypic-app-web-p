import React from 'react';
import Button from '@material/react-button';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
} from 'react-icons/fa';
import logo from '/assets/images/logo-round.png';
import './styles.scss';

const SignIn = ({ onFacebookSignIn }) => (
  <div className="sign-in">
    <div className="sign-in__content">
      <div>
        <img
          src={logo}
          className="sign-in__logo"
          alt="Young People in Christ"
        />
      </div>
      <div className="sign-in__button-group">
        <Button
          raised
          className="facebook-button"
          icon={<FaFacebookSquare />}
          onClick={onFacebookSignIn}
        >
          Sign in with Facebook
        </Button>
        <Button raised className="twitter-button" icon={<FaTwitterSquare />}>
          Sign in with Twitter
        </Button>
        <Button raised className="google-button" icon={<FaGooglePlusSquare />}>
          Sign in with Google
        </Button>
      </div>
    </div>
  </div>
);

export default SignIn;
