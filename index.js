const express = require('express');
require('./services/passport');


const app = express();

// instead of authRoutes(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log(`FeedbackService server listening on port ${PORT} ...`);