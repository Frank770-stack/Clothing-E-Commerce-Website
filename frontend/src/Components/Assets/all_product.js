/// Import images
import dress1 from "./dress1.jpg";
import dress2 from "./dress2.jpg";
import dress3 from "./dress3.jpg";
import casual1 from "./casual1.jpg";
import casual2 from "./casual2.jpg";
import casual3 from "./casual3.jpg";
import jacket1 from "./jacket1.jpg";
import jacket2 from "./jacket2.jpg";
import jacket3 from "./jacket3.jpg";
import pants1 from "./pants1.jpg";
import pants2 from "./pants2.jpg";
import pants3 from "./pants3.jpg";
import shoes1 from "./shoes1.jpg";
import shoes2 from "./shoes2.jpg";
import shoes3 from "./shoes3.jpg";
import bag1 from "./bag1.jpg";
import bag2 from "./bag2.jpg";
import bag3 from "./bag3.jpg";
import dress from "./Dress.jpg";
import casual from "./Casual.jpg";
import Jacket from "./Jacket.jpg";
import Pants from "./Pants.jpg";
import bluesuit from "./bluesuit.jpg";
import collegejacket from "./collegejacket.jpg";
import Shirt from "./Shirt.jpg";
import fashionshirt from "./fashionshirt.jpg";
import white from "./white.jpg";
import winterjacket from "./winterjacket.jpg";
import workout from "./workout.jpg";
import hoodie from "./hoodie.jpg";

