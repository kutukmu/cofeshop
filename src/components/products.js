import React, { Component } from "react"
import Title from "./title"

import Product from "./product.js"

export class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: props.items.nodes,
    }
  }

  render() {
    return (
      <div className="product my-5">
        <div className="container">
          <Title title="Our Products" />
          <div className="row">
            {this.state.product.map((n, idx) => {
              return (
                <Product
                  key={idx}
                  title={n.title}
                  img={n.image.fluid}
                  price={n.price}
                  id={n.id}
                  src={n.image.fluid.src}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Products
