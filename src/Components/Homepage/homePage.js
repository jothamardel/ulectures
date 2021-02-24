import React from "react";
// import "./homePage.scss";
import "./home-page.style.scss";
import Pix from "../../Assets/full.jpg";
import Logo from "../../Assets/logo.png";

function Home() {
  return (
    <div className="Home">

      <img src={Pix} alt="full-pix" className="student" />
      <img
        className="background"
        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1002.09 436.99L1011.27 436.99L1011.27 447.44L1002.09 447.44z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M433.59 306.22 a47.47 47.47 0 1 0 94.94 0 a47.47 47.47 0 1 0 -94.94 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M831.15 53.61a54.38 54.38 0 1 0-55.15 93.73z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M240.4 170.34L292.68 170.34L292.68 222.62L240.4 222.62z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1409.66 264.58a21.23 21.23 0 1 0 15.4-39.57z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M756.9 512.9 a19.53 19.53 0 1 0 39.06 0 a19.53 19.53 0 1 0 -39.06 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M637.13 259.97L682.71 259.97L682.71 305.55L637.13 305.55z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M522.81 306.84L522.97 306.84L522.97 346.9L522.81 346.9z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M461.86 270.85 a16.55 16.55 0 1 0 33.1 0 a16.55 16.55 0 1 0 -33.1 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1326.02 279.64L1377.15 279.64L1377.15 330.77L1326.02 330.77z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M328.14 192.23a20 20 0 1 0 39.18 8.04z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M36.05 161.18L83.03 161.18L83.03 167.96L36.05 167.96z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M764.96 293.94 a28.22 28.22 0 1 0 56.44 0 a28.22 28.22 0 1 0 -56.44 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1243.98 489.44L1269.31 489.44L1269.31 504.97L1243.98 504.97z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1201.11 340.94a15.42 15.42 0 1 0-16.88-25.81z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M893.23 23.24L942.89 23.24L942.89 72.9L893.23 72.9z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M612.72 155.87L653.7 155.87L653.7 158.54L612.72 158.54z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1078.68 532.02L1126.66 532.02L1126.66 580L1078.68 580z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M927.76 182.71L939.4 182.71L939.4 194.35L927.76 194.35z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M116.26-15.98a38.54 38.54 0 1 0 24.73 73.01z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M986.64 195.55 a20.39 20.39 0 1 0 40.78 0 a20.39 20.39 0 1 0 -40.78 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M550.8 379.09a32.54 32.54 0 1 0-58.81 27.87z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1063.87 523.74a21.62 21.62 0 1 0-38.91-18.85z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M767.09 230.26L800.09 230.26L800.09 272.51L767.09 272.51z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M764.07 167.02L771.33 167.02L771.33 173.08L764.07 173.08z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M800.96 193.96L846.96 193.96L846.96 217.1L800.96 217.1z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M71.84 324.43a42.1 42.1 0 1 0-83.14 13.31z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M551.97 389.57a4.99 4.99 0 1 0 4.92 8.69z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1120.17 352.72a9.67 9.67 0 1 0 17.1-9.04z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M941.93 363.32L969.4 363.32L969.4 407.2L941.93 407.2z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M397.63 37.91 a1.78 1.78 0 1 0 3.56 0 a1.78 1.78 0 1 0 -3.56 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M224.51 144.82L228.16 144.82L228.16 148.47L224.51 148.47z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M284.22 38.77L323.8 38.77L323.8 78.35L284.22 78.35z' stroke='%23037b0b'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
        alt="full-pix"
      />

      <div className="appContainer">
        {/* <div className="logo">
          <p>lectures</p>
        </div> */}
        <div className="paragraph">
          <img src={Logo} alt="company" />
          <h2>Level Up!</h2>
          <p>
            Top lecturers from different universities, teaching millions of
            students on uLectures.
          </p>
        </div>
      </div>

      <div className="container">
        <button type="btn">Start Learning</button>
      </div>
    </div>
  );
}

export default Home;
