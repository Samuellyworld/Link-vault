// importing relevant modules
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { Response, Request } from "express";
import Flutterwave from "flutterwave-node-v3";

import { defaultConfig } from "../config/config";
import { getVault } from "link-vault";
import algosdk from "algosdk";

const algodToken = "";
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);
const url = "https://min-api.cryptocompare.com/data/price?fsym=USDC&tsyms=NGN";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Apikey ${defaultConfig.CC_API_KEY}` // Add any other headers as needed
});

const flw = new Flutterwave(defaultConfig.FLW_PUBLIC_KEY, defaultConfig.FLW_SECRET_KEY);

const USDCNGNRate = async () => {
  // Fetch USDC rate
  const result = await fetch(url, {
    method: "GET",
    headers: headers
  });

  const data = await result.json();

  return data.NGN;
};

// Powered By Crypto Compare
export const getRate = async (req: Request, res: Response) => {
  const currentRate = await USDCNGNRate();

  //response
  res.status(200).json({
    rate: currentRate
  });
};

// Initialize a Bill payment transaction.
export const initializeBillPayment = async (req: Request, res: Response) => {
  const linkvaulturl = req.body.linkvaulturl;
  const amount = req.body.amount;
  const rate = await USDCNGNRate();
  const amountUSD = Number((amount / rate).toFixed(2));

  try {
    const params = await algodClient.getTransactionParams().do();
    const vault: any = await getVault(linkvaulturl);
    console.log(defaultConfig.ASSET_ID, vault);

    const txnParams = {
      from: vault.address,
      to: defaultConfig.MERCHANT_ADDRESS,
      assetIndex: defaultConfig.ASSET_ID, // USDC ASSET ID
      amount: amountUSD * 10 ** 6, // 1 for NFT
      fee: 1000, // Transaction fee (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      suggestedParams: params
    };

    const sk = await vault.keypair.privateKey;
    const pk = await vault.keypair.publicKey;
    const vaultSK = new Uint8Array((await sk.length) + (await pk.length));

    vaultSK.set(await sk, 0);
    vaultSK.set(await pk, await sk.length);

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      txnParams.from, // sender's address
      txnParams.to, // recipient's address
      undefined, // closeRemainderTo
      undefined,
      txnParams.amount, // amount of assets to send
      undefined,
      txnParams.assetIndex, // asset index
      txnParams.suggestedParams
    );

    const signedTxn: any = algosdk.signTransaction(txn, vaultSK);

    const { txId } = await algodClient.sendRawTransaction(signedTxn.blob).do();
    const result = await algosdk.waitForConfirmation(algodClient, txId, 4);

    req.body.reference = await txId;
    const payload = {
      country: req.body.country,
      customer: req.body.customer,
      amount: req.body.amount,
      recurrence: req.body.recurrence,
      type: req.body.type,
      reference: req.body.reference
    };

    try {
      const response = await flw.Bills.create_bill(payload);
      response.txId = txId;

      res.status(200).json({
        message: "Transaction Initialized.",
        data: response
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "Couldn't initialize Bill Payment, Please Contact Support",
          error
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Couldn't initialize transaction from Linkvault."
      }
    });
  }
};

//Get Bank List
export const getBanks = async (req: Request, res: Response) => {
  try {
    const payload = { country: "NG" };

    const response = await flw.Bank.country(payload);
    console.log(response);
    res.status(200).json({
      data: response
    });
  } catch (error) {
    res.status(500).json({
      error: {
        message: `Error Fetching Banks, ${error}`
      }
    });
  }
};

//Resolve Customers Account

export const resolveAccount = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await flw.Misc.verify_Account(payload);
    res.status(200).json({
      data: response
    });
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Couldnt Resolve User"
      }
    });
  }
};

// Initialize a Bill payment transaction.
export const initializePayment = async (req: Request, res: Response) => {
  const linkvaulturl = req.body.linkvaulturl;
  const amount = req.body.amount;
  const rate = await USDCNGNRate();
  const amountUSD = Number((amount / rate).toFixed(2));

  try {
    const params = await algodClient.getTransactionParams().do();
    const vault: any = await getVault(linkvaulturl);
    console.log(defaultConfig.ASSET_ID, vault);

    const txnParams = {
      from: vault.address,
      to: defaultConfig.MERCHANT_ADDRESS,
      assetIndex: defaultConfig.ASSET_ID, // USDC ASSET ID
      amount: amountUSD * 10 ** 6, // 1 for NFT
      fee: 1000, // Transaction fee (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      suggestedParams: params
    };

    const sk = await vault.keypair.privateKey;
    const pk = await vault.keypair.publicKey;

    const vaultSK = new Uint8Array(sk.length + pk.length);
    vaultSK.set(sk, 0);
    vaultSK.set(pk, sk.length);

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      txnParams.from, // sender's address
      txnParams.to, // recipient's address
      undefined, // closeRemainderTo
      undefined,
      txnParams.amount, // amount of assets to send
      undefined,
      txnParams.assetIndex, // asset index
      txnParams.suggestedParams
    );

    const signedTxn: any = algosdk.signTransaction(txn, vaultSK);

    const { txId } = await algodClient.sendRawTransaction(signedTxn.blob).do();
    const result = await algosdk.waitForConfirmation(algodClient, txId, 4);

    req.body.reference = await txId;
    req.body.callback_url = "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d";

    const payload = {
      account_bank: req.body.account_bank, //This is the recipient bank code. Get list here :https://developer.flutterwave.com/v3.0/reference#get-all-banks
      account_number: req.body.account_number,
      amount: req.body.amount,
      narration: req.body.narration,
      currency: req.body.currency,
      reference: req.body.reference, //This is a merchant's unique reference for the transfer, it can be used to query for the status of the transfer
      callback_url: req.body.callback_url,
      debit_currency: req.body.debit_currency
    };
    try {
      const response = await flw.Transfer.initiate(payload);
      response.txId = txId;
      res.status(200).json({
        message: "Transaction Initialized.",
        data: response
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "Couldn't initialize Remit Payment, Please Contact Support"
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: {
        message: "Couldn't initialize transaction from Linkvault."
      }
    });
  }
};
