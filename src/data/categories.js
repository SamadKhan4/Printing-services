import tshirts from "../assets/T-shirts/1.png";
import hoodies from "../assets/A1/Ruffty-Crewneck.jpg";
import caps from "../assets/A1/HighO2.jpg";
import keychains from "../assets/product/keychain.jpg";
import mugs from "../assets/Other/magic_mug.png";
import toteBags from "../assets/product/tote bag.jpg";
import jerseys from "../assets/product/sublimation.png";
import corporateMerch from "../assets/product/welcom-kit.png";

export const categories = [
  {
    title: "T-Shirts",
    slug: "t-shirts",
    image: tshirts,
    subcategories: ["Round Neck T-Shirts", "Polo T-Shirts", "Oversized T-Shirts", "Dry Fit T-Shirts"]
  },
  {
    title: "Hoodies",
    slug: "hoodies",
    image: hoodies,
    subcategories: ["Pullover Hoodies", "Zipper Hoodies", "Oversized Hoodies"]
  },
  {
    title: "Caps",
    slug: "caps",
    image: caps,
    subcategories: ["Baseball Caps", "Snapback Caps", "Sports Caps", "Corporate Caps"]
  },
  {
    title: "Keychains",
    slug: "keychains",
    image: keychains,
    subcategories: ["Acrylic Keychains", "Metal Keychains", "Jersey Keychains", "Anime Keychains"]
  },
  {
    title: "Mugs",
    slug: "mugs",
    image: mugs,
    subcategories: ["Ceramic Mugs", "Magic Mugs", "Photo Mugs", "Corporate Mugs"]
  },
  {
    title: "Tote Bags",
    slug: "tote-bags",
    image: toteBags,
    subcategories: ["Canvas Tote Bags", "Printed Tote Bags", "Corporate Tote Bags"]
  },
  {
    title: "Sports Jerseys",
    slug: "sports-jerseys",
    image: jerseys,
    subcategories: ["Team Jerseys", "College Jerseys", "Event Jerseys"]
  },
  {
    title: "Corporate Merchandise",
    slug: "corporate-merchandise",
    image: corporateMerch,
    subcategories: ["Shirts", "Blazers", "Jackets", "Welcome Kits"]
  }
];
