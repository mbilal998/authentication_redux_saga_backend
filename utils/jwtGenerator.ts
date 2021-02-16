import jwt from 'jsonwebtoken';

require('dotenv').config()

const jwtGenerator = (user_id) => {
    const payload = {
        user: user_id
    };
    return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: '1hr' });
}

export default jwtGenerator;
