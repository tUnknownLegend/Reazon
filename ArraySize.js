// https://rubaxa.github.io/playground/#array.size

// Реализовать свойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.


Object.defineProperty(Array.prototype, "size", {
  get: function() {
      size = 0;
      this.forEach(element => size++);
      return size;
 },
  
  set: function(input) {
    this.splice(input);
  },
});


// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
