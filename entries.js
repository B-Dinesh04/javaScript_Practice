const food = { meat: '🥩', broccoli: '🥦', carrot: '🥕' };

// 😖 Stuck in Array land
const vegetarian = Object.entries(food).filter(
  ([key]) => key !== 'meat',
);

console.log(vegetarian)