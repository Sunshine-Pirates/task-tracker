import { useState } from "react";
import { notificationsData } from "../utils/constants/notificationsData";
import { Icons } from "../assets";
import { styled } from "@mui/material/styles";
import { Box, Typography, List, ListItem } from "@mui/material";
import Button from "../components/UI/Button";
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
            <Typography variant="h8">Notification</Typography>
            <Button onClick={markAllAsRead}>Mark as read</Button>
          </Header>
          <List>
            {notifications.map((notification) => (
              <ListItemStyled key={notification.id} read={notification.read}>
                {!notification.read && <Dot />}
                <ContentBox>
                  <Box>
                    <DetailsMassage>
                      <ProfileImage
                        src="/src/assets/images/ProfileImage.png"
                        alt=""
                      />
                      <TextAndName variant="body1">
                        {notification.name}
                      </TextAndName>
                    </DetailsMassage>
                    <TextContainer>
                      <TextReminder variant="body2" marginTop="5px">
                        {notification.text}
                        <TimeText>{notification.time}</TimeText>
                      </TextReminder>
                    </TextContainer>
                  </Box>
                  <Button>
                    <Icons.Right />
                  </Button>
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
}));

const ButtonBoard = styled(Button)(() => ({
  display: "flex",
  gap: "10px",
  width: "245px",
  height: "37px",
  color: "#ffffff",
  backgroundColor: "#3A6883",
  fontWeight: "400",
  "&:hover": {
    backgroundColor: "#3A6883",
    color: "white",
  },
}));
const Header = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "30%",
  Button: {
    wight: "82px",
    height: "18",
    color: "grey",
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "underline",
  },
}));

const ListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "read",
})(() => ({
  display: "flex",
  padding: "10px",
  borderBottom: "1px solid #ddd",
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
  display: "flex",
  alignItems: "flex-start",
  gap: "15px",
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
