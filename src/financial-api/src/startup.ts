import * as express from 'express';
import DataBase from './infra/db';
import userRouter from './routers/user-router';
import categoryRouter from './routers/category-router';
import entryRouter from './routers/entry-router';
import authRouter from './routers/auth-router';


import * as cors from 'cors';
import auth from './infra/auth';

class StartUp {

    public app: express.Application;
    private _db: DataBase;


    constructor() {
        this.app = express();
        this._db = new DataBase();
        this._db.createConnection();
        this.middler();
        this.routes();

    }

    enableCors() {
        const options: cors.CorsOptions = {
          methods: 'GET,OPTIONS,PUT,POST,DELETE,PATCH',
          origin: '*'
        };
    
        this.app.use(cors(options));
      }

    middler() {
        this.enableCors();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        

        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });        
        // this.app.use(auth.validate);
        this.app.use('/', authRouter);               
        this.app.use('/', userRouter);        
        this.app.use('/', entryRouter);        
        this.app.use('/', categoryRouter);        
    }



}


export default new StartUp();