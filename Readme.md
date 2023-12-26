SMS OTP Verification Service
This Node.js application provides a service for sending and verifying OTPs (One Time Passwords) using the MSG91 API.

Getting Started
Prerequisites
Node.js installed
MSG91 API credentials (Auth Key, Template ID)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/shivamjadhav2000/otpserver.git
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory:

plaintext
Copy code
Msg91AuthKey=your_msg91_auth_key_here
TemplateId=your_msg91_template_id_here
Usage
Start the server:

bash
Copy code
npm start
The server will run on port 3001 by default. Make sure your environment allows connections on this port.

Endpoints
Send OTP
URL: POST /sendOtp
Description: Sends an OTP to the provided mobile number.
Request Payload:
mobile: Mobile number to which OTP will be sent.
Response:
success: Boolean indicating success or failure.
message: Additional information or error message.
Verify OTP
URL: GET /verifyOtp
Description: Verifies the OTP for a given mobile number.
Request Query Parameters:
otp: OTP to be verified.
mobile: Mobile number associated with the OTP.
Response:
success: Boolean indicating successful or unsuccessful OTP verification.
Additional data based on verification status.
Error Handling
The API provides appropriate error messages and status codes for failed requests.
Configuration
Msg91AuthKey: Your MSG91 authentication key.
TemplateId: MSG91 template ID for OTP.
Built With
Express.js - Web framework for Node.js
Axios - HTTP client for making API requests
dotenv - Module to load environment variables from a .env file
Cors - Middleware for handling CORS