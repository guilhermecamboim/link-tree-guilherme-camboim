import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  background: white;
  padding: 24px;
  width: 300px;
  border-radius: 16px;
  text-align: center;
  color: black;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

export const ShareBox = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 16px;
  align-items: center;

  input {
    flex: 1;
    padding: 6px;
    text-align: center;
  }

  button {
    padding: 6px 10px;
    cursor: pointer;
  }
`;

export const CloseSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;

`

export const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    size: 1.1;
    transition: 200ms;
  }

`

export const CopyIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    size: 1.1;
    transition: 200ms;
  }

`