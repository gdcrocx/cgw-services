var router = require('express').Router(),
    service = require('../services/az');

router.get('/health', service.getAzStatus);

// router.post('/:user_id/:user_pass', service.getLoginVerified);

module.exports = router;