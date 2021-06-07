const mongoose = require('mongoose');
const schema = mongoose.Schema;
var mySchema = new schema(
  {
    name: {
      type: String,
      required: [true],
      uppercase: true,
      trim: true,
    },
    bloodGroup: {
      type: String,
      validate: {
        validator: function (v) {
          return /(A|B|AB|O)[+-]/.test(v);
        },
        message: (props) => `${props.value} is not a valid Blood Group!`,
      },
      required: [true],
      uppercase: true,
      trim: true,
    },
    city: {
      type: String,
      required: [true],
      uppercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true],
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      unique: true,
    },
    amount: {
      type: Number,
      default: 0,
      validate: {
        validator: function (v) {
          return v >= 0;
        },
        message: (props) => `${props.value} is not a valid amount to Donate!`,
      },
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('user', mySchema);

module.exports = UserModel;
