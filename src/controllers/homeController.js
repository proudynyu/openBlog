const connection = require('../database/connection')

module.exports =({
    async index(req, res) {
        const blogs = await connection('blogs').select('*');

        return res.json({ blogs })
    } 
})