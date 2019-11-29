/* globals restdb */
class DBAdapter {
  db = null;
  connect(idToken) {
    if (!this.db) {
      this.db = new restdb(idToken, { "logging": false, "jwt": true });
      console.log('connected to db', this.db);

      this.testQuery()
    }
  }

  testQuery() {
    let query = {}; // get all records
    let hints = { "$max": 3, "$orderby": { "_id": -1 } }; // top 3, sort by creation id in descending order
    this.db.items.find(query, hints, function (err, res) {
      if (!err) {
        // res is an array of items instances
        //$('#apidata').text(JSON.stringify(res, null, '  '));
        console.log('items loaded', res);
      }
    });
  }
}

export default new DBAdapter();