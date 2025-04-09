import { styled } from "@mui/material";
import { Icons } from "../../../assets";
import { userBoard } from "../../../utils/constants/general";

export const BoardHeader = () => {
  return (
    <MainContainer>
      <div>
        <TextBlock>
          <Icons.EditText />
          <h2>Title</h2>
        </TextBlock>

        <TextBlock>
          <p>Columns:</p>
          <section>24</section>
        </TextBlock>
      </div>

      <Container>
        <Block>
          <ImageBlock>
            {userBoard.slice(0, 8).map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}

            {userBoard.length > 8 && (
              <div className="extra">
                <span>{`+${userBoard.length - 8}`}</span>
              </div>
            )}
          </ImageBlock>
          <Icon>
            <p>Invite</p>
            <Icons.BluePlus />
          </Icon>
        </Block>

        <ContainerCheck>
          <div>
            <Icons.Filter />
            <p>Filter (2)</p>
          </div>

          <div>
            <Icons.Menu2 />
            <p>Menu</p>
          </div>
        </ContainerCheck>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginRight: "23px",
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#919191",

  svg: { color: "#ffff" },

  h2: { fontSize: "20px", fontWeight: "500" },
}));

const ImageBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",

  "& div": {
    position: "relative",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& div:not(:first-child)": { marginLeft: "-10px" },

  img: { width: "100%", height: "100%", objectFit: "cover" },

  "& .extra": {
    backgroundColor: "#86A1B1",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    border: "2.3px solid white",
  },
}));

const Block = styled("div")(() => ({
  display: "flex",
  gap: "8px",
}));

const Icon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0079BF",
  gap: "4px",

  svg: {
    marginTop: "2px",
  },
}));

const Container = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const ContainerCheck = styled("div")(() => ({
  display: "flex",
  gap: "8px",

  div: {
    display: "flex",
    padding: "8px 16px",
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    gap: "9px",
    color: "#438AB4",
    fontWeight: "500",
    borderRadius: "24px",
  },
}));
