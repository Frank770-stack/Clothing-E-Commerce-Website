// Importing images
import dress from "./Dress.jpg";
import casual from "./Casual.jpg";
import Jacket from "./Jacket.jpg";
import Pants from "./Pants.jpg";

// Data array containing items
let data_product = [
  {
    id: 1,
    name: "Turkey Dress",
    image: dress,
    newPrice: "$99.99",
    oldPrice: "$129.99",
  },
  {
    id: 2,
    name: "Casual Shorts and T-shirt",
    image: casual,
    newPrice: "$39.99",
    oldPrice: "$49.99",
  },
  {
    id: 3,
    name: "Stylish Leather Jacket",
    image: Jacket,
    newPrice: "$59.99",
    oldPrice: "$79.99",
  },
  {
    id: 4,
    name: "Lady Suit",
    image: Pants,
    newPrice: "$79.99",
    oldPrice: "$99.99",
  },
];

export default data_product;
