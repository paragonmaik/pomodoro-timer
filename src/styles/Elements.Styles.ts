import styled from 'styled-components';

export const ModeButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  width: 30%;
  background-color: rgb(15, 191, 152);
  font-size: 1em;
  color: white;
  &:focus-visible, &:focus {
    background-color: rgb(10, 128, 100);
  }
`

export const StartButton = styled.button`
  font-size: 1.3em;
  border: none;
  box-shadow: lightgray 0px 6px 0px;
  border-radius: 5px;
  background-color: white;
  font-weight: 400;
  height: 50px;
  color: rgb(10, 128, 100);
  width: 80%;
  cursor: pointer;
  &:active {
    transform: translateY(6px);
    box-shadow: none;
    transition: color 0.9s ease-in-out 0s;
  }
`

export const NavButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 30%;
  height: 30px;
  background-color: rgb(15, 191, 152);
  font-size: 1em;
  color: white;
`

export const ImgLogo = styled.img`
  border-radius: 100%;
  width: 60px;
`

export const TodoInput = styled.input`
  font-size: 1.1em;
  margin: 3px 0;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-weight: 400;
  height: 40px;
  color: rgb(10, 128, 100);
`

export const AddButton = styled.button`
  cursor: pointer;
  position: absolute;
  margin: 15px -30px;
  border: none;
  border-radius: 50%;
  background-color: white;
  font-size: 1.3em;
  font-weight: 600;
  color: rgb(10, 128, 100);
`

export const TaskButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: white;
  font-size: 1.3em;
  font-weight: 600;
  color: rgb(10, 128, 100);
`

export const SettingInput = styled.input`
  font-size: 1.1em;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
  background-color: white;
  font-weight: 400;
  height: 20px;
  color: rgb(10, 128, 100);
  max-width: 100%;
`

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 20px;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const Checkbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: rgb(15, 191, 152);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;