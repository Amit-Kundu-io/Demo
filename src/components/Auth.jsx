import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.trim() === "") {
      alert("Please enter OTP");
      return;
    }
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      alert("OTP must be exactly 6 digits");
      return;
    }
    alert("OTP Verified Successfully!");
    // You can navigate to the next page or dashboard here
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };
  

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-2 text-center font-serif">Tendtrix</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">OTP Verification</h2>

        <p className="text-center text-gray-600 mb-6">
          Enter the OTP sent to your email address.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Enter OTP*</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="w-full border rounded-lg p-3 text-center text-2xl tracking-widest focus:outline-none focus:ring focus:border-teal-500"
              placeholder="000000"
              maxLength="6"
              inputMode="numeric"
            />
          </div>

          <p className="text-sm text-center text-gray-600">
            Didn't receive OTP? <span className="text-teal-600 cursor-pointer">Resend</span>
          </p>

          <button
            type="button"
            onClick={handleVerify}
            className="w-full bg-teal-600 text-white py-2 rounded-lg text-lg hover:bg-teal-700"
          >
            Verify OTP
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg text-lg hover:bg-gray-400"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
