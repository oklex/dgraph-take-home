import React from "react"

export default function Home() {
  return (
    <div id="index">
      <div id="index-btns">
        <button type="button" className="button">
          <a href="/home" target="_blank">
            <p className="text-white">Open 'Home' </p>
          </a>
        </button>
        <button type="button" className="button">
          <a href="/why-dgraph" target="_blank">
            <p className="text-white">Open 'why-dgraph'</p>
          </a>
        </button>
      </div>
      <div className="notes-container">
        <div className="notes shadow-md">
          <h3>Working Assumptions:</h3>
          <ul>
            <li>Only concerned about the desktop view</li>
          </ul>
          <h3>Questions for the team/designer:</h3>
          <ul>
            <li>
              Which headings are header 1,2,3 or paragraph? This might affect
              SEO.
            </li>
            <li>The second link is broken - what should it be replaced by?</li>
            <li>
              How should the screens scale for different aspect ratios? Without
              having designs for the mobile or tablet views, it's hard to scale
              the location of the text boxes, of particular concern is the white
              text on the homepage, which will cause problems if overlapping the
              white arrow lines of the image.
            </li>
          </ul>
          <h3>If I had more time:</h3>
          <ul>
            <li>
              Use SCSS instead of just css, for organized and better structured
              stylesheetsOnly concerned about the desktop view
            </li>
            <li>
              Better organized styles to be listed in the order they are
              referenced
            </li>
            <li>
              Created re-useable components for the text-box and button (I
              didn't because I didn't want to waste time on it and the styling
              would need to be done differently using tailwind if it's goal was
              to actually be re-used)
            </li>
            <li>
              read more about gastby and tailwind, with particular emphasis on
              gatsby repo organization
            </li>
            <li>
              try to figure out how much of the styling could be made universal,
              and which need to be page specific, though it would be helpful to
              have more page designs to determine this
            </li>
            <li>
              maybe add some nice transistions or animations to mask loading
            </li>
            <li>update the favicon</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
