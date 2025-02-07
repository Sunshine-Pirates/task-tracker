import { styled } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../assets";
import FileDownloadDone from "@mui/icons-material/DownloadDone";
import { lables } from "../../../utils/constants/lables";

export const AddLabelModal = ({ onLabelId }) => {
  const [labels, setLabels] = useState(lables);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    setLabels((prevLabels) =>
      prevLabels.map((label) =>
        label.id === id ? { ...label, text: editText } : label
      )
    );
    setEditId(null);
  };

  const handleConfirm = (id) => {
    const label = labels.find((item) => item.id === id);
    const newText = editId === id ? editText : label.text;
    handleSave(id);
    onLabelId(id, newText);
  };

  return (
    <Container>
      <Text>Label</Text>
      <Wrapper>
        {labels.map((item) => (
          <ContainerList key={item.id}>
            <StyledList backgroundColor={item.backgroundColor}>
              {editId === item.id ? (
                <StyledNewText
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
              ) : (
                <p>{item.text}</p>
              )}
              <FileDownloadDone onClick={() => handleConfirm(item.id)} />
            </StyledList>
            <Icons.ToEdit onClick={() => handleEdit(item.id, item.text)} />
          </ContainerList>
        ))}
      </Wrapper>
    </Container>
  );
};

const StyledNewText = styled("input")(() => ({
  border: "none",
  color: "#FFFFFF",
  background: "none",
  outline: "none",
  fontSize: "inherit",
  fontFamily: "inherit",
  width: "100%",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const ContainerList = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

const StyledList = styled("div")(({ backgroundColor }) => ({
  width: "297px",
  height: "32px",
  color: "#FFFFFF",
  borderRadius: "6px",
  padding: "6px 16px",
  backgroundColor,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Text = styled("p")(() => ({
  textAlign: "center",
}));
