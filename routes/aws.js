var router = require('express').Router(),
    service = require('../services/aws');

router.get('/health', service.getAwsStatus);

router.post('/instance', service.checkInstanceId);

router.post('/publicIp/:publicIp', service.checkPublicIp);

router.post('/volume/:volumeId', service.checkVolumeId);

router.post('/s3Bucket/:bucketName', service.checkS3BucketName);

router.post('/iamUser/:iamUser', service.checkIamUser);

router.post('/iamUserPwd/:iamUserPassword', service.checkIamUserPassword);

router.post('/iamRole/:iamRole', service.checkIamRole);

router.post('/iamInstanceProfile/:iamInstanceProfile', service.checkIamInstanceProfile);

router.post('/iamPolicy/:iamPolicy', service.checkIamPolicy);

router.post('/sshSg/:sshSg', service.checkSshSg);

module.exports = router;