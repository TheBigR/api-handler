const mongoose = require('mongoose')

const cronSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
          },
          active: {
              type: Boolean,
              required: true,
              default: false
          }
    }
)

const CronModel = mongoose.model('Cronjob', cronSchema)

module.exports = CronModel