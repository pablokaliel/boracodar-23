import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .cart-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  .open {
    width: 60px;
    height: 60px;

    border-radius: 100%;
    border: none;
    background-color: #151515;
    color: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

    transition: all 0.3s;
  }

  .loading-icon {
    margin-right: 5px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Card = styled.div`
  background: #151515;
  overflow: hidden;
  border-radius: 12px;
`;

export const DivSignOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;

    color: #fff;
    background: #18181b;
    border: none;
    gap: 8px;
  }
`;

export const CircleColor = styled.div`
  width: 100%;
  height: 346px;

  div {
    height: 100%;
    width: 100%;


    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }
`;

export const DivSetting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 100%;
  padding: 0px 55px 55px 55px;

  h1 {
    width: 100%;
    margin-top: 105px;
    margin-bottom: 90px;

    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

export const DivColor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 7px;
  width: 100%;
  
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    #ff0000 5.21%,
    #ff8a00 16.48%,
    #ffe600 27.74%,
    #14ff00 39.35%,
    #00a3ff 49.37%,
    #0500ff 61.18%,
    #ad00ff 72.26%,
    #ff00c7 83.53%,
    #ff0000 94.61%
  );

  input {
    width: 100%;
    height: 100%;

    border: none;
    outline: none;
    background: transparent;
    appearance: none;
    box-shadow: none;
  }
`;

export const DivBrightness = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Brightness = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5px;
  width: 100%;

  background-color: #fff;
  border-radius: 12px;

  input {
    width: 100%;
    height: 100%;
  }
`;

export const DivContrast = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Contrast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5px;
  width: 100%;

  background-color: #fff;
  border-radius: 12px;

  input {
    width: 100%;
    height: 100%;
  }
`;
