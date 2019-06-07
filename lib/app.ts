import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import { StudentRoutes } from "./routes/student.route";

class App {
  public app: express.Application;
  public usersRoute: StudentRoutes = new StudentRoutes();
  public mongoUrl: string = "mongodb://localhost/CRMdb";

  constructor() {
    this.app = express();
    this.config();
    this.usersRoute.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
}

export default new App().app;