// All Products Array
// Category: Women
const all_product = [
  {
    id: 32,
    name: "Casual Cargo Pants",
    category: "Women",
    image: pants2,
    newPrice: "$60.00",
    oldPrice: "$80.00",
  },
  {
    id: 1,
    name: "Elegant Red Dress",
    category: "Women",
    image: dress1,
    newPrice: "$99.99",
    oldPrice: "$129.99",
  },
  {
    id: 2,
    name: "Casual Blue Dress",
    category: "Women",
    image: dress2,
    newPrice: "$79.99",
    oldPrice: "$99.99",
  },

  // Category: Casual Wear (Men)
  {
    id: 3,
    name: "Relaxed T-Shirt",
    category: "Women",
    image: casual1,
    newPrice: "$19.99",
    oldPrice: "$29.99",
  },
  {
    id: 4,
    name: "Comfortable Shorts",
    category: "Men",
    image: casual2,
    newPrice: "$25.99",
    oldPrice: "$35.99",
  },

  // Category: Jackets (Men)
  {
    id: 5,
    name: "Leather Jacket",
    category: "Men",
    image: jacket1,
    newPrice: "$150.00",
    oldPrice: "$200.00",
  },
  {
    id: 6,
    name: "Winter Coat",
    category: "Men",
    image: jacket2,
    newPrice: "$120.00",
    oldPrice: "$180.00",
  },

  // Category: Pants (Men)
  {
    id: 7,
    name: "Formal Trousers",
    category: "Men",
    image: pants1,
    newPrice: "$49.99",
    oldPrice: "$69.99",
  },
  {
    id: 8,
    name: "Casual Pants",
    category: "Men",
    image: pants2,
    newPrice: "$39.99",
    oldPrice: "$59.99",
  },

  // Category: Shoes (Men)
  {
    id: 9,
    name: "Sports Sneakers",
    category: "Men",
    image: shoes1,
    newPrice: "$89.99",
    oldPrice: "$109.99",
  },
  {
    id: 10,
    name: "Formal Shoes",
    category: "Women",
    image: shoes2,
    newPrice: "$99.99",
    oldPrice: "$129.99",
  },

  // Category: Bags (Men)
  {
    id: 11,
    name: "Classic Handbag",
    category: "Men",
    image: bag1,
    newPrice: "$59.99",
    oldPrice: "$79.99",
  },
  {
    id: 12,
    name: "Travel Backpack",
    category: "Women",
    image: bag2,
    newPrice: "$49.99",
    oldPrice: "$69.99",
  },

  // Category: Kids (New Items for Kids)
  {
    id: 13,
    name: "Black Gown",
    category: "Kids",
    image: dress3,
    newPrice: "$95.00",
    oldPrice: "$125.00",
  },
  {
    id: 14,
    name: "Green Summer Dress",
    category: "Kids",
    image: dress3,
    newPrice: "$85.00",
    oldPrice: "$110.00",
  },

  // More Kids' Items (Dresses, Casual, Jackets, etc.)
  {
    id: 15,
    name: "White T-Shirt",
    category: "Kids",
    image: casual3,
    newPrice: "$22.00",
    oldPrice: "$30.00",
  },
  {
    id: 16,
    name: "Denim Shorts",
    category: "Kids",
    image: casual3,
    newPrice: "$35.00",
    oldPrice: "$45.00",
  },
  {
    id: 17,
    name: "Faux Leather Jacket",
    category: "Kids",
    image: jacket3,
    newPrice: "$140.00",
    oldPrice: "$180.00",
  },
  {
    id: 18,
    name: "Woolen Coat",
    category: "Kids",
    image: jacket3,
    newPrice: "$130.00",
    oldPrice: "$170.00",
  },

  {
    id: 19,
    name: "Skinny Jeans",
    category: "Kids",
    image: pants3,
    newPrice: "$42.00",
    oldPrice: "$62.00",
  },
  {
    id: 20,
    name: "Jogger Pants",
    category: "Kids",
    image: pants3,
    newPrice: "$37.00",
    oldPrice: "$57.00",
  },

  {
    id: 21,
    name: "Running Shoes",
    category: "Kids",
    image: shoes3,
    newPrice: "$88.00",
    oldPrice: "$108.00",
  },
  {
    id: 22,
    name: "Brown Loafers",
    category: "Kids",
    image: shoes3,
    newPrice: "$92.00",
    oldPrice: "$122.00",
  },

  {
    id: 23,
    name: "Stylish Tote",
    category: "Kids",
    image: bag3,
    newPrice: "$58.00",
    oldPrice: "$78.00",
  },
  {
    id: 24,
    name: "Leather Satchel",
    category: "Kids",
    image: bag3,
    newPrice: "$48.00",
    oldPrice: "$68.00",
  },

  // Remaining Categories
  {
    id: 25,
    name: "Beach Tote Bag",
    category: "Men",
    image: bag1,
    newPrice: "$55.00",
    oldPrice: "$75.00",
  },
  {
    id: 26,
    name: "Chunky Sneakers",
    category: "Men",
    image: shoes2,
    newPrice: "$120.00",
    oldPrice: "$150.00",
  },
  {
    id: 27,
    name: "Fleece Jacket",
    category: "Men",
    image: jacket1,
    newPrice: "$85.00",
    oldPrice: "$105.00",
  },
  {
    id: 28,
    name: "Trench Coat",
    category: "Women",
    image: jacket2,
    newPrice: "$115.00",
    oldPrice: "$145.00",
  },
  {
    id: 29,
    name: "Printed Dress",
    category: "Women",
    image: dress1,
    newPrice: "$80.00",
    oldPrice: "$100.00",
  },
  {
    id: 30,
    name: "Maxi Dress",
    category: "Women",
    image: dress2,
    newPrice: "$95.00",
    oldPrice: "$125.00",
  },

  {
    id: 31,
    name: "Slim Fit Jeans",
    category: "Men",
    image: pants1,
    newPrice: "$55.00",
    oldPrice: "$75.00",
  },

  {
    id: 33,
    name: "Running Sneakers",
    category: "Men",
    image: shoes1,
    newPrice: "$100.00",
    oldPrice: "$130.00",
  },
  {
    id: 34,
    name: "High-Top Sneakers",
    category: "Women",
    image: shoes2,
    newPrice: "$110.00",
    oldPrice: "$140.00",
  },
  {
    id: 35,
    name: "Leather Crossbody Bag",
    category: "Women",
    image: bag1,
    newPrice: "$85.00",
    oldPrice: "$110.00",
  },
  {
    id: 36,
    name: "Rucksack Backpack",
    category: "Women",
    image: bag2,
    newPrice: "$70.00",
    oldPrice: "$90.00",
  },
  {
    id: 37,
    name: "Turkey Dress",
    category: "Women",
    image: dress,
    newPrice: "$99.99",
    oldPrice: "$129.99",
  },
  {
    id: 38,
    name: "Casual Shorts and T-shirt",
    category: "Women",
    image: casual,
    newPrice: "$39.99",
    oldPrice: "$49.99",
  },
  {
    id: 39,
    name: "Stylish Leather Jacket",
    category: "Women",
    image: Jacket,
    newPrice: "$59.99",
    oldPrice: "$79.99",
  },
  {
    id: 40,
    name: "Lady Suit",
    image: Pants,
    category: "Women",
    newPrice: "$79.99",
    oldPrice: "$99.99",
  },
  {
    id: 41,
    name: "Elegant Blue Suit",
    image: bluesuit,
    category: "Men",
    newPrice: "$199.99",
    oldPrice: "$249.99",
  },
  {
    id: 42,
    name: "Trendy Casual Wear",
    image: collegejacket,
    category: "Men",
    newPrice: "$79.99",
    oldPrice: "$99.99",
  },
  {
    id: 43,
    name: "Men's Turkey Shirt",
    image: Shirt,
    category: "Men",
    newPrice: "$149.99",
    oldPrice: "$189.99",
  },
  {
    id: 44,
    name: "Stylish Cowboy Hat",
    image: fashionshirt,
    category: "Men",
    newPrice: "$39.99",
    oldPrice: "$49.99",
  },
  {
    id: 45,
    name: "NorthFace Winter Jacket",
    image: winterjacket,
    category: "Men",
    newPrice: "$69.99",
    oldPrice: "$89.99",
  },
  {
    id: 46,
    name: "Stylish White Shirt",
    image: white,
    category: "Men",
    newPrice: "$49.99",
    oldPrice: "$59.99",
  },
  {
    id: 47,
    name: "Elegant Hoodie",
    image: hoodie,
    category: "Men",
    newPrice: "$79.99",
    oldPrice: "$99.99",
  },
  {
    id: 48,
    name: "Sporty Look Set",
    image: workout,
    category: "Men",
    newPrice: "$99.99",
    oldPrice: "$129.99",
  },
];

export default all_product;
