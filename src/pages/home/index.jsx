import React, { useState } from "react";
import { Container, Card, CircleColor, DivSetting, Settings, DivColor, Color, DivBrightness, Brightness, DivContrast, Contrast, DivSignOut,} from "./styles";
import { MdOutlineColorLens, MdOutlineBrightness6, MdOutlineContrast,} from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { LuPaintbrush } from "react-icons/lu";

function Home() {
  const [color, setColor] = useState("#0084ff");
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(180);
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleOpenProfile = () => {
    setLoading(true);
    // simulando 1s para abrir o perfil
    setTimeout(() => {
      setLoading(false);
      setCartVisible(true);
    }, 1000);
  };

  const handleSignOut = () => {
    setLoading(true);
    // simulando 2s para sair e fechar o perfil
    setTimeout(() => {
      setCartVisible(false);
      setLoading(false);
    }, 2000);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleColorChange = (event) => {
    event.target.style.boxShadow = `0 ${getAdjustedColor()}`;
    setColor(event.target.value);
  };

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const handleContrastChange = (event) => {
    setContrast(event.target.value);
  };

  const getAdjustedColor = () => {
    const brightnessFactor = brightness / 100;
    const contrastFactor = contrast / 100;

    const adjustedColor = `rgba(
      ${parseInt(color.slice(1, 3), 16)},
      ${parseInt(color.slice(3, 5), 16)},
      ${parseInt(color.slice(5, 7), 16)},
      ${brightnessFactor * contrastFactor}
    )`;

    return adjustedColor;
  };

  return (
    <Container>

      {cartVisible ? (
        <Card>
          <CircleColor>
            <div
              style={{
                background: getAdjustedColor(),
                boxShadow: `0px 0px 53px 13px ${getAdjustedColor()}`,
              }}
            />
          </CircleColor>

          <DivSetting>
            <h1>Ajuste de Iluminação</h1>

            <Settings>
              <DivColor>
                <MdOutlineColorLens size={25} />
                <Color>
                  <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                  />
                </Color>
              </DivColor>

              <DivBrightness>
                <MdOutlineBrightness6 size={25} />
                <Brightness>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    value={brightness}
                    onChange={handleBrightnessChange}
                  />
                </Brightness>
              </DivBrightness>

              <DivContrast>
                <MdOutlineContrast size={25} />
                <Contrast>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    value={contrast}
                    onChange={handleContrastChange}
                  />
                </Contrast>
              </DivContrast>
            </Settings>
          </DivSetting>
          <DivSignOut>
            <button
              title="btn-function"
              className="sign-out"
              onClick={handleSignOut}
            >
              {isLoading ? (
                <div>
                  <AiOutlineLoading size={20} className="loading-icon" />
                  <span>Saindo...</span>
                </div>
              ) : (
                <>
                  <GoSignOut size={20} style={{ color: "#AA2222" }} />
                  <span>Sair</span>
                </>
              )}
            </button>
          </DivSignOut>
        </Card>
      ) : (
        <div className="cart-open">
          <span>clique para ajustar a iluminaação:</span>
          <button
            title="btn-function"
            className="open"
            onClick={handleOpenProfile}
          >
            {isLoading ? (
              <div className="center">
                <AiOutlineLoading size={20} className="loading-icon" />
              </div>
            ) : (
              <LuPaintbrush size={24} />
            )}
          </button>
        </div>
      )}
    </Container>
  );
}

export default Home;
