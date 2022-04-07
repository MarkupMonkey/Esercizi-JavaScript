function createStore() {
  const productArray = [];
  return function (product){
    productArray.push(product)
    console.log(productArray)
    }
  }

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const greenShirt = { id: 4, name: 'Green T-shirt'}
const skunkinShoes = { id: 5, name: 'Skunkin Shoes'};
const runShoes = { id: 6, name: 'Running Shoes'}
const weed = { id: 420, name: 'Think Different'}

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)
dressStore(greenShirt)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(skunkinShoes);
shoesStore(runShoes);


console.log('--- Weed Store ---');
const weedStore = createStore();
weedStore(weed);