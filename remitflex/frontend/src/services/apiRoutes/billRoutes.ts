import { hostRoute } from "../routesHelper";

const billsRoute = `${hostRoute}/bill`;

export const billsCategories = `${billsRoute}/category`;

export const validateBill = `${billsRoute}/validate`;

export const createBillInvoice = `${billsRoute}/invoice/create`;
