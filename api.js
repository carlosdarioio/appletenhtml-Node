var  Db = require('./dboperations');
var  Order = require('./order');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();
//https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});
 
 
router.route('/orders').get((request, response) => {
  Db.getOrders().then((data) => {
    response.json(data[0]);
  })
})


router.route('/test').get((request, response) => {  
    response.json('test');  
})

router.route('/orders/:id').get((request, response) => {
  Db.getOrder(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/orders').post((request, response) => {
  let  order = { ...request.body }
  Db.addOrder(order).then(data  => {
    response.status(201).json(data);
  })
})
  
  
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);