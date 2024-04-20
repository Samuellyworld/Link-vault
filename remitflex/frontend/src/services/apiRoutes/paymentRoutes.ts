import { hostRoute } from "../routesHelper";

const paymentRoute = `${hostRoute}/payment`;

export const currentRate = `${paymentRoute}/rate`;

export const createInvoice = `${paymentRoute}/invoice/create`;

// export const billPayment = `${paymentRoute}/bill`;
