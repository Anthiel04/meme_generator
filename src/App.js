import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [text, setText] = useState({
    linea1: '',
    linea2: ''
  })
  const [img, setImg] = useState("")

  const downloadImg = e => {
    html2canvas(document.querySelector(".meme")).then(function (canvas) {
      let img = canvas.toDataURL("image/png")
      let link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img;
      link.click()
    })
  }

  const handleInputChange = ({ target }) => {
    setText({ ...text, [target.name]: target.value });
  };

  function cambiarImg(e) {
    setImg(e.target.value)
  }

  const { linea1, linea2 } = text

  
  return (
    <div className="App">
      <div className="memeOpt">
        <h2>
          <div className="accent">Meme</div> Generator
        </h2>
        <select onChange={cambiarImg}>
          <option selected disabled hidden>Select Image</option>
          <option value="fire">Casa en Llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
        <input
          onChange={handleInputChange}
          id="Linea1"
          name="linea1"
          type="text"
          placeholder="Linea 1"
        />
        <input
          onChange={handleInputChange}
          id="Linea2"
          name="linea2"
          type="text"
          placeholder="Linea 2"
        />
      </div>
      <section>
        <div className="meme">
          <span>{linea1}</span>
          <img src={"assets/" + img + ".jpg"} alt="meme" />
          <span>{linea2}</span>
        </div>
        <button id="download" onClick={downloadImg}>Download</button>
      </section>
    </div>
  );
}

export default App;