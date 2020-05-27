
const mongoose = require('mongoose');
const password = "R@tamacue1"
const URI = `mongodb+srv://pedro:${password}@cluster0-rw1t7.mongodb.net/mern-tasks?retryWrites=true&w=majority`;

mongoose
/* .connect('mongodb+srv://cluster0-rw1t7.mongodb.net/shop?retryWrites=true&w=majority',{
  user: 'pedro',
  pass: 'R@tamacue1',
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}) */
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(db => {
    console.log('Connected to DB..');
})
.catch(err => console.log(err));
