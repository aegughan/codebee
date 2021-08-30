const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { exec } = require("child_process");
const { tmpJSFile } = require("./commonPath.js")
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.post('/api/execute', async (req, res) => { 
    const { code } = req.body
    fs.writeFile(`${tmpJSFile}`, code, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log("File written successfully")
    })
    await exec(`node ${tmpJSFile}`, (error, stdout, stderr) => {
        if (error) {
            res.send({output: error.message});
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send({output: stderr});
            return;
        }
        res.send({output: stdout});
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));