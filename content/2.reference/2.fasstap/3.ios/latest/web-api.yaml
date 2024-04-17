---
title: Web API
description: View all API objects, methods, attributes and responses embedded within Fasstap SDK
icon: material-symbols:code-blocks-outline
product: fasstap
---

openapi: 3.0.3
info:
  title: Authorization Token
  version: 3.5.0
    
paths:
  /api/processRequest/createCompany:
    post:
      summary: Create Company
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/createCompanyRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'CREATE_COMPANY', 'companyDetails': { 'businessName': 'Ergonomic Soft Tuna Limited', 'businessShortName': 'Ergonomic Soft Tuna', 'businessRegistrationAddress': '82/485 Gleichner Overpass Falls officia', 'postcode': '3249', 'city': 'temporibus', 'region': 'WA', 'merchantDetails': [ { 'mid': '378862146526047', 'dba': 'Ergonomic Soft Tuna', 'tyroMid': '902130' } ], 'lcrEnabled': false, 'lcrMinThreshold': '0', 'lcrMaxThreshold': '100000', 'mcc': '4112' } }
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/createCompanyResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', uid: '1' }
  /api/processRequest/updateCompany:
    post:
      summary: Update Company
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/updateCompanyRequest'
            examples:
                application/json:
                  value: { 'apiServiceName': 'UPDATE_COMPANY', 'uid': '32376', 'companyDetails': { 'businessName': 'Ergonomic Soft Tuna Limited', 'businessShortName': 'Ergonomic Soft Tuna', 'postcode': '3249', 'city': 'Sydney', 'region': 'NSW', 'lcrEnabled': true, 'lcrMinThreshold': '0', 'lcrMaxThreshold': '100000', 'mcc': '8011' } }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/updateCompanyResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', uid: '1' }
  /api/processRequest/viewCompany:
    post:
      summary: View Company
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/viewCompanyRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'VIEW_COMPANY', companyDetails: { businessName: 'Ergonomic Soft Tuna Limited' }, uid: '32376' }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/viewCompanyResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', companyDetails: { businessName: 'Ergonomic Soft Tuna Limited', businessShortName: 'EST', businessRegistrationAddress: '215 E Tasman Dr, Po Box 65502', postcode: '95134', city: 'San Jose', region: 'CA', mcc: '1234', lcrEnabled: 'true', lcrMinThreshold: '10000', lcrMaxThreshold: '50000', merchantDetails: { mid: '378862146526047', dba: 'test1' } } }
                
  /api/processRequest/addMerchantID:
    post:
      summary: Add Merchant ID
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/addMerchantIDRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'REGISTER_MID', uid: '32376', companyDetails: { businessName: 'Ergonomic Soft Tuna Limited', merchantDetails: { mid: '378862146526047', dba: 'test1' } } }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/addMerchantIDResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.' }
  /api/processRequest/registerTerminal:
    post:
      summary: Register Terminal
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/registerTerminalRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'REGISTER_TID', terminalDetails: { mid: '378862146526047', tid: '46840418'} }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/registerTerminalResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', uid: 'TID[11000001]UID:9, TID[11000002]UID:10,TID[11000003]UID:11,TID[13000001]UID:12,TID[13000002]UID:13,TID[15000001]UID:14,TID[15000002]UID:15,TID[15000003]UID:16' }
  /api/processRequest/viewTerminal:
    post:
      summary: View Terminal
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/viewTerminalRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'VIEW_TID', uid: '56861', terminalDetails: { tid: '46840418' } }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/viewTerminalResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', terminalDetails: { mid: '378862146526047', tid: '46840418' } }
                
                
  /api/processRequest/registerMobileUser:
    post:
      summary: Register Mobile User
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/registerMobileUserRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'REGISTER_MOBILE_USER', mobileUserDetails: { mobileUserID: 'user902130'},  terminalDetails: { mid: '378862146526047', tid: '46840418'}  }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/registerMobileUserResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.', uid: '1' , tempPin: '299522', mobileUserDetails: { mobileUserID: 'user902130', userStatus: 'Active' } }

  /api/processRequest/viewMobileUser:
    post:
      summary: View Mobile User
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/viewMobileUserRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'VIEW_MOBILE_USER', mobileUserDetails: { mobileUserID: 'user902130'},  uid: '55490'  }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/viewMobileUserResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.' , mobileUserDetails: { mobileUserID: 'user902130', userStatus: 'Active' }, terminalDetails: { mid: '378862146526047', tid: '46840418' } }
  /api/processRequest/updateMobileUserStatus:
    post:
      summary: Update Mobile User Status
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/updateMobileUserRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'UPDATE_MOBILE_USER_STATUS', mobileUserDetails: { mobileUserID: 'user902130', userStatus: 'Suspended' }, uid: '55490' }
        required: true
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/updateMobileUserResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.' , tempPin: '299522', mobileUserDetails: { mobileUserID: 'user902130', userStatus: 'Suspended' } }
  /api/processRequest/resetPin:
    post:
      summary: Reset Pin
      parameters:
        - name: Authorization
          in: header
          description: The Bearer token for the request.
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/resetPinRequest'
            examples:
                application/json:
                  value: { apiServiceName: 'RESET_PIN', mobileUserDetails: { mobileUserID: 'user902130'} , uid: '55490' }
      responses:
        '200':
          description: String
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/resetPinResponse'
              examples:
                application/json:
                  value: { status: 'Success', message: 'Request is successful.' , tempPin: '299522', mobileUserDetails: { mobileUserID: 'user902130'} }
                
