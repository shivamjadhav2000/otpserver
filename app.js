const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const msg91AuthKey = process.env.Msg91AuthKey;
const TemplateId = process.env.TemplateId;
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors())
app.post('/sendOtp', async (req, res) => {
  const {  mobile } = req.body;
  const options = {
    method: 'POST',
    url: `https://control.msg91.com/api/v5/otp?template_id${TemplateId}=&mobile=${mobile}&otp_length=6`,
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'authkey': msg91AuthKey
    },
  };

  try {
    const response = await axios(options);
    const data=response.data;
     // Check if the response type is 'success'
     if (data.type === 'success') {
        data.success = true; // Add 'success: true' to the response object
        data.message = `Otp has been sent to ${mobile}`; // Add customer message
      }
      else if(data.type=="error"){
        data.success=false
    }
    else{
        data.success=false

    }
    return res.json(data)
  
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false, message: 'Failed to generate OTP' });
  }
});
app.get('/verifyOtp', async (req, res) => {
    const otp = req.query.otp;
    const mobile = req.query.mobile;
    const options = {
      method: 'GET',
      url: `https://control.msg91.com/api/v5/otp/verify?otp=${otp}&mobile=${mobile}`,
      headers: {
        'accept': 'application/json',
        'authkey': msg91AuthKey
      }
    };
  
    try {
      const response = await axios(options);
      const data=response.data;
     // Check if the response type is 'success'
     if (data.type === 'success') {
        data.success = true; // Add 'success: true' to the response object
      }
      else if(data.type=="error"){
        data.success=false
    }
    else{
        data.success=false

    }
    return res.json(data)
    } catch (error) {
      console.error(error);
      res.status(500).json({success:false, message: 'Failed to verify OTP' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
