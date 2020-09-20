var router = require('express').Router(),
    service = require('../services/question');

router.get('/aws/all', service.getAwsQuestions);

router.get('/az/all', service.getAzQuestions);

router.post('/lock', service.lockQuestion);

router.put('/unlock', service.unlockQuestion);

router.post('/next', service.nextQuestion);

router.post('/count', service.getQuestionsRemainingCount);

router.post('/totalCount', service.getQuestionsTotalCount);

router.post('/checkAnswer', service.checkAnswer);

router.post('/checkCspResourceAnswer', service.checkCspResourceAnswer);

router.post('/skip', service.skipQuestion);

module.exports = router;