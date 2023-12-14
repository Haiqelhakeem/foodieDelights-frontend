// routes/placeRoutes.js
const express = require("express");
const router = express.Router();
const placeController = require("../controllers/PlaceController");

// Get all places
router.get("/places", placeController.getAllPlaces);

// Get a place by ID
router.get("/places/:id", placeController.getPlaceById);

//Create a new place
router.post("/places", placeController.createPlace);

// Create a new place
// router.post('/places/', placeController.createPlace);

// Add routes for other CRUD operations as needed

module.exports = router;
