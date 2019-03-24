'use strict';
let DB = require('./Util/DB');

class BankDetail {

    constructor () { }

    static async getDetailFromIFSC(ifscCode) {
        let query = { ifsc: ifscCode};
        let res = await DB.fetchData(query);
        return res;
    }

    static async getBrachDetail(bankName, city) {
        let query = {$and: [{bank_name: bankName}, {city: city}]};
        console.log('query is: ', query);
        let res = await DB.fetchData(query);
        return res;
    }
}
module.exports = BankDetail;
