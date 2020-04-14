var pizzaIngredients = ['cheese','sauce','pepperoni','sausage','jalapenos','dough']
console.log(pizzaIngredients);
if ( pizzaIngredients.indexOf('jalapenos' > -1) ){ 
  console.log('Removing Spice');
  pizzaIngredients.splice(pizzaIngredients.indexOf('jalapenos'), 1) 
  console.log(pizzaIngredients) 
}