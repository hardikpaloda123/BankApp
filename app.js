let app  = require('express')();
let BankDetail = require('./models/bankDetail');
let Response = require('./models/APIResponse');
const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/branchDetail/', async function(req, res) {
  try {
      let ifscCode = req.query.ifscCode;
      let result = await BankDetail.getDetailFromIFSC(ifscCode);
      Response.success(res, null, {data: result});
  } catch (error) {
      console.log(error);
      Response.serverError(res, null);
  }
});


app.get('/getAllBraches/', async function(req, res) {
  try {
      let bankName = req.query.bankName;
      let city = req.query.city;
      let result = await BankDetail.getBrachDetail(bankName, city);
      Response.success( res, null, {data: result});
  } catch (error) {
      console.log(error);
      Response.serverError(res, null);
  }
});



