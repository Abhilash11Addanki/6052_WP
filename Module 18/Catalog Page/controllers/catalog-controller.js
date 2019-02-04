const fs = require('fs');
let rawdata = fs.readFileSync('public/assets/catalog.json');
let data = JSON.parse(rawdata);

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('catalog', {catalogs: data.products});
    });
    app.get('/edit/:id-:name-:description-:quantity', function(req, res) {
        rawdata = fs.readFileSync('public\\assets\\catalog.json');
        data = JSON.parse(rawdata);
        data.products[req.params.id].title=req.params.name
        data.products[req.params.id].description=req.params.description
        data.products[req.params.id].quantity=req.params.quantity

        console.log(data);
        updated = JSON.stringify(data);
        fs.writeFileSync('public\\assets\\catalog.json',updated);

        res.send(req.params);
    });

    app.get('/delete/:id', function(req, res) {
        rawdata = fs.readFileSync('public\\assets\\catalog.json');
        data = JSON.parse(rawdata);
        temp = []
        for (var i = 0; i < data.products.length;i++) {
            if (i!=req.params.id) {
                temp.push(data.products[i]);
            }
        }
        data.products=temp;

        updated = JSON.stringify(data);
        fs.writeFileSync('public\\assets\\catalog.json',updated);

        res.send(req.params);
    });
};