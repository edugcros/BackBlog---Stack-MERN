const { Router } = require('express');
const router = Router();

const { getCalendar, createCalendar, deleteCal } = require('../../src/controllers/calendar.controller');

router.route('/')
    .get(getCalendar)
    .post(createCalendar);

router.route('/:id')
    .delete(deleteCal)

module.exports = router;