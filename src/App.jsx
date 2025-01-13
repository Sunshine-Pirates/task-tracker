import { UseSnackbar } from "./utils/snackBar/snackBar";

export const App = () => {
  const showSnackbar = UseSnackbar();

  const handleSuccess = () => {
    showSnackbar("success", "Avatar removed", "We've deleted your avatar.");
  };

  const handleError = () => {
    showSnackbar("error", "Error occurred", "Please try again later.");
  };

  const handleWarning = () => {
    showSnackbar("warning", "Warning", "This is a warning message.");
  };
  return (
    <div>
      <button onClick={handleSuccess}>Show Success Snackbar</button>
      <button onClick={handleError}>Show Error Snackbar</button>
      <button onClick={handleWarning}>Show Warning Snackbar</button>
    </div>
  );
};
