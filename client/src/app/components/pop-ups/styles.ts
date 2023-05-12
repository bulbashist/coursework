import styled from "styled-components";

export const BlurLock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(189, 195, 199, 0.5);
`;

export const AuthWindow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  border-radius: 30px;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 2px 2px 5px grey;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CloseButton = styled.button`
  align-self: end;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid black;
`;
