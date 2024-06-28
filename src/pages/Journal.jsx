import React from "react";
import useLenis from "../components/hooks/UseLennis";
import "./Pages.css";
import clock from "../assets/clock.svg";
import hot from "../assets/hot.svg";
import image7 from "../Img/shoe8.webp";
import Bluepointer from "../utility/Bluepointer";

export default function Journal() {
  useLenis();

  const articles = [
    {
      title: "Jordan Tatum 2 Sidewalk Chalk",
      date: "jun 21, 2024",
      image: image7,
      excerpt:
        "Discover the top sneaker trends for 2024. From retro revivals to futuristic designs, explore what's next in the world of sneakers.",
    },
    {
      title: "Caitlin Clarks on Air Max 🙌",
      date: "May 1, 2024",
      image:
        "https://pbs.twimg.com/media/GOZxK2cXkAAN1dC?format=jpg&name=medium",
      excerpt:
        "Take a deep dive into the history and evolution of the iconic Air Max series. Learn about the key models that defined each era.",
    },
    {
      title: "Sneaker Maintenance 101",
      date: "oct 20, 2024",
      image:
        "https://pbs.twimg.com/media/GOoLzzSWoAAAaBY?format=jpg&name=medium",
      excerpt:
        "Keep your kicks looking fresh with our ultimate guide to sneaker maintenance. Learn the best cleaning and storage techniques.",
    },
    {
      title: "How to Style Your Sneakers",
      date: "May 18, 2024",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df87918a-69db-4271-b07f-4ed0109a124d/sportswear-big-kids-girls-t-shirt-n2kvNn.png",
      excerpt:
        "From casual to classy, find out how to style your sneakers for any occasion. Get tips and tricks from fashion experts.",
    },
  ];

  return (
    <div id="Journal">
      <div className="journal-headtext">
        <h1 className="journal-header">SNEAKER NEWS</h1>
      </div>

      <div className="journal-intro">
        <p>
          Welcome to the Sneaker News Journal! Here you'll find the latest
          updates, trends, and tips from the world of sneakers. Stay ahead of
          the game with our expert insights and in-depth articles.
        </p>
      </div>

      <div className="journal-grid">
        {articles.map((article, index) => (
          <div key={index} className="journal-article">
            <img src={article.image} alt={article.title} />
            <div className="dateWrapper">
              <div className="dateWrapper-inner">
                <div className="flexBase">
                  <img src={clock} alt="clock" className="clocksvg" />
                </div>
                {article.date}
              </div>
              <div className="dateWrapper-inner">
                <div className="flexBase">
                  <img src={hot} alt="fire" />
                </div>
                Hot
              </div>
            </div>
            <div className="j-art-text">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <a href={`/journal`} className=" article read-more">
                <p>Read more</p>
                <Bluepointer />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
