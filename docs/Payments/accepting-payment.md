---
title: Accepting Payment
hide_title: true
id: accepting-payment
---

## Accepting Payment

import Admonitions from "../../src/components/Admonition/Admonitions"

<!-- <div class="accepting-payment"> -->
<!-- :::note[To summarize]
*Payments are processed by creating a transaction using either our API, JavaScript libraries, Inline JS, or SDKs.*
::: -->
<Admonitions type={"warning"} title={"To Summarize"} icon={"👌"}>
{
    <i>Payments are processed by creating a transaction using either our API, JavaScript libraries, Inline JS, or SDKs.</i>
}
</Admonitions>

<br></br>

At Spotflow, we understand that every business is unique, which is why we offer a diverse range of payment solutions to cater to the specific needs of your business.

**For seamless in-app or website checkout**:

- **Spotflow Embed**: Our client-side integration provides a smooth and intuitive checkout experience for your customers. By embedding our JavaScript library directly into your checkout page, you can create a smooth payment flow without redirecting users away from your site. We handle the entire payment process, from initiating the transaction to delivering payment confirmation.

**For fast, secure payments without integration:** 

- **Spotflow Redirect**: Spotflow Redirect offers a hassle-free payment collection solution that eliminates the need for direct payment gateway integration on your website. Simply initiate a payment collection request through our API, and we'll provide a secure checkout URL that redirects your customers to a dedicated payment page to complete their transactions. This process saves development time and ensures a smooth payment experience.

**For businesses with custom payment flows**:

- **Spotflow Classic**: If you prefer to build your own unique payment experience, our Payment API empowers you to create custom payment flows tailored to your business. You have full control over the user interface and payment collection process while leveraging Spotflow's robust payment processing capabilities.


<Admonitions type={"warning"} icon={"👌"}>
    When a payment is successful, Spotflow notifies you by sending a "payment_successful" webhook event to the designated webhook URL you provide. Learn more about using <a style={{textDecoration: "underline"}} target="_blank" href={"https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work"}>webhooks</a>
</Admonitions>


With Spotflow, you can choose the payment solution that best aligns with your business goals and technical capabilities. Our dedicated support team is always ready to assist you in selecting the optimal solution and providing guidance throughout the integration process.

:::warning[Note]
**For maximum security and to prevent unauthorized access, always keep your Spotflow secret key strictly confined to your server environment**. Exposing it on the client-side creates a significant security risk. To ensure the integrity of your application and protect sensitive data, all interactions with the Spotflow API must be initiated and managed exclusively from your server while your frontend gets the response from your server.
:::
<!-- </div> -->

## Prerequisites for Accepting Card Payments with Spotflow Classic

**1. Access to Spotflow Dashboard:**

After successful sign up on app.spotflow.co, log in and visit your merchant dashboard.

**2. Account Activation**

- **Verification Required**: Ensure your Spotflow account is fully activated and verified.

**3. Merchant Configuration**

- **Default Disabled:** By default, merchant configuration for setting regions and service providers is not enabled on new accounts. 
- **Enablement Request:** To accept payments successfully, contact our support team at support@spotflow.one and request merchant configuration activation for your account.

**3. PCI-DSS Compliance**

- **Certification Requirement:** To process card payments through our Payment APIs, you must be PCI-DSS (Payment Card Industry Data Security Standard) certified.
- **Level Requirement:** Spotflow may require a specific PCI-DSS compliance level (e.g., Level 1). Please consult with Spotflow support at [support@spotflow.one](mailto:support@spotflow.one) for more details.

**4. Spotflow API Credentials:**

Obtain your SECRET_KEY from the Spotflow merchant dashboard.

**5. Configure Webhook URL:**

Configure the endpoint in your system to receive payment status updates. Update and add your Webhook URL on the merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Webhook URL.

**6. Add Callback URL:**

Update and add your Callback URL to your Spotflow merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Callback URL.


## PCI-DSS: Protecting Your Customers

