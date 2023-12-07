let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(words.shift()); // logs: scooby, on, two (in that order)

});

console.log(words);