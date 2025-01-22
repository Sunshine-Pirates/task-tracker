import { useState } from "react";
import { notificationsData } from "../utils/constants/notificationsData";
import { Icons } from "../assets";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";

export const NotificationComponent = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(
    notificationsData.map((notification) => ({
      ...notification,
      read: false,
    }))
  );
  const [selectedNotification, setSelectedNotification] = useState(null);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const openNotification = (id) => {
    const notification = notifications.find((n) => n.id === id);

    if (notification) {
      markAsRead(id);
      setSelectedNotification(notification);
    }
  };

  const closeNotification = () => {
    setSelectedNotification(null);
  };

  return (
    <Box>
      {!showNotifications ? (
        <Button
          onClick={() => setShowNotifications(true)}
          startIcon={<Icons.Collapse />}
        >
          Boards
        </Button>
      ) : selectedNotification ? (
        <NotificationDetails>
          <Typography variant="h5">{selectedNotification.name}</Typography>
          <Typography variant="h6">{selectedNotification.text}</Typography>
          <DetailsMassage>
            <Typography>{selectedNotification.details}</Typography>
            <TimeText>{selectedNotification.time}</TimeText>
          </DetailsMassage>
          <BackButton onClick={closeNotification}>Go Back</BackButton>
        </NotificationDetails>
      ) : (
        <NotificationContainer>
          <Header>
            <Typography variant="h8">
              Notification
              <MarkAllButton onClick={markAllAsRead}>
                Mark as read
              </MarkAllButton>
            </Typography>
          </Header>

          <List>
            {notifications.map((notification, index) => (
              <ListItemStyled key={notification.id} read={notification.read}>
                {!notification.read && <Dot />}
                <ContentBox>
                  <Box>
                    <DetailsMassage>
                      {index < 2 ? (
                        <ProfileImage
                          src="/src/assets/images/ProfileImage.png"
                          alt=""
                        />
                      ) : (
                        <IconContainer>
                          <img src="/src/assets/icons/timeclock.svg" alt="" />
                        </IconContainer>
                      )}
                      <Typography variant="body1">
                        {notification.name}
                      </Typography>
                    </DetailsMassage>
                    <TextContainer>
                      <Typography variant="body2" marginTop="5px">
                        {notification.name}
                        {notification.text}
                      </Typography>
                      <TimeText>{notification.time}</TimeText>
                    </TextContainer>
                  </Box>

                  <ArrowButton
                    onClick={() => openNotification(notification.id)}
                  >
                    <Icons.Right />
                  </ArrowButton>
                </ContentBox>
              </ListItemStyled>
            ))}
          </List>
        </NotificationContainer>
      )}
    </Box>
  );
};

const NotificationContainer = styled(Box)(() => ({
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "353px",
  padding: "20px",
  backgroundColor: "white",
}));

const NotificationDetails = styled(Box)(() => ({
  borderRadius: "10px",
  width: "350px",
  padding: "10px",
  backgroundColor: "white",
}));

const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const ListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "read",
})(() => ({
  display: "flex",
  padding: "10px",
  borderBottom: "1px solid #ddd",
}));

const DetailsMassage = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));

const Dot = styled("div")(() => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  marginRight: "10px",
  marginBottom: "55px",
}));

const BackButton = styled(Button)(() => ({
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "5px",
  padding: "3px 8px",
}));

const MarkAllButton = styled(Button)(() => ({
  fontSize: "10px",
  textDecoration: "underline",
  color: "grey",
  marginLeft: "30px",
}));

const TimeText = styled(Typography)(() => ({
  fontFamily: "unset",
  fontSize: "14px",
  color: "grey",
  display: "flex",
  marginTop: "5px",
}));

const IconContainer = styled(Box)(() => ({
  width: "50px",
  height: "35px",
  backgroundColor: "#c2c4c1dd",
  borderRadius: "50%",
  padding: "5px",
  marginTop: "10px",
}));

const ContentBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "15px",
  width: "100%",
}));

const ProfileImage = styled("img")(() => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ArrowButton = styled(IconButton)(() => ({
  marginLeft: "auto",
}));
