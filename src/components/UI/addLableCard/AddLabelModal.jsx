import { styled } from "@mui/material";
import { lables } from "../../../utils/constants/lables";
import { Icons } from "../../../assets";
import FileDownloadDone from "@mui/icons-material/DownloadDone";
export const AddLabelModal = ({ onLabelId }) => {
  return (
    <Container>
      <Text>Label</Text>
      <Wrapper>
        {lables.map((item) => (
          <ContainerList>
            <StyledList key={item.id} backgroundColor={item.backgroundColor}>
              <p>{item.text}</p>
              <FileDownloadDone onClick={() => onLabelId(item.id)} />
            </StyledList>
            <Icons.ToEdit />
          </ContainerList>
        ))}
      </Wrapper>
    </Container>
  );
};
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
