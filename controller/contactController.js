// contactController.js
// Import contact model
const Contact = require("../models/contactModel");
// Handle index actions
exports.contacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      res.status(500).json({ status: "error", message: "no data found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
// Handle create contact actions
exports.new = async (req, res) => {
  try {
    var contact = new Contact(req.body);
    const savedContact = await contact.save();
    if (!savedContact) {
      res.status(500).json({ message: "something wrong!" });
    }
    // console.log(savedContact)
    res.status(200).json({ message: "New contact created!", data: contact });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
// Handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);

    res.json({ message: "Contact details loading..", data: contact });
  });
};
// Handle update contact info
exports.update = function (req, res) {
  try {
    Contact.findById(req.params.contact_id, (err, contact) => {
      if (err) {
        res.status(500).json({ message:" can not find contact by id"});
      }

      contact.name = req.body.name ? req.body.name : contact.name;
      contact.gender = req.body.gender;
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      // save the contact and check for errors
      contact.save((err) => {
        if (err) res.status(501).json({ message:"contact update failed"});

        res
          .status(200)
          .json({ message: "Contact Info updated", data: contact });
      });
    });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
// Handle delete contact
exports.delete = function (req, res) {
  Contact.remove(
    {
      _id: req.params.contact_id,
    },
    function (err, contact) {
      if (err) res.send(err);

      res.json({ status: "success", message: "Contact deleted" });
    }
  );
};
