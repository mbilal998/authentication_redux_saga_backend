import { any } from "sequelize/types/lib/operators";
import { User } from '../../../models';
import bcrypt from 'bcrypt';

export const register = async (req: any, res: any) => {
    try {
        //TODO: Check if user exist (if user exist then throw error)
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (user) {
            return res.status(401).send("User Already Exist");
        }

        //TODO: Bcrypt the user password

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(req.body.password, salt);

        //TODO: Enter the new user inside our database
        const data = {
            'email': req.body.email,
            'password': bcryptPassword,
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'company': req.body.company,
            'address': req.body.address,
            'designation': req.body.designation
        }
        const newuser = await User.create(data);
        res.json(newuser.dataValues);

        //TODO: Generating our jwt token

    } catch {

    }
    res.json({ status: 1 });
}
