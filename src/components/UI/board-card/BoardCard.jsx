import { styled } from "@mui/material";
import { Checkbox } from "../checkbox/Checkbox";
import { Icons } from "../../../assets";

export const BoardCard = ({ title, background, isFavorite, id, onChange }) => {
  return (
    <Container background={background} id={id}>
      <p>{title}</p>
      <CheckboxBlock>
        <Checkbox
          checked={isFavorite}
          onChange={onChange}
          checkedIcon={<Icons.Star />}
          uncheckedIcon={<Icons.StarLine />}
        />
      </CheckboxBlock>
    </Container>
  );
};

const Container = styled("div")(({ background }) => ({
  width: "271px",
  height: "122px",
  borderRadius: "8px",
  backgroundColor: background,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  p: {
    padding: "16px",
  },
}));

const CheckboxBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  padding: "5px",
}));
