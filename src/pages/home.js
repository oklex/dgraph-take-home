import React from "react"
import "@fontsource/dm-sans"

export default function Home() {
  return (
    <div id="home">
      <div id="home-hero" className="">
        <div id="home-hero-overlay-container">
          <img
            id="home-hero-overlay"
            alt="globe-connections"
            src="/img/home-mask.svg"
          ></img>
        </div>

        <div className="container container-abs">
          <div className="counter-container">
            <h1 className="text-white">9,984,284,094</h1>
            <p className="text-white">Queries on Dgraph</p>
          </div>
        </div>

        <div className="container container-abs mx-auto">
          <div className="home-text-box">
            <h2 className="intro">Meet Dgraph Cloud</h2>
            <h1 className="title">
              Hosted Dgraph. <br />
              Managed by us. <br />
              Deployed in your cloud.
            </h1>
            <h3 className="subtitle">
              Dedicated, multi-zone clusters on AWS, Azure, or GCP with
              fault-tolerance.
            </h3>
            <button
              type="button"
              className='button'
            >
              <a href='http://dgraph.io/slash-enterprise'><p className='text-white font-bold'>Learn More<img className='arrow-icon' src='/img/arrow.svg'></img></p></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
