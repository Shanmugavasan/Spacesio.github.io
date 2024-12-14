// import React from "react";
// import "../styles/Portfolio.css"; // Import your CSS file for the portfolio section

// // Importing images directly
// import Grid1 from "../assets/Grid1.jpeg";
// import Grid2 from "../assets/Grid0.jpeg";

// import Grid3 from "../assets/Grid2.jpeg";
// import Grid4 from "../assets/Grid4.jpg";
// import Grid5 from "../assets/Grid5.jpeg";
// import Grid6 from "../assets/Grid6.jpeg";

// const portfolioImages = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6];

// const Portfolio = () => {
//   return (
//     <section className="portfolio-section" id="portfolio">
//       <h2 className="portfolio-heading">Favourite Corner</h2>
//       <div className="image-grid">
//         {portfolioImages.map((image, index) => (
//           <div key={index} className="portfolio-item">
//             <img
//               src={image}
//               alt={`Portfolio ${index + 1}`}
//               className="portfolio-image"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
import React from "react";
import "../styles/Portfolio.css"; // Import your CSS file for the portfolio section

// Importing images directly
import Grid1 from "../assets/Grid1.jpeg";
import Grid2 from "../assets/Grid0.jpeg";
import Grid3 from "../assets/Grid2.jpeg";
import Grid4 from "../assets/Grid4.jpg";
import Grid5 from "../assets/Grid5.jpeg";
import Grid6 from "../assets/Grid6.jpeg";

const portfolioImages = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-heading">Favourite Corner</h2>
      <div className="image-grid">
        {portfolioImages.map((image, index) => (
          <div key={index} className="portfolio-item">
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="portfolio-image"
            />
          </div>
        ))}
        {/* Duplicate the images to make the scroll seamless */}
        {portfolioImages.map((image, index) => (
          <div key={index + 6} className="portfolio-item">
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="portfolio-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
