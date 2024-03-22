# Overview

Fasstap™ enables merchant to accept contactless payment card transactions without the need of any external hardware for example Electronic Data Capture (EDC), PIN Entry Device (PED) or Secure Card Reader (SCR). It uses Near Field Communication (NFC) channel to transact with end user's payment card.

Soft Space provides Fasstap™ SDK to enable third party application to integrate and enable Fasstap™ payment process. The integration includes also the connectivity with the Soft Space back-end services to perform mandatory security checking
on the devices and components. Upon successful integration, the application would be able to accept contactless payment transaction seamlessly.

Supported Payment Methods\:br![](/assets/img/schemes/img_jcb.svg)![](/assets/img/schemes/img_visa.svg){style="height: 35px"}![](/assets/img/schemes/img_mastercard.svg){style="height: 32px"}![](/assets/img/schemes/img_upi.svg){style="height: 30px"}![](/assets/img/schemes/img_diners.svg){style="height: 30px"}![](/assets/img/schemes/img_discover.svg){style="height: 30px"}![](/assets/img/schemes/img_amex.svg){style="width: 48px; height: 30px"}![](/assets/img/schemes/img_eftpos.svg){style="height: 30px"}![](/assets/img/schemes/img_mada.svg){style="height: 26px"}![](/assets/img/schemes/img_napas.svg){style="height: 22px"}![](/assets/img/schemes/img_mydebit.svg){style="height: 22px"}

\::: note Supported OS
**Android 11.0** and above
\:::

## Minimum Requirements

In order to integrate and utilize Fasstap™, the following minimum criteria have to be met in order to comply
to the security standard that have been certified:

### COTS Specification

- Must have NFC interface capability.
- Must have online capability.
- Must have Google Mobile Service and certified with CTS.

### Integration

- Developer’s IDE must be able to compile with Java 8 or above.

### Third Party Payment Server

- The implementer is strongly advised to use DUKPT encryption on cardholder data and PIN block.
- The application is advised to perform certificate pinning checking against the payment server.

### Development Requirements

- Developer must enable and obtain Google’s Android Device Verification API Key via Google’s Developer’s Console.
- Developer should register the consuming application by sending Soft Space the official Application ID of the consuming app,
  together with the public key of the Keystore that is used to sign the official App.

### Application Signing and Distribution

- For compliance to be maintained, it is required to have dual control on the release process, and keys used for signing are secured
  within HSM formally approved to PCI HSM or FIPS140-2 Level 3 (or above). Failure of doing so may void the compliance.
- Application should upload only to Google Play Store for distribution. Failure to do so will result in voiding the approval.

### Correlatable Data

- For compliance to be maintained, phone number, email address, and other sensitive data of the end users should not be stored in either
  of the application, or the payment service.
- Memory buffer that holds the correlatable data should be cleared immediately upon usage. And application developer should ensure the
  buffer-clearing code/function isn’t removed by the compiler optimizations.
- Transporting any correlatable data should also adhere to the payload transporting requirement under clause no. 11.

### Usage of SDK

- Application developer can only access to the API that are listed in this SDK Integration document.
  Calling to other APIs to access or utilize any SDK keys, shall void the approval status.

### Transporting Payload

- The communication channel between the application and the payment service should use TLS protocol.
- The payload between the payment service and application should be properly encrypted.

## Fasstap™ Control

The third party has the overall control in the application features, flow and UI/UX design.
Fasstap™ SDK and its back-end component will be taking full control upon starting a payment, which includes:

- Legitimate device to accept payment; verification on the device as listed in
  [Minimum Requirements](#minimum-requirements) against back-end services;
- Entire payment process; callbacks for events that requiring UI updates or when a transaction has completed (either successful or failed);
- NFC communication channel; to identify and perform AID selection before the payment session;
