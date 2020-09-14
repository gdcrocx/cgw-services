var router = require('express').Router(),
    service = require('../services/users');

router.get('/all', service.getUserDetails);

router.get('/:id', service.getUserDetailsById);

router.post('/signup', service.addUserDetails);

router.delete('/:userid/:uid/:upass', service.deleteUserDetails);

router.put('/:userid/:username/:phoneno/:firstname/:lastname/:email/:userpass/:usertype', service.updateUserDetails);

// router.get('/type/:usertype', service.getUserDetailsByUserType);

router.post('/login', service.verifyUser);

router.post('/totalScore', service.getTotalScore);

router.post('/saveTimeSnapshot', service.saveCurrentTimeSnapshot);

module.exports = router;