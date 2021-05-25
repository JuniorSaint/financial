import * as bcrypt  from 'bcryptjs';
import config from '../infra/config'
import * as HttpStatus from "http-status";
import UserService from "../services/user-service";
import Helper from "../infra/helper";



class UserController {

    async createUser(req, res) {
        try {

            let u = await UserService.getByEmail({ email: req.body.email });
             if (!u) {
                let vm = req.body;
                vm.password = bcrypt.hashSync(req.body.password, config.bcryptSalts)
                await UserService.create(vm);
                Helper.sendResponse(res, HttpStatus.OK, 'Cadastrado com sucesso!');
             }else{
                 res.status(403).json({message: 'email já cadastrado', error: {}})
             }
        } catch (error) {
            console.error(error);
        }
    }

    async update(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            news.password = bcrypt.hashSync(req.body.password, config.bcryptSalts)
            await UserService.update(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);

        } catch (error) {
            console.error(error);
        }
    }



    async get(req, res) {

        try {
            let response = await UserService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await UserService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error(error);
        }
    }




    async delete(req, res) {
        try {
            const _id = req.params.id;
            await UserService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");

        } catch (error) {
            console.error(error);
        }
    }

}

export default new UserController();