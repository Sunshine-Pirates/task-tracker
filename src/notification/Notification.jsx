import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { List, MenuList, styled } from "@mui/material";
import { notificationsData } from "../utils/constants/notificationsData";
import { IconButton } from "../components/UI/IconButton";
import { Icons } from "../assets";
import { useEffect, useState } from "react";
export const Notification = ({ open, onClose, onShow }) => {
  const [notifications, setNotifications] = useState(
    notificationsData.map((notification) => ({
      ...notification,
      read: false,
    }))
  );
  useEffect(() => {
    const unreadCount = notifications.filter((notify) => !notify.read);
    onShow(unreadCount);
  }, [notifications, onShow]);

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
    <StyledMenu
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        sx: {
          transform: "translate(-40px, -20px) !important",
          padding: "0px 15px",
          overflowY: "visible",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <StyledHeaderMenuItem>
        <div>
          <p>Notification</p>
          <MarkReadText onClick={markAllAsRead}>Mark as read</MarkReadText>
        </div>
      </StyledHeaderMenuItem>
      <StyledUlList>
        {notifications.map(
          ({ id, userName, avatar, comment, time, read, cardBoard }) => (
            <StyledMenuList key={id} onClick={() => markAsRead(id)}>
              <Dot read={read} />
              <InnerBlock>
                <Container background={cardBoard.background}>
                  <p className="title">{cardBoard.title}</p>
                  <p>{cardBoard.columnName}</p>
                </Container>
                <DescriptionParentBox>
                  <StyledAboutUser>
                    <img src={avatar} alt={userName} />
                    <p>{userName}</p>
                  </StyledAboutUser>
                  <StyledMoreDescription>
                    <CommentAndSvgBox>
                      <p className="comment">{comment}</p>
                      <IconButton
                        sx={{
                          padding: "0px",
                        }}
                      >
                        <Icons.ArrowToRightNotification />
                      </IconButton>
                    </CommentAndSvgBox>
                    <p className="time">{time}</p>
                  </StyledMoreDescription>
                </DescriptionParentBox>
              </InnerBlock>
            </StyledMenuList>
          )
        )}
      </StyledUlList>
    </StyledMenu>
  );
};
const StyledMenu = styled(Menu)(() => ({
  "& .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    width: "361px",
    height: "fit-content",
  },
}));

const StyledHeaderMenuItem = styled(MenuItem)(() => ({
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "end",
  position: "sticky",
  top: 0,
  zIndex: 10,
  padding: "16px 0px 15px 0px",
  background: "#ffffff",
  "&:hover": {
    background: "#ffffff",
  },
  "& div": {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
}));
const StyledUlList = styled(List)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  overflowY: "hidden",
}));
const StyledMenuList = styled(MenuList)(() => ({
  width: "fit-content",
  display: "flex",
  alignItems: "start",
  gap: "10px",
  borderBottom: "1px solid #E3E3E3",
  overflowY: "auto",
}));

const MarkReadText = styled("span")(() => ({
  width: "fit-content",
  height: "18px",
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "18px",
  cursor: "pointer",
  borderBottom: "1px solid ",
}));
const Dot = styled("div")(({ read, theme }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: read ? "transparent" : theme.palette.primary.light,
}));
const Container = styled("div")(({ background }) => ({
  width: "304px",
  height: "138px",
  borderRadius: "8px",
  cursor: "pointer",
  background:
    background?.startsWith("http") || background?.includes("/")
      ? `url(${background}) center/cover no-repeat`
      : background,
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  "& .title": {
    fontWeight: "500",
  },
}));
const InnerBlock = styled("div")(() => ({
  width: "304px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "start",
}));
const StyledAboutUser = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
const DescriptionParentBox = styled("div")(() => ({
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));
const CommentAndSvgBox = styled("div")(() => ({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .comment": {
    width: "282px",
    height: "fit-content",
    fontWeight: "500",
  },
}));
const StyledMoreDescription = styled("div")(() => ({
  "& .time": {
    color: "#919191",
    fontSize: "14px",
  },
}));
