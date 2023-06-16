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
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 40px;
    width: 300px;
    display: flex;
    background: #18181b;
    border: none;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    /* color: #aa2222; */
    width: 100%;
  }
`;



export const CircleColor = styled.div`
  width: 100%;
  height: 346px;
  div {
    height: 100%;
    width: 100%;

    opacity: 0.65;

    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }
`;

export const DivSetting = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 55px 55px 55px;
  width: 100%;
  justify-content: center;
  h1 {
    margin-top: 105px;
    margin-bottom: 90px;
    width: 100%;
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
  height: 7px;
  width: 100%;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    appearance: none;
    box-shadow: none;
  }
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
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivBrightness = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Brightness = styled.div`
  height: 5px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 5px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    height: 100%;
  }
`;
