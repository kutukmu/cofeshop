import React from "react"
import Title from "./title"

export default function contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact us" />
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                ></textarea>
                <button type="submit" className="btn btn-yellow mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
