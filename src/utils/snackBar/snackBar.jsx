import { useState } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import { Icons } from "../../assets";
import { createRoot } from "react-dom/client";

export const SnackbarComponent = ({ severity, message, description }) => {
  const [open, setOpen] = useState(true);

  const getCustomIcon = () => {
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
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <CustomAlert
        severity={severity}
        onClose={() => setOpen(false)}
        icon={getCustomIcon(severity)}
      >
        <div className="message">{message}</div>
        {description && <div className="description">{description}</div>}
      </CustomAlert>
    </MuiSnackbar>
  );
};

export const ShowSnackbar = (severity, message, description = "") => {
  const snackbarContainer = document.createElement("div");
  document.body.appendChild(snackbarContainer);

  const root = createRoot(snackbarContainer);

  const handleClose = () => {
    root.unmount();
    document.body.removeChild(snackbarContainer);
  };

  root.render(
    <SnackbarComponent
      severity={severity}
      message={message}
      description={description}
      onClose={handleClose}
    />
  );
};

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
