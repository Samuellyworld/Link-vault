import * as billRoutes from "../apiRoutes/billRoutes";
import { protectedPost } from "../apiHelper";
import { IBillValidate, IBillCategory } from "@/types/services.types";

export const billings = {
  getCategories: async (services: IBillCategory) => {
    return await protectedPost(billRoutes.billsCategories, services);
  },
  validate: async (bill: IBillValidate) => {
    return await protectedPost(billRoutes.validateBill, bill);
  }
};
