---
title: Transfer APIs
hide_title: true
id: transfer-apis
---

import Admonitions from "../../src/components/Admonition/Admonitions"

## Transfer APIs
With our APIs, initiating transfers is simple and seamless. We uphold strict security and compliance standards to ensure every transaction is processed safely and responsibly.


## Prerequisites for Initiating Bank Transfers
To execute bank transfers successfully using our endpoints, follow these steps:

**1. Perform a Bank Account Lookup**

Before initiating a transfer, it's recommended to notify your customers about the recipient details. Use the <a target="_blank" href={"../api/API Endpoints/Transfer API/resolve-bankaccount"} style={{textDecoration: "underline"}}> Resolve Bank Account Endpoint </a>, which requires the recipient's accountNumber and bankCode (a unique identifier for the bank) as input.

**2. Perform a bank transfer**

Initiate a bank transfer from your primary account created for you internally by Spotflow to an external bank account. This endpoint requires key details, including the transfer amount, a reference for future transaction reconciliation, and the recipient’s accountNumber and bankCode using the <a target="_blank" href={"../api/API Endpoints/Transfer API/create-transfer"} style={{textDecoration: "underline"}}> Create Transfer Endpoint </a>. For bulk transfers, use the <a target="_blank" href={"../api/API Endpoints/Transfer API/Bulk Transfer APIS/create-bulk-transfer"} style={{textDecoration: "underline"}}> Bulk Transfer Endpoint </a>.