The Payment Card Industry Data Security Standard (PCI-DSS) is a comprehensive set of security requirements designed to safeguard cardholder data. By adhering to PCI-DSS, any business/organization can significantly reduce the risk of data breaches and fraud. This standard applies to any entity that handles cardholder information, making it essential for maintaining customer trust.

To learn more about PCI-DSS compliance, visit the PCI Security Standards Council <a target="_blank" href={"https://www.pcisecuritystandards.org/"}>official website</a>.

## Accepting Card Payments with Spotflow Classic

**Firstly**, To accept card payments with our Payment API, collect the required card payment details from your customer. This details which you would send to our endpoint should be structured following this specified format: 

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/payments

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 20,
    "currency": "USD",
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "card": {
        "pan": "5531886652142950",
        "cvv": "564",
        "expiryMonth": "09",
        "expiryYear": "32"
    }
}
```

**Request Body Parameters**

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Specify a unique reference ID generated by your company to identify each customer.</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|
| localCurrency <br></br> <span style={{color: "red"}}>`String`</span> | This in the local currency of your region. Used only when currency is set to USD. According to the local region, this can either be in NGN, GHS or KSH.|
| customer email <br></br> <span style={{color: "red"}}>`String`</span> | The customer’s email address |
| channel <br></br> <span style={{color: "red"}}>`String`</span> | The channel is Card |
| pan <br></br> <span style={{color: "red"}}>`Integer`</span> | This is the 16-digit number displayed on the front of the card. E.g 5399838383838381 |
| cvv <br></br> <span style={{color: "red"}}>`Integer`</span>| **Card Verification Value**; This is the 3 or 4 digit security code found on the back of the customers card. |
| expiryMonth <br></br> <span style={{color: "red"}}>`Integer`</span>| The expiration month is represented by the first two-digit value on the card, indicating the month in which the card will no longer be valid. |
| expiryYear <br></br> <span style={{color: "red"}}>`Integer`</span>| The expiration year is represented by the last two digits of the card's expiration date. |
| metadata <br></br> <span style={{color: "red"}}>`String`</span> | This is information pertaining to additional details about your product or service. Under metadata, you have productName" as a field — This is necessary for you to add as it indicates the name of your product and helps to specify to your user what your product is called. You can add any other additional field as you deem fit.|

**Secondly**, to ensure the complete security of card data during transmission, Spotflow employs AES-256 encryption. The payment data you collected in the previous step must be encrypted using your unique encryption key before making requests to the Payments API. This encryption key can be found in the API Keys and Webhooks section of your dashboard settings.

AES-256 encryption is widely supported across programming languages. The sample code snippet below demonstrates a basic implementation in Java using the AES/ECB/PKCS5Padding algorithm. For production environments, consider using more secure modes like AES/GCM and implementing proper error handling.

```java
import java.util.Base64;

import javax.crypto.Cipher;

import javax.crypto.KeyGenerator;

import java.security.MessageDigest;

import javax.crypto.SecretKey;

import javax.crypto.spec.GCMParameterSpec;

import javax.crypto.spec.SecretKeySpec;

import java.nio.charset.StandardCharsets;



public class EncryptionUtils {



