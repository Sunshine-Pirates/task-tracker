import { styled } from "@mui/material";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/input/Input";
import { useForm } from "react-hook-form";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const formValue = watch();

  const handleInputChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <p>Forgot password?</p>
      <StyledTitle>
        A link will be sent to your Email, follow the link sent to the mail
      </StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledContainerMessage>
          <StyledInput
            type="email"
            placeholder="example@gmail.com"
            value={formValue.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            {...register("email", {
              required: "Email обязателен для заполнения",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </StyledContainerMessage>
        <StyledButton type="submit" variant="cancel">
          Send
        </StyledButton>
      </form>
    </Container>
  );
};
const ErrorMessage = styled("span")(() => ({
  color: "red",
  fontSize: "13px",
  paddingLeft: "4px",
}));
const StyledContainerMessage = styled("div")(() => ({
  height: "54px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));
const Container = styled("div")(() => ({
  width: "460px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",

  "& p": {
    fontSize: "20px",
    fontWeight: "500",
    color: "#222222",
  },
  "& form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  alignSelf: "flex-end",
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
  height: "32px",
}));

const StyledTitle = styled("span")(() => ({
  color: "#707070",
  fontSize: "14px",
}));
