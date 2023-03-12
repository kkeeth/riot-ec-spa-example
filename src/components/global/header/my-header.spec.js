import MyHeader from "./my-header.riot";
import { expect } from "chai";
import { component } from "riot";

describe("My Header Unit Test", () => {
  const mountMyHeader = component(MyHeader);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountMyHeader(div, {});

    expect(component.$("h1").innerHTML).to.be.equal("FishCastle");
  });
});
