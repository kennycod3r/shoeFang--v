import React from "react";
import nikelogo2 from "../../assets/nikelogo2.svg";
import adidasSvg from "../../assets/adidas2.svg";

const Sponsor = React.memo(() => {
  const sponsors = [
    { src: nikelogo2, alt: "Nike" },
    { src: "https://cdn.sanity.io/images/9aznesrq/production/a9d1fffde475ca49577f589aed650101349aff10-800x500.png?w=600&q=80&auto=format", alt: "Sponsor1" },
    { src: "https://cdn.sanity.io/images/9aznesrq/production/b285b74e87cc8cb6d67797644f1dfea406d23136-3840x2160.png?w=600&q=80&auto=format", alt: "Sponsor2" },
    { src: "https://cdn.sanity.io/images/9aznesrq/production/4aa1e5499acf87ea77d4493a0066d518fbb963d7-800x500.png?w=600&q=80&auto=format", alt: "Sponsor3" },
    { src: adidasSvg, alt: "Adidas" }
  ];

  return (
    <>
      <div className="sponsor-wrapper">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            className="flexCenter sponsor"
            src={sponsor.src}
            alt={sponsor.alt}
            loading="lazy"
          />
        ))}
      </div>

      <div className="flex-nike">
        <div>
          <img className="flexCenter sponsor" src={nikelogo2} alt="Nike" loading="lazy" />
        </div>
      </div>
    </>
  );
});

export default Sponsor;