components:
  schemas:
    createCompanyRequest:
      type: object
      required:
          - apiServiceName
          - companyDetails
      properties:
        apiServiceName:
          type: string
          description: \'CREATE_COMPANY\'
        companyDetails:
          type: object
          description: Only expects one Company.
          required:
            - businessName
            - businessShortName
            - businessRegistrationAddress
            - postcode
            - city
            - region
            - mcc
            - lcrEnabled
            - lcrMinThreshold
            - lcrMaxThreshold
            - merchantDetails
          properties:
            businessName:
              type: string
              description: 'Format: {1,50}'
            businessShortName:
              type: string
              description: 'Format: {1,25}'
            businessRegistrationAddress:
              type: string
              description: 'Format: [A-Za-z0-9 _-,.&@&apos;\/]{1,50}'
            postcode: 
              type: string
              description: 'Format: \\d{4}'
            city:
              type: string
              description: 'Format: [A-Za-z0-9 ]{2,50}'
            region:
              type: string
              description: 'Format: [A-Za-z0-9 ]{2,50}'
            mcc:
              type: string
              description: 'Format: \\d{4}'
            lcrEnabled:
              type: boolean
              description: 'true/false'
            lcrMinThreshold:
              type: string
              description: 'EMV format, 0 - 999999998'
            lcrMaxThreshold:
              type: string
              description: 'EMV format, lcrMinThreshold < lcrMaxThreshold <= 999999999'
            merchantDetails:
              type: object
              description: 'Expects one or more MIDs'
              required:
                - mid
                - dba
              properties:
                mid:
                  type: string
                  description: 'Format: \\d{15}'
                dba:
                  type: string
                  description: 'Format: {1,25}'
              
    createCompanyResponse:
      type: object
      properties:
        status: 
          type: string
        message:
          type: string
        uid:
          type: string
    updateCompanyRequest:
      type: object
      required:
        - apiServiceName
        - companyDetails
        - uid
      properties:
        apiServiceName:
          type: string
          description: \'UPDATE_COMPANY\'
        companyDetails:
          type: object
          description: 'Only expects one Company.'
          required:
            - businessName
            - businessShortName
            - businessRegistrationAddress
            - postcode
            - city
            - region
            - lcrEnabled
            - mcc
            - lcrMinThreshold
            - lcrMaxThreshold
          properties:
            businessName:
              type: string
              description: 'Non editable. Validation purposes only'
            businessShortName:
              type: string
              description: 'Format: {1,25}'
            businessRegistrationAddress:
              type: string
              description: 'Format: [A-Za-z0-9 _-,.&@&apos;\/]{1,50}'
            postcode: 
              type: string
              description: 'Format: \\d{4}'
            city:
              type: string
              description: 'Format: [A-Za-z0-9 ]{2,50}' 
            region:
              type: string
              description: 'Format: [A-Za-z0-9 ]{2,50}' 
            mcc:
              type: string
              description: 'Format: \\d{4}'
            lcrEnabled:
              type: boolean
              description: 'true/false'
            lcrMinThreshold:
              type: string
              description: 'EMV format, 0 - 999999998'
            lcrMaxThreshold:
              type: string
              description: 'EMV format, lcrMinThreshold < lcrMaxThreshold <= 999999999'
        uid:
          type: string
    updateCompanyResponse:
      type: object
      description: 'Format: [A-Za-z0-9 ]{2,50}' 
      properties:
        status: 
          type: string
        message:
          type: string
        uid:
          type: string
    viewCompanyRequest:
      type: object
      required:
        - apiServiceName
        - companyDetails
        - uid
      properties:
        apiServiceName:
          type: string
          description: \'VIEW_COMPANY\'
        companyDetails:
          type: object
          required:
            - businessName
          properties:
            businessName:
              type: string
        uid:
          type: string
    viewCompanyResponse:
      type: object
      required:
        - status
        - message
        - companyDetails
      properties:
        status: 
          type: string
        message:
          type: string
        companyDetails:
          type: object
          required:
            - businessName
            - businessShortName
            - businessRegistrationAddress
            - postcode
            - city
            - region
            - mcc
            - lcrEnabled
            - lcrMinThreshold
            - lcrMaxThreshold
            - merchantDetails
          properties:
            businessName: 
              type: string
            businessShortName:
              type: string
            businessRegistrationAddress:
              type: string
            postcode:
              type: string
            city:
              type: string
            region:
              type: string
            mcc:
              type: string
            lcrEnabled:
              type: boolean
            lcrMinThreshold:
              type: string
            lcrMaxThreshold:
              type: string
            merchantDetails:
              type: object
              required:
                - mid
                - dba
              properties:
                mid:
                  type: string
                dba:
                  type: string
    addMerchantIDRequest:
      type: object
      required:
        - apiServiceName
        - uid
        - companyDetails
      properties:
        apiServiceName:
          type: string
          description: \'REGISTER_MID\'
        uid:
          type: string
          description: 'UID of company to tie MID with'
        companyDetails:
          type: object
          description: 'Only expects one Company'
          required:
            - businessName
            - merchantDetails
          properties:
            businessName:
              type: string
              description: 'Business name of company to tie MID with'
            merchantDetails:
              type: object
              description: 'Expects one or more MIDs'
              required:
                - mid
                - dba
              properties:
                mid:
                  type: string
                  description: 'format: \\d{15}'
                dba:
                  type: string
                  description: 'format: {1,25}'
    addMerchantIDResponse:
      type: object
      required:
        - status
        - message
      properties:
        status: 
          type: string
        message:
          type: string
    registerTerminalRequest:
      type: object
      required:
        - apiServiceName
        - terminalDetails
      properties:
        apiServiceName:
          type: string
          description: \'REGISTER_TID\'
        terminalDetails:
          type: object
          description: 'Expects one or more TIDs'
          required:
            - mid
            - tid
          properties:
            mid:
              type: string
              description: 'MID to tie TID with'
            tid:
              type: string
              description: 'format: \\d{8}'
              
    registerTerminalResponse:
      type: object
      required:
        - status
        - message
        - uid
      properties:
        status: 
          type: string
        message:
          type: string
        uid:
          type: string
          
    viewTerminalRequest:
      type: object
      required:
        - apiServiceName
        - uid
        - terminalDetails
      properties:
        apiServiceName:
          type: string
          description: \'VIEW_TID\'
        uid:
          type: string
        terminalDetails:
          type: object
          description: 'Only expects one TID'
          required:
           - tid
          properties:
            tid:
              type: string              
    viewTerminalResponse:
      type: object
      required:
        - status
        - message
        - terminalDetails
      properties:
        status: 
          type: string
        message:
          type: string
        terminalDetails:
          type: object
          required:
            - mid
            - tid
          properties:
            mid:
              type: string
            tid:
              type: string          
    registerMobileUserRequest:
      type: object
      required:
        - apiServiceName
        - mobileUserDetails
        - terminalDetails
      properties:
        apiServiceName:
          type: string
          description: \'REGISTER_MOBILE_USER\'
        mobileUserDetails:
          type: object
          description: 'Only expects one User.'
          required:
            - mobileUserID
          properties:
            mobileUserID:
              type: string
              description: 'Format: \\w{3,20}'
        terminalDetails:
          type: object
          description: 'Only expects one TID'
          required:
            - mid
            - tid
          properties:
            mid:
              type: string
              description: 'MID to tie User with'
            tid:
              type: string
              description: 'TID to tie User with'
    registerMobileUserResponse:
      type: object
      properties:
        status: 
          type: string
        message:
          type: string
        uid:
          type: string
        tempPin:
          type: string
        mobileUserDetails:
          type: object
          properties:
            mobileUserID:
              type: string
            userStatus:
              type: string
    viewMobileUserRequest:
      type: object
      required:
        - apiServiceName
        - mobileUserDetails
        - uid
      properties:
        apiServiceName:
          type: string
          description: \'VIEW_MOBILE_USER\'
        mobileUserDetails:
          type: object
          required:
            - mobileUserID
          properties:
            mobileUserID:
              type: string
        uid:
          type: string
    viewMobileUserResponse:
      type: object
      properties:
        status: 
          type: string
        message:
          type: string
        mobileUserDetails:
          type: object
          properties:
            mobileUserID:
              type: string
            userStatus:
              type: string
        terminalDetails:
          type: object
          properties:
            mid:
              type: string
            tid:
              type: string
    updateMobileUserRequest:
      type: object
      required:
      - apiServiceName
      - mobileUserDetails
      - uid
      properties:
        apiServiceName:
          type: string
          description: \'UPDATE_MOBILE_USER_STATUS\'
        mobileUserDetails:
          type: object
          required:
            - mobileUserID
            - userStatus
          properties:
            mobileUserID:
              type: string
              description: 'Format: \\w{3,20}'
            userStatus:
              type: string
              description: \'Active\', \'Suspended\'
        uid:
          type: string
    updateMobileUserResponse:
      type: object
      properties:
        status: 
          type: string
        message:
          type: string
        tempPin:
          type: string
          description: Temp PIN is returned in the response when status is changed from \'Suspended\' to \'Active\'
        mobileUserDetails:
          type: object
          properties:
            mobileUserID:
              type: string
            userStatus:
              type: string
    resetPinRequest:
      type: object
      required:
        - apiServiceName
        - mobileUserDetails
        - uid
      properties:
        apiServiceName:
          type: string
          description: \'RESET_PIN\'
        mobileUserDetails:
          type: object
          required:
            - mobileUserID
          properties:
            mobileUserID:
              type: string
              description: 'Format: \\w{3,20}'
        uid:
          type: string
    resetPinResponse:
      type: object
      properties:
        status: 
          type: string
        message:
          type: string
        tempPin:
          type: string
        mobileUserDetails:
          type: object
          properties:
            mobileUserID:
              type: string