const { exec } = require("child_process");

// Set port (default: 3000). For Heroku, we need to use
// the port set by the environment variable $PORT
const port = process.env.PORT || 3000;

const command = `json-server --watch faker.js --port ${port} --routes routes.json`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log("Error running exec", err);
    return;
  }
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
});
