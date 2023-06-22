import React, { useState } from "react";
import { Container, Card, CircleColor, DivSetting, Settings, DivColor, Color, DivBrightness, Brightness, DivContrast, Contrast,} from "./styles";
import {CircleHalf, Sun, Palette} from '@phosphor-icons/react'

function Home() {

  const [hue, setHue] = useState(272);
  const [saturation, setSaturation] = useState(70);
  const [lightness, setLightness] = useState(50);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const backgroundStyle = {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };

  const colorStyle = {
    color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };

  return (
    <Container>
      <Card>
        <CircleColor>
          <div
            className="color-background"
            style={{
              ...backgroundStyle,
              boxShadow: `0px 0px 53px 13px ${backgroundStyle.background}`,
            }}
          />
        </CircleColor>

        <DivSetting>
          <h1
            style={{
              WebkitTextStroke: `.8px ${colorStyle.color}`,
              WebkitTextFillColor: "transparent",
            }}
          >
            Lighting Adjustment
          </h1>

          <Settings>
            <DivColor>
              <Palette size={25}  style={{
              color: `${colorStyle.color}`
            }}/>
              <Color>
                <input
                  type="range"
                  value={hue}
                  max={360}
                  onChange={(e) => handleInputChange(e, setHue)}
                  style={{"--thumb-background": `hsl(${hue}, ${saturation}%, ${lightness}%)`,}}
                />
              </Color>
            </DivColor>

            <DivBrightness>
              <Sun size={25} />
              <Brightness>
                <input
                  type="range"
                  value={saturation}
                  onChange={(e) => handleInputChange(e, setSaturation)}
                />
              </Brightness>
            </DivBrightness>

            <DivContrast>
              <CircleHalf size={25} />
              <Contrast>
                <input
                  type="range"
                  value={lightness}
                  onChange={(e) => handleInputChange(e, setLightness)}
                />
              </Contrast>
            </DivContrast>
          </Settings>
        </DivSetting>
      </Card>
    </Container>
  );
}

export default Home;
