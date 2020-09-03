DELIMITER $$
CREATE DEFINER=`tm_db_user`@`%` PROCEDURE `spGetNextQuestion`(
	IN _platform VARCHAR(10),
    IN _difficulty VARCHAR(10),
	IN _questionId INT,
    IN _teamUuid VARCHAR(15)
)
BEGIN
	DECLARE _tableName VARCHAR(30);
    SET _tableName := IF(_platform = "aws", "tbl_cgw_aws_questions", "tbl_cgw_az_questions");
	SELECT _tableName;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`tm_db_user`@`%` PROCEDURE `spLockQuestion`(
	IN _questionId INT,
    IN _teamUuid VARCHAR(15)
)
BEGIN
	INSERT INTO tbl_cgw_questions_status(`cgw_q_id`, `cgw_uuid`, `cgw_q_lock_status`) VALUES (_questionId, _teamUuid, 1);
    SELECT cgw_q_status_id FROM tbl_cgw_questions_status WHERE cgw_q_id = _questionId AND cgw_uuid = _teamUuid;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`tm_db_user`@`%` PROCEDURE `spUnlockQuestion`(
	IN _questionId INT,
    IN _teamUuid VARCHAR(15)
)
BEGIN
	UPDATE tbl_cgw_questions_status SET cgw_q_lock_status = 0 WHERE cgw_q_id = _questionId AND cgw_uuid = _teamUuid;
    SELECT cgw_q_status_id FROM tbl_cgw_questions_status WHERE cgw_q_id = _questionId AND cgw_uuid = _teamUuid;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`tm_db_user`@`%` PROCEDURE `spGetNextAwsQuestion`(	
    IN _difficulty VARCHAR(10),	
    IN _teamUuid VARCHAR(15)
)
BEGIN	
    SELECT 
		cgw_aws_q_id ,cgw_aws_q_text, cgw_aws_q_diff, cgw_aws_q_riskLvl, cgw_aws_q_score, cgw_aws_q_allottedTime, cgw_aws_q_hint, cgw_aws_q_type
    FROM 
		tbl_cgw_aws_questions 
    WHERE 
		cgw_aws_q_diff = _difficulty 
	AND 
		cgw_aws_q_id IN (SELECT cgw_q_id FROM tbl_cgw_questions_status WHERE cgw_q_lock_status = 0 AND cgw_uuid = _teamUuid);
END$$
DELIMITER ;

