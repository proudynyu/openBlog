const hashPass = require('../utils/hashPass')
const connection = require('../database/connection')

module.exports = ({
    async create(req, res) {
        const { name, email } = req.body;
        let { password } = req.body;

        const data = await connection('users')
            .where('email', email)
            .select('email')
            .first();

        if (!data) {
            password = hashPass.generatePass(password);

            const [id] = await connection('users').insert({
                name, 
                email,
                password
            });

            return res.json({ id });
        };

        return res.status(400).json({ error: "Email already in use" });
    }
})