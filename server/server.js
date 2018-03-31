const express = require('express');
const path = require('path')
const app = express();

/*publicPath Step one  */
const publicPath = express.static(path.join(__dirname , '../public'))
app.use(publicPath);

           /*publicPath Step two  */
//const publicPath = path.join(__dirname, '../public')
//app.use(express.static(publicPath));

const port = process.env.PORT || '3000';
app.set(port, 'port');
app.listen(port, ()=>{
       console.log(`Server is running on port ${port}`)
   })
