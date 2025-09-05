export const BASE_URL= 'https://online-resume-builder-6i78.onrender.com';    //export const BASE_URL= 'http://localhost:3000' for deployment i change the url

export const API_PATHS = {
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',  
    GET_PROFILE: '/api/auth/profile'
  },
  RESUME: {
    CREATE: '/api/resume',
    GET_ALL: '/api/resume',
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
  },
  IMAGE: {
    UPLOAD_IMAGE: '/api/auth/upload-image',
  }
};
