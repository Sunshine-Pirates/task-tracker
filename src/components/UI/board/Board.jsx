import { styled } from "@mui/material";
import { Input } from "../input/Input";
import Foto1 from "../../../assets/images/Rectangle 54.png";
import Foto2 from "../../../assets/images/Rectangle 55.png";
import Foto3 from "../../../assets/images/Rectangle 56.png";

export const Board = () => {
  const colors = [
    {
      bg: "red",
    },
    {
      bg: "green",
    },
    {
      bg: "yellow",
    },
    {
      bg: "blue",
    },
    {
      bg: "purple",
    },
    {
      bg: "grey",
    },
  ];

  return (
    <MainContainer>
      <h6>Create new board</h6>
      <BgStyle>
        <Input placeholder="Board title*" />
        <p>Add background</p>
        <Block>
          <TextBlock>
            <p>Photo</p>
            <a href="#">See more</a>
          </TextBlock>
          <ImageBlock>
            <img src={Foto1} alt="" />
            <img src={Foto2} alt="" />
            <img src={Foto3} alt="" />
          </ImageBlock>
        </Block>

        <Block>
          <TextBlock>
            <p>Colors</p>
            <a href="#">See more</a>
          </TextBlock>
          <ColorsBlock>
            {colors.map((item) => (
              <StyleColor bg={item.bg}></StyleColor>
            ))}
          </ColorsBlock>
        </Block>
      </BgStyle>
    </MainContainer>
  );
};

const MainContainer = styled("div")(() => ({
  width: "477px",
  height: "363px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "16px 20px",

  h6: {
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },
}));

const BgStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  color: "#919191",
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",

  a: {
    color: "#919191",
  },
}));

const ImageBlock = styled("div")(() => ({
  display: "flex",
  gap: "16px",

  img: {
    borderRadius: "9px",
  },
}));

const Block = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const ColorsBlock = styled("div")(() => ({
  display: "flex",
  gap: "16px",

  div: {
    width: "59px",
    height: "31px",
    borderRadius: "8px",
  },
}));

const StyleColor = styled("div")(({ bg }) => ({
  backgroundColor: bg,
}));
