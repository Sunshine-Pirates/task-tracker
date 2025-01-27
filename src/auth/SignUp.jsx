import { Avatar, styled } from "@mui/material";
import { Icons } from "../assets";
import { Input } from "../components/UI/input/Input";
import { Checkbox } from "../components/UI/checkbox/Checkbox";
import { Button } from "../components/UI/Button";
import ImageSignUp from "../assets/images/SigIn.png";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
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
      <StyledContainerLogo>
        <Icons.LogoTaskTracker />
        <p>Task Tracker</p>
      </StyledContainerLogo>
      <ContainerBox>
        <StyledWrapperForm>
          <StyledText>Sign Up</StyledText>
          <StyledContainerr>
            <StyledGoogle>
              <div>
                <StyledAvatar>
                  <p>T</p>
                </StyledAvatar>
                <article>
                  <p style={{ color: "#919191" }}>Sign Up as Nazira</p>
                  <span>example@gmail.com</span>
                </article>
              </div>
              <Icons.Google />
            </StyledGoogle>
            <p style={{ color: "#919191", textAlign: "center" }}>or</p>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledContainerMessage>
                <StyledInput
                  placeholder="Name"
                  value={formValue.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  {...register("name", {
                    required: "Имя обязательно для заполнения",
                    minLength: {
                      value: 2,
                      message: "Имя должно быть не менее 2 символов",
                    },
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledContainerMessage>
                <StyledInput
                  placeholder="Surname"
                  value={formValue.surname}
                  onChange={(e) => handleInputChange("surname", e.target.value)}
                  {...register("surname", {
                    required: "Фамилия обязательна для заполнения",
                    minLength: {
                      value: 2,
                      message: "Фамилия должна быть не менее 2 символов",
                    },
                  })}
                />
                {errors.surname && (
                  <ErrorMessage>{errors.surname.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
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
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledContainerMessage>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  {...register("password", {
                    required: "Пароль обязателен для заполнения",
                    minLength: {
                      value: 6,
                      message: "Пароль должен содержать минимум 6 символов",
                    },
                  })}
                />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledContainerMessage>
                <StyledInput
                  type="password"
                  placeholder="Repeat password"
                  value={formValue.repeatPassword}
                  onChange={(e) =>
                    handleInputChange("repeatPassword", e.target.value)
                  }
                  {...register("repeatPassword", {
                    required: "Подтверждение пароля обязательно",
                    validate: (value) =>
                      value === formValue.password || "Пароли не совпадают",
                  })}
                />
                {errors.repeatPassword && (
                  <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledContainerSignUp>
                <StyledWrapper>
                  <Checkbox
                    checkedIcon={<Icons.Checkbox />}
                    uncheckedIcon={<Icons.CheckboxLine />}
                  />
                  <div>
                    <p>Creating an account means you’re okay with our </p>
                    <a href="#">Terms of Service,</a>
                    <a href="#">Privacy Policy.</a>
                  </div>
                </StyledWrapper>
                <StyledButton variant="cancel" type="submit">
                  Sign Up{" "}
                </StyledButton>
                <span>
                  You already have an account?
                  <StyledNavigate href="#">Log In</StyledNavigate>
                </span>
              </StyledContainerSignUp>
            </StyledForm>
          </StyledContainerr>
        </StyledWrapperForm>
        <StyledImage src={ImageSignUp} alt="ImageSignUp" />
      </ContainerBox>
    </Container>
  );
};
const StyledContainerMessage = styled("div")(() => ({
  height: "54px",
  display: "flex",
  flexDirection: "column",
}));

const ErrorMessage = styled("span")(() => ({
  color: "red",
  fontSize: "13px",
  paddingLeft: "3px",
}));
const Container = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));
const ContainerBox = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "161px",
}));
const StyledWrapperForm = styled("div")(() => ({
  width: "321px",
  height: "529px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
const StyledImage = styled("img")(() => ({
  width: "579px",
  height: "auto",
  objectFit: "cover",
}));
const StyledContainerSignUp = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
}));
const StyledNavigate = styled("a")(() => ({
  color: "#0079BF",
}));
const StyledGoogle = styled("div")(() => ({
  width: "321px",
  height: "58px",
  backgroundColor: "#F0F0F0",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 16px",
  "& div": {
    display: "flex",
    gap: "12px",
    "& span": {
      color: "#B2B2B2",
      fontSize: "14px",
    },
  },
}));
const StyledContainerLogo = styled("section")(() => ({
  display: "flex",
  gap: "8px",
  paddingLeft: "40px",
  paddingTop: "20px",

  "& p": {
    color: "#0079BF",
    fontWeight: "600",
    fontSize: "20px",
  },
}));
const StyledAvatar = styled(Avatar)(() => ({
  width: "35px",
  height: "35px",
  color: "#fffff",
  backgroundColor: "#0079BF",
}));
const StyledText = styled("p")(() => ({
  color: "#000000",
  fontSize: "18px",
  fontWeight: "500",
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
}));
const StyledInput = styled(Input)(() => ({
  width: "321px",
  height: "32px",
}));
const StyledWrapper = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& p": {
    color: "#393939",
    fontSize: "12px",
  },
  "& a": {
    color: "#0079BF",
    fontSize: "12px",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
}));
const StyledContainerr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
