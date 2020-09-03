var router = require('express').Router(),
    service = require('../services/question');

router.get('/aws/all', service.getAwsQuestions);

router.get('/az/all', service.getAzQuestions);

router.post('/lock', service.lockQuestion);

router.put('/unlock', service.unlockQuestion);

router.post('/next', service.nextQuestion);

module.exports = router;