import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const CreateResumeForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateResume = async (e) => {
    e.preventDefault();
    if (!title) {
      setError('Please enter Resume title');
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title });
      if (response.data?._id) {
        navigate(`/resume/${response.data._id}`);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Try again later.');
      }
    }
  };

  return (
    <div className="w-full p-8 bg-blue-50 rounded-2xl border border-gray-100 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Resume</h3>
      <p className="text-gray-600 mb-8">Give Your Resume Title here</p>

      <form onSubmit={handleCreateResume}>
        <label className="block mb-2 font-medium">Resume Title</label>
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="ex- Raj - Software Developer"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className='w-full py-3 bg-gradient-to-r from-blue-300 to-cyan-400 text-oklch(29.3% 0.066 243.157) font-black rounded-2xl hover:scale-105 hover:shadow-xl transition-all'
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateResumeForm;
