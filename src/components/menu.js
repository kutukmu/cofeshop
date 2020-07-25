import React, { Component } from "react"
import Title from "./title"
import Image from "gatsby-image"

const getCategories = items => {
  let temp = items.map(n => {
    return n.category
  })
  const set = new Set(temp)
  return ["All", ...set]
}

export class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items.nodes,
      coffeeItems: props.items.nodes,
      categories: getCategories(props.items.nodes),
    }
  }

  handleItems = () => {
    console.log("button")
  }
  render() {
    console.log(this.state.categories)
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best Menu" />
            <div className="row mb-5">
              <div className="col-11 mx-auto text-center">
                {this.state.categories.map((n, idx) => {
                  return (
                    <button
                      key={idx}
                      className="btn btn-yellow text-capitalize mr-2 mt-2"
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {this.state.coffeeItems.map((n, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Image fixed={n.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0 text-capitalize">{n.tittle}</h6>
                        <h6 className="mb-0 text-yellow">${n.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{n.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best Menu"></Title>
            <div className="row">
              <div className="col-10 col-sm-6 m-auto">
                <h1 lassName="text-center text-uppercase">
                  There is no items{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
