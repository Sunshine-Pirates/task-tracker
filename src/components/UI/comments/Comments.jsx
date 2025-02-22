import { styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Input } from "../input/Input";
import { Icons } from "../../../assets";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { DeleteComments } from "./DeleteComments";
import { comments as initialComments } from "../../../utils/constants/comments";
import { UpdateModal } from "./UpdateModal";

export const Comments = ({ commentsVisible, toggleCommentsVisibility }) => {
  const [comments, setComments] = useState(initialComments);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);
  const [updateOpenModal, setUpdateOpenModal] = useState(false);

  const handleUpdateOpenModal = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setSelectedComment(commentToEdit);
      setUpdateOpenModal(true);
    }
  };

  const handleOpenDeleteModal = (id) => {
    setSelectedCommentId(id);
    setOpenDeleteModal(true);
  };

  const handleDelete = (id) => {
    const del = comments.filter((comment) => comment.id !== id);
    setComments(del);
    setOpenDeleteModal(false);
  };

  return (
    <StyledCommentsContainer commentsVisible={commentsVisible}>
      <StyledSection>
        <p>Comments</p>
        <div onClick={toggleCommentsVisibility} style={{ cursor: "pointer" }}>
          {commentsVisible ? (
            <Icons.KeyboardDoubleArrowDownIcon />
          ) : (
            <Icons.KeyboardDoubleArrowUpIcon />
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
                            <p
                              onClick={() => handleUpdateOpenModal(comment.id)}
                            >
                              Edit
                            </p>

                            <p
                              onClick={() => handleOpenDeleteModal(comment.id)}
                            >
                              Delete
                            </p>
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

          <Modal
            isOpen={isOpenDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
          >
            <DeleteComments
              handleDelete={handleDelete}
              id={selectedCommentId}
            />
          </Modal>
          <Modal
            isOpen={updateOpenModal}
            onClose={() => setUpdateOpenModal(false)}
            icon
          >
            <UpdateModal
              comment={selectedComment}
              comments={comments}
              setComments={setComments}
              onClose={() => setUpdateOpenModal(false)}
            />
          </Modal>
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
