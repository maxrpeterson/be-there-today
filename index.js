const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('client/dist'));

app.listen(port, e => {
  if (e) {
    console.error(e);
    process.exit(1);
  } else {
    console.log(`Server running and listening on port ${port}`);
  }
});
