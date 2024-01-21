import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import backToLogin from '../assets/left-arrow.png';

const ForgotPassword = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleResetPassword = () => {
    setShowErrorMessage(true);
  };

  return (
    <div>
      <div className="w-[1440px] h-[844px] relative bg-white">
        <Link to={'/'}>
          <img
            className="w-[249px] h-[85px] left-[599px] top-[65px] absolute"
            src={Logo}
          />
        </Link>

        <input
          className="email h-11 w-[350px] pl-[11px] pr-[11px] py-[11px] left-[543px] top-[285px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex text-base font-bold font-raleway"
          placeholder="email"
        />

        <button
          className="button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[543px] top-[380px] absolute"
          type="button"
          onClick={handleResetPassword}
        >
          <div className="text-center text-white text-base font-bold font-['Raleway']">
            Reset password
          </div>
        </button>

        {showErrorMessage && (
          <div className="left-[541px] top-[336px] absolute text-center text-red-600 text-base font-bold font-['Raleway']">
            That address has no associated user account.
          </div>
        )}

        <div className="w-[140px] left-[639px] top-[488px] absolute">
          <Link to={'/login'}>
            <div className="w-[104px] h-[9.76px] left-[36px] top-[7px] absolute text-center text-black text-base font-medium font-['Raleway']">
              Back to log in
            </div>
            <img className="w-6 h-6 left-0 top-0 absolute" src={backToLogin} />
          </Link>
        </div>

        <div className="left-[543px] top-[230px] absolute text-black text-base font-medium font-['Raleway']">
          Please enter the email address you'd like your <br />
          password reset information sent to.
        </div>
        <div className="left-[543px] top-[178px] absolute text-black text-[32px] font-bold font-['Raleway']">
          Password reset.
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