    public static String encrypt(String data, String key) throws Exception {

        byte[] rawKey = getRawKey(key);

        SecretKeySpec skeySpec = new SecretKeySpec(rawKey, "AES");

        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");

        cipher.init(Cipher.ENCRYPT_MODE, skeySpec);

        byte[] encryptedData = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));

        return Base64.getEncoder().encodeToString(encryptedData);

    }



    private static byte[] getRawKey(String key) throws Exception {

        MessageDigest md = MessageDigest.getInstance("MD5");

        byte[] bytes = md.digest(key.getBytes(StandardCharsets.UTF_8));

        byte[] rawKey = new byte[16]; // AES requires a 128-bit key

        System.arraycopy(bytes, 0, rawKey, 0, Math.min(bytes.length, rawKey.length));

        return rawKey;

    }

}
```

Furthermore, Once the payment data has been encrypted, use it within the POST request to our <a target="_blank" href={"../api/API Endpoints/Collections/Create-Collection"} style={{textDecoration: "underline"}}>Create payment endpoint API</a>

**Sample Request Body for Payments in Foreign Currency (USD)**

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 10,
    "currency": "USD",
    "localCurrency": "NGN",
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "encryptedCard": "8/5XbSZFQfvaZmY55UizZGM0HYQdkEMyHoyGw1GZ+XlXdBC+hEcluYKC5WONz1Vxkvihxxxxxxxxxxxxxxxxxxxxx",
    "callBackUrl": "https://www.algoai.one", // optional if a callback url has been set on your dashboard
    "metadata": {
        "productName": "Algo.ai",
        "SubscriptionPlan": "MonthlyPass"
    }
}
```

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "e0a0bc86-a2e6-46d8-91dc-1e50261b40d7",
    "reference": "ref-24676c48-31df-4968-8a04-54602c784ef5",
    "spotflowReference": "SPF-FLW-9d27bb78a7be40a8ae0fa86b54dab3c8",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15334.90,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter your PIN",
    "rate": 1533.49,
    "region": "Nigeria",
    "authorization": {
        "mode": "pin"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
    },
    "createdAt": "2025-02-18T16:48:53.922814Z",
     "callBackUrl": "https://www.algoai.one",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

