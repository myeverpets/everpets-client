import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import backToLogin from '../assets/left-arrow.png';

export default function VerificationCode() {
  const [displayText, setDisplayText] = useState<string | null>(null);
  const [code, setCode] = useState<string>('');

  const handleButtonClick = () => {
    if (code.trim() === '') {
      setDisplayText('Code field cannot be empty.');
    } else if (!validateCode(code)) {
      // setDisplayText('Invalid code.');
      setDisplayText(null);
      window.location.href = '/set-new-password';
    } else {
      setDisplayText(null);
      // window.location.href = '/set-new-password';
    }
  };

  const validateCode = (code: string) => {
    const codeRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return codeRegex.test(code);
  };

  return (
    <div className="">
      <div className="w-[1440px] h-[844px] relative bg-white">
        <Link to={'/'}>
          <img
            className="w-[248px] h-[85px] left-[596px] top-[65px] absolute"
            src={Logo}
            alt="Logo"
          />
        </Link>
        <div className="left-[476px] top-[169px] absolute text-center text-black text-base font-medium font-['Raleway']">
          Enter the OTP code that we sent to your email m*****s@gmail.com.
          <br />
          Be careful not share the code with anyone.{' '}
        </div>
        <div className="email w-[350px] h-10 left-[541px] top-[282px] absolute">
          <input
            className="w-full h-full bg-white rounded-[5px] border-2 border-red-400 pl-[11px] pr-[11px] text-base font-bold font-['Raleway']"
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value.trim())}
          />
        </div>
        <div className="text_after left-[546px] top-[325px] absolute text-center text-red-600 text-base font-bold font-['Raleway']">
          {displayText}
        </div>
        <button
          className="button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[543px] top-[350px] absolute flex justify-center items-center"
          type="button"
          onClick={handleButtonClick}
        >
          <div className="text-white text-base font-bold font-['Raleway']">
            Continue
          </div>
        </button>
        <div className="w-[140px] left-[639px] top-[488px] absolute">
          <Link to={'/login'}>
            <div className="w-[104px] h-[9.76px] left-[47px] top-[0px] absolute text-center text-black text-base font-medium font-['Raleway']">
              Back to log in
            </div>
            <img
              className="w-6 h-6 left-3 top-[0px] absolute"
              src={backToLogin}
              alt="Back to login"
            />
          </Link>
        </div>
        <div className="text-center h-[19px] pl-1.5 left-[590px] top-[425px] absolute flex items-center text-black text-base font-medium font-['Raleway']">
          Didn’t receive the code?
        </div>
        <a href="/verification-code">
          <div className="text-center h-[19px] pl-1.5 left-[771px] top-[425px] absolute flex items-center w-[350px] text-red-500 text-base font-bold font-['Raleway']">
            Resend
          </div>
        </a>
      </div>
    </div>
  );
}
