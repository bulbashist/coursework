import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import {
  AuthWindow,
  BlurLock,
  CloseButton,
  Form,
  Input,
  InputWrapper,
} from "./styles";
import bcrypt from "bcryptjs";
import axios from "axios";
import { authorize } from "../../services/auth";

type WindowProps = {
  stateChanger: React.Dispatch<SetStateAction<JSX.Element>>;
};

type FormProps = {
  login: string;
  password: string;
};

const AuthPopUp = ({ stateChanger }: WindowProps) => {
  const { handleSubmit, register } = useForm<FormProps>();
  const dispatch = useAppDispatch();

  const closeBtnHandler = () => {
    stateChanger(<></>);
  };

  const submitFormHandler = async ({ login, password }: FormProps) => {
    const hash = await bcrypt.hash(password, "$2a$10$jbODcXj6GS/Bc5rtxKmqne");

    const res = await axios.post("http://localhost:5000/auth/signin", {
      login,
      password: hash,
    });

    const { id, accessToken } = res.data;
    dispatch(authorize({ id, accessToken, login }));
    closeBtnHandler();
  };

  return (
    <BlurLock>
      <AuthWindow>
        <CloseButton onClick={closeBtnHandler}>X</CloseButton>
        <Form onSubmit={handleSubmit(submitFormHandler)}>
          <h3>Авторизация</h3>
          <InputWrapper>
            <span>Логин:</span>
            <Input {...register("login")} />
          </InputWrapper>
          <InputWrapper>
            <span>Пароль:</span>
            <Input type="password" {...register("password")} />
          </InputWrapper>
          <button type="submit">Войти в аккаунт</button>
        </Form>
      </AuthWindow>
    </BlurLock>
  );
};

export default AuthPopUp;
