import App from "../samples/App";

test("jsx works", () => {
  expect(App).toEqual(["h1", { prop1: "prop value" }, "Hello, World!"]);
});
