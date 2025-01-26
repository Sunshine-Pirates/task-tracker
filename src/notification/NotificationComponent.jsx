import { useState } from "react";
import { notificationsData } from "../utils/constants/notificationsData";
import { Icons } from "../assets";
import { styled } from "@mui/material/styles";
import { Box, Typography, List, ListItem } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A6883",
    },
  },
});

export const NotificationComponent = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(
    notificationsData.map((notification) => ({
      ...notification,
      read: false,
    }))
  );

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

  return (
    <Box>
      {!showNotifications ? (
        <ThemeProvider theme={theme}>
          <ButtonBoard onClick={() => setShowNotifications(true)}>
            <Icons.LayoutIcon />
            Boards
          </ButtonBoard>
        </ThemeProvider>
      ) : (
        <NotificationContainer>
          <Header>
            <p>Notification</p>
            <ButtonForMark onClick={markAllAsRead}>
              Mark all as read
            </ButtonForMark>
          </Header>
          <List>
            {notifications.map((notification) => (
              <ListItemStyled
                key={notification.id}
                read={notification.read}
                onClick={() => markAsRead(notification.id)}
              >
                {!notification.read && <Dot />}
                <ContentBox>
                  <Box>
                    <DetailsMassage>
                      <ProfileImage
                        src="/src/assets/images/ProfileImage.png"
                        alt=""
                      />
                      <TextAndName variant="body1" component="span">
                        {notification.name}
                      </TextAndName>
                    </DetailsMassage>
                    <TextContainer>
                      <TextReminder component="div">
                        {notification.text}
                        <TimeText component="span">
                          {notification.time}
                        </TimeText>
                      </TextReminder>
                    </TextContainer>
                  </Box>
                  <ButtonForIcon>
                    <Icons.Right />
                  </ButtonForIcon>
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
  height: "485",
  backgroundColor: "white",
  marginLeft: "30px",
}));

const ButtonBoard = styled("button")(() => ({
  display: "flex",
  gap: "10px",
  width: "245px",
  height: "37px",
  color: "#ffffff",
  backgroundColor: "#3A6883",
  fontWeight: "400",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50px",
  border: "1px solid #3A6883",
}));
const Header = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: "15px",
}));

const ButtonForMark = styled("button")(() => ({
  wight: "82px",
  height: "18",
  color: "grey",
  backgroundColor: "white",
  border: "0px solid white",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "underline",
}));

const ListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "read",
})(({ read }) => ({
  display: "flex",
  padding: "10px",
  borderBottom: "1px solid #ddd",
  backgroundColor: read ? "#f7f7f7" : "#fff",
}));

const DetailsMassage = styled("div")(() => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));
const TextAndName = styled(Typography)(() => ({
  display: "block",
  width: "100%",
  fontWeight: "400",
  fontSize: "14px",
}));

const Dot = styled("div")(() => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  marginRight: "10px",
  marginBottom: "55px",
}));

const TimeText = styled(Typography)(() => ({
  fontFamily: "unset",
  fontSize: "14px",
  color: "grey",
  display: "flex",
  marginTop: "5px",
}));

const ContentBox = styled(Box)(() => ({
  width: "350px",
  display: "flex",
  justifyContent: "space-between",
  gap: "15px",
}));

const ButtonForIcon = styled("button")(() => ({
  display: "flex",
  border: "0px solid",
  backgroundColor: "white",
  marginRight: "15px",
}));

const ProfileImage = styled("img")(() => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  width: "232px",
  height: "100%",
}));

const TextReminder = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "500",
}));
