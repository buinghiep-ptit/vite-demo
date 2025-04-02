import { Fragment } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Fragment>
        <div id="chatbot-root">
          <div className="chatbot-dialog">
            <iframe
              src={`https://hrai.fpt.net/ai-agent/sdk?tenant_id=${encodeURIComponent(
                "eTBswDOmpSiYC8BE9h8NzLXwL1SKoq4kgjFn1lNTHXuzSeantqwzgYSKOayLPDy0d1jH+0LFOs2MG80bV1diYtzzxZG8Nx1EjvLkau+JntgjRY13VOiPbPUTdESme4rCiN78uDxDQQzMmldilI8XVkkVPHG8Grt1d45AMi3MBXFt44E4686QtcW5bGI11F6jDJlAxLws0+eS1gmDQ3YM5MRbiRk/F56gf3gFPx2DPm8lXFoFpapibD1juLx8SQ9F9WxXOEobeL8murMadeXR91x1ngpMATSOlw86FBT0loB1xYsmA47EpzcOTJV6c55aKxj7fPNeUhH79waw43zykQ==",
              )}`}
              frameBorder="0"
              scrolling="no"
            />
          </div>

          <div className="chatbot-bubble">
            <iframe
              src={`https://hrai.fpt.net/ai-agent/sdk/bubble`}
              style={{
                display: "none",
              }}
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </Fragment>
    </>
  );
}

export default App;
