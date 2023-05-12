import { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import PopUpWindow from "../pop-ups/register-pop-up";
import { PopUpType } from "../pop-ups/types";
import {
  AuthBlock,
  AuthBtn,
  BackBtn,
  BaseHeader,
  NavBlock,
  NavList,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { unauthorize } from "../../services/auth";
import RegPopUp from "../pop-ups/register-pop-up";
import AuthPopUp from "../pop-ups/authenticate-pop-up";
import { resetOrders } from "../../pages/orders/store-slice";

const Header = () => {
  const { login } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [popup, setpopup] = useState({
    state: false,
  });

  const [popup2, setpopup2] = useState(<></>);

  const pressHandler = (title: string, type: PopUpType) => {
    setpopup({
      state: true,
    });
  };

  return (
    <BaseHeader>
      <BackBtn onClick={() => navigate(-1)}>👈</BackBtn>
      <NavBlock>
        <NavList>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/orders">Заказы</Link>
          </li>
        </NavList>
      </NavBlock>
      <AuthBlock>
        {!login ? (
          <>
            <AuthBtn
              onClick={() => setpopup2(<RegPopUp stateChanger={setpopup2} />)}
            >
              Sign in
            </AuthBtn>
            <AuthBtn
              onClick={() => setpopup2(<AuthPopUp stateChanger={setpopup2} />)}
            >
              Log in
            </AuthBtn>
          </>
        ) : (
          <>
            <p>{login}</p>
            <AuthBtn
              onClick={() => {
                dispatch(unauthorize());
                dispatch(resetOrders());
              }}
            >
              Выход
            </AuthBtn>
          </>
        )}
      </AuthBlock>
      {popup2}
    </BaseHeader>
  );
};

export default Header;
