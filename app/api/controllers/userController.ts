import { User } from '../../../models';
import bcrypt from 'bcrypt';
import jwtGenerator from '../../../utils/jwtGenerator';

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

        //TODO: Generating our jwt token
        const token = jwtGenerator(newuser.dataValues['id']);

        res.json({ token: token, data: newuser.dataValues });

    } catch (e) {
        res.json({ message: e.message });
    }
}

export const login = async (req: any, res: any) => {
    try {
        // TODO: Check if user does not exit (if not then we throw error)
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!user) {
            return res.status(401).send("Password or Email is Incorrect");
        }

        // TODO: Check if incomming password is the same with database password
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {

            return res.status(401).send("Password or Email is Incorrect");
        }

        // TODO: Given them jwt token
        const token = jwtGenerator(user.id);

        res.json({ token: token });

    } catch (e) {
        res.json({ message: e.message });
    }
}

export const is_verify = async (req: any, res: any) => {
    try {
        console.log("I am Here");
        res.json(true);
    } catch (e) {
        res.json({ message: e.message });
    }

}
