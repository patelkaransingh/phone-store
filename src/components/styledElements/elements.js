import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    transition: all 0.5s ease;
    &:hover {
      border-bottom: 1.2px solid var(--mainWhite);
    }
  }
`;

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.4s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.4s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    font-size: 1.3rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    border: none;
    transform: translate(100%, 100%);
    transition: all 0.4s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
  }
`;

export const ModalConatiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    border-radius: 0.4rem;
  }
  #ticked {
    color: var(--mainGreen);
  }
  #priced-at {
    font-size: 1rem;
    color: var(--mainBlue);
  }
  #model-btn{
    font-size 1rem;
  }
`;

export const CartTitle = styled.div`
  font-size: 1.4rem;
`;

export const EmptyCartComp = styled.div`
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.2rem;
  #empty-cart {
    font-size: 8rem;
    color: var(--mutedBlack);
  }
`;

export const NotFound = styled.div`
  background: var(--mainWhite);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  #fof {
    font-size: 3rem;
  }
`;
