
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Start vite in production mode
require('vite/lib/server').create({
  root: __dirname,
  mode: 'production'
}).listen(port, () => {
    console.log(`Server started on port ${port}`);
});
