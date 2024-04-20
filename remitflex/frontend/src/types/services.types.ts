export interface ICreateInvoice {
    account_bank: string;
    account_number: string;
    amount: number;
    currency: string;
    narration: string;
    debit_currency: string;
  }
  
  export interface IBillPayment {
    country: string;
    customer: string;
    amount: number;
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
