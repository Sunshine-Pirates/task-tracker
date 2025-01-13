// utils/snackBar.js
import { toast } from "react-toastify";

// Настройки по умолчанию
const defaultOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export const SnackBar = {
  success: (message, options = {}) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  error: (message, options = {}) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  info: (message, options = {}) => {
    toast.info(message, { ...defaultOptions, ...options });
  },
  warn: (message, options = {}) => {
    toast.warn(message, { ...defaultOptions, ...options });
  },
  custom: (message, options = {}) => {
    toast(message, { ...defaultOptions, ...options });
  },
};
