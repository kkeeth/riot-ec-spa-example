import ProductList from "./product-list.riot";
import { expect } from "chai";
import { component } from "riot";

describe("Product List Component Unit Test", () => {
  const mountProductList = component(ProductList);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountProductList(div, {
      product: {
        id: 12345,
        name: "hogehoge",
        price: 999,
        description: "hogehoge",
        image: {
          src: "https://placeimg.com/640/480/animals",
          alt: "animals",
        },
      },
    });

    expect(component.$("h2").innerHTML).to.be.equal("hogehoge");
  });
});
