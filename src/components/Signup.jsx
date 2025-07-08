import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignUp = ({ email, onBack }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [consent1, setConsent1] = useState(false);  //checkbox 
  const [consent2, setConsent2] = useState(false);  //checkbox
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!password || !confirmPassword || !consent1 || !consent2) {
      setError('Please fill the form.');
      return;
    }
    if (password.length < 8 || password.length > 25) {
      setError('Password must be between 8 and 25 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    alert('Account created!');
    onBack();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onBack}></div>
      <div className="relative bg-gray-100 w-full max-w-md h-full p-8 shadow-lg z-50 animate-slideIn overflow-y-auto">
        <button className="absolute top-4 right-4 text-xl" onClick={onBack}>✕</button>
        <h2 className="text-2xl font-serif text-center">Welcome to Decorish</h2>
        <p className="text-center mt-2 mb-6 text-sm">Please provide your information to create an account</p>

        <label className="text-sm font-medium block mb-1">EMAIL ADDRESS:</label>
        <input
          type="email"
          value={email}
          readOnly
          className="w-full p-3 mb-4 border border-gray-300 bg-gray-200"
        />

        <label className="text-sm font-medium block mb-1">PASSWORD</label>
        <div className="relative mb-1">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300"
          />
          <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">Please enter a password with a minimum of 8 characters and maximum 25.</p>

        <label className="text-sm font-medium block mb-1">PASSWORD CONFIRMATION</label>
        <div className="relative mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300"
          />
          <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <p className="text-sm font-medium mb-2">I agree to the processing of my personal data to:</p>

        <div className="flex items-start gap-2 mb-2">
          <input
            type="checkbox"
            checked={consent1}
            onChange={() => setConsent1(!consent1)}
          />
          <label className="text-sm">Receive promotional messages about Decorish</label>
        </div>

        <div className="flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            checked={consent2}
            onChange={() => setConsent2(!consent2)}
          />
          <label className="text-sm">Receive personalized commercial proposal about Decorish's products and services, based on my habits and preferences</label>
        </div>

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full border border-black py-2 font-semibold hover:bg-gray-300"
        >
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default SignUp;
