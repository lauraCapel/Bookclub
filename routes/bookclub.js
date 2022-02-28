var express = require('express');
var router = express.Router();
const db = require("../model/helper");


// router.get('/', async (req, res) => {
//     let sql = 'SELECT * FROM bookclub';  // all SELECTs begin with this...
//     db(sql)
//         .then(results => {
//             res.send(results.data);
//         })
//         .catch(err => res.status(500).send(err));
//     });




/*
Using query parameters to filter a "GET all" route
​
This URL:
GET /cats?breed=manx&maxAge=5
Will generate this SQL:
SELECT * FROM cats WHERE breed = 'manx' AND age <= 5;
*/

// GET BOOK FILTER
/**
 * Helpers
 **/

function makeWhereFromFilters(q) {
    let filters = [];

    if (q.name) {
        filters.push(`name = '${q.name}'`);
    }
    if (q.num_members) {
        filters.push(`num_members = '${q.num_members}'`);
    }
    if (q.current_book) {
        filters.push(`current_book = '${q.current_book}'`);
    }

    // Return all filters joined by AND
    return filters.join(' AND ');
}
// /**
//  * Routes
//  **/

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM bookclub';  // all SELECTs begin with this...
    let where = makeWhereFromFilters(req.query);  // make optional WHERE-part from query parameters
    // If query parameters were passed, append them to the SELECT statement
    if (where) {
        sql += ` WHERE ${where}`;
    }
    db(sql)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

// GET BOOK BY ID
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let sql = `SELECT * FROM bookclub WHERE id = ${id}`;
    
    try {
        let result = await db(sql);
        if (result.data.length === 0) {
            res.status(404).send({ error: "Bookclub not found!" });
        } else {
            res.send(result.data[0]);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    let { name, category, num_members, current_book } = req.body;
    let sql = `insert into bookclub (name, category, num_members, current_book) values ('${name}', '${category}', ${num_members}, ${current_book})`;

    try {
        await db(sql);
      let result = await db("select * from bookclub");
        res.status(201).send(result.data);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// EDIT BOOKCLUB BY ID
// router.put("/:id", async (req, res) => {
//     let id = req.params.id;
//     let { name, category, num_members, current_book } = req.body;
//     let sqlCheckID = `SELECT * FROM bookclub WHERE id = ${id}`;
//     let sqlUpdate = `UPDATE bookclub SET name = '${name}', category = '${category}', num_members = ${num_members}, current_book = ${current_book}  WHERE id = ${id}`;
    
//     try {
//         let result = await db(sqlCheckID);
//         if (result.data.length === 0) {
//         res.status(404).send({ error: "Bookclub not found!" });
//         } else {
//         await db(sqlUpdate);
//         let result = await db("select * from bookclub");
//         res.status(201).send(result.data);
//         }
//     } catch (err) {
//         res.status(500).send({ error: err.message });
//     }
// });

// DELETE BOOKCLUB
router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let sqlCheckID = `SELECT * FROM bookclub WHERE id = ${id}`;
    let sqlDelete = `DELETE FROM bookclub WHERE id = ${id}`;
    try {
        let result = await db(sqlCheckID);
        if (result.data.length === 0) {
        res.status(404).send({ error: "Bookclub not found!" });
        } else {
            await db(sqlDelete);
            let result = await db("select * from bookclub");
            res.status(201).send(result.data);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;