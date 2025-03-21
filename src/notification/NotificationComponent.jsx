import { useState } from "react";
import { notificationsData } from "../utils/constants/notificationsData";
import { Icons } from "../assets";
import { styled } from "@mui/material/styles";
import { Box, Typography, List, ListItem } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "../components/UI/Button";

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
    <BoxStyled>
      {!showNotifications ? (
        <ThemeProvider theme={theme}>
          <ButtonBoard read="false" onClick={() => setShowNotifications(true)}>
            <Icons.LayoutIcon />
            Boards
          </ButtonBoard>
        </ThemeProvider>
      ) : (
        <NotificationContainer>
          <Header>
            <p>Notification</p>
            <ButtonForMark read="false" onClick={markAllAsRead}>
              Mark all as read
            </ButtonForMark>
          </Header>
          <NotificationList>
            {notifications.map((notification) => (
              <ListItemStyled
                key={notification.id}
                read={notification.read ? "true" : "false"}
                onClick={() => markAsRead(notification.id)}
                // style={{
                //   background:
                //     notification.background?.startsWith("http") &&
                //     notification.background.trim() !== ""
                //       ? `url(${notification.background}) center/cover no-repeat`
                //       : notification.background &&
                //           notification.background.trim() !== ""
                //         ? notification.background
                //         : "#e0e0e0",
                // }}
              >
                <ContentBox>
                  <Dot read={notification.read} />
                  <div>
                    <TitleWrapper>
                      <TitleContainer>
                        <TitleText component="div">
                          {notification.title}
                        </TitleText>
                        <TitleText component="span">
                          {notification.title2}
                        </TitleText>
                      </TitleContainer>
                    </TitleWrapper>
                    <DetailsMessageBox>
                      <DetailsMessage>
                        <ProfileImage
                          src="/src/assets/images/ProfileImage.png"
                          alt=""
                        />
                        <TextAndName>{notification.name}</TextAndName>
                      </DetailsMessage>
                      <TextAndButtonContainer>
                        <TextContainer>
                          <TextReminder>{notification.text}</TextReminder>
                          <TimeText component="span">
                            {notification.time}
                          </TimeText>
                        </TextContainer>
                        <div>
                          <ButtonForIcon read="false">
                            <Icons.Right />
                          </ButtonForIcon>
                        </div>
                      </TextAndButtonContainer>
                    </DetailsMessageBox>
                  </div>
                </ContentBox>
              </ListItemStyled>
            ))}
          </NotificationList>
        </NotificationContainer>
      )}
    </BoxStyled>
  );
};

const BoxStyled = styled(Box)(() => ({
  width: "461px",
  height: "819px",
}));

const NotificationContainer = styled(Box)(() => ({
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "361px",
  height: "600px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px 0px",
}));

const NotificationList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
}));

const ButtonBoard = styled(Button)(() => ({
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
  width: "100%",
  height: "20px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

const ButtonForMark = styled(Button)(() => ({
  width: "182px",
  height: "18px",
  color: "grey",
  backgroundColor: "white",
  border: "0px solid white",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "underline",
  textDecorationStyle: "solid",
}));

const ListItemStyled = styled(ListItem)(({ read, background }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  borderBottom: "1px solid #fffff",
  backgroundColor: read === "true" ? "#f7f7f7" : background,
}));
const TitleWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  width: "304px",
  height: "138px",
}));

const TitleContainer = styled(Box)(() => ({
  width: "301px",
  minHeight: "138px",
  backgroundColor: "#CBCBCB",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexWrap: "wrap",
  padding: "10px",
  margin: "0auto",
  borderRadius: "5px",
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "16px",
  color: "white",
  textAlign: "center",
}));

const Dot = styled("div")(({ read }) => ({
  position: "absolute",
  left: "5px",
  marginTop: "5px",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: read ? "transparent" : "#007bff",
}));

const ContentBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  gap: "20px",
}));

const DetailsMessageBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "white",
}));

const DetailsMessage = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const TextAndName = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "14px",
}));

const TimeText = styled(Typography)(() => ({
  displey: "flex",
  justifyContent: "space-between",
  gap: "30px",
  fontSize: "14px",
  color: "grey",
}));

const ButtonForIcon = styled(Button)(() => ({
  display: "flex",
  border: "0px solid",
  cursor: "pointer",
  alignSelf: "stretch",
}));

const ProfileImage = styled("img")(() => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "304px",
  height: "40px",
  wordWrap: "break-word",
}));

const TextReminder = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  width: "282px",
  height: "40px",
  fontSize: "16px",
  fontWeight: "500",
}));

const TextAndButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
