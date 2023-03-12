import MyFooter from "./my-footer.riot";
import { expect } from "chai";
import { component } from "riot";

describe("My Footer Unit Test", () => {
  const mountMyFooter = component(MyFooter);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountMyFooter(div, {});

    expect(component.$("p").innerHTML).to.include("Riot.js app");
  });
});
