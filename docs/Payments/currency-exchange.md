---
title: Currency Exchange
id: currency-exchange
hide_title: true
---

## Currency Exchange

Spotflow offers robust currency conversion capabilities, enabling you to seamlessly convert between multiple currencies using real-time exchange rates.

## Quoting Your Price

You have the flexibility to quote your prices between two currency pairs which can be Nigerian Naira (NGN) vs US Dollars (USD), Ghanian Cedis (GHC) vs US Dollars (USD), etc. Spotflow will automatically handle the conversion based on the latest exchange rates at the time of the transaction.

## Exchange Endpoint

To perform a currency conversion, you'll use the following endpoint:

<span style={{color: "orange"}}>**POST**</span> https://api.spotflow.co/api/exchange

### Request Parameters
- **amount**: The amount to be converted (required, numeric).
- **from_currency**: The source currency code (ISO 4217, required, string)
- **to_currency**: The target currency code (ISO 4217, required, string).

### Response Format

A successful exchange request will return a JSON object with the following structure:

```yaml
{
    "converted_amount": 123.45, // The converted amount

    "to_currency": "USD", // The target currency

    "from_currency": "NGN", // The source currency

    "exchange_rate": 1.2345 // The exchange rate used for the conversion 
}
```

**Example Request**

```yaml
 {
    "amount": 10000,

    "from_currency": "NGN",

    "to_currency": "USD"
 }
```

## Understanding Variations

It is important to note that exchange rates fluctuate constantly. The rate you receive at the time of conversion might differ slightly from the rate displayed when you initially quoted your price. This variation is due to market dynamics and is a standard aspect of currency exchange. Spotflow utilizes real-time exchange rates to ensure accurate conversions.

### Additional Considerations:
- **Decimal Precision**:  Ensure that the amount parameter is sent with the correct decimal precision based on the target currency's subunits (e.g., two decimal places for USD).
- **Error Handling**: Refer to the Spotflow API <a target="_blank" href={"../api/errors"} style={{textDecoration: "underline"}}>error documentation</a> for potential issues and appropriate handling mechanisms.

By providing these features and following these guidelines, Spotflow empowers you to effectively implement currency exchange within your application using the Spotflow API.