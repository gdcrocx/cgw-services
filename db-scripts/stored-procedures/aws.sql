DELIMITER $$
CREATE DEFINER=`tm_db_user`@`%` PROCEDURE `spCheckInstanceId`(
	IN _instanceId VARCHAR(50),
    IN _teamUuid VARCHAR(15)
)
BEGIN
	SELECT cgw_aws_instance_id from tbl_cgw_aws_resources WHERE cgw_aws_instance_id = _instanceId AND cgw_aws_uuid = _teamUuid;
END$$
DELIMITER ;