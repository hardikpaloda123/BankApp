'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

class DB {

    static async fetchData(query) {
        return new Promise(function(resolve, reject){
            this.connect()
            .then(client => {
                 return this.executeQuery(client, query);
            })
            .then(result => {
                resolve(result);
            })
            
        }.bind(this)).catch(error => {
         reject(error);
        })

    }

    static connect() {
        return new Promise(function(resolve, reject) {
            MongoClient.connect(url, null, function(err, client){
                if(err) {
                    reject(err);
                } else {
                    resolve(client);
                }
            })
        }.bind(this));
    }

    static  executeQuery(client, query) {
        
        const db = client.db('mydb');

        return new Promise(function(resolve, reject){
               db
                .collection('BankDetail')
                .find(query)
                .toArray((err, data) => {
                    if(err) {
                        reject(err) ;
                    } else {
                        resolve(data[0]);
                    }
                    client.close();
                  });
            });
    }
}
module.exports = DB;
