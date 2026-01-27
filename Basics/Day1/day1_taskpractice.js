let cart = [
  { item: "mens cloths", price: 439 },
  { item: "shoes", price: 1000 },
  { item: "watch", price: 500 },
];

const addtak = ({ item, price }) => {
  return `${item} will cost ${price * 1.18}`;
};
let finalCart = cart.map((product) => addtak(product))
console.log(finalCart);