**Sample Request Body for Payments in Local Currency (e.g NGN)**

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 300,
    "currency": "NGN", //according to the local region, this can either be in NGN, GHS or KSH
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "encryptedCard": "8/5XbSZFQfvaZmY55UizZGM0HYQdkEMyHoyGw1GZ+XlXdBC+hEcluYKC5WONz1Vxkvihj/xxxxxxxxxxxx",
    "metadata": {
        "productName": "Algo.ai",
        "SubscriptionPlan": "MonthlyPass"
    }
     "callBackUrl": "https://www.algoai.one", // optional if a callback url has been set on your dashboard
}
```

**Sample Response for Payments in Local Currency (e.g NGN)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "48b0e095-735d-4763-9b78-62e16adc446b",
    "reference": "ref-74a9b9c4-4d2d-46b8-aa4b-0bc1ca10317b",
    "spotflowReference": "SPF-FLW-63544769cad4438db4e5456b354a9ba8",
    "amount": 300.00,
    "currency": "NGN",
    "totalFees": 20.00,
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Approved successful",
    "rate": 1539.24,
    "region": "Nigeria",
    "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
    },
    "createdAt": "2025-02-18T22:02:46.779912Z",
    "callBackUrl": "https://www.algoai.one", 
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

**Upon successful payment creation**, the transaction's initial status will be <span style={{color: "red"}}>`pending`</span> which shows it's a payment needing authorization. The subsequent authentication method required depends on the specific card type and the authorization mode.

## Authorize Card Payment

The method used to authorize a card payment varies depending on the card type and its authorization mode.

### Making a Card Payment that Requires PIN

When making the initial request for a card payment, if successful, the system returns a sample response as seen above, indicating a <span style={{color: "red"}}>`pending`</span> status and requiring <span style={{color: "red"}}>`PIN`</span> authorization.

Following the initial response, get the required card PIN and make a request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> using the provided transaction reference returned in the initial response as shown in the sample request below:

**Sample Request Body**

```yaml
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "pin": "4321"
    }
}
```

Upon successful payment authorization, the transaction's initial status can be <span style={{color: "red"}}>`failed`</span> or <span style={{color: "red"}}>`pending`</span> as shown in the response below: 

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "e0a0bc86-a2e6-46d8-91dc-1e50261b40d7",
    "reference": "ref-24676c48-31df-4968-8a04-54602c784ef5",
    "spotflowReference": "SPF-FLW-9d27bb78a7be40a8ae0fa86b54dab3c8",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15334.90,
    "totalFees": 20.00,
    "localCurrency": "NGN", 
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter your OTP sent to your phone",
    "rate": 1533.49,
    "region": "Nigeria",
    "authorization": {
        "mode": "otp"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
    },
    "createdAt": "2025-02-18T16:48:54Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

### Making a Card Payment that Requires OTP Authorization

After making a request to authorize the card, a pending status will be returned along with the OTP authorization mode. This indicates that an <span style={{color: "red"}}>`OTP`</span> has been sent to the registered phone number or email tied to the customer’s bank account. You would need to get the <span style={{color: "red"}}>`OTP`</span> to validate the transaction. 

What you need to do next is get the OTP sent to the customer’s phone/email and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a>  using the OTP and initial transaction reference as shown in the sample request below:

**Sample Request Body**

```yaml
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "otp": "12345"
    }
}
```

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "e0a0bc86-a2e6-46d8-91dc-1e50261b40d7",
    "reference": "ref-24676c48-31df-4968-8a04-54602c784ef5",
    "spotflowReference": "SPF-FLW-9d27bb78a7be40a8ae0fa86b54dab3c8",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15334.90,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Approved successful",
    "rate": 1533.49,
    "region": "Nigeria",
    "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
    },
    "createdAt": "2025-02-18T16:48:54Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

If the status of the transaction is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, it is important to <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction.

### Making a Card Payment that Requires 3DS Authorization

Based on the initial request made to authorize the card, it automatically detects that 3DS authorization is required and immediately returns the redirect URL in the response with 3DS as the authorization mode, as shown in the following sample response:

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "425f82c7-0dad-403f-a387-67dacbcb33b0",
    "reference": "ref-4ec88ecf-bd5b-49b7-a360-2b0fd26a680f",
    "spotflowReference": "SPF-FLW-0d5dd1823449499fad061669d781c240",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15318.10,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Please validate details with the url provided",
    "rate": 1531.81,
    "region": "Nigeria",
    "authorization": {
        "mode": "3DS",
        "redirectUrl": "https://dev-api.spotflow.co/threeds/authenticate/wnnw3V6yCSima9O"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "555557",
        "lastFour": "6817"
    },
    "createdAt": "2025-02-18T17:00:23.719296Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

To complete the authorization process, it is crucial to redirect your customer to the designated URL provided within the authorization response. This external page will facilitate the collection of the OTP sent to their registered mobile number or email address. Upon successful OTP verification, the customer will be redirected back to your application.

### Making a Card Payment that Requires AVS Authorization

For cards requiring Address Verification System (AVS) checks, the system automatically detects this requirement upon initiating the payment. A subsequent response will indicate the need for AVS authorization with <span style={{color: "red"}}>`pending`</span> status and authentication mode as <span style={{color: "red"}}>`avs`</span> like the sample response below:

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "740fc1e5-c272-4bb4-96cf-f3f54f6fb1a8",
    "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
    "spotflowReference": "SPF-FLW-1304e5a420744829ace4e5b18bcaaa5a",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15320.10,
    "totalFees": 20.00,
    "localCurrency": "NGN", // according to the local region, this can either be in NGN, GHS or KSH
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter your address details",
    "rate": 1532.01,
    "region": "Nigeria",
    "authorization": {
        "mode": "avs"
    },
    "card": {
        "type": "Visa",
        "firstSix": "411112",
        "lastFour": "8482"
    },
    "createdAt": "2025-02-18T17:05:40.828514Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```
Upon receiving a response indicating the need for AVS verification, you need to gather the customer's address details and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> with a sample request as shown below:

```yaml
{
    "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
    "authorization": {
        "avs": {
            "state": "Lagos",
            "city": "Lekki",
            "country": "Nigeria",
            "address": "1, Spotflow Street",
            "zipCode": "101233"
        }
    }
}
```

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "740fc1e5-c272-4bb4-96cf-f3f54f6fb1a8",
    "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
    "spotflowReference": "SPF-FLW-1304e5a420744829ace4e5b18bcaaa5a",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15320.10,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Approved successful",
    "rate": 1532.01,
    "region": "Nigeria",
    "card": {
        "type": "Visa",
        "firstSix": "411112",
        "lastFour": "8482"
    },
    "createdAt": "2025-02-18T17:05:41Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

