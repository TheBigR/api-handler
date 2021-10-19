const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rate: {
      type: Number,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const Currency = mongoose.model('Currency', currencySchema)

module.exports = Currency
