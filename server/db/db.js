const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      location: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point'
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
      petrol_91: {
        type: Number,
        required: true
      },
      petrol_95: {
        type: Number,
        required: true
      },
      diesel: {
        type: Number,
        required: true
      },
      service_station_available: {
        type: Boolean,
        required: true
      },
      open_now: {
        type: Boolean,
        required: true
      },
      truck_stop_facility: {
        type: Boolean,
        required: true
      },
      food_and_coffee: {
        type: Boolean,
        required: true
      }
})

// Index for geo-spatial queries
UserSchema.index({ location: '2dsphere' });


const UserModel = mongoose.model("users",UserSchema)



module.exports = UserModel