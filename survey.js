const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name} \n `);

rl.question('What is an activity you like to do? ', (activity) => {
  console.log(`AH ${activity} sounds like a fun activity \n`);

rl.question('what are your thoughts and Good Charlotte? ', (goodCharlotte) => {
  console.log(`Yes, I agree. Good Charlotte is indeed ${goodCharlotte} \n`);

  console.log(`${name} loces to do ${activity} and thinks Good Charlotte is ${goodCharlotte}`)

rl.close();
});
});
});
