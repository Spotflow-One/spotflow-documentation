---
title: Recurring Payment
id: recurring-payment
hide_title: true
---

import Admonitions from "../../src/components/Admonition/Admonitions"





## Recurring Payment 


Spotflow offers robust recurring payment capabilities to streamline your subscription-based business operations. This consists of two flexible methods for handling recurring payments:

1. **Automated Payment Plans**: Set up a billing cycle and amount, and let Spotflow handle the rest. We'll automatically charge your customers on the specified dates.
2. **Manual Card Charging**: For complete control, manage your subscriptions and charge customer cards directly using the card token. This option requires you to handle the payment process independently.

<Admonitions type={"warning"} icon={"💳"}>
**Limited to card payments**: Subsequent payments can be processed more quickly by storing a customer's card authorization after their initial successful card transaction. Please note that recurring payments are only supported on payment methods that can be tokenized. Hence, this is currently limited to card payments.
</Admonitions>

## Payment Plans

Spotflow allows you to create payment plans that represents a recurring billing schedule for a customer. It defines the billing cycle, amount, currency, frequency, and other relevant details for your subscription products. Once a customer subscribes to a plan, Spotflow automatically handles the recurring charges on the specified dates.

**Key features of payment plans**:
- **Customization**: Define billing cycles (daily, weekly, monthly, annually, etc.), amount, and other plan-specific details.
- **Automatic charging**: Spotflow handles the recurring charges on the specified dates.

## Creating a Payment Plan

To set up a recurring billing plan, you'll need to provide the following information:

- **Plan Title**: A descriptive label for the plan, which will be used in customer communications.
- **Billing Frequency**: Specify how often you want to charge your customers. Choose from daily, weekly, monthly, quarterly, annually, or a custom interval (e.g., every 2 months).
- **Amount**: Determine the charge amount for each billing cycle. You can set this upfront or define it dynamically during payment collection.
- **Currency**: Select the currency for the charges. This has to be specified always as you can choose for it to either be in USD or in the local currency of your region.
- **Pricing Options**:  We are aware some merchants have different prices for a specific product across different regions. This allows you as a merchant to set the price of your product in the local currency of your desired different regions.

Once you've defined these parameters, use Spotflow <a target="_blank" href={"../api/API Endpoints/Subscription Plans/create-single-plan"} style={{textDecoration: "underline"}}>Create Plan</a> endpoint to establish the recurring billing structure. Here's a sample of what the request body and response looks like: 

<span style={{color: "red"}}>`POST`</span> https://api.spotflow.co/api/v1/plans

<br></br>
**Request Body For Local Currency Payments (e.g NGN, GHS, ZAF etc)**:

```yaml
{
    {
    "title": "My Plan",
    "frequency": "DAILY",
    "internalReference": "ref-newproduct",
    "pricingOptions": [
    {
      "amount": 100,
      "currency": "NGN"
    },
    {
      "amount": 10,
      "currency": "GHS"
    }
  ]
}

}
```

**Response Body For Local Currency Payments (e.g NGN, GHS, ZAF etc)**:
```yaml
 {
    "id": "4b68f6dd-06a2-44b5-ae48-846287ddae62",
    "title": "My Plan",
    "frequency": "DAILY",
    "internalReference": "ref-newproduct",
    "status": "active",
    "regions": [
        "Ghana",
        "Nigeria"
    ],
    "subscribers": 0,
    "subscriptions": 0,
    "pricingOptions": [
        {
            "amount": 100,
            "currency": "NGN"
        },
        {
            "amount": 10,
            "currency": "GHS"
        }
    ]
}
```

**Request Body For USD Payments**:

```yaml

    {
     "title": "Test Mack",
    "frequency": "DAILY",
    "internalReference": "Mack",
    "pricingOptions": [
    {
      "amount": 100,
      "currency": "USD"
    }
  ]
}
```

**Response Body For USD Payments**:
```yaml
 {
    "id": "7d5f2810-b052-43b3-891c-cdf722d690e1",
    "title": "Test Mack",
    "frequency": "DAILY",
    "internalReference": "Mack",
    "status": "active",
    "regions": [
        "Global"
    ],
    "subscribers": 0,
    "subscriptions": 0,
    "createdAt": "2025-03-20T09:51:25Z",
    "pricingOptions": [
        {
            "amount": 100,
            "currency": "USD"
        }
    ]
}
```
Alternatively, you can create a subscription plan on your dashboard via the Subscriptions page on Spotflow. 

## Adding a Customer to a Subscription

To enroll a customer in a subscription, simply reference the plan ID when initiating their first charge. This streamlined process applies to all integration methods supported by Spotflow, including <span style={{color: "red"}}>`Embed`</span>, <span style={{color: "red"}}>`Redirect`</span>, and <span style={{color: "red"}}>`Classic`</span>. Here’s a sample request and a sample response below:

**Sample Request for Recurring Payments in Foreign Currency (USD) using Spotflow Classic (our APIs):**

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "planId": "961ca3d6-0505-4bc5-8dd3-fc160ac4afc9",
    "currency": "USD",
    "localCurrency": "NGN", //not needed when currency is not set to USD. According to the local region, this can either be in NGN, GHS or KSH
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "encryptedCard": "8/5XbSZFQfvaZmY55UizZGM0HYQdkEMyHoyGw1GZ+XlXdBC+hEcluYKC5WONz1Vxkvihjxxxxxxxxxx",
    "metadata": {
        "productName": "Algo.ai",
        "SubscriptionPlan": "MonthlyPass"
    }
}

```

**Sample Response for Recurring Payments in Foreign Currency (USD) using Spotflow Classic (our APIs):**
```yaml
{
    "id": "575bea7c-148e-4835-8575-d40a0a19fd4b",
    "reference": "ref-9e9f2817-82fc-47d0-993c-a9ead96c0149",
    "spotflowReference": "SPF-FLW-d039ef320381405d976a5b097cf5e71e",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15367.90,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Approved successful",
    "rate": 1536.79,
    "region": "Nigeria",
    "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
    },
    "createdAt": "2025-02-19T09:04:40.227575Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

Ensure you authorize the payment with our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> if it’s an authorization card. 

<Admonitions type={'warning'} icon={'📌'} title={'Important'}>
Ensure consistency in currency selection by using the same currency for both the payment plan and the initial charge.
</Admonitions>
<br></br>
<Admonitions type={"note"} icon={"💳"} title={'Card Payment'}>
Please note that specifying a payment plan when processing a card payment automatically designates the card as the default payment method for subsequent subscription charges.
</Admonitions>
<br></br>

```js
<<script>
  const openCheckout = () => {
    const { CheckoutForm } = SpotflowCheckout
    const checkout = new CheckoutForm({}

    );
    checkout.setup({
      email: "customer@email.com",
      encryptionKey: "N9cCZmhZh1GITKnBMqSe5IFiljvj/xxxxx",
      merchantKey: "sk_test_6988f8d1539a48ab94xxxxx",
      planId: "3cbab046-f06a-4815-941d-d8xxxxx",
      currency: "USD",
      "localCurrency": "NGN", // not needed when currency is not set to USD, according to the local region, this can either be in NGN, GHS or KSH
      onSuccess: (value) => {
        console.log("Fully Success", { value })
      }
    });
  };
</script>
```

After the initial successful payment, Spotflow will charge the card subsequently based on the frequency set for the payment plan.

## Canceling and Activating

There are two ways to cancel your subscription:

1. You can cancel an individual customer's subscription from the Plans page on the dashboard or through the <a target="_blank" href={"../api/API Endpoints/Subscriptions/cancel-subscription"} style={{textDecoration: "underline"}}>Cancel Subscription Endpoint</a>.
2. Canceling an entire payment plan will cancel all associated subscriptions, which can also be done via the Plans page on your dashboard or through the <a target="_blank" href={"../api/API Endpoints/Subscription Plans/cancel-plan"} style={{textDecoration: "underline"}}>Cancel Plan Endpoint</a>.

Canceling a subscription or plan will trigger a webhook event.

Canceled subscriptions and plans can be activated later, via the <a target="_blank" href={"../api/API Endpoints/Subscription Plans/activate-plan"} style={{textDecoration: "underline"}}>Activate Plan</a> and <a target="_blank" href={"../api/API Endpoints/Subscription/activate-subscription"} style={{textDecoration: "underline"}}>Activate Subscription</a> endpoints respectively.

