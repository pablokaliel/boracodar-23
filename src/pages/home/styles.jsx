import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #151515;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 770px) {
    height: 100%;
    overflow: auto;
  }
`;

export const CircleColor = styled.div`
  width: 100%;
  height: 346px;

  div {
    height: 100%;

    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }
`;

export const DivSetting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0px 55px 55px 55px;

  @media (max-width: 770px) {
    padding: 0px 30px 30px 30px;
  }

  h1 {
    margin-top: 105px;
    margin-bottom: 90px;
    font-size: 34px;
    font-weight: bold;
    animation: pulse 2s infinite;

    @media (max-width: 770px) {
      margin-top: 90px;
      margin-bottom: 80px;
      font-size: 30px;
    }
    @keyframes pulse {
      0% {
        transform: scale(0.98);
        opacity: 0.2;
      }

      70% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0.98);
        opacity: 0.2;
      }
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 100%;
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

  height: 5px;
  width: 100%;
  background: #fff;
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
    border-radius: 12px;

    outline: none;
    background: transparent;
    appearance: none;
  }
`;

export const DivBrightness = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;

    border-radius: 12px;
    border: none;
    color: inherit;
    outline: none;

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(5, 5, 5, 1) 50%,
        rgba(107, 107, 107, 1) 69%,
        rgba(255, 255, 255, 1) 97%
      );
    }
  }
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
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }
`;

export const DivContrast = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  input {
    width: 100%;
  }
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

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(5, 5, 5, 1) 50%,
        rgba(107, 107, 107, 1) 69%,
        rgba(255, 255, 255, 1) 97%
      );
    }
  }
`;
