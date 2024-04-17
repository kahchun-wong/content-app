---
title: SDK API
description: View all API objects, methods, attributes and responses embedded within Fasstap SDK
icon: material-symbols:deployed-code-outline
product: fasstap
---

faas: 1.0.0
info:
  title: Fasstap Android SDK API
  version: 3.5.0.12

tags:
  - name: SSMPOSSDK
    description: This section documents the public API that the app could use for attestation, and transaction purposes.  
  - name: SSMPOSSDKConfiguration
    description: This is the configuration class that is uses to configure the Fasstap™ MPOS SDK. This class does not have exposable API, but it contains a builder class that could be used to set the configuration value. The builder class will be discussed in the following section.
  - name: SSMPOSSDKConfiguration.Builder
    description: This is the builder class for `SSMPOSSDKConfiguration`.
  - name: Transaction
    description: This is the interface representation of transactional handling of Fasstap™ MPOS SDK. It provides API for to start transaction, etc. It also holds the transactional result codes while processing transactions. Upon initing the Fasstap™ MPOS SDK successfully, main project could then make API call via `SSMPOSSDK.getInstance().getTransaction()` to obtain the Transaction class and starts.
  - name: MPOSTransaction.TransactionEvents
    description: This is a small class that holds various kinds of transaction related events and codes. The event groups within `TransactionEvents` are `TransactionUIEvent`, `TransactionResult`. Below are some callback methods under `TransactionEvents`.
  - name: MPOSTransactionParams.Builder
    description: This is the builder class for `MPOSTransactionParams`.

    
