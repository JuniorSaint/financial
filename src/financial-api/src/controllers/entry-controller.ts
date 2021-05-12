import EntryService from "../services/entry-service"
import * as HttpStatus from "http-status";
import Helper from "../infra/helper"
import request = require("request");

class EntryContoller {

    async getByDate(req, res) {
        try {
            let dateIni = req.params.dateIni;
            let dateEnd = req.params.dateEnd;

            let dateRes = await EntryService.getDate(dateIni, dateEnd);
            Helper.sendResponse(res, HttpStatus.OK, dateRes);

        } catch (error) {
            console.error(error);
        }
    }

    async getByEntry(req, res) {
        try {

            let dateRes = await EntryService.getByEntry();
            Helper.sendResponse(res, HttpStatus.OK, dateRes);

        } catch (error) {
            console.error(error);
        }
    }

    async get(req, res) {

        try {
            let response = await EntryService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await EntryService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error(error);
        }
    }

    async createEntry(req, res) {
        try {
            let vm = req.body;
            await EntryService.create(vm);
            Helper.sendResponse(res, HttpStatus.OK, "Cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }

    async update(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await EntryService.update(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);

        } catch (error) {
            console.error(error);
        }
    }

    async delete(req, res) {
        try {
            const _id = req.params.id;
            await EntryService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");

        } catch (error) {
            console.error(error);
        }
    }

}

export default new EntryContoller();