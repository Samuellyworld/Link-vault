import * as paymentRoute from "../apiRoutes/paymentRoutes";
import { protectedGet, protectedPost } from "../apiHelper";
import { ICreateInvoice, IBillPayment } from "@/types/services.types";

export const paymentControl = {
  getNGNrate: async () => {
    return await protectedGet(paymentRoute.currentRate);
  },
  createInvoice: async (remit: ICreateInvoice) => {
    return await protectedPost(paymentRoute.createInvoice, remit);
  },
  billPayment: async (bill: IBillPayment) => {
    return await protectedPost(paymentRoute.billPayment, bill);
  }
};
