import {
  faWater,
  faDove,
  faPaw,
  faMountain,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const coffeeStock = [
  {
    id: 1,
    name: 'Good Morning',
    price: 10.99,
    img: faSun,
    location: 'Indonesia, Central & South America',
    roast: 'Light',
    aroma: 'Ripe berries, rich nougat, brown sugar.',
    notes: 'Juicy red fruit acidity paired with a creamy honey body.',
    amount: 15,
  },
  {
    id: 2,
    name: 'Wavy Baby',
    price: 9.99,
    img: faWater,
    location: 'Central & South America',
    roast: 'Medium',
    aroma: 'Sweet dried fruit, toasted coconut, and chocolate malt.',
    notes:
      'Well-rounded and complex with notes of sweet tobacco, stone fruit and cocoa.',
    amount: 15,
  },
  {
    id: 3,
    name: 'Natures Bounty',
    price: 10.99,
    img: faPagelines,
    location: 'Indonesia, Central & South America',
    roast: 'Light',
    aroma: 'Earthy, anise, molasses.',
    notes: 'Tropical dried fruit, creamy, cola and walnut undertones.',
    amount: 10,
  },
  {
    id: 4,
    name: 'Take Flight',
    price: 10.99,
    img: faDove,
    location: 'Africa, Central & South America',
    roast: 'Medium',
    aroma: 'Sweet syrup, vanilla bean, stone fruit.',
    notes:
      'Tart red currant, notes of sugar cane and milk chocolate, with a honeyed berry body.',
    amount: 9,
  },
  {
    id: 5,
    name: 'Trail Brew',
    price: 9.99,
    img: faPaw,
    location: 'Indonesia, Central & South America',
    roast: 'Dark',
    aroma: 'Condensed sugar cane and cocoa powder.',
    notes:
      'Rich, dark chocolate, cacao nibs, brown sugar and roasted hazelnut.',
    amount: 7,
  },
  {
    id: 6,
    name: 'Bold Buttress',
    price: 10.99,
    img: faMountain,
    location: 'Central & South America',
    roast: 'Dark',
    aroma: 'Cacao nibs, peat, and hints of nutmeg.',
    notes: 'Heavy body, sweet tobacco, earthy with a black licorice finish.',
    amount: 7,
  },
];

export { coffeeStock };
