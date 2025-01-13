import { useState, createContext, useContext, useCallback } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import { Icons } from "../../assets";

const SnackbarContext = createContext();

const CustomAlert = styled(MuiAlert)(({ severity }) => {
  const colors = {
    success: {
      border: "1px solid #a7d7a9",
      backgroundColor: "#eafaf1",
      color: "#218905",
    },
    error: {
      border: "1px solid #f28b82",
      backgroundColor: "#fdecea",
      color: "#D91212",
    },
    warning: {
      border: "1px solid #ffd666",
      backgroundColor: "#fff8e1",
      color: "#EB8900",
    },
  };

  return {
    ...colors[severity],
    width: "336px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "400",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    "& .custom-icon": {
      marginTop: "3px",
    },
    animation: "fadeIn 0.3s, fadeOut 0.3s 2.7s",
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(-20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    "@keyframes fadeOut": {
      "0%": { opacity: 1, transform: "translateY(0)" },
      "100%": { opacity: 0, transform: "translateY(-20px)" },
    },
  };
});

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "info",
    message: "",
    description: "",
  });

  const showSnackbar = useCallback((severity, message, description = "") => {
    setSnackbar({ open: true, severity, message, description });
  }, []);

  const hideSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, open: false }));
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
      <MuiSnackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <CustomAlert
          severity={snackbar.severity}
          onClose={hideSnackbar}
          icon={getCustomIcon(snackbar.severity)}
        >
          <div>{snackbar.message}</div>
          {snackbar.description && (
            <div style={{ fontSize: "16px", fontWeight: "normal" }}>
              {snackbar.description}
            </div>
          )}
        </CustomAlert>
      </MuiSnackbar>
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
