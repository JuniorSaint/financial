import * as jwt from "jsonwebtoken";
import Configs from "./config"

class Auth {

//     validate(req, res, next ) {

//         const token = req.headers['x-access-token'];

//         if(token){

//             jwt.verify(token, Configs.secret, function(err, decoded){

//                 if(err){
//                     return res.status(403).send({
//                         success: false,
//                         message: '403 - token inválido'
//                     });
//                 }else{
//                     next();
//                 }

//             })
//         }else {

//             return res.status(401).send({
//                 success: false,
//                 message: '401 - não autorizado'
//             })
//         }
//     }
}

export default new Auth();