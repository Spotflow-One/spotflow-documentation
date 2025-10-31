---
title: Sub Accounts
hide_title: true
id: sub-accounts
---
import Admonitions from "../../src/components/Admonition/Admonitions"

## Sub Accounts
Sub accounts are API-only financial containers that function as dedicated pockets where funds can be stored and managed independently. Unlike virtual accounts that simply route payments, sub accounts maintain their own balances and serve as genuine repositories for money within your account ecosystem.


## Key Features

**1. Fund Storage:**
Sub accounts hold and maintain balances independently from your main account.

**2. API-Exclusive Creation:**
All sub account operations are performed through API endpoints.

**3.No BVN Required:**
Sub accounts can be created without Bank Verification Number submission

**4. Independent Management:**
Each sub account operates with its own identifier, balance, and transaction history.


## Prerequisites for Creating Sub Accounts

<Admonitions type={"warning"} title={"Important:"} icon={"👌"}>
{
    <i>Merchant configuration is not enabled by default on new accounts.</i>
}
</Admonitions>

Before creating sub accounts, you must:

**1. Complete account signup and KYB onboarding**

**2. Contact support at [support@spotflow.one](mailto:support@spotflow.one) to request merchant configuration activation**

**3. Wait for activation confirmation before attempting sub account creation**

**4. Spotflow API Credentials:**

Obtain your SECRET_KEYs from the Spotflow merchant dashboard for authorization when testing and integrating.


**Creating Sub Accounts**

- To Create sub accounts, use the <a target="_blank" href={"../api/API Endpoints/Sub Accounts/create-subaccounts"} style={{textDecoration: "underline"}}> sub account creation API endpoint</a>.
- Specify account parameters (name, currency, configuration).
- No BVN verification required during creation.
- Returns unique sub account identifier and details.


**Fetching Sub Account Data**

- To retrieve individual sub account information by account ID, use the <a target="_blank" href={"../api/API Endpoints/Sub Accounts/fetch-subaccount-by-id"} style={{textDecoration: "underline"}}> fetch sub account by ID endpoint</a>.
- Access real-time balance and transaction history via the <a target="_blank" href={"../api/API Endpoints/Sub Accounts/get-accountbalance.md"} style={{textDecoration: "underline"}}> fetch balances endpoint </a> and your merchant dashboard.
- Get account status and configuration details.

**Listing Sub Accounts**

- To retrieve all sub accounts associated with your main account, use the <a target="_blank" href={"../api/API Endpoints/Sub Accounts/list-subaccounts"} style={{textDecoration: "underline"}}> list sub accounts endpoint</a>. You can also use this endpoint to get your main account details.
- Apply filters and sorting options as desired.
- Get paginated responses for large account lists.
- Get summary information for each sub account.
