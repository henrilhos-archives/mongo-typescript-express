import { ContactController } from "../controllers/crm.controller";

export class CrmRoutes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
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
