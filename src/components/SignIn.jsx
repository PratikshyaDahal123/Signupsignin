import React, { useState } from 'react';

const SignIn = ({ onClose, onContinue }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    setError('');
    onContinue(email);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gray-100 w-full max-w-md h-full p-8 shadow-lg z-50 animate-slideIn">
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-serif text-center">Welcome to Decorish</h2>
        <p className="text-center mt-2 mb-6 text-sm">Enter your email address to sign in or create an account</p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-2 border border-gray-300"
        />
        {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
        <button onClick={handleContinue} className="w-full border border-black py-2 font-medium hover:bg-gray-300">Continue</button>

        <div className="flex items-center justify-center my-4 text-gray-500 text-sm">
          <div className="flex-1 border-b" /> <span className="px-2">OR</span> <div className="flex-1 border-b" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white border py-2 mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="fb" className="w-5 h-5" />
          Continue with Facebook
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border py-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
