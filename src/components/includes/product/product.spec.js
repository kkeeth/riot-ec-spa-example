import Product from "./product.riot";
import { expect } from "chai";
import { component } from "riot";

describe("Product Component Unit Test", () => {
  const mountProduct = component(Product);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountProduct(div, {
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
