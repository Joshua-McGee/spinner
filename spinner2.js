charArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
time = 100
for (let char of charArr) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
time += 200;
};