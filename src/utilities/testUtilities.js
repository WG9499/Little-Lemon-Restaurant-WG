import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../App.js";

const customRender = (ui, { ...renderOptions } = {}) =>
  render(
    <BrowserRouter basename="/">
      <App>{ui}</App>
    </BrowserRouter>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };
