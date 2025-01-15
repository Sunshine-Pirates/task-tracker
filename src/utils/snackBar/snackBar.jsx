import { useState, createContext, useContext, useCallback } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import { Icons } from "../../assets";

const SnackbarContext = createContext();

const CustomAlert = styled(MuiAlert)(({ severity }) => {
  const colors = {
    success: {
      border: "1px solid #2CB107",
      messageColor: "#218905",
      descriptionColor: "#71C559",
    },
    error: {
      border: "1px solid #D91212",
      messageColor: "#D91212",
      descriptionColor: "#E77A7A",
    },
    warning: {
      border: "1px solid #EB8900",
      messageColor: "#EB8900",
      descriptionColor: "#EDA034",
    },
  };

  return {
    ...colors[severity],
    width: "336px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "400",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    "& .custom-icon": {
      marginTop: "3px",
    },
    "& .message": {
      color: colors[severity].messageColor,
    },
    "& .description": {
      color: colors[severity].descriptionColor,
      fontSize: "16px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "4px",
      width: "100%",
      backgroundColor: colors[severity].messageColor,
      animation: "progressBar 3s linear forwards",
    },
    animation: "slideIn 0.5s, slideOut 0.5s 2.5s",
    "@keyframes slideIn": {
      "0%": { opacity: 0, transform: "translateX(100%)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    },
    "@keyframes slideOut": {
      "0%": { opacity: 1, transform: "translateX(0)" },
      "100%": { opacity: 0, transform: "translateX(100%)" },
    },
    "@keyframes progressBar": {
      "0%": { width: "100%" },
      "100%": { width: "0%" },
    },
  };
});

export const SnackbarProvider = ({ children }) => {
  const [snackbars, setSnackbars] = useState([]);

  const showSnackbar = useCallback((severity, message, description = "") => {
    const id = Date.now();
    setSnackbars((prev) => [...prev, { id, severity, message, description }]);
  }, []);

  const hideSnackbar = useCallback((id) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  }, []);

  const getCustomIcon = (severity) => {
    switch (severity) {
      case "success":
        return <Icons.Success className="custom-icon" />;
      case "error":
        return <Icons.Error className="custom-icon" />;
      case "warning":
        return <Icons.Warning className="custom-icon" />;
      default:
        return null;
    }
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbars.map((snackbar) => (
        <MuiSnackbar
          key={snackbar.id}
          open
          autoHideDuration={3000}
          onClose={() => hideSnackbar(snackbar.id)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <CustomAlert
            severity={snackbar.severity}
            onClose={() => hideSnackbar(snackbar.id)}
            icon={getCustomIcon(snackbar.severity)}
          >
            <div className="message">{snackbar.message}</div>
            {snackbar.description && (
              <div className="description">{snackbar.description}</div>
            )}
          </CustomAlert>
        </MuiSnackbar>
      ))}
    </SnackbarContext.Provider>
  );
};

export const UseSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context.showSnackbar;
};
