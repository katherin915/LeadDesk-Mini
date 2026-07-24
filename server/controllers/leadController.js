const Lead = require("../models/Lead");

// Create a new lead
const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    // Basic validation
    if (!name || !email || !budget || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      budget,
      message,
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json(updatedLead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createLead,
  getAllLeads,

  updateLeadStatus,
};