import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="container">
        {/* ############### navbar #############  */}
        <div className="nav">
          <div className="left">
            <img
              src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Flogo-white.png&w=256&q=75"
              alt=""
              className="logo"
            />
          </div>
          <div className="right">
            <ul>
              <li>HOME</li>
              <li>PORTFOLIO</li>
              <li>BLOG</li>
              <li>PAGES</li>
            </ul>
          </div>
        </div>
        {/* ############### hero #############  */}
        <div className="hero">
          <div className="left">
            <h1>
              Bigger, <br />
              Bolder and <br /> Better
            </h1>
            <div className="image">
              <div className="circle-image">
                <img
                  className="circle"
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Fhome-dark%2Fcircle-text.png&w=1200&q=75"
                  alt=""
                />
                <img
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Fhome-dark%2Fcircle-logo.png&w=1200&q=75"
                  alt=""
                />
              </div>
            </div>
            <p>
              We’re from Poland, we passioned with the space & <br /> create the
              values vsustainable over time.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 17 17"
              style={{ height: "90px" }}
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
            </svg>
          </div>
          <div className="right">
            <div className="image">
              <div className="circle-image">
                <img
                  className="circle"
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Fhome-dark%2Fcircle-text.png&w=1200&q=75"
                  alt=""
                />
                <img
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Fhome-dark%2Fcircle-logo.png&w=1200&q=75"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* ############### section 3rd #############  */}
        <div className="section-3rd">
          <div className="row">
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>1</h2>
              <p>
                OUR
                <br />
                SERVICES
              </p>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <ul>
                <li>Branding</li>
                <li>UI/UX</li>
                <li>Photography</li>
                <li>Animation</li>
              </ul>
              <ul>
                <li>Illustration</li>
                <li>SEO/Marketing</li>
              </ul>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>2</h2>
              <p>
                LATEST <br />
                PROJECTS
              </p>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ul>
                <li style={{ display: "flex", alignItems: "center" }}>
                  All Projects{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 17 17"
                    style={{ height: "1em" }}
                  >
                    <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
                  </svg>
                </li>
              </ul>
              <ul></ul>
              <ul></ul>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image-container">
                <img
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2Fwork-5.png&w=1200&q=75"
                  alt=""
                  className="card-image"
                />
              </div>
              <p>UI/UI</p>
              <a href="#">Liarch Architecture Firm</a>
            </div>
            <div className="card">
              <div className="image-container">
                <img
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2Fwork-1.png&w=1200&q=75"
                  alt=""
                  className="card-image"
                />
              </div>
              <p>UI/UI</p>
              <a href="#">Taskly Dashboard</a>
            </div>
            <div className="card">
              <div className="image-container">
                <img
                  src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2Fwork-2.png&w=1200&q=75"
                  alt=""
                  className="card-image"
                />
              </div>
              <p>Product</p>
              <a href="#">Film & Art Festival</a>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>3</h2>
              <p>
                TRUSTED
                <br />
                PARTNERS
              </p>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <ul>
                <li>Apple</li>
                <li>Spotify</li>
                <li>IBM</li>
                <li>Google</li>
                <li>Dropbox</li>
              </ul>
              <ul>
                <li>Envato</li>
                <li>Woocommerce</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>4</h2>
              <p>
                WHAT
                <br />
                CLIENTS SAY
              </p>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ul className="clients-says-options">
                <li className="clients-says" style={{ fontSize: "40px" }}>
                  “moonex- a studio with passionate,
                  <br /> professional & full creativity. Much more
                  <br /> than what i’m expect. Really awesome &<br /> satisfied!
                </li>
                <p>Diogo Jota</p>
                <small>Lead Product at Google Inc</small>
              </ul>
            </div>
          </div>
        </div>
        {/* ############### paralax section #############  */}
        <div className="paralax">
          <div>
            <h2>Describe your project</h2>
            <h1>Call Moonex</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 17 17"
              style={{ height: "90px" }}
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
            </svg>
          </div>
        </div>
        {/* ############### footer #############  */}
        <div className="footer">
          <div className="footer-item">
            <div className="item_1">
              <img
                src="https://moonex-nextapp.vercel.app/_next/image?url=%2Fassets%2Fimg%2Froot%2Flogo-white.png&w=256&q=75"
                alt=""
              />
            </div>
            <div className="item_2">
              <div className="item_2_firstPart">
                <a href="#">FAQS</a>
                <a href="#">TERM & CONDITIONS</a>
                <a href="#">PRIVACY POLICY</a>
                <a href="#">HELP</a>
              </div>
              <div className="item_2_secondPart">
                <a href="#">WORKS</a>
                <a href="#">STUDIO</a>
                <a href="#">NEWS</a>
              </div>
            </div>
            <div className="item_3">
              <h3>hello@moonex.co</h3>
              <p>90 Fairground Rd, FL 3290, United States</p>
            </div>
          </div>
          <div className="footer-bottom">
            <h3>©2024 ib-themes. All Rights Reserved.</h3>
            <ul>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i class="fa-brands fa-pinterest"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Script id="cursor-script">
        {`let cursorDot = document.querySelector("[data-cursor-dot]");
let cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
   const posX = e.clientX;
   const posY = e.clientY;

   cursorDot.style.left = posX + "px";
   cursorDot.style.top = posY + "px";
    
   cursorOutline.style.left = posX + "px";
   cursorOutline.style.top = posY + "px";

   
cursorOutline.animate({
  left: posX + "px",
  top: posY + "px",
}, {duration: 650, fill: "forwards"})
})
`}
      </Script>
    </>
  );
}
