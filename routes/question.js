var router = require('express').Router(),
    service = require('../services/question');

router.get('/aws/all', service.getAwsQuestions);

router.get('/az/all', service.getAzQuestions);

module.exports = router;