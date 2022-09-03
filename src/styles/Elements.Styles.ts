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