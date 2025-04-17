const con = require('../../config/dbconfig')

const franchiseDao = {
    table: 'franchise',
    ...require('../daoCommon'),
    findHeroesByFranchise: (res, table, franchise)=>{
        con.query(
            `SELECT h.hero_id, h.hero_name, h.first_name, h.last_name, h.alias, f.franchise, s.species, h.place_of_origin, h.first_app, h.alignment, h.img_url
            FROM hero h
            JOIN franchise f using (franchise_id)
            JOIN species s using (species_id)
            WHERE f.franchise = '${franchise}'
            ORDER BY h.hero_id;`,
            (error, rows) =>{
                if(!error) {
                    res.json(rows)
                } else {
                    console.log(`DAO ERROR : ${table}`, error)
                }
            }
        )
    }
}


module.exports = franchiseDao