apis:
  init:
    tags:
      - SSMPOSSDK
    summary: init
    description: This method initializes the Fasstap™ MPOS SDK, with the sent in configurations.
    method:
      lang: java
      code: init(Context context, SSMPOSSDKConfiguration configuration)
    parameters:
      - name: context
        description: Context of the caller class.
        type: Context
      - name: configuration
        description: SSMPOSSDKConfiguration object that contains all the configuration information to configure the Fasstap™ MPOS SDK.
        type: SSMPOSSDKConfiguration
    returnValue:
      - type: SSMPOSSDK
        description: 	Singleton object that represents Fasstap™ MPOS SDK.
    samples:
      - name: success
        value: 
          lang: java
          code: |
            Context context = getApplicationContext();
            SSMPOSSDKConfiguration config = SSMPOSSDKConfiguration.Builder.create()    
                .setAttestationHost(BuildConfig.ATTESTATION_HOST)    
                .setAttestationHostCertPinning(BuildConfig.ATTESTATION_CERT_PINNING)    
                .setAttestationHostReadTimeout(10000L)
                .setAttestationRefreshInterval(300000L)
                .setAttestationStrictHttp(true)
                .setAttestationConnectionTimeout(30000L)
                .setLibGooglePlayProjNum("757874674469") // use own google play project number
                .setLibAccessKey(BuildConfig.ACCESS_KEY)
                .setLibSecretKey(BuildConfig.SECRET_KEY)
                .setUniqueID(edtUserID.getText().toString()) // please set the userID shared by Soft Space
                .setDeveloperID(edtDeveloperID.getText().toString())
                .setEnvironment(BuildConfig.FLAVOR_environment.equals("uat") ? Environment.UAT : Environment.PROD)
                .build();
              
            SSMPOSSDK.init(context, config);
  getInstance:
    tags:
      - SSMPOSSDK
    summary: getInstance
    description: This method returns the initialized SSMPOSSDK singleton. Please do make sure `init` is called prior to calling this method, `IllegalStateException` shall be thrown if otherwise.
    method:
      lang: java
      code: getInstance()
    returnValue:
      - type: SSMPOSSDK
        description: 	Singleton object that represents Fasstap™ MPOS SDK.
  getTransaction:
    tags:
      - SSMPOSSDK
    summary: getTransaction
    description: This method returns the `Transaction` representation object that can be used to handle transactions upon Fasstap™ MPOS SDK initialized successfully.
    method:
      lang: java
      code: getTransaction()
    returnValue:
      - type: Transaction
        description: Transaction object that’s used to handle transaction related operations.
  hasRequiredPermission:
    tags:
      - SSMPOSSDK
    summary: hasRequiredPermission
    description: Check if the app has already granted with the Fasstap™ MPOS SDK required permissions.
    method:
      lang: java
      code: hasRequiredPermission(Context context)
    parameters:
      - name: context
        description: Context of the caller class.
        type: Context
    returnValue:
      - type: boolean
        description: 	Flag indicates if the app has granted with the necessary permissions.
  requestPermissionIfRequired:
    tags:
      - SSMPOSSDK
    summary: requestPermissionIfRequired
    description: Have the Fasstap™ MPOS SDK request for the necessary permissions.
    method:
      lang: java
      code: requestPermissionIfRequired(Activity app, int code)
    parameters:
      - name: app
        description: |
            The activity that is requesting for the permission so Android framework could handle the request prompt. The activity should also overrides `onRequestPermissionsResult`. 
            
            Once Android Framework has prompted the user to enable the necessary permissions, main project should forward the `grantResults` back to `AttestationPOG.hasGrantPermission()` method for validating.
        type: Activity
      - name: code
        description: The request code that Android’s Framework should be forwarding back to main project’s `onRequestPermissionResult` callback.
        type: int
    returnValue:
      - type: boolean
        description: 	|
            Flag indicates if the permissions have all been granted prior to calling this method. 
            
            If it is true, Fasstap™ MPOS SDK shall not request for permissions. If otherwise, Fasstap™ MPOS SDK shall proceed to request for permissions and return false immediately, main project shall implements `onRequestPermissionResult` to listen to user’s action if this method returns false.
  hasGrantPermission:
    tags:
      - SSMPOSSDK
    summary: hasGrantPermission
    description: Check if the permissions requested are all granted without issue. Please make a call to `requestPermissionIfRequired` method prior to this.
    method:
      lang: java
      code: hasGrantPermission(int[] grantResult)
    parameters:
      - name: grantResult
        description: The grant results forwarded from `onRequestPermissionsResults`.
        type: int[]
    returnValue:
      - type: boolean
        description: 	Flag indicates if the permissions have all been granted.
  isRunningOnRemoteProcess:
    tags:
      - SSMPOSSDK
    summary: isRunningOnRemoteProcess
    description: Check if the application is running on remote process.
    method:
      lang: java
      code: isRunningOnRemoteProcess(Context context)
    parameters:
      - name: context
        description: The context of application.
        type: Context
    returnValue:
      - type: boolean
        description: 	Flag indicates if the application is running on remote process.
  getCotsId:
    tags:
      - SSMPOSSDK
    summary: getCotsId
    description: To get the device ID.
    method:
      lang: java
      code: getCotsId()
    returnValue:
      - type: String
        description: 	Device ID.
  getSdkVersion:
    tags:
      - SSMPOSSDK
    summary: getSdkVersion
    description: To get the Fasstap™ MPOS SDK version.
    method:
      lang: java
      code: getSdkVersion()
    returnValue:
      - type: String
        description: Fasstap™ MPOS SDK version.
  create:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: create
    description: Create a new `SSMPOSSDKConfiguration.Builder` object.
    method:
      lang: java
      code: create()
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setLibAccessKey:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setLibAccessKey
    description: To set the Access Key. This field is mandatory. Soft Space will provide the Access Key.
    method:
      lang: java
      code: setLibAccessKey(String libAccessKey)
    parameters:
      - name: libAccessKey
        description: The access key given by Soft Space.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setLibSecretKey:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setLibSecretKey
    description: To set the Secret Key. This field is mandatory. Soft Space will provide the Secret Key.
    method:
      lang: java
      code: setLibSecretKey(String libSecretKey)
    parameters:
      - name: libSecretKey
        description: The Secret key given by Soft Space.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setLibGoogleApiKey:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setLibGoogleApiKey
    description: |
          To set the Google API Key for Google Safetynet Attestation purpose. This field is mandatory. 
          This requires developer to register an account under *Google Developer Console > Android Device Verification API*. For more information, please visit this [link](https://developer.android.com/training/safetynet/attestation.html#obtain-api-key).
    method:
      lang: java
      code: setLibGoogleApiKey(String libGoogleApiKey)
    deprecated: true
    parameters:
      - name: libGoogleApiKey
        description: The Google API key obtains from Google Developer Console site.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setLibGooglePlayProjNum:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setLibGooglePlayProjNum
    description: To set the Google Play Project Number for Google Play Integrity API purpose. This field is mandatory. Refer to Play Integrity Enrolment guide.
    method:
      lang: java
      code: setLibGooglePlayProjNum(String libGooglePlayProjNum)
    parameters:
      - name: libGooglePlayProjNum
        description: The Google Play Project Number obtains from Google Cloud Console.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationHost:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationHost
    description: To set the attestation server’s URL. This field is mandatory if attestation is enabled.
    method:
      lang: java
      code: setAttestationHost(String attestationHost)
    parameters:
      - name: attestationHost
        description: The attestation server’s URL.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationRefreshInterval:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationRefreshInterval
    description: To set the attestation refresh interval in milliseconds. This interval serves as the time before next attestation would kick start automatically in the background after one attestation has done.
    method:
      lang: java
      code: setAttestationRefreshInterval(Long attestationRefreshInterval)
    parameters:
      - name: attestationRefreshInterval
        description: The attestation refresh interval in milliseconds.
        type: Long
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationHostReadTimeout:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationHostReadTimeout
    description: To set the attestation host’s socket read timeout value in milliseconds.
    method:
      lang: java
      code: setAttestationHostReadTimeout(Long attestationHostReadTimeout)
    parameters:
      - name: attestationHostReadTimeout
        description: The attestation host's socket read timeout value in milliseconds.
        type: Long
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationConnectionTimeout:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationConnectionTimeout
    description: To set the attestation host’s socket connection timeout value in milliseconds.
    method:
      lang: java
      code: setAttestationConnectionTimeout(Long attestationConnectionTimeout)
    parameters:
      - name: attestationConnectionTimeout
        description: The attestation host's connection timeout value in milliseconds.
        type: Long
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationStrictHttp:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationStrictHttp
    description: To set if the attestation host is using certificate pinning.
    method:
      lang: java
      code: setAttestationStrictHttp(Boolean attestationStrictHttp)
    parameters:
      - name: attestationStrictHttp
        description: Flag if SDK should use Certificate pinning for verification.
        type: Boolean
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setAttestationHostCertPinning:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setAttestationHostCertPinning
    description: To set the attestation host’s certificate if SDK should verify with certificate pinning method.
    method:
      lang: java
      code: setAttestationHostCertPinning(String attestationHostCertPinning)
    parameters:
      - name: attestationHostCertPinning
        description: Attestation server’s certificate.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setUniqueID:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setUniqueID
    description: To set the unique ID provided by Soft Space.
    method:
      lang: java
      code: setUniqueID(String uniqueID)
    parameters:
      - name: uniqueID
        description: The uniqueID from Soft Space.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setDeveloperID:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setDeveloperID
    description: To set the developer ID provided by Soft Space.
    method:
      lang: java
      code: setDeveloperID(String developerID)
    parameters:
      - name: developerID
        description: The developerID from Soft Space.
        type: String
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  setEnvironment:
    tags:
      - SSMPOSSDKConfiguration.Builder
    summary: setEnvironment
    description: |
          To set the environment of SDK, configuration file is required as per each of the different Environment: 
          - DEV: `config_dev.env`
          - SIT: `config_sit.env`
          - UAT: `config_uat.env`
          - PROD: `config_prod.env`
    method:
      lang: java
      code: setEnvironment(Environment environment)
    parameters:
      - name: environment
        description: The environment of SDK.
        type: Environment
    returnValue:
      - type: SSMPOSSDKConfiguration.Builder
        description: A new `SSMPOSSDKConfiguration.Builder` that could be used to set configuration values.
  startTransaction:
    tags:
      - Transaction
    summary: startTransaction
    description: |
          Instruct Fasstap™ MPOS SDK to start a transaction with the `MPOSTransactionParams`. This will make Fasstap™ MPOS SDK starts listening to NFC events and the card events (like user tapped card, or timeout occurs) will be reflected with `onTransactionUIEvent` method in `TransactionEvents`. 
          
          Various transaction events that requires main project to handle the implementation will take place under `TransactionEvents` interface too. For more information regarding `TransactionEvents`, please refer to [MPOSTransaction.TransactionEvents](#mpostransaction-transactionevents) 
          
          Eventhough Fasstap™ MPOS SDK handles the NFC events itself, it does not render any UI that instructs user to tap card on the phone. Prompting user with proper tap card UI before calling `startTransaction` is strongly recommended.
    method:
      lang: java
      code: startTransaction(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that starts the transaction. Please note that Activity class instance is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for this transaction like amount. For more information, please refer to [MPOSTransactionParams](#mpostransactionparams-builder).
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional and card events. Please refer to [MPOSTransaction.TransactionEvents](#mpostransaction-transactionevents).
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the transaction has started successfully. Please take note that this flag does not indicate the transaction has been carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
    samples:
      - name: success
        value: 
          lang: java
          code: |
              MPOSTransactionParams transactionalParams = MPOSTransactionParams.Builder.create() 
                .setReferenceNumber(&quot;referenceNo&quot;) 
                .setAmount(&quot;1000&quot;) 
                .build(); 
                
              SSMPOSSDK.getInstance().getTransaction().startTransaction(this, transactionalParams, new MPOSTransaction.TransactionEvents() { 
                @Override 
                public void onTransactionResult(int result, MPOSTransactionOutcome transactionOutcome) { 
                  
                  runOnUiThread(new Runnable() { 
                    @Override 
                    tpublic void run() { 
                      if(result == TransactionSuccessful) 
                      { 
                        String outcome = "Transaction ID :: " + transactionOutcome.getTransactionID() + "\\n"; 
                        outcome += "Reference No :: " + transactionOutcome.getReferenceNo() + "\\n"; 
                        outcome += "Approval code :: " + transactionOutcome.getApprovalCode() + "\\n"; 
                        outcome += "Card number :: " + transactionOutcome.getCardNo() + "\\n"; 
                        outcome += "Cardholder name :: " + transactionOutcome.getCardHolderName() + "\\n"; 
                        outcome += "Acquirer ID :: " + transactionOutcome.getAcquirerID() + "\\n"; 
                        outcome += "RRN :: " + transactionOutcome.getRrefNo(); 
                      } 
                      else 
                      { 
                        if(transactionOutcome != null) 
                        { 
                          writeLog(transactionOutcome.getStatusCode() + " - " + transactionOutcome.getStatusMessage()); 
                        } 
                        else 
                        { 
                          writeLog("Error ::" + result); 
                        } 
                      } 
                    } 
                  });
                } 
                
                @Override 
                public void onTransactionUIEvent(int event) { 
                  runOnUiThread(new Runnable() { 
                    @Override 
                    public void run() { 
                      if (event == TransactionUIEvent.CardReadOk) 
                      { 
                        // you may customize card reads OK sound & vibration, below is some example 
                        ToneGenerator toneGenerator = new ToneGenerator(AudioManager.STREAM_MUSIC, ToneGenerator.MAX_VOLUME); 
                        toneGenerator.startTone(ToneGenerator.TONE_DTMF_P, 500); 
                        Vibrator v = (Vibrator) MainActivity.this.getSystemService(Context.VIBRATOR_SERVICE); 
                        if (v.hasVibrator()) 
                        { 
                          v.vibrate(VibrationEffect.createOneShot(200, VibrationEffect.DEFAULT_AMPLITUDE)); 
                        } 
                      } 
                      else if (event == TransactionUIEvent.RequestSignature) 
                      { 
                        writeLog("Signature is required"); 
                      } 
                    } 
                  }); 
                } 
              });
  abortTransaction:
    tags:
      - Transaction
    summary: abortTransaction
    description: To try to cancel an ongoing transaction.
    method:
      lang: java
      code: abortTransaction()
    returnValue:
      - type: Boolean
        description: A flag that indicates if the transaction has cancelled successfully.
  startQRTransaction:
    tags:
      - Transaction
    summary: startQRTransaction
    description: |
        Instruct Fasstap™ MPOS SDK to start a QR transaction with the `MPOSTransactionParams`. This will generate a QR related response in `TransactionOutcome`. 
    
        Various transaction events that requires main project to handle the implementation will take place under `TransactionEvents` interface too. For more information regarding `TransactionEvents`, please refer to [MPOSTransaction.TransactionEvents](#mpostransaction-transactionevents).
    method:
      lang: java
      code: startQRTransaction(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that starts the transaction. Please note that Activity class instance is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for this transaction like amount & QR Type. For more information, please refer to [MPOSTransactionParams](#mpostransactionparams-builder).
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional and card events. Please refer to [MPOSTransaction.TransactionEvents](#mpostransaction-transactionevents).
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: 	A flag that is indicating if the transaction has started successfully. Please take note that this flag does not indicate the transaction has been carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
  abortQRTransaction:
    tags:
      - Transaction
    summary: abortQRTransaction
    description: To try to cancel an ongoing QR transaction.
    method:
      lang: java
      code: abortQRTransaction()
    returnValue:
      - type: Boolean
        description: 	A flag that indicates if the QR transaction has cancelled successfully.
  voidTransaction:
    tags:
      - Transaction
    summary: voidTransaction
    description: To void a transaction.
    method:
      lang: java
      code: voidTransaction(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that voids the transaction. Please note that activity is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for this void transaction like transaction ID.
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional and card events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: 	A flag that is indicating if the void transaction has started successfully. Please take note that this flag does not indicate the void transaction has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
    samples:
      - name: success
        value: 
          lang: java
          code: |
            MPOSTransactionParams transactionalParams = MPOSTransactionParams.Builder.create() 
              .setMPOSTransactionID(edtTrxID.getText().toString()) 
              .build(); 
            
            SSMPOSSDK.getInstance().getTransaction().voidTransaction(this, transactionalParams, new MPOSTransaction.TransactionEvents() { 
              @Override 
              public void onTransactionResult(int result, MPOSTransactionOutcome transactionOutcome) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    if(result == TransactionSuccessful) { 
                      // Successful 
                    } 
                    else { 
                      if (transactionOutcome != null) { 
                        writeLog(transactionOutcome.getStatusCode() + " - " + transactionOutcome.getStatusMessage());
                      } 
                    } 
                  } 
                }); 
              } 
            
              @Override 
              public void onTransactionUIEvent(int event) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    writeLog("onTransactionUIEvent :: " + event); 
                  } 
                }); 
              } 
            });
  refundTransaction:
    tags:
      - Transaction
    summary: refundTransaction
    description: To refund a transaction.
    method:
      lang: java
      code: refundTransaction(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that refunds the transaction. Please note that activity is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for this refund transaction like transaction ID or `isCardRequiredForRefund`.
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional and card events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the refund transaction has started successfully. Please take note that this flag does not indicate the refund transaction has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
  performSettlement:
    tags:
      - Transaction
    summary: performSettlement
    description: To perform a settlement.
    method:
      lang: java
      code: performSettlement(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that performs the settlement. Please note that activity is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters object.
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the settlement has started successfully. Please take note that this flag does not indicate the settlement has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
    samples:
      - name: success
        value: 
          lang: java
          code: |
            MPOSTransactionParams transactionalParams = MPOSTransactionParams.Builder.create() 
              .build();
              
            SSMPOSSDK.getInstance().getTransaction().performSettlement(this, transactionalParams, new MPOSTransaction.TransactionEvents() { 
              @Override 
              public void onTransactionResult(int result, MPOSTransactionOutcome transactionOutcome) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    if(result == TransactionSuccessful) { 
                      // Successful 
                    } 
                    else { 
                      if (transactionOutcome != null) { 
                        writeLog(transactionOutcome.getStatusCode() + " - " + transactionOutcome.getStatusMessage()); 
                      } 
                    } 
                  } 
                }); 
              } 
              
              @Override 
              public void onTransactionUIEvent(int event) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    writeLog("onTransactionUIEvent :: " + event); 
                  } 
                });
              } });
  refreshToken:
    tags:
      - Transaction
    summary: refreshToken
    description: To refresh token.
    method:
      lang: java
      code: refreshToken(Activity context, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that initiate the refresh token operation. Please note that activity is required here instead of plain context.
        type: Activity
      - name: callback
        description: The callback implementation class for various transactional events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the refresh token operation has started successfully. Please take note that this flag does not indicate the refresh token has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
    samples:
      - name: success
        value: 
          lang: java
          code: |
            SSMPOSSDK.getInstance().getTransaction().refreshToken(this, new MPOSTransaction.TransactionEvents() {
              @Override
              public void onTransactionResult(int result, MPOSTransactionOutcome transactionOutcome) {
                if(result == TransactionSuccessful) {
                  // Success
                } else {
                  // Failed
                }
              }
              
              @Override
              public void onTransactionUIEvent(int event) {
                // UI event
                writeLog("onTransactionUIEvent :: " + event);
              }
            });
  sendReceipt:
    tags:
      - Transaction
    summary: sendReceipt
    description: To send an e-receipt.
    method:
      lang: java
      code: sendReceipt(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that performs send receipt. Please note that activity is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for send receipt like email, mobile number.
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the send receipt has started successfully. Please take note that this flag does not indicate the send receipt has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
  uploadSignature:
    tags:
      - Transaction
    summary: uploadSignature
    description: To upload signature.
    method:
      lang: java
      code: uploadSignature(MPOSTransactionParams trxParams)
    parameters:
      - name: trxParams
        description: The parameter for upload signature is signature.
        type: MPOSTransactionParams
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the upload signature has started successfully. Please take note that this flag does not indicate the upload signature has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback from [startTransaction](#starttransaction).
    samples:
      - name: success
        value: 
          lang: java
          code: |
            MPOSTransactionParams transactionalParams = MPOSTransactionParams.Builder.create()
              .setSignature(base64SignatureString)
              .build();
            
            SSMPOSSDK.getInstance().getTransaction().uploadSignature(transactionalParams);
  getTransactionStatus:
    tags:
      - Transaction
    summary: getTransactionStatus
    description: To get transaction status.
    method:
      lang: java
      code: getTransactionStatus(Activity context, MPOSTransactionParams trxParams, TransactionEvents callback)
    parameters:
      - name: context
        description: The activity that gets the transaction status. Please note that activity is required here instead of plain context.
        type: Activity
      - name: trxParams
        description: The parameters for this get transaction status like transaction ID.
        type: MPOSTransactionParams
      - name: callback
        description: The callback implementation class for various transactional and card events.
        type: TransactionEvents
    returnValue:
      - type: Boolean
        description: A flag that is indicating if the get transaction status has started successfully. Please take note that this flag does not indicate the get transaction status has carried out successfully. Transaction results or events will be done via `TransactionEvents` callback.
    samples:
      - name: success
        value: 
          lang: java
          code: |
            MPOSTransactionParams transactionalParams = MPOSTransactionParams.Builder.create().build(); 
            if (trxID.length() > 0)
            { 
              transactionalParams = MPOSTransactionParams.Builder.create() 
                .setMPOSTransactionID(edtTrxID.getText().toString()) 
                .build(); 
            } else if (referenceNo.length() > 0) { 
              transactionalParams = MPOSTransactionParams.Builder.create() 
                .setReferenceNumber(edtRefNo.getText().toString()) 
                .build(); 
            } 
            
            SSMPOSSDK.getInstance().getTransaction().getTransactionStatus(this, transactionalParams, new MPOSTransaction.TransactionEvents() { 
              @Override 
              public void onTransactionResult(int result, MPOSTransactionOutcome transactionOutcome) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    if(result == TransactionSuccessful) 
                    { 
                      if (transactionOutcome.getStatusCode().equals(TRX_STATUS_APPROVED)) 
                      { 
                        // approved 
                      } 
                      else if (transactionOutcome.getStatusCode().equals(TRX_STATUS_SETTLED)) 
                      { 
                        // settled 
                      } 
                      
                      String outcome = "Status :: " + transactionOutcome.getStatusCode() + " - " + (mapStatusCode(transactionOutcome.getStatusCode()).length()>0?mapStatusCode(transactionOutcome.getStatusCode()):transactionOutcome.getStatusMessage()) + "\\n"; 
                      outcome += "Reference no :: " + transactionOutcome.getReferenceNo() + "\\n"; 
                      outcome += "Amount auth :: " + transactionOutcome.getAmountAuthorized() + "\\n"; 
                      outcome += "Transaction ID :: " + transactionOutcome.getTransactionID() + "\\n"; 
                      outcome += "Transaction date :: " + transactionOutcome.getTransactionDate() + "\\n"; 
                      outcome += "Batch no :: " + transactionOutcome.getBatchNo() + "\\n"; 
                      outcome += "Approval code :: " + transactionOutcome.getApprovalCode() + "\\n"; 
                      outcome += "Invoice no :: " + transactionOutcome.getInvoiceNo() + "\\n"; 
                      outcome += "AID :: " + transactionOutcome.getAid() + "\\n"; 
                      outcome += "Card type :: " + transactionOutcome.getCardType() + "\\n"; 
                      outcome += "Application label :: " + transactionOutcome.getApplicationLabel() + "\\n"; 
                      outcome += "Card number :: " + transactionOutcome.getCardNo() + "\\n"; 
                      outcome += "Cardholder name :: " + transactionOutcome.getCardHolderName()+ "\\n"; 
                      outcome += "RRN :: " + transactionOutcome.getRrefNo(); 
                    } 
                    else 
                    { 
                      if(transactionOutcome != null)
                      { 
                        writeLog(transactionOutcome.getStatusCode() + " - " + transactionOutcome.getStatusMessage()); 
                      } 
                      else 
                      { 
                        writeLog("Error ::" + result); 
                      } 
                    } 
                  } 
                }); 
              } 
              
              @Override 
              public void onTransactionUIEvent(int event) { 
                runOnUiThread(new Runnable() { 
                  @Override 
                  public void run() { 
                    writeLog("onTransactionUIEvent :: " + event); 
                  } 
                }); 
              } 
            });
  onTransactionResult:
    tags:
      - MPOSTransaction.TransactionEvents
    summary: onTransactionResult
    description: Callback method that will be raised when transaction has finish processes and kernel returns result, together with online host response message.
    method:
      lang: java
      code: onTransactionResult(int result, TransactionOutcome transactionOutcome)
    parameters:
      - name: result
        description: Result of processing transaction returned by the transaction-processing kernel. For more information about possible result, please refer to [Transaction.TransactionEvents.TransactionResult](#transaction-transactionevents-transactionresult).
        type: int
      - name: transactionOutcome
        description: The transaction outcome object that carries status and details.
        type: TransactionOutcome
  onTransactionUIEvent:
    tags:
      - MPOSTransaction.TransactionEvents
    summary: onTransactionUIEvent
    description: Callback method that will be raised when there is any kind of UI event that needs to display to user for acknowledgement purpose.
    method:
      lang: java
      code: onTransactionUIEvent(int uiEvent)
    parameters:
      - name: uiEvent
        description: The event code that raised the UI event. Please refer to [Transaction.TransactionEvents.TransactionUIEvent](#transaction-transactionevents-transactionuievent) for more information.
        type: int
  Transaction.TransactionEvents.TransactionUIEvent:
    tags:
      - MPOSTransaction.TransactionEvents
    summary: Transaction.TransactionEvents.TransactionUIEvent
    description: |
          This class holds the possible UI events raised by Tap to Pay SDK that may need to show the user.
          +:----------------------:+:--------:+:---------------------------------------------------------------------------------------------------------------+
          | Data Type              | Value    | Description                                                                                                    |
          +:======================:+:========:+:===============================================================================================================+
          | int                    | 71       | `PresentCard`\                                                                                                 |
          |                        |          | Event code indicates reader is ready for transaction.                                                          |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 72       | `CardPresented`\                                                                                               |
          |                        |          | Event code indicates the card is detected by the reader.                                                       |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 74       | `PresentCardTimeout`\                                                                                          |
          |                        |          | Event code indicates present card has timeout.                                                                 |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 23       | `CardReadOk`\                                                                                                  |
          |                        |          | Event code indicates the contactless card has been processed successfully, can remove card from the terminal.  |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 24       | `CardReadError`\                                                                                               |
          |                        |          | Event code indicates the contactless card processing has failed.                                               |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 25       | `CardReadRetry`\                                                                                               |
          |                        |          | Event code indicates card read is incomplete and card read retry has been called.                              |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 73       | `Authorising`\                                                                                                 |
          |                        |          | Event code indicates sending for online authorization.                                                         |
          |                        +:--------:+----------------------------------------------------------------------------------------------------------------+
          |                        | 70       | `RequestSignature`\                                                                                            |
          |                        |          | Event code indicates request for signature.                                                                    |
          +------------------------+----------+----------------------------------------------------------------------------------------------------------------+
  Transaction.TransactionEvents.TransactionResult:
    tags:
      - MPOSTransaction.TransactionEvents
    summary: Transaction.TransactionEvents.TransactionResult
    description: |
          This class holds the possible transaction processing result codes that will be raised with `onTransactionResult` callback method.
          +:----------------------:+:--------:+:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          | Data Type              | Value    | Description                                                                                                                                                                                 |
          +:======================:+:========:+:============================================================================================================================================================================================+
          | int                    | 0        | `TransactionSuccessful`\                                                                                                                                                                    |
          |                        |          | Event code indicates transaction has been carried out successfully and the transaction cycle has been completed as well.                                                                    |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7004     | `TransactionDeclined`\                                                                                                                                                                      |
          |                        |          | Event code indicates the transaction is declined by kernel.                                                                                                                                 |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7005     | `TransactionFailed`\                                                                                                                                                                        |
          |                        |          | Event code indicates the kernel has failed to process the transaction.                                                                                                                      |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7006     | `TransactionNoAppError`\                                                                                                                                                                    |
          |                        |          | Event code indicates the card tapped does not have any schemes in it.                                                                                                                       |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7007     | `TransactionFailedAllowFallback`\                                                                                                                                                           |
          |                        |          | Event code indicates the transaction has failed but allowing fallback mechanism. Please handle this error the same way as how TransactionFailed is handled.                                 |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7008     | `TransactionCardExpired`\                                                                                                                                                                   |
          |                        |          | Event code indicates the transaction has failed due to the card tapped has expired.                                                                                                         |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7020     | `TransactionOnlineFailed`\                                                                                                                                                                  |
          |                        |          | Event code indicates the transaction has failed due to online host rejection.                                                                                                               |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7024     | `TransactionCancel`\                                                                                                                                                                        |
          |                        |          | Event code indicates the transaction has been cancelled intentionally by the user.                                                                                                          |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7028     | `TransactionTimeout`\                                                                                                                                                                       |
          |                        |          | Event code indicates the transaction has failed due to timer that starts counting since transaction start has elapsed.                                                                      |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7054     | `TransactionRequireCDCVM`\                                                                                                                                                                  |
          |                        |          | Event code indicates that CDCVM is required, advise customer to see phone for instructions.                                                                                                 |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7056     | `TransactionTryAgain`\                                                                                                                                                                      |
          |                        |          | Event code indicates the Tap to Pay SDK has failed to communicate with the card tapped. This is most likely happened when the card has moved away in the midst of transaction processing.   |
          |                        +:--------:+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | 7059     | `TransactionPinNotSupported`\                                                                                                                                                               |
          |                        |          | Event code indicates the transaction has failed due to transaction amount above CVM limit and PIN is not supported for the particular card type.                                            |
          +------------------------+----------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
  TransactionOutcome:
    tags:
      - MPOSTransaction.TransactionEvents
    summary: TransactionOutcome
    description: |
          This class holds the transaction outcome that will be raised with `onTransactionResult` callback method.
          +:----------------------:+:-------------------------------+:----------+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          | Data Type              | Field                          | Mandatory | Description                                                                                                                                       |
          +:======================:+:===============================+:=========:+:==================================================================================================================================================+
          | String                 | `statusCode`                   | Y         | Status code of the transaction.                                                                                                                   |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `statusMessage`                | Y         | Status message of the transaction.                                                                                                                |
          +:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:+
          | Sales Only                                                                                                                                                                                                              |
          +:----------------------:+:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          | String                 | `approvalCode`                 | Y         | Approval code from Host.                                                                                                                          |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionID`                | Y         | Transaction ID from MPOS server, to be used for SendReceipt or Void.                                                                              |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `cardNo`                       | Y         | Masked PAN number.                                                                                                                                |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `cardType`                     | Y         | Card type.\                                                                                                                                       |
          |                        |                                |           | 0 – Visa\                                                                                                                                         |
          |                        |                                |           | 1 – Mastercard\                                                                                                                                   |
          |                        |                                |           | 2 – AMEX\                                                                                                                                         |
          |                        |                                |           | 3 – JCB\                                                                                                                                          |
          |                        |                                |           | 7 –  UnionPay\                                                                                                                                    |
          |                        |                                |           | 10 – Diners\                                                                                                                                      |
          |                        |                                |           | 11 – TPN\                                                                                                                                         |
          |                        |                                |           | 22 – VCCS (NAPAS)\                                                                                                                                |
          |                        |                                |           | 23 – Discover                                                                                                                                     |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `cardHolderName`               | N         | Card holder name from EMV data.                                                                                                                   |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `aid`                          | Y         | AID from EMV data.                                                                                                                                |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionDate`              | Y         | Transaction Date of the transaction.                                                                                                              |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionTime`              | Y         | Transaction Time of the transaction.                                                                                                              |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `acquirerID`                   | N         | Acquirer ID of the transaction.                                                                                                                   |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `applicationCryptogram`        | N         | Application Cryptogram of the transaction.                                                                                                        |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `terminalVerificationResults`  | N         | TVR of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionStatusInfo`        | N         | TSI of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `merchantIdentifier`           | N         | MID of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `terminalIdentifier`           | N         | TID of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `invoiceNo`                    | N         | Invoice No of the transaction.                                                                                                                    |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `contactlessCVMType`           | N         | Contactless CVM Type of the transaction.                                                                                                          |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `rrefNo`                       | N         | RRN of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionCert`              | N         | TC of the transaction.                                                                                                                            |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `merchantCategoryCode`         | N         | MCC of the transaction.                                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `receiptUrl`                   | N         | URL for e-receipt of the transaction.                                                                                                             |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `transactionDateTime`          | N         | Full date time of the transaction.                                                                                                                |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `referenceNo`                  | N         | Unique reference no of the transaction.                                                                                                           |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `traceNo`                      | N         | Trace No of the transaction.                                                                                                                      |
          +:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:+
          | QR Sales Only                                                                                                                                                                                                           |
          +:----------------------:+:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          | String                 | `qrID`                         |  Y        | ID of the QR transaction.                                                                                                                         |
          |                        +:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          |                        | `qrData`                       |  Y        | QR content that used to generate QR code.                                                                                                         |
          +:----------------------:+:-------------------------------+:---------:+:--------------------------------------------------------------------------------------------------------------------------------------------------+
          | Bitmap                 | `qrCode`                       |  Y        | QR code image of the requested QR type in Bitmap form.                                                                                            |
          +------------------------+--------------------------------+-----------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  setCustomField:
    tags:
      - MPOSTransactionParams.Builder
    summary: setCustomField
    description: Setting the custom field to pass into the server. Only set if applicable.
    method:
      lang: java
      code: setCustomField(HashMap<String, String> customField)
    parameters:
      - name: customField
        description: The self-defined custom field to be sent to server.
        type: HashMap<String, String>
    returnValue:
      - type: MPOSTransactionParams.Builder
        description: The current object of the builder class of `MPOSTransactionParams`.
  setAmount:
    tags:
      - MPOSTransactionParams.Builder
    summary: setAmount
    description: |
        Setting the amount value for the transaction. The amount should be in `String` format, and it should only be numeric form. Please do not include the decimal point while setting the amount.
    
        For example, if the amount is 5.99, please pass in as '599' in `String`. If it is 599.00, please pass in '59900'.
    hint:
      containerType: note
      text: For sale and refund transactions
    method:
      lang: java
      code: setAmount(String amount)
    parameters:
      - name: amount
        description: The transaction amount.
        type: String
    returnValue:
      - type: MPOSTransactionParams.Builder
        description: The current object of the builder class of `MPOSTransactionParams`.
  setCardRequiredForRefund:
    tags:
      - MPOSTransactionParams.Builder
    summary: setCardRequiredForRefund
    description: Indicator for refund transaction type.
    hint:
      containerType: note
      text: For refund transaction
    method:
      lang: java
      code: setCardRequiredForRefund(boolean cardRequiredForRefund)
    parameters:
      - name: cardRequiredForRefund
        description: The refund indicator.
        type: boolean
    returnValue:
      - type: MPOSTransactionParams.Builder
        description: The current object of the builder class of `MPOSTransactionParams`.
  setMPOSTransactionID:
    tags:
      - MPOSTransactionParams.Builder
    summary: setMPOSTransactionID
    description: Setting the sales/refund transaction ID value for the Void transaction, returned from MPOS server during Sale/Refund transaction.
    hint:
      containerType: note
      text: For void transaction
    method:
      lang: java
      code: setMPOSTransactionID(String mposTransactionID)
    parameters:
      - name: mposTransactionID
        description: The transaction ID from MPOS server.
        type: String
    returnValue:
      - type: MPOSTransactionParams.Builder
        description: The current object of the builder class of `MPOSTransactionParams`.
  setQRType:
    tags:
      - MPOSTransactionParams.Builder
    summary: setQRType
    description: QR type for QR transaction.
    hint:
      containerType: note
      text: For QR sales
    method:
      lang: java
      code: setQRType(QRType qrType)
    parameters:
      - name: qrType
        description: |
            The QR type.
            
            Supported QR Types:
            - DuitNow QR
            - AliPay
            - Wechat
            - TouchNGo
            - PromptPay
            - Fasspay
            - Boost
            - Maybank
            - UnionPay
            - MCash
            - GrabPay
            - WechatPayCN
            - ShopeePay
            - NETSPay
            - Aeon
            - JoyWallet
            - AAPocket
            - Pay2Me
            - SakuPay
            - ATLAS
        type: QRType
    returnValue:
      - type: MPOSTransactionParams.Builder
        description: The current object of the builder class of `MPOSTransactionParams`.
  
      
