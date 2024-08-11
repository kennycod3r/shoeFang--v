const data = [
  {
    title: "Air Force 1 '07 (M)",
    img: "src/Img/airforce1.webp",
    secondary: "src/Img/airf2.webp",
    prevPrice: "85",
    newPrice: "80",
    company: "Nike",
    id: 128,
    color: "white",
    category: "sneakers",
  },
  {
    title: "Air Max 97 (M)",
    img: "src/Img/Airmax97.webp",
    prevPrice: "85",
    newPrice: "120",
    company: "Nike",
    color: "blue",
    id: 138,
    category: "sneakers",
  },
  {
    title: "Nike Air Max 97 Ewt",
    img: "src/Img/AURORAbrown.webp",
    secondary: "src/Img/AURORAbrown2.webp",
    prevPrice: "85",
    newPrice: "120",
    company: "Nike",
    color: "green",
    id: 148,
    category: "sneakers",
  },
  {
    title: "Waffle One Ltr (M)",
    img: "src/Img/Dxx.webp",
    prevPrice: "85",
    newPrice: "80",
    company: "Nike",
    color: "white",
    id: 158,
    category: "sneakers",
  },

  {
    title: "Air Flight Lite (M)",
    img: "src/Img/Air Flight Lite.webp",
    secondary: "src/Img/Air Flight2.webp",
    prevPrice: "185",
    newPrice: "130",
    company: "Nike",
    id: 168,
    color: "white",
    category: "sneakers",
  },
  {
    title: "Air Huarache",
    img: "src/Img/Air Huarache.webp",
    secondary: "src/Img/Air Huarache2.webp",
    prevPrice: "105",
    newPrice: "100",
    company: "Nike",
    id: 178,
    color: "black",
    category: "sneakers",
  },
  {
    title: "Air Max 2 (M)",
    img: "src/Img/airmax1.webp",
    secondary: "src/Img/airmax2.webp",
    prevPrice: "125",
    newPrice: "90",
    company: "Nike",
    color: "black",
    id: 188,
    category: "sneakers",
  },
  {
    title: "Nike AURORA (M)",
    img: "src/Img/AURORA.webp",
    secondary: "src/Img/AURORA2.webp",
    prevPrice: "105",
    newPrice: "120",
    company: "Nike",
    color: "black",
    id: 218,
    category: "sneakers",
  },
  {
    id: 17,
    img: "https://images.asos-media.com/products/on-the-roger-advantage-trainers-in-all-white/24421180-1-allwhite?$n_640w$&wid=513&fit=constrain",
    title: "Nike Air Monarch IV",
    prevPrice: "85",
    newPrice: "20",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    id: 22,
    img: "https://images.asos-media.com/products/adidas-originals-rivalry-low-trainers-in-white-and-green/205759967-1-multi?$n_640w$&wid=634&fit=constrain",
    title: "adidas Rivalry Low",
    prevPrice: "115",
    newPrice: "100",
    company: "Adidas",
    color: "white",
    category: "sneakers",
  },

  {
    id: 19,
    img: "https://images.asos-media.com/products/adidas-originals-samba-og-trainers-in-black/205091962-1-black?$n_640w$&wid=634&fit=constrain",
    title: "Adidas Samba OG trainers",
    prevPrice: "85",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    id: 20,
    img: "https://images.asos-media.com/products/adidas-originals-ozweego-trainers-in-triple-beige/203845842-1-beige?$n_640w$&wid=634&fit=constrain",
    title: "adidas Ozweego",
    prevPrice: "99",
    newPrice: "90",
    company: "Adidas",
    color: "white",
    category: "sneakers",
  },
  {
    id: 21,
    img: "https://images.asos-media.com/products/adidas-originals-handball-spezial-gum-sole-trainers-in-ink-and-lime/205626924-1-multi?$n_640w$&wid=634&fit=constrain",
    title: "Handball Spezial",
    prevPrice: "85",
    newPrice: "20",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    id: 23,
    img: "https://images.asos-media.com/products/vans-sk8-hi-trainers-in-green-suede/203590902-1-khaki?$n_480w$&wid=476&fit=constrain",
    title: "sk8-hi suade",
    prevPrice: "65",
    newPrice: "57",
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    id: 24,
    img: "https://images.asos-media.com/products/vans-hylane-chunky-trainers-in-white-with-gum-sole/206120984-1-white?$n_480w$&wid=476&fit=constrain",
    title: "Vans Hylane",
    prevPrice: "85",
    newPrice: "67",
    company: "Vans",
    color: "white",
    category: "flats",
  },
  {
    id: 25,
    img: "https://images.asos-media.com/products/adidas-originals-samba-og-trainers-in-cream-and-black/206059666-1-multi?$n_640w$&wid=634&fit=constrain",
    title: "samba og Adidas",
    prevPrice: "85",
    newPrice: "20",
    company: "adidas",
    color: "white",
    category: "sneakers",
  },
  {
    id: 26,
    img: "https://pbs.twimg.com/media/GOIo60vWwAA7Jit?format=jpg&name=medium",
    title: "Nike Waffle One Sneaker",
    prevPrice: "85",
    newPrice: "20",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    id: 27,
    img: "https://images.asos-media.com/products/puma-scend-running-trainers-in-green-white/204957254-1-green?$n_480w$&wid=476&fit=constrain",
    title: "PUMA scend",
    prevPrice: "61",
    newPrice: "22",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    id: 28,
    img: "https://images.asos-media.com/products/puma-velocity-nitro-3-trainers-in-pink/206349565-1-pink?$n_480w$&wid=476&fit=constrain",
    title: "Puma Velocity n3",
    prevPrice: "85",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    id: 29,
    img: "https://images.asos-media.com/products/puma-rs-x-efekt-trainers-in-black/204134036-1-black?$n_480w$&wid=476&fit=constrain",
    title: "puma rs-x Efekt",
    prevPrice: "85",
    newPrice: "73",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: 30,
    img: "https://images.asos-media.com/products/puma-mirage-sport-trainers-in-white-and-blue/205870676-1-whitegrey?$n_480w$&wid=476&fit=constrain",
    title: "puma mirage",
    prevPrice: "83",
    newPrice: "71",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    id: 31,
    img: "https://images.asos-media.com/products/puma-palermo-leather-trainers-in-black-and-white-black/205117227-1-blackwhite?$n_480w$&wid=476&fit=constrain",
    title: "Puma palermo",
    prevPrice: "85",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: 322,
    img: "https://images.asos-media.com/products/puma-velophasis-trainers-in-grey/205432904-1-grey?$n_480w$&wid=476&fit=constrain",
    title: "puma velophasis",
    prevPrice: "85",
    newPrice: "100",
    company: "Puma",
    color: "blue",
    category: "sneakers",
  },
  {
    id: 33,
    img: "https://images.asos-media.com/products/vans-old-skool-trainers-in-rose-smoke/205062751-1-lightpink?$n_480w$&wid=476&fit=constrain",
    title: "Old Skool Rose",
    prevPrice: "85",
    newPrice: "69",
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    id: 18,
    img: "https://images.asos-media.com/products/adidas-originals-adimatic-gum-sole-trainers-in-black-and-white/203695013-1-black?$n_640w$&wid=634&fit=constrain",
    title: "Adidas adimatic gum",
    prevPrice: "115",
    newPrice: "90",
    company: "Adidas",
    color: "black",
    category: "flats",
  },
  {
    id: 34,
    img: "https://images.asos-media.com/products/vans-old-skool-faux-leather-trainers-in-triple-white/204456624-1-white?$n_640w$&wid=634&fit=constrain",
    title: "Vans Old Skool",
    prevPrice: "85",
    newPrice: "75",
    company: "Vans",
    color: "white",
    category: "sneakers",
  },
  {
    id: 35,
    img: "https://images.asos-media.com/products/vans-classic-slip-on-trainers-in-blue-checkerboard/206119828-1-midblue?$n_640w$&wid=634&fit=constrain",
    title: "Unisex classic",
    prevPrice: "65",
    newPrice: "45",
    company: "Vans",
    color: "blue",
    category: "sneakers",
  },
  {
    id: 36,
    img: "https://images.asos-media.com/products/vans-old-skool-trainers-in-blue/206119808-1-midblue?$n_640w$&wid=634&fit=constrain",
    title: "old skul",
    prevPrice: "65",
    newPrice: "50",
    company: "Vans",
    color: "blue",
    category: "sneakers",
  },
  {
    id: 37,
    img: "https://images.asos-media.com/products/adidas-originals-sambae-trainers-in-white-and-red/205774678-1-multi?$n_480w$&wid=476&fit=constrain",
    title: "Adidas Sambae",
    prevPrice: "85",
    newPrice: "20",
    company: "Addidas",
    color: "red",
    category: "sneakers",
  },
  {
    id: 38,
    img: "https://pbs.twimg.com/media/GM_t0pXWsAAIdXq?format=jpg&name=small",
    title: "Nike Retro Jordans iV",
    prevPrice: "85",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "sneakers",
  },
  {
    id: 39,
    img: "https://images.asos-media.com/products/adidas-originals-superstar-trainers-in-black/204992257-1-black?$n_640w$&wid=634&fit=constrain",
    title: "adidas superstar",
    prevPrice: "125",
    newPrice: "90",
    company: "adidas",
    color: "black",
    category: "sneakers",
  },
  {
    id: 40,
    img: "https://pbs.twimg.com/media/GKZ9KEHXIAATuYP?format=jpg&name=medium",
    title: "Air Jordan 1",
    prevPrice: "85",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: 41,
    img: "https://pbs.twimg.com/media/GK0n8npX0AAwje3?format=jpg&name=small",
    title: "Air Jordan 5 Fire Red",
    prevPrice: "85",
    newPrice: "20",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: 42,
    img: "https://pbs.twimg.com/media/GMCTEy4XUAA2rdo?format=jpg&name=small",
    title: "Nike Air Max 95 Neon",
    prevPrice: "85",
    newPrice: "20",
    company: "Nike",
    color: "grey",
    category: "sneakers",
  },
  {
    id: 43,
    img: "https://images.asos-media.com/products/adidas-orignals-ozweego-trainers-in-black/203978596-1-black?$n_640w$&wid=634&fit=constrain",
    title: "adidas Ozweego",
    prevPrice: "99",
    newPrice: "90",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    id: 44,
    img: "https://images.asos-media.com/products/adidas-training-adilette-sliders-in-black/202260986-1-black?$n_640w$&wid=634&fit=constrain",
    title: "Adilette sliders",
    prevPrice: "85",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
];
const keys = [
  "title",
  "img",
  "secondary",
  "prevPrice",
  "newPrice",
  "company",
  "id",
  "color",
  "category",
];

const formatData = (data) => {
  return data.map((item) => {
    const formattedItem = {};
    keys.forEach((key) => {
      formattedItem[key] = item.hasOwnProperty(key) ? item[key] : null;
    });
    return formattedItem;
  });
};

const formattedData = formatData(data);
export default formattedData;
