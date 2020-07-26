import React from "react"
import Image from "gatsby-image"
export default function Product({ title, img, price, id, src }) {
  return (
    <div className="product col-10 col-sm-8 col-md-6 col-lg-3 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Image fluid={img} className="card-image-top"></Image>
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>

          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-price={price}
            data-item-name={title}
            data-item-id={id}
            data-item-image={src}
            data-item-url="https://coffeeshop-demo.netlify.app/"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  )
}
