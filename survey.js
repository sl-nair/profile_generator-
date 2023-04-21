const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)' , (meal) => {
      rl.question('What\'s your favourite thing to eat for that meal?' , (food) => {
        console.log (`${name} likes ${activity}, and having ${food} for ${meal}!`);
        rl.close();
      });
    });
  });
});

