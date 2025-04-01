const Document = require('../models/documentModel');

// Create a new document
exports.createDocument = async (req, res) => {
  try {
    const { name, surname, idNumber, birthDate, photo } = req.body;
    const newDocument = new Document({ name, surname, idNumber, birthDate, photo });
    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all documents
exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
