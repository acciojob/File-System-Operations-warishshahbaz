const fs = require("fs");

// Read and parse JSON file
const jsonContent = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(jsonContent);

// Calculate and print the total number of users
const totalUsers = users.length;
console.log(`Total number of users: ${totalUsers}`);

// Find and print the user with the highest score
let maxScoreUser = users[0];
users.forEach((user) => {
  if (user.score > maxScoreUser.score) {
    maxScoreUser = user;
  }
});
console.log(`User with highest score: ${JSON.stringify(maxScoreUser)}`);

// Sort users based on their scores in descending order
users.sort((a, b) => b.score - a.score);

// Write sorted data back to JSON file
const sortedData = JSON.stringify(users, null, 2);
fs.writeFileSync("users.json", sortedData);
