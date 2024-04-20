export interface ICreateInvoice {
    linkvaulturl: string;
    account_bank: string;
    account_number: string;
    amount: number;
    currency: string;
    narration: string;
    debit_currency: string;
  }
  
  export interface IBillPayment {
    linkvaulturl: string;
    country: string;
    customer: string;
    amount: number;
    // amount_paid: number,
    recurrence: string;
    type: string;
  }
  
  export interface IBillCategory {
    country: string;
    category: string;
  }
  
  export interface IBillValidate {
    item_code: string;
    code: string;
    customer: string;
  }