If the status of the transaction at this point is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction but if the transaction status is  <span style={{color: "red"}}>`pending`</span>, this means an extra authorization step is required and the authorization mode returned in the data object should be used to determine the next authorization type required for the card payment.

## Making a Card Payment that Requires Phone Enrollment (Verve Cards)

After making the request to create a <span style={{color: "red"}}>`card payment`</span> and then authorizing the payment, if the payment status is <span style={{color: "red"}}>`pending`</span> and the authorization mode is <span style={{color: "red"}}>`ENROLL`</span>, this means the customer's card is not yet enrolled for online payments. Card enrollment is necessary to proceed with the transaction.

**Sample Request:**

```yaml
{
  "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
  "authorization": {
      "pin": "1234"
    }
}
```

**Sample Response for Payments in Foreign Currency (USD):**

```yaml
{
    "id": "cad7247a-d37d-4120-b1f3-bd2d8bc15a9a",
    "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
    "spotflowReference": "SPF-FLW-51e21877f9c346b48c050186471f98ab",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15320.10,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Kindly enter the phone number registered with your bank",
    "rate": 1532.01,
    "region": "Nigeria",
    "authorization": {
        "mode": "enroll"
    },
    "card": {
        "type": "Maestro",
        "firstSix": "506146",
        "lastFour": "3210"
    },
    "createdAt": "2024-08-28T11:04:05Z"
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

Upon receiving a response indicating a <span style={{color: "red"}}>`'Phone Enroll'`</span> verification is required, collect the customer's phone number registered with the bank account and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> with a sample request as shown below:

```yaml
{
    "reference": "ref-91e20470-cf74-451f-8d52-d9168ad1aa55",
    "authorization": {
        "phoneNumber": "08000000000"
    }
}
```

**Sample Response for Payments in Foreign Currency (USD):**

```yaml
{
    "id": "cad7247a-d37d-4120-b1f3-bd2d8bc15a9a",
    "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
    "spotflowReference": "SPF-FLW-51e21877f9c346b48c050186471f98ab",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15542.30,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Transaction in progress",
    "rate": 1532.01,
    "region": "Nigeria",
    "authorization": {
        "mode": "otp"
    },
    "card": {
        "type": "Maestro",
        "firstSix": "506146",
        "lastFour": "3210"
    },
    "createdAt": "2024-08-28T11:04:05Z"
}
```

After making the request successfully, you would get a response on how to proceed. If the transaction requires additional authorization and is in a <span style={{color: "red"}}>`pending/transaction in progress`</span> status, the response will indicate the necessary steps and provide the corresponding authorization mode. The transaction status at this stage can be either <span style={{color: "red"}}>`successful`</span> or <span style={{color: "red"}}>`failed`</span>.

If the status of the transaction is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"} style={{textDecoration: "underline"}}>verify the payment</a> to confirm the final status of the transaction.

## Verify Payment

After charging a card or making a bank transfer payment, verification is crucial. Utilize your payment reference to confirm the transaction's final status by sending a request to our <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"} style={{textDecoration: "underline"}}>Verify Payment endpoint</a>.

Here are the query parameters and sample response needed for verifying a card payment:

**Query Parameters**


**merchant-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the merchant you want to verify

**reference**

This is the unique reference <span style={{color: "red"}}>`ID`</span> returned at payment creation.

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "e0a0bc86-a2e6-46d8-91dc-1e50261b40d7",
    "reference": "ref-24676c48-31df-4968-8a04-54602c784ef5",
    "spotflowReference": "SPF-FLW-9d27bb78a7be40a8ae0fa86b54dab3c8",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15334.90,
    "totalFees": 20.00,
    "localCurrency": "NGN", 
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Approved successful",
    "rate": 1533.49,
    "region": "Nigeria",
    "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
    },
    "createdAt": "2025-02-18T16:48:54Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

## Accepting Bank Transfer Payments with Spotflow Classic

**Body Parameters:**

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Specify a unique reference ID generated by your company to identify each customer.</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|
| localCurrency <br></br> <span style={{color: "red"}}>`String`</span> | This in the local currency of your region. Used only when currency is set to USD. According to the local region, this can either be in NGN, GHS or KSH.|
| customer email <br></br> <span style={{color: "red"}}>`String`</span> | The customer’s email address |
| channel <br></br> <span style={{color: "red"}}>`String`</span> |  The channel is bank transfer of the payment providers available on the system |
| metadata <br></br> <span style={{color: "red"}}>`String`</span> | This is information pertaining to additional details about your product or service. Under metadata, you have productName" as a field — This is necessary for you to add as it indicates the name of your product and helps to specify to your user what your product is called. You can add any other additional field as you deem fit.|

**Sample Request Body for Bank Transfer Payments in Foreign Currency (USD)**

```yaml
{
     "reference": "ref-{{$randomUUID}}",
     "amount":10,
     "currency": "USD",
     "localCurrency": "NGN", // according to the local region, this can either be in NGN, GHS or KSH
     "customer": {
         "name": "{{$randomFirstName}} {{$randomLastName}}",
        "email": "customer@email.com"
     },
    "channel": "bank_transfer",
    "metadata": {
        "productName": "Algo.ai",
        "SubscriptionPlan": "MonthlyPass"
    }
 }
```

**Sample Response for Bank Transfer Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "65022454-9d1e-4422-964d-63b4ca6e3b13",
    "reference": "ref-0d805f61-fc67-41ec-8852-a1de0552de5b",
    "spotflowReference": "SPF-FLW-2b17b0af4a594b1f9731b66aa6409765",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15352.30,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "bank_transfer",
    "status": "pending",
    "customer": {
        "id": "814a4c79-dd54-4fc1-935d-c2d4f34376b4",
        "name": "Kenya Ziemann",
        "email": "customer@email.com"
    },
    "rate": 1535.23,
    "region": "Nigeria",
    "bankDetails": {
        "accountNumber": "0067100155",
        "bankName": "Mock Bank"
    },
    "createdAt": "2025-02-18T21:35:32.110809Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```

If the status of the transaction shows either <span style={{color: "red"}}>`pending`</span>, <span style={{color: "red"}}>`sucessful`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction.


## Accepting Payments with Spotflow Redirect

## Prerequisites for Accepting Card Payments with Spotflow Redirect

**1.Access to Spotflow Dashboard:**

After successful sign up on app.spotflow.co, log in and visit your merchant dashboard.

**2. Account Activation**

- **Verification Required**: Ensure your Spotflow account is fully activated and verified.

**3. Merchant Configuration**

- **Default Disabled**: By default, merchant configuration for setting regions and service providers is not enabled on new accounts. 
- **Enablement Request**: To accept card payments successfully, contact our support team at [support@spotflow.one](mailto:support@spotflow.one) and request merchant configuration activation for your account.

**4. Spotflow API Credentials:**

Obtain your SECRET_KEY from the Spotflow merchant dashboard.

**5. Configure Webhook URL:**

Configure the endpoint in your system to receive payment status updates. Update and add your Webhook URL on the merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Webhook URL.

**6. Add Callback URL:**

Update and add your Callback URL to your Spotflow merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Callback URL.


To accept payments with Spotflow Redirect, you make a request to the <a target='_blank' href={"../api/API Endpoints/Collections/initialize-collections"}>Initialize Payment Collection API</a> from your server to generate a checkout URL, then redirect your users to the URL so they can pay.

<Admonitions type={"warning"} icon={"📝"}>
    Ensure direct API calls do not originate from the client-side (frontend). Always route requests through your backend server.
</Admonitions>
<br></br>

<p style={{fontSize: "20px"}}>**Collect Customer Details**</p>

To initialize the payment, you'll need to pass information such as customer’s email, customer’s first name, amount, currency, reference. The customer’s email address, reference, amount and currency are required. You can also retrieve the customer details from your database, session or cookie if you already have it stored.

<p style={{fontSize: "20px"}}>**Initialize Payment**</p>

When a customer clicks the payment button, initiate a payment transaction by sending a POST request to our API endpoint. Provide the necessary details such as email, amount, reference, currency, and any additional required parameters.

Upon a successful API call, we'll provide a checkout URL. Redirect your customer to the Checkout URL provided in the response to enable them enter their payment details and complete the transaction.

**Sample Request Body for Payments in Foreign Currency (USD)**

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 2,
    "currency": "USD",
    "localCurrency": "NGN",
    "metadata": {
        "productName": "Gab",
        "title": "Creator"
    },
    "callBackUrl": "https://www.algoai.one", // optional if a callback url has been set on your dashboard
    "customer": {
        "email": "customer@email.com",
        "name": "Dee",
        "phoneNumber": "{{$randomPhoneNumber}}"
    }
}
```

**Sample Response for Payments in Foreign Currency (USD)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "reference": "ref-2920439c-3da3-419b-aaa0-7e1a38b8f1b9",
    "checkoutUrl": "https://develop.d1paogmt6hd8j8.amplifyapp.com/oXei86js8pfKNI4",
    "paymentCode": "oXei86js8pfKNI4",
    "status": "pending",
    "callBackUrl": "https://www.algoai.one",
    "metadata": {
        "title": "Creator",
        "productName": "Gab"
    }
}
```


**Sample Request Body For Payments in Local Currency (e.g NGN)**

```yaml
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 2,
    "currency": "USD",
    "localCurrency": "NGN",
    "metadata": {
        "productName": "Gab",
        "title": "Creator"
    },
    "callBackUrl": "https://www.algoai.one", // optional if a callback url has been set on your dashboard
    "customer": {
        "email": "customer@email.com",
        "name": "Dee",
        "phoneNumber": "{{$randomPhoneNumber}}"
    }
}
```

**Sample Response for Payments in Local Currency (e.g NGN)**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "reference": "ref-ad26495f-bbce-4d49-83e5-6886a506c8c0",
    "checkoutUrl": "https://develop.d1paogmt6hd8j8.amplifyapp.com/9a8iefGMHBQ7k11",
    "paymentCode": "9a8iefGMHBQ7k11",
    "status": "pending",
    "callBackUrl": "https://www.algoai.one",
    "metadata": {
        "title": "Creator",
        "productName": "Gab"
    }
}
```


<Admonitions type={"note"} icon={"📌"}>
    Important Information

    1. The <span style={{color: "red"}}>`Amount`</span> should be in the subunit of our supported currency i.e your local currency or USD.
    2. You are to use a <span style={{color: "red"}}>`unique reference ID`</span> generated by your company to identify each customer.
    3. You’re to select the <span style={{color: "red"}}>`currency`</span> for the payment collection. This can either be in USD or in the local currency of your collection region. i.e USD or NGN. If currency is set to USD, ensure you add the local currency field set to the local currency of your collection region. 
</Admonitions>
<br></br>

<p style={{fontSize: "20px"}}>**Receive Payment Confirmation Via Webhook**</p>

When a payment is successful, Spotflow sends a <span style={{color: "red"}}>`payment_successful`</span> webhook event to the webhook URL to your specified URL.
<br></br>

<Admonitions type={"warning"} icon={"⚠️"}>
    Please be advised.
   
    It is very important to verify the status of the payment before you give value to the customer.
</Admonitions>
<br></br>

<p style={{fontSize: "20px"}}>**Verify Payment**</p>

Verify payments by retrieving the reference from the URL and using it to call our verify endpoint to confirm the payment status. Learn more about our <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify Payment Collection Endpoint</a>.