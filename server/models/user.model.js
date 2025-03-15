// models/user.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    profileImage: String,
    dateJoined: {
      type: Date,
      default: Date.now
    },
    emailVerified: {
      type: Boolean,
      default: false
    },
    favoriteVenues: [
      {
        type: Schema.Types.ObjectId,
        ref: "Venue"
      }
    ],
    preferences: {
      preferredSports: [
        {
          type: Schema.Types.ObjectId,
          ref: "Sport"
        }
      ],
      preferredLocations: [String],
      notificationSettings: {
        email: {
          type: Boolean,
          default: true
        },
        sms: {
          type: Boolean,
          default: true
        },
        promotions: {
          type: Boolean,
          default: true
        }
      }
    },
    lastLogin: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
