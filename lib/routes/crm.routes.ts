import { Request, Response } from "express";
import { ContactController } from "../controllers/crm.controller";

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request successfull!" });
    });

    // Contact
    app
      .route("/contact")
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact);

    // Contact detail
    app
      .route("/contact/:contactId")
      .get(this.contactController.getContactWithId)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
