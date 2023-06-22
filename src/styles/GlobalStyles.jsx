import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input[type='range'] {
    cursor: pointer;
  }
  
  input[type='range'],
  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.6px solid white;
    background: var(--thumb-background);
    cursor: pointer;
    box-shadow: 0px 3.33333px 6.66667px rgba(31, 41, 55, 0.06), 0px 6.66667px 10px rgba(31, 41, 55, 0.1);
  }

  #input-hue::-webkit-slider-thumb {
    background:#151515;
  }

  #input-hue::-webkit-slider-thumb:hover,
  input[type='range']::-webkit-slider-thumb:hover {
    border: 1px solid white;
  }

  #input-hue::-webkit-slider-thumb:active,
  input[type='range']::-webkit-slider-thumb:active {
    border: 2px solid white;
  }

  html,#root,body {
    width: 100%;
    height: 100%;
    font-family: "Raleway";
    background-color: #242424;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;
