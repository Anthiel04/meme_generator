import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setlinea1] = useState("");
  const [linea2, setlinea2] = useState("");
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

  const cambiar1 = (e) => {
    setlinea1(e.target.value);
  };
  const cambiar2 = (e) => {
    setlinea2(e.target.value);
  };

  function cambiarImg(e) {
    setImg(e.target.value)
  }

  const anim = (e) =>{
    const opt = document.getElementsByTagName('option');
    for(let option of opt){
      option.style.animation="scaleOpt 1 ease-out forwards"
    }
  }

  return (
    <div className="App">
      <div className="memeOpt">
        <h2>
          <div className="accent">Meme</div> Generator
        </h2>
        <select onChange={cambiarImg} onClick={anim}>
          <option selected disabled hidden>Select Image</option>
          <option value="fire">Casa en Llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
        <input
          onChange={cambiar1}
          id="Linea1"
          type="text"
          placeholder="Linea 1"
        />
        <input
          onChange={cambiar2}
          id="Linea2"
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