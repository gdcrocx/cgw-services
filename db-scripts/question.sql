CREATE TABLE `tbl_cgw_aws_questions` (
  `cgw_aws_q_id` int(11) NOT NULL AUTO_INCREMENT,
  `cgw_aws_q_text` varchar(200) DEFAULT NULL,
  `cgw_aws_q_diff` varchar(40) NOT NULL,
  `cgw_aws_q_riskLvl` varchar(40) NOT NULL,
  `cgw_aws_q_score` varchar(50) NOT NULL,
  `cgw_aws_q_allottedTime` varchar(50) NOT NULL,
  `cgw_aws_q_hint` varchar(200) NOT NULL,
  `cgw_aws_q_type` varchar(20) NOT NULL,
  PRIMARY KEY (`cgw_aws_q_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

CREATE TABLE `tbl_cgw_az_questions` (
  `cgw_az_q_id` int(11) NOT NULL AUTO_INCREMENT,
  `cgw_az_q_text` varchar(200) DEFAULT NULL,
  `cgw_az_q_diff` varchar(40) NOT NULL,
  `cgw_az_q_riskLvl` varchar(40) NOT NULL,
  `cgw_az_q_score` varchar(50) NOT NULL,
  `cgw_az_q_allottedTime` varchar(50) NOT NULL,
  `cgw_az_q_hint` varchar(200) NOT NULL,
  `cgw_az_q_type` varchar(20) NOT NULL,
  PRIMARY KEY (`cgw_az_q_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

CREATE TABLE `tbl_cgw_questions_status` (
  `cgw_q_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `cgw_q_id` int(11) NOT NULL,
  `cgw_uuid` varchar(15) DEFAULT NULL,
  `cgw_q_lock_status` int(11) NOT NULL,
  PRIMARY KEY (`cgw_q_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
