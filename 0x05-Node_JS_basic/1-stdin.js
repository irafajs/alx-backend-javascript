console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input) {
    process.stdout.write(`Your name is: ${input}\n`);
  } else {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
