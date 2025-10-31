---
title: iOS SDK
hide_title: true
---

## Introduction

The Spotflow iOS SDK is a SwiftUI library that allows developers to integrate payment collection functionality into their iOS applications. It provides a simple interface to navigate to a payment screen, handle payment logic, and manage success or failure callbacks using the <span style={{color: "red"}}>`SpotFlowPaymentUI`</span> class.


:::warning[Beta Release]
The iOS SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at **support@spotflow.one**. 
:::

## Project Requirements

To integrate the Spotflow iOS SDK into your project, ensure the following prerequisites are met:

- Xcode 13.0 or later
- iOS 11.0 or higher
- Swift 5.3 or later
- Swift Package Manager (SPM) for dependency management

## Installation

### Using Swift Package Manager (SPM)

To add <span style={{color: "red"}}>`SpotFlow - iOS SDK`</span> to your project using Xcode or by updating your <span style={{color: "red"}}>`Package.swift`</span> file:

```swift
dependencies: [
    .package(url: "https://github.com/Spotflow-One/SpotflowIOS.git", from: "1.0.0")
],
targets: [
    .target(
        name: "YourApp",
        dependencies: ["Spotflow"]),
]
```

After adding the dependency, import the Spotflow module where needed:
```swift
import Spotflow
```

### Parameters Required by the SDK

| Parameter | Type | Description |
|:----------|:-----------|:---------|
|<span style={{color: "red"}}>`planId`</span> | <span style={{color: "red"}}>`String`</span> | The plan ID (optional).|
|<span style={{color: "red"}}>`currency`</span> | <span style={{color: "red"}}>`String`</span> | Currency for the payment (e.g., "NGN").|
|<span style={{color: "red"}}>`amount`</span> | <span style={{color: "red"}}>`String`</span> | Amount to be paid (nullable).|
|<span style={{color: "red"}}>`key`</span> | <span style={{color: "red"}}>`String`</span> | The API key for authenticating the transaction.|
|<span style={{color: "red"}}>`encryptionKey`</span> | <span style={{color: "red"}}>`String`</span> | This key is used to encrypt the card for  secure transactions.|
|<span style={{color: "red"}}>`customerEmail`</span> | <span style={{color: "red"}}>`String`</span> | The email address of the customer.|
|<span style={{color: "red"}}>`customerName`</span> | <span style={{color: "red"}}>`String`</span> | The name of the customer (optional).|
|<span style={{color: "red"}}>`customerPhoneNumber`</span> | <span style={{color: "red"}}>`String`</span> | The phone number of the customer (optional).|
|<span style={{color: "red"}}>`customerId`</span> | <span style={{color: "red"}}>`String`</span> | The unique identifier for the customer (optional).|
|<span style={{color: "red"}}>`paymentDescription`</span> | <span style={{color: "red"}}>`String`</span> | Description of the payment (optional).|
|<span style={{color: "red"}}>`appLogo`</span> | <span style={{color: "red"}}>`String`</span> | App logo widget (optional).|
|<span style={{color: "red"}}>`appName`</span> | <span style={{color: "red"}}>`String`</span> | The name of the app (optional).|
|<span style={{color: "red"}}>`debugMode`</span> | <span style={{color: "red"}}>`bool`</span> | Enable or disable debug mode.|

Never expose your key or encryptionKey directly in the app for production. Use a secure server to perform sensitive operations.

### Navigating to the Payment Screen

To navigate to the payment screen and initiate a payment process, create an instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> with the required parameters and pass it to <span style={{color: "red"}}>`SpotFlowPaymentUI`</span>.

### Example Usage

```swift
import SwiftUI
import Spotflow

let config = SpotflowPaymentConfig(
    planId: "plan_001",
    currency: "USD",
    amount: 50.0,
    key: "your_public_key",
    encryptionKey: "your_encryption_key",
    customerEmail: "user@example.com",
    customerName: "Jane Smith",
    customerPhoneNumber: "+123456789",
    customerId: "user_123",
    paymentDescription: "Monthly Subscription",
    appLogo: UIImage(named: "AppLogo"),
    appName: "MyApp",
    debugMode: true
)

Spotflow.shared.startPayment(
    from: self,
    config: config,
    onSuccess: { transactionId, paymentData in
        // Handle success
    },
    onFailure: { errorCode, errorMessage in
        // Handle failure
    }
)
```

## SpotFlowPaymentUI Parameters

- <span style={{color: "red"}}>`manager`</span>: An instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> containing payment and customer information.
- <span style={{color: "red"}}>`onPaymentSuccess`</span>: A closure that gets called when the payment is successful.
- <span style={{color: "red"}}>`onPaymentFailure`</span>: A closure that gets called when the payment fails, with an error as a parameter.

## SpotFlowPaymentManager

<span style={{color: "red"}}>`SpotFlowPaymentManager`</span> is a struct that holds all necessary information for a payment transaction.

### Properties/Parameters

- <span style={{color: "red"}}>`merchantId`</span>: The merchant ID (String).
- <span style={{color: "red"}}>`planId`</span>: The plan ID (String).
- <span style={{color: "red"}}>`key`</span>: The API key  (String).
- <span style={{color: "red"}}>`encryptionKey`</span>: The Encryption key  (String).
- <span style={{color: "red"}}>`customerEmail`</span>: The customer's email (String).
- <span style={{color: "red"}}>`customerName`</span>: The customer's name (String, optional).
- <span style={{color: "red"}}>`customerPhoneNumber`</span>: The customer's phone number (String, optional).
- <span style={{color: "red"}}>`customerId`</span>: The customer ID (String, optional).
- <span style={{color: "red"}}>`paymentDescription`</span>: A description of the payment (String, optional).
- <span style={{color: "red"}}>`appLogo`</span>: The logo of the app (Image, optional).
- <span style={{color: "red"}}>`appName`</span>: The name of the app (String, optional).

## Handling Error Messages

This SDK provides comprehensive error handling mechanisms to assist in troubleshooting and providing informative feedback to users. Upon encountering an error, detailed error codes and descriptions are returned. By extracting error messages from the response, you can effectively communicate the issue to the user and take appropriate actions. Ensure you implement appropriate error handling mechanisms to provide informative feedback to the user.

## Testing

Thoroughly test the integration with different payment scenarios including successful payments, failures, and edge cases to ensure a smooth user experience. Spotflow provides testing helpers that allows you to simulate different payment scenarios.

For your convenience, here are the testing helpers available:

- **Card Testing**: Test cards can be found <a href="https://docs.spotflow.one/testing-payment" target="_blank" style={{textDecoration: "underline"}}>here</a>
- **Bank Transfer Testing**: Test bank transfer scenarios with the testing account details provided during your integration.

These testing helpers help you ensure that your integration handles various payment scenarios effectively before deploying your application to a production environment. It's recommended to thoroughly test your integration with these testing details to provide a reliable payment experience to your users.