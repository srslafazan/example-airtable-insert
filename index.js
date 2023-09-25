require('dotenv').config()

const Airtable = require('airtable');

// Replace with your own API key and base ID
const apiKey = process.env.API_KEY;
const baseId = process.env.BASE_ID;

// Initialize the Airtable client
const base = new Airtable({ apiKey }).base(baseId);

// Define the table name
const tableName = 'Leads';

// Define the data for the new record
const data = {
  "Email": "john.doe@gmail.com",
  "Name": "John Doe",
  "Phone Number": "+1 510-315-1414",
  "Date Created": new Date().toLocaleDateString(),
  "Address 1": "1234 Sunshine Ln",
  "Address 2": "",
  "City": "Fort Lauderdale",
  "State": "Florida",
  "Zip Code": "12818",
};

// Add a new record to the table
base(tableName).create(data, (err, record) => {
  if (err) {
    console.error('Error creating record:', err);
    return;
  }
  console.log('Record created successfully:', record.getId());
});
