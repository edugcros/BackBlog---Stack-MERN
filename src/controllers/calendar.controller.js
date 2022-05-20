const calendarCtrl = {};
const Calendar = require('../models/Calendar');
const moment = require('moment');

calendarCtrl.getCalendar = async (req, res) => {
  const calendar = await Calendar.find();
  res.json(calendar);
};

calendarCtrl.createCalendar = async (req, res) => {
  const { title, start, end } = req.body;
  const newCalendar = new Calendar({
    title,
    start,
    end
  });
  await newCalendar.save();
  res.json('New Calendar added');
};

calendarCtrl.deleteCal = async (req, res) => {
  await Calendar.findByIdAndDelete(req.params.id)
  res.json('Cal Deleted');
}
module.exports = calendarCtrl;