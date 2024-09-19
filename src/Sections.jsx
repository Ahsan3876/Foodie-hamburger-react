import React from "react";

export default function Sections() {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="img-container">
            <img src="Images/hero image.png" alt="hero image" />
          </div>
          <p className="hero-text">Well, You can’t resist anymore!</p>
        </section>
        <section id="top-picks" className="section">
          <h1>Top picks</h1>
          <div className="img-container">
            <img
              src="Images/peter-dawn-sxZ_Ca6MkWM-unsplash 1.png"
              alt="2nd image"
            />
          </div>
        </section>
        <section id="whopper" className="section">
          <h1>Whopper</h1>
          <div className="img-container">
            <img
              src="Images/enggal-mukti-48F-Uvx9wvw-unsplash 2.png"
              alt="3rd image"
            />
          </div>
        </section>
        <section id="stunner-menu" className="section">
          <h1>Stunner Menu</h1>
          <div className="img-container">
            <img
              src="Images/jonathan-borba-8l8Yl2ruUsg-unsplash 1.png"
              alt="4th image"
            />
          </div>
        </section>
        <section id="New-foodie-collection" className="section">
          <h1>New Foodie Collection</h1>
          <div className="img-container">
            <img
              src="Images/john-fornander-VedLcUfLi74-unsplash 1.png"
              alt="5th image"
            />
          </div>
        </section>
        <section id="deal" className="section">
          <h1>Deal of the day</h1>
          <div className="img-container">
            <img
              src="Images/sk-CK6tjAIMJWM-unsplash (1) 1.png"
              alt="6th image"
            />
          </div>
        </section>
        <h3 className="go-to-top">
          <a href="#">Go to top</a>
        </h3>
        <footer>
          <p className="editor">Made with ❤️ by Rana Ahsan Ali</p>
        </footer>
      </main>
    </>
  );
}
