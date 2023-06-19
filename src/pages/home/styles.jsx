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

    &:hover {
      box-shadow: 6px 6px 16px rgb(0 0 0 / 42%);
      background: #0c0c0c;
    }
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

  height: 5px;
  width: 100%;
  background: #fff;
  border-radius: 12px;

  &:hover {
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
  }

  transition: all 0.3s ease-in-out;
  input {
    width: 100%;
    height: 100%;
    border-radius: 12px;

    opacity: 0;
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

  input {
    width: 100%;

    border-radius: 12px;
    border: none;
    color: inherit;
    outline: none;
    -webkit-appearance: none;

    transition: all 0.3s ease-in-out;

    &::-webkit-slider-thumb {
      width: 16px;
      height: 16px;
      cursor: pointer;

      appearance: none;
      background: #151515;
      box-shadow: 0px 3.33333px 6.66667px rgba(31, 41, 55, 0.06),
        0px 6.66667px 10px rgba(31, 41, 55, 0.1);
      border: 1.5px solid #ffffff;
      border-radius: 50%;

      transition: all 0.3s ease-in-out;

      &:hover {
        background: #8b03fb;
        border: 1.5px solid #ffffff;
      }
    }

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(5, 5, 5, 1) 27%,
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

    border-radius: 12px;
    border: none;
    color: inherit;
    -webkit-appearance: none;
    outline: none;
    transition: all 0.3s ease;

    &::-webkit-slider-thumb {
      width: 16px;
      height: 16px;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      background: #151515;
      box-shadow: 0px 3.33333px 6.66667px rgba(31, 41, 55, 0.06),
        0px 6.66667px 10px rgba(31, 41, 55, 0.1);
      border: 1.5px solid #ffffff;
      border-radius: 50%;
      cursor: pointer;

      transition: all 0.3s ease-in-out;

      &:hover {
        background: #8b03fb;
        border: 1.5px solid #ffffff;
      }
    }

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(5, 5, 5, 1) 27%,
        rgba(107, 107, 107, 1) 69%,
        rgba(255, 255, 255, 1) 97%
      );
    }
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
  }
`;
