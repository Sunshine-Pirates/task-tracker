import { styled } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Input } from "../input/Input";
import { comments } from "../../../utils/constants/comments";

export const Comments = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleCommentsVisibility = () => {
    setCommentsVisible((prev) => !prev);
  };

  return (
    <StyledCommentsContainer commentsVisible={commentsVisible}>
      <StyledSection>
        <p>Comments</p>
        <div onClick={toggleCommentsVisibility} style={{ cursor: "pointer" }}>
          {commentsVisible ? (
            <KeyboardDoubleArrowUpIcon />
          ) : (
            <KeyboardDoubleArrowDownIcon />
          )}
        </div>
      </StyledSection>
      {commentsVisible && (
        <>
          <StyledContentWrapper>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <StyledItem>
                    <StyledImage src={comment.img} alt={comment.name} />
                    <StyledContainer>
                      <div>
                        <StyledName>{comment.name}</StyledName>
                        <StyledText>{comment.comment}</StyledText>
                      </div>
                      <article>
                        <StyledDate>{comment.date}</StyledDate>
                        {comment.isMyComment && (
                          <StyledActions>
                            <p>Edit</p>
                            <p>Delete</p>
                          </StyledActions>
                        )}
                      </article>
                    </StyledContainer>
                  </StyledItem>
                  <Divider style={{ width: "333px", margin: "auto" }} />
                </div>
              ))
            ) : (
              <StyledNoComments>
                Здесь пока пусто. Оставьте свой комментарий!
            </StyledNoComments>
            )}
          </StyledContentWrapper>
          <StyledFixedInput>
            <StyledInput placeholder="Write a comment" />
          </StyledFixedInput>
        </>
      )}
    </StyledCommentsContainer>
  );
};

const StyledCommentsContainer = styled("div")(({ commentsVisible }) => ({
  width: "365px",
  height: commentsVisible ? "520px" : "50px",
  borderRadius: "8px",
  backgroundColor: "#F4F5F7",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: "height 0.3s ease",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px",
  backgroundColor: "#F4F5F7",
  position: "sticky",
  top: "0",
  zIndex: 2,
  "& p": {
    fontSize: "14px",
    color: "#919191",
  },
}));

const StyledContentWrapper = styled("div")(() => ({
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
}));

const StyledItem = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  padding: "16px 12px",
}));

const StyledImage = styled("img")(() => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
}));

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
  "& article": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const StyledName = styled("p")(() => ({
  fontSize: "14px",
  color: "#111111",
}));

const StyledText = styled("p")(() => ({
  fontSize: "14px",
  color: "#919191",
}));

const StyledDate = styled("p")(() => ({
  fontSize: "12px",
  color: "#919191",
}));

const StyledActions = styled("div")(() => ({
  display: "flex",
  gap: "14px",
  "& p": {
    fontSize: "14px",
    color: "#919191",
    cursor: "pointer",
    borderBottom: "1px solid #919191",
    "&:hover": {
      color: "#616161",
      borderBottom: "1px solid #616161",
    },
  },
}));

const StyledNoComments = styled("p")(() => ({
  textAlign: "center",
  marginTop: "20px",
  color: "#919191",
}));

const StyledFixedInput = styled("div")(() => ({
  padding: "8px 12px",
  backgroundColor: "#F4F5F7",
  position: "sticky",
  bottom: 0,
  zIndex: 1,
}));

const StyledInput = styled(Input)(() => ({
  height: "36px",
  paddingTop: "2px",
}));
