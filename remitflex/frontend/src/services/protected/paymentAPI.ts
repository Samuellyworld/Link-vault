import * as paymentRoute from "../apiRoutes/paymentRoutes";
import { protectedGet, protectedPost } from "../apiHelper";
import { ICreateInvoice} from "@/types/services.types";

export const paymentControl = {
  getNGNrate: async () => {
    return await protectedGet(paymentRoute.currentRate);
  },
  createInvoice: async (remit: ICreateInvoice) => {
    return await protectedPost(paymentRoute.createInvoice, remit);
  },
};
