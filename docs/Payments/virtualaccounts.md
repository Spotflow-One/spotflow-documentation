---
title: Virtual Accounts
hide_title: true
id: virtual-accounts
pagination_next: null
---

## Virtual Accounts
Virtual accounts are payment routing tools that automatically channel incoming payments directly to your account. They function as intelligent payment conduits rather than independent storage containers, providing seamless payment collection without fund segregation.

## Key Features

**1. Payment Routing:**
Automatically forward all incoming payments to your account.

**2. No Fund Storage:**
Virtual accounts do not hold or store money independently.

**3.Simplified Setup:**
No BVN verification required during creation.

**4. API-Driven:**
All virtual account operations are performed through API endpoints.

## Limitations

Important Restrictions:

**1. No outgoing payments:**
This cannot process outbound transfers or payments.

**2. No terminal support:**
This cannot be linked to payment terminals or POS devices.

**3. Routing only:**
This functions exclusively as payment collection points.


**Creating Virtual Accounts**

- To Create virtual accounts, use the <a target="_blank" href={"../api/API Endpoints/Virtual Accounts/create-virtualaccounts"} style={{textDecoration: "underline"}}> virtual account creation API endpoint </a>.
- Specify account parameters.
- No BVN verification required during creation.
- Returns unique virtual account number.


**Fetching Virtual Account Data**

- To retrieve individual virtual account information by account ID, use the <a target="_blank" href={"../api/API Endpoints/Virtual Accounts/fetch-virtualaccounts"} style={{textDecoration: "underline"}}> fetch virtual account by ID endpoint</a>.
- View payment history via your dashboard.
- Access account status.

**Listing Virtual Accounts**

- To retrieve all virtual accounts associated with your main account (either test or live), use the <a target="_blank" href={"../api/API Endpoints/Virtual Accounts/list-virtualaccounts"} style={{textDecoration: "underline"}}> list virtual accounts endpoint</a>.
- Apply filters for active accounts as desired.
- Get paginated responses for efficient data handling.
- Get summary information for each virtual account.

Note that you should receive webhook and email notifications when a created virtual account is funded. Configure the endpoint in your system to receive payment status updates whenever a created virtual account is funded. Update and add your Webhook URL on the merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Webhook URL.
