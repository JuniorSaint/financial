import UserModel from '../repositories/user-repository';
import * as bcrypt from 'bcryptjs';
import Configs from '../infra/config';
import * as jwt from 'jsonwebtoken';

class AuthController {


    async login(req, res) {

        try {
            const password = req.body.password;
            const email = req.body.email;

            const user = await UserModel.findOne({ email: email, active: true }).select('-password').lean();
            if (!user) {
                return res.status(404).json({ message: 'Usuário ou senha inválidos ou usuário inativo' });
            }
            console.log(user)

            const auth_err = await (password == '' || password == null || !user);

            if (!auth_err) {
                let token = await jwt.sign({ _id: user._id }, Configs.keyJWT, { expiresIn: Configs.expiresJWT });

                return res.json({ ...user, token: token });
            } else {
                return res.status(404).json({
                    message: 'suas credenciais não conferem'
                })
            }

        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }



}


export default new AuthController();