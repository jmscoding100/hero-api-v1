
const con = require('../../config/dbconfig')

const speciesDao = {
    table: 'species',
    ...require('../daoCommon'),
    findHeroesBySpecies: (res, table, species)=>{
        con.query(
            `SELECT h.hero_id, h.hero_name, h.first_name, h.last_name, h.alias, f.franchise, s.species, h.place_of_origin, h.first_app, h.alignment, h.img_url
            FROM hero h
            JOIN franchise f using (franchise_id)
            JOIN species s using (species_id)
            WHERE s.species = '${species}'
            ORDER BY h.hero_id;`,
            (error, rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(console.log(`DAO ERROR: ${table}`, error))
                }
            }
        )
    }
}


module.exports = speciesDao