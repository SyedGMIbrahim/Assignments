import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const inputRefs = useRef([]);

  function handelSendOtp() {
    if(mobileNumber.length == 10) {
      setIsOtpSent(true);
      alert(`OTP sent to ${mobileNumber}`);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  }

  function handleChange(index, value) {
    if(isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if(value != '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(index, event) {
    if(event.key == 'Backspace' && otp[index] == '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handleSubmit() {
    if(otp.join('').length == 4) {
      alert(`Entered OTP: ${otp.join('')}`);
    } else {
      alert("Please enter a complete 4-digit OTP");
    }
  }

  return (

    <div className="container">
      <div className="card">
        <h2>Login via OTP</h2>
        <div>
          {!isOtpSent? (
            <>
              <input 
                type='text' 
                placeholder='Enter your mobile number' 
                onChange={(e) => setMobileNumber(e.target.value)} 
                maxLength='10'
                className="input"
              />
              <button onClick={handelSendOtp} className="button">
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div className="otp-input-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type='text'
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength="1"
                    className='otp-input'
                  />
                ))}
              </div>
              <button onClick={handleSubmit}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
