import { any } from "sequelize/types/lib/operators";
import User from '../../../models';

export const register = async (req: any, res: any) => {
    try {
        //console.log(User);

        console.log(req.body);

        // //TODO: Check if user exist (if user exist then throw error)

        // const user = await User.findOne({
        //     where: {
        //         email: req.body.email,
        //     }
        // });

        //TODO: Bcrypt the user password

        //TODO: Enter the new user inside our database

        //TODO: Generating our jwt token

    } catch {

    }
    res.json({ status: 1 });
}
