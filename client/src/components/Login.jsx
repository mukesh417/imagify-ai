
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(state === 'Login'){
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
        if(data.success){
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else toast.error(data.message);
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if(data.success){
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className='fixed inset-0 z-20 backdrop-blur-md bg-purple-100/30 flex justify-center items-center'>
      <motion.form 
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-gray-700 w-11/12 sm:w-96'
      >
        <h1 className='text-center text-2xl font-bold mb-2'>{state}</h1>
        <p className='text-center text-sm text-gray-500 mb-6'>
          {state === 'Login' ? 'Welcome back! Please login.' : 'Create your account to get started.'}
        </p>

        {state !== 'Login' && (
          <div className='border px-4 py-2 flex items-center gap-2 rounded-full mb-4 hover:shadow-md transition'>
            <img src={assets.profile_icon} alt="" className='w-6' />
            <input
              type="text"
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='flex-1 outline-none text-sm bg-transparent'
              required
            />
          </div>
        )}

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mb-4 hover:shadow-md transition'>
          <img src={assets.email_icon} alt="" className='w-5' />
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='flex-1 outline-none text-sm bg-transparent'
            required
          />
        </div>

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mb-4 hover:shadow-md transition'>
          <img src={assets.lock_icon} alt="" className='w-5' />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='flex-1 outline-none text-sm bg-transparent'
            required
          />
        </div>

        <p className='text-sm text-purple-600 mb-4 cursor-pointer hover:underline'>Forgot Password?</p>

        <button className='w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-full font-medium transition'>
          {state === 'Login' ? 'Login' : 'Sign Up'}
        </button>

        <p className='mt-4 text-center text-sm'>
          {state === 'Login' ? "Don't have an account?" : "Already have an account?"}
          <span 
            className='text-purple-600 cursor-pointer ml-1 hover:underline'
            onClick={() => setState(state === 'Login' ? 'Sign Up' : 'Login')}
          >
            {state === 'Login' ? 'Sign Up' : 'Login'}
          </span>
        </p>

        <img 
          onClick={() => setShowLogin(false)} 
          src={assets.cross_icon} 
          alt="Close" 
          className='absolute top-4 right-4 w-5 cursor-pointer hover:scale-110 transition-transform'
        />
      </motion.form>
    </div>
  );
};

export default Login;
