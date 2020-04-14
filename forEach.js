var fruits = ['banana', 'apple', 'orange', 'strawberry'];
var notApple = 0;
fruits.forEach(function(fruit) {
    if ( fruit != 'apple'){
      console.log(notApple);
      notApple++;
    }
});