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
  
  
  // https://rubaxa.github.io/playground/#romannumbers
  
  /**
   * {roman number: arabic number}
   * @type {Object}
   */
   const romanToArabicDic = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };
  
  /**
   * converts roman number to arabic
   * @param {string} romanN - roman number to convert
   * @returns {number} arabic number
   */
  const translateRomanToArabic = (romanN) => {
      return romanN.toUpperCase().split('').
          reduce((sum, currNumber, i, romanArr) => {
              if (romanToArabicDic[currNumber] >= romanToArabicDic[romanArr[i + 1] ?
                  romanArr[i + 1] : currNumber]) {
                  return sum + romanToArabicDic[currNumber];
              } else {
                  return sum - romanToArabicDic[currNumber];
              }
          }, 0);
  };
  
  /**
   * roman number validation
   * @param {string} inputSymbols - symbols for check
   * @returns {boolean} whether inputSymbols is roman number
   */
  const isRoman = (inputSymbols) => {
      if (typeof inputSymbols === 'string' || inputSymbols instanceof String) {
          return /^[MDCLXVI]*$/.test(inputSymbols.toUpperCase());
      } else {
          return false;
      }
  };
  
  
  /**
   * roman number Proxy handler
   */
  const romanHandler = {
      get(target, prop, leftBorder) {
          if (isRoman(prop)) {
              const rightBorder = translateRomanToArabic(prop);
              return (leftBorder <= rightBorder ?
                  Array.from({length: rightBorder - leftBorder},
                      (_, i) => i + leftBorder) : []);
          } else {
              return target[prop];
          }
      },
  };
  
  Object.setPrototypeOf(
      Number.prototype,
      new Proxy(Number.prototype, romanHandler));
  
  console.log(1..VI);
  console.log(12..VI);
  console.log(0..V); // [0, 1, 2, 3, 4];
  console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
  
  // https://rubaxa.github.io/playground/#printnumbers
  
  function printNumbers(max, cols) {
      let result = [];
      const rows = Math.ceil(max / cols);
      let r, c, num;
  
      for (r = 0; r < rows; r++) {
          row = [];
          for (c = 0; c < cols; c++) {
              num = r + (c * rows);
              if (num < max) {
                  row.push(num);
              }
          }
  
          result.push(row.join(' '));
      }
  
      return result.join('\n');
  };
  
  // https://rubaxa.github.io/playground/#now
  
  function now(v) {
      if (!v) {
          return Date.now();
      }
      const argNumber = parseFloat(v);
      const argRegRex = v.match(/ms|sec|s|min|m|hours|h|days|d/);
      switch (argRegRex.toString()) {
          case 'ms':
              return Date.now() + argNumber;
          case 's':
          case 'sec':
              return Date.now() + argNumber * 1000;
          case 'm':
          case 'min':
              return Date.now() + argNumber * 1000 * 60;
          case 'h':
          case 'hours':
              return Date.now() + argNumber * 1000 * 60 * 60;
          case 'd':
          case 'days':
              return Date.now() + argNumber * 1000 * 60 * 60 * 24;
      }
  }
  