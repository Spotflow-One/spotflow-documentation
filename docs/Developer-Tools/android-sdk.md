---
title: Android SDK
hide_title: true
---
import Admonitions from "../../src/components/Admonition/Admonitions"

## Introduction 

The Spotflow Android SDK empowers developers to seamlessly integrate payment functionalities into their Android applications. It provides UI components and methods that allows you accept payment in your Android app.

## Project Requirements

To integrate the Spotflow Android SDK into your project, ensure the following prerequisites are met:

- Android Studio 4.1 or later
- Android SDK API level 21 or higher while the minimum supported SDK version is 15
- Android Gradle Plugin 7.2 and above
- Gradle 7.1.3 and above
- AndroidX

:::warning[Beta Release]
The Android SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at **support@spotflow.one**. 
:::

## Installation

1. Add the Spotflow SDK dependency to your app-level <span style={{color: "red"}}>`build.gradle`</span> file:

```groovy
dependencies {
  implementation 'com.spotflow:spotflow-android:latest_version'
}
```

2. Add the Internet permission to your <span style={{color: "red"}}>`AndroidManifest.xml`</span> file:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

3. Sync your project with Gradle files to download the SDK into your project. Upon installation, you gain access to the UI components and methods to accept seamless payment experiences in your Android app.

## Parameters Required by the Library

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

Avoid exposing your API keys in your application. Requests that require your API key should originate from a secure server environment.

## Usage with Jetpack Compose

f you're using Jetpack Compose, call the <span style={{color: "red"}}>`PaymentUI`</span> composable function with the required parameters.

### Integration Example

```kotlin
PaymentUI(
    planID = "your_plan_id",
    currency = "NGN",
    amount = 100.0,
    key = "your_key",
    encryptionKey = "your_encryption_key",
    customerEmail = "customer@example.com",
    customerName = "John Doe",
    customerPhoneNumber = "1234567890",
    customerId = "customer_id",
    paymentDescription = "Payment for services",
    appLogo = R.drawable.your_logo,
    appName = "Your App",
    debugMode = true,
    onSuccess = { transactionId, paymentData ->
        // Handle successful payment
    },
    onFailure = { errorCode, errorMessage ->
        // Handle payment failure
    }
)
```

## Usage by Launching an Activity

For apps not using Jetpack Compose, launch the payment activity directly.

### Integration Example

```kotlin
SpotFlowPaymentActivity.start(
    context = this,
    merchantId = "your_merchant_id",
    planID = "your_plan_id",
    currency = "NGN",
    amount = 100.0,
    key = "your_key",
    encryptionKey = "your_encryption_key",
    customerEmail = "customer@example.com",
    customerName = "John Doe",
    customerPhoneNumber = "1234567890",
    customerId = "customer_id",
    paymentDescription = "Payment for services",
    appLogo = R.drawable.your_logo,
    appName = "Your App",
    debugMode = true,
    requestCode = PAYMENT_REQUEST_CODE
)
```

## Help

<Admonitions type={"note"}>Feel free to create issues and pull requests on <a href="https://github.com/Spotflow-One/spotflow-android" target="_blank" style={{textDecoration: "underline"}}>GitHub</a> if you need any help.</Admonitions>