---
title: Testing Payments
id: testing-payment
hide_title: true
---

## Testing Payments

You can use the following details to test your implementation for card payments before going live.

## Cards

**Successful Payments**

| **Auth** | **Number** | **Expiry** | **CVV** | **Pin** | **OTP** |
| --- | --- | --- | --- | --- | --- |
| No auth | 4111112000062555 | 12/2030 | 321 | - | - |
| PIN | 5555558684543932 | 12/2030 | 321 | 4321 | - |
| PIN + OTP | 5555567973581842 | 12/2030 | 321 | 4321 | 654321 |
| 3DS | 5555577124976817 | 12/2030 | 321 | - | - |
| AVS | 4111124373708482 | 12/2030 | 321 | - | <span style={{color: "red"}}>`Address: 1, Spotflow Street`<br></br> `City: Lekki` <br></br> `State: Lagos` <br></br> `Country: Nigeria` <br></br> `ZIP: 101233`</span> |

## Mobile Money Ghana

**Successful Payments**

| **Phone Number** | **OTP** |
| --- | --- |
| 0987654321 | 654321 |