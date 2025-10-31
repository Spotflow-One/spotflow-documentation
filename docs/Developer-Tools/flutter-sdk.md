---
title: Flutter SDK
hide_title: true
---

import Admonitions from "../../src/components/Admonition/Admonitions"

## Flutter SDK

Our Flutter SDK provides a rich set of pre-built UI components and APIs to seamlessly integrate payment functionalities within your Flutter application.

## Introduction

The <span style={{color: "red"}}>`Spotflow Flutter SDK`</span> pallows you to integrate smooth and secure payment flows into your Flutter apps. It supports both Android and iOS platforms, making it versatile for mobile app development.

## Requirements

Ensure your Flutter environment meets the following:
- **context**: Flutter 3.7.0 or later
- **context**: Dart 2.19 or later
- **context**: Compatible with Android (minSdkVersion 21) and iOS (iOS 11+)
- **context**: Internet permission for Android  <span style={{color: "red"}}>`(AndroidManifest.xml)`</span>


:::warning[Beta Release]
The Flutter SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at support@spotflow.one.
:::

## Installation

To use the <span style={{color: "red"}}>`Spotflow Flutter SDK`</span> package, add the following dependencies to your <span style={{color: "red"}}>`pubspec.yaml`</span> file:

```yaml
dependencies:
  spotflow_flutter: ^1.0.0 # or the latest version
```

Then run <span style={{color: "red"}}>`flutter pub get`</span> to fetch the package.

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

Always ensure that your key and encryptionKey are stored securely. Avoid hardcoding them in production apps.

## Usage Example

Here is an example of how to make a payment using the <span style={{color: "red"}}>`Spotflow`</span> package:

```dart
import 'package:spotflow_flutter/spotflow_flutter.dart';

SpotflowFlutter.startPayment(
  context: context,
  customerId: "cust_001",
  customerEmail: "jane@example.com",
  customerName: "Jane Doe",
  customerPhoneNumber: "+123456789",
  currency: "USD",
  amount: 100.0,
  key: "your_public_key",
  encryptionKey: "your_encryption_key",
  paymentDescription: "Payment for services",
  planId: "plan_001",
  appName: "MyApp",
  appLogo: Image.asset('assets/logo.png'), // Or any Widget
  debugMode: true,
);
```
## Note
- **context**: Android: Ensure INTERNET permission is declared in <span style={{color: "red"}}>`AndroidManifest.xml`</span>
- **context**: iOS: No special permissions required beyond basic networking

### Testing Your Implementation

Test cards can be found <a href="https://docs.spotflow.one/testing-payment" target="_blank" style={{textDecoration: "underline"}}>here</a>

## Running the Example Project

An example project has been provided on our <a href="https://github.com/Spotflow-One/spotflow_flutter" style={{textDecoration: "underline"}}>Github Repository</a>. Clone the repository and navigate to the example folder. Open it with a supported IDE or run <span style={{color: "red"}}>`flutter run`</span> from the terminal in that folder.

## Help

<Admonitions type={"note"}>Feel free to create issues and pull requests on <a href="https://github.com/Spotflow-One/spotflow-android" target="_blank" style={{textDecoration: "underline"}}>GitHub</a> if you need any help.</Admonitions>