import ProductList from "./productList.riot";
import { expect } from "chai";
import { component } from "riot";
import initialProducts from "../../../fixtures/productList";

describe("Product List Component Unit Test", () => {
  const mountProductList = component(ProductList);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountProductList(div, {
      products: initialProducts,
    });

    expect(component.$$("product").length).to.be.equal(3);
    expect(component.$$(".product h2")[1].innerHTML).to.be.equal(
      "product name2",
    );
  });
});
