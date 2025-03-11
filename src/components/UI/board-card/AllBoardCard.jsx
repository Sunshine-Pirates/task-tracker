import { styled } from "@mui/material";
import { Icons } from "../../../assets";
import { Checkbox } from "../checkbox/Checkbox";

export const AllBoardCard = ({
  title,
  background,
  isFavorite,
  id,
  onChange,
  onNavigate,
}) => {
  return (
    <Container background={background} id={id} onNavigate={onNavigate}>
      <p>{title}</p>
      <CheckboxBlock>
        <Checkbox
          checked={isFavorite}
          onChange={onChange}
          checkedIcon={<Icons.Star className="white-star" />}
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
  cursor: "pointer",
  background:
    background?.startsWith("http") || background?.includes("/")
      ? `url(${background}) center/cover no-repeat`
      : background,
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
  "& .white-star": {
    "& path": {
      fill: "#ffff",
      stroke: "none",
    },
    stroke: "#ffff",
  },
}));
