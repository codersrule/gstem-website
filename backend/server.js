const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(bodyParser.json());

// enable cors

app.use(cors());
app.post("/api/saveFormData", (req, res) => {
  try {
    const formData = req.body;

    // Server-side validation
    if (!formData || typeof formData !== "object") {
      throw new Error("Invalid JSON data");
    }

    // Validate required properties in formData
    const requiredProperties = ["First_Name", "Last_Name", "Email"];
    for (const prop of requiredProperties) {
      if (
        !formData.hasOwnProperty(prop) ||
        typeof formData[prop] !== "string"
      ) {
        throw new Error(`Missing or invalid property: ${prop}`);
      }
    }
    // Read the existing data from the JSON file (if any)
    const dataFilePath = path.join(__dirname, "application-form-data.json");
    let existingData = [];
    if (fs.existsSync(dataFilePath)) {
      existingData = JSON.parse(fs.readFileSync(dataFilePath));
    }

    // Add the new form data to the existing data
    existingData.push(formData);

    // Write the updated data back to the JSON file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    // Respond with a success message
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving application form data:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
