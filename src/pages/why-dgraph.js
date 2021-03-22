import React from "react"

export default function WhyDgraph() {
  return (
    <div id="why">
      <div id="why-hero" className="">
        <div id="why-hero-overlay-container">
          <img
            id="why-hero-overlay"
            alt="globe-connections"
            src="/img/lightning.svg"
          ></img>
        </div>

        <div className="container container-abs mx-auto">
          <div className="why-text-box">
            <h1 className="title">
              The World's Most Advanced <br /> GraphQL Database with a <br />
              Graph Backend.
            </h1>
            <h3 className="subtitle">
              Dgraph gives you the scalability and performance you need with the
              flexibility and responsiveness you want.
            </h3>
            <button type="button" className="button">
              <a href="https://dgraph.io/compare-products">
                <p className="text-white font-bold">
                  Learn More
                  <img className="arrow-icon" src="/img/arrow.svg"></img>
                </p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
