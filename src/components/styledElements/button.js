import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: var(--mainWhite);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonBack = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: 1.5px solid var(--mainBlue);
  border-radius: 5px;
  color: var(--mainBlue);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainBlue);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonBlue = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: 1.5px solid var(--mainBlue);
  border-radius: 5px;
  color: var(--mainBlue);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainBlue);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonRed = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: 1.5px solid var(--mainRed);
  border-radius: 5px;
  color: var(--mainRed);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainRed);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

export const ProductDetailCartButton = styled.button`
  margin-left: 10px;
  font-size: 1.2rem;
  background: transparent;
  border: 1.5px solid var(--mainBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainBlue)" : "var(--mainYellow)"};
  color: ${(props) => (props.cart ? "var(--mainBlue)" : "var(--mainYellow)")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainBlue)" : "var(--mainYellow)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
