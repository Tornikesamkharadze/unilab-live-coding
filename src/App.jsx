import { useRef, useState } from "react";
import { styled } from "styled-components";

function App() {
  const color = ["red", "black", "blue", "yellow", "green"];
  const [randomColor, setRandomColor] = useState(color[0]);
  const [prevColor, setPrevColor] = useState([]);

  const handleRandomColor = (e) => {
    const random = color[Math.floor(Math.random() * color.length)];
    setRandomColor(random);
    if (random === randomColor) handleRandomColor();
    setPrevColor([...prevColor, random]);
    console.log(randomColor);
  };

  const randomPosition = useRef(null);

  const handlePrevColor = () => {
    console.log(prevColor);
    if (prevColor.length > 0) {
      setPrevColor(prevColor.slice(0, prevColor.length - 1));
      const lastColor = prevColor[prevColor.length - 1];
      setRandomColor(lastColor);
    }
  };
  console.log(randomPosition?.current?.getBoundingClientRect());
  return (
    <>
      <Wrapper>
        <button onClick={handleRandomColor}>redo</button>
        <button onClick={handlePrevColor}>undo</button>
        <div
          ref={randomPosition}
          className="circle"
          style={{ background: `${randomColor}` }}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;
export default App;
