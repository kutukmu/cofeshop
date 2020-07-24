import React from "react"
import { Link } from "gatsby"
import Title from "./title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="About Us" />
            <p className="lead text-muted mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum
            </p>
            <Link to="/about">
              <button className="btn text-upppercase btn-yellow">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
