import { styled } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { comments } from "../../../utils/constants/comments";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Input } from "../input/Input";

export const Comments = () => {
  const [сommentsVisible, setCommentsVisible] = useState(true);

  const toggleCommentsVisibility = () => {
    setCommentsVisible((prev) => !prev);
  };

  return (
    <StyledCommentsContainer>
      <StyledSection>
        <p>Comments</p>
        <div onClick={toggleCommentsVisibility} style={{ cursor: "pointer" }}>
          {сommentsVisible ? (
            <KeyboardDoubleArrowUpIcon />
          ) : (
            <KeyboardDoubleArrowDownIcon />
          )}
        </div>
      </StyledSection>
      <StyledContentWrapper>
        {сommentsVisible && (
          <StyledCommentsContent>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <StyledItem>
                    <StyledImage src={comment.img} alt={comment.name} />
                    <StyledContainer>
                      <div>
                        <StyledName>{comment.name}</StyledName>
                        <StyledComments>{comment.comment}</StyledComments>
                      </div>
                      <article>
                        <StyledDate>{comment.date}</StyledDate>
                        {comment.isMyComment ? (
                          <StyledActions>
                            <p>Edit</p>
                            <p>Delete</p>
                          </StyledActions>
                        ) : null}
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
          </StyledCommentsContent>
        )}
      </StyledContentWrapper>
      <StyledFixedInput>
        <StyledInput placeholder="Write a comment" />
      </StyledFixedInput>
    </StyledCommentsContainer>
  );
};

const StyledInput = styled(Input)(() => ({
  height: "36px",
  paddingTop: "2px",
}));
const StyledCommentsContainer = styled("div")(() => ({
  width: "365px",
  height: "520px",
  borderRadius: "8px",
  backgroundColor: "#F4F5F7",
  display: "flex",
  flexDirection: "column",
}));

const StyledContentWrapper = styled("div")(() => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
}));

const StyledCommentsContent = styled("div")(() => ({
  flex: "1",
  overflowY: "auto",
}));
const StyledSection = styled("section")(() => ({
  position: "sticky",
  top: "0",
  backgroundColor: "#F4F5F7",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px",
  "& p": {
    color: "#919191",
    fontSize: "14px",
  },
}));
const StyledComments = styled("p")(() => ({
  fontSize: "14px",
  color: "#919191",
}));

const StyledFixedInput = styled("div")(() => ({
  position: "sticky",
  backgroundColor: "#F4F5F7",
  padding: "8px 12px",
  zIndex: 1,
}));

const StyledImage = styled("img")(() => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
}));

const StyledItem = styled("div")(() => ({
  width: "340px",
  display: "flex",
  gap: "8px",
  paddingLeft: "12px",
  paddingTop: "16px",
  paddingBottom: "16px",
}));

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  "& article": {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const StyledActions = styled("main")(() => ({
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

const StyledName = styled("p")(() => ({
  fontSize: "14px",
  color: "#111111",
}));

const StyledDate = styled("p")(() => ({
  fontSize: "12px",
  color: "#919191",
}));
const StyledNoComments = styled("p")(() => ({
  textAlign: "center",
  marginTop: "20px",
  color: "#919191",
}));
