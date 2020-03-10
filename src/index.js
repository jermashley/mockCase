import React from "react";
import ReactDOM from "react-dom";

import Layout from './layouts/Default';
import CopyIcon from './images/CopyIcon';
import ThumbsUpIcon from './images/ThumbsUpIcon';
import spongebob from './images/spongebob.png';

function App() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setResult(
      input.split("").map((c, i) => {
        return i % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
      })
    );
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="mockify-input-group">
          <input
            type="text"
            value={input}
            onChange={ (e) => setInput(e.currentTarget.value) }
            placeholder="Give it some text"
            autoFocus
          />

          <button type="submit" role="button">
            <img src={spongebob} alt="Spongebob mocking."/>
          </button>
        </div>
      </form>

      { result.length ? <MockResults result={result.join("")} /> : null}
    </Layout>
  );
}

function MockResults({ result }) {
  const [buttonText, setButtonText] = React.useState("Copy it")

  const copyText = (text) => {
    try {
      navigator.clipboard.writeText(text)
    } catch (e) {
      console.log(e)
    }

    setButtonText("Copied!")

    setTimeout(() => {
      setButtonText("Copy it")
    }, 1500);
  }

  return (
  <div className="mockify-results">
    <h3>Weird results</h3>

    <p>{ result }</p>

    { result ? (
      <button role="button" onClick={ () => copyText(result) }>
        {buttonText == "Copy it" ? <CopyIcon /> : <ThumbsUpIcon />}
        <span>{ buttonText }</span>
      </button>
    ) : null}
  </div>
)}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