## Webhooks

Every time you attempt to charge a customer's card, an event will be sent to a specified webhook URL with the details of the charge and the result. A webhook will also be sent when a subscription is canceled.

Here are some webhook payloads examples:

**Successful Payment**:
```yaml
`{
  "event": "payment_successful",
  "data": {
    "id": "779b37d3-c6c3-4dfa-b27f-e37a1ebb06d6",
    "reference": "ref-391d6b96-1b14-4f6f-9f36-898b01c4ea6e",
    "spotflowReference": "SPF-PSK-3de8f99e598a45f2816bdaca3168fe54",
    "amount": 5,
    "currency": "USD",
    "localAmount": 8497.5,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
      "id": "eb2ed970-bc0f-480d-b0f0-03085f206c48",
      "email": "customer@email.com"
    },
    "rate": 1699.5,
    "region": "Nigeria",
    "card": {
      "type": "Visa",
      "firstSix": "411111",
      "lastFour": "2555"
    },
    "createdAt": "2025-04-25T12:38:23Z",
    "metadata": {
      "title": "Creator",
      "productName": "Gab"
    }
  }
}`
```
<br></br>
<Admonitions type={"warning"} icon={"💻"} title={'Webhooks'}>
Spotflow provides webhooks to notify you of payment events (e.g., successful payment, failed payment, subscription canceled).
</Admonitions>

**Canceled Subscription**:

```yaml
{
  "event": "subscription_cancelled",
  "data": {
    "id": "7bbcbcef-1cbb-4bf2-8b27-9200c4d6d0c6",
    "customerId": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
    "planId": "961ca3d6-0505-4bc5-8dd3-fc160ac4afc9",
    "status": "cancelled",
    "startDate": "2025-02-19T09:03:26Z",
    "nextPaymentDate": "2025-02-20T09:03:26Z",
    "createdAt": "2025-02-19T09:03:27Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
   }
 }
```

**Failed Payment**:

```yaml
{
    "event": "payment_failed",
    "data": {
        "id": "808ce8c4-a0b9-47d2-9cf9-f6d1a6666da3",
        "reference": "ref-3578ac2c-254d-4c49-a9db-6a1a8cd7abdf",
        "spotflowReference": "SPF-PSK-f42a5b22cc5944729939cfaebe7f91bf",
        "amount": 100,
        "currency": "NGN",
        "channel": "card",
        "status": "failed",
        "customer": {
            "id": "af8e305d-cfbc-44c1-b480-ada5df1a173d",
            "email": "deborah+oo@spotflow.one"
        },
        "providerMessage": "Transaction declined. Please use the test card.",
        "rate": 1699.5,
        "region": "Nigeria",
        "card": {
            "type": "Visa",
            "firstSix": "408412",
            "lastFour": "2787"
        },
        "createdAt": "2025-04-25T09:21:45.179154Z",
        "metadata": {
            "SubscriptionPlan": "Daily Pass",
            "productName": "Peach Perfect"
        }
    }
}
```

## Card Tokenization

To ensure secure handling of customer card information, Spotflow utilizes card tokenization. Tokenization allows you to implement recurring payments by saving a *token* representing the customer's card and using that on subsequent charges. When a customer provides their card details, we replace the sensitive information with a unique token. This token can then be used for subsequent transactions without exposing the original card data.

Key benefits of card tokenization:
- **Enhanced security**: Protects sensitive card information from breaches.
- **Simplified payment processing**: Streamline recurring payments with tokenized cards.
- **PCI compliance**: Helps meet PCI-DSS compliance requirements.

:::warning[Note]
Card tokenization is a prerequisite for recurring payments.

Also, You should never save a customer's card details; the details are represented by a *token*, which is what you save.
:::

## See more

To learn more about what you can do with plans on Spotflow, check out our <a href={"../api/API Endpoints/Subscription Plans/create-single-plan"} target="_blank" style={{textDecoration: "underline"}}>API Reference</a>. If you've got any questions, don’t hesitate to reach out to our support team at **support@spotflow.one**.