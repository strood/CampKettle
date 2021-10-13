const getLocalCart = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const getStock = async () => {
  try {
    // const stock = await fetch('https://www.campkettle.website/api/coffee');
    // const parseStock = await stock.json();
    // return parseStock;
    return coffeeStock
  } catch (error) {
    const err = new Error('Error fetching coffee');
    err.status = 404;
    return [];
  }
};

const coffeeStock = [
  {
    id: 1,
    name: 'Good Morning',
    price: 10.98,
    img: '/images/sun-solid.svg',
    imgName: 'fas-sun',
    location: 'Indonesia, Central & South America',
    roast: 'Light',
    aroma: 'Ripe berries, rich nougat, brown sugar.',
    notes: 'Juicy red fruit acidity paired with a creamy honey body.',
    itemStock: 10,
  },
  {
    id: 2,
    name: 'Wavy Baby',
    price: 9.96,
    img: '/images/water-solid.svg',
    imgName: 'fas-water',
    location: 'Central & South America',
    roast: 'Medium',
    aroma: 'Sweet dried fruit, toasted coconut, and chocolate malt.',
    notes:
      'Well-rounded and complex with notes of sweet tobacco, stone fruit and cocoa.',
    itemStock: 0,
  },
  {
    id: 3,
    name: 'Natures Bounty',
    price: 10.97,
    img: '/images/pagelines-brands.svg',
    imgName: 'fab-pagelines',
    location: 'Indonesia, Central & South America',
    roast: 'Light',
    aroma: 'Earthy, anise, molasses.',
    notes: 'Tropical dried fruit, creamy, cola and walnut undertones.',
    itemStock: 4,
  },
  {
    id: 4,
    name: 'Take Flight',
    price: 10.98,
    img: '/images/dove-solid.svg',
    imgName: 'fas-dove',
    location: 'Africa, Central & South America',
    roast: 'Medium',
    aroma: 'Sweet syrup, vanilla bean, stone fruit.',
    notes:
      'Tart red currant, notes of sugar cane and milk chocolate, with a honeyed berry body.',
    itemStock: 9,
  },
  {
    id: 5,
    name: 'Trail Brew',
    price: 9.97,
    img: '/images/paw-solid.svg',
    imgName: 'fas-paw',
    location: 'Indonesia, Central & South America',
    roast: 'Dark',
    aroma: 'Condensed sugar cane and cocoa powder.',
    notes:
      'Rich, dark chocolate, cacao nibs, brown sugar and roasted hazelnut.',
    itemStock: 3,
  },
  {
    id: 6,
    name: 'Bold Buttress',
    price: 10.97,
    img: '/images/mountain-solid.svg',
    imgName: 'fas-mountain',
    location: 'Central & South America',
    roast: 'Dark',
    aroma: 'Cacao nibs, peat, and hints of nutmeg.',
    notes: 'Heavy body, sweet tobacco, earthy with a black licorice finish.',
    itemStock: 7,
  },
];

export { getStock, getLocalCart, coffeeStock };
