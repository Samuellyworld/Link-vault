import { hostRoute } from "../routesHelper";

const paymentRoute = `${hostRoute}/payment`;

export const currentRate = `${paymentRoute}/rate`;

export const createInvoice = `${paymentRoute}/create-invoice`;

export const billPayment = `${paymentRoute}/bill`;
