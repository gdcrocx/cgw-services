CREATE TABLE `tbl_cgw_aws_resources` (
  `cgw_aws_uuid` varchar(15) NOT NULL,
  `cgw_aws_instance_public_ip` varchar(25) DEFAULT NULL,
  `cgw_aws_instance_id` varchar(40) NOT NULL,
  `cgw_aws_vol` varchar(40) NOT NULL,
  `cgw_aws_s3_bucket` varchar(50) NOT NULL,
  `cgw_aws_iam_user` varchar(50) NOT NULL,
  `cgw_aws_iam_user_password` varchar(500) NOT NULL,
  `cgw_aws_iam_role` varchar(50) NOT NULL,
  `cgw_aws_iam_instance_profile` varchar(50) NOT NULL,
  `cgw_aws_iam_policy` varchar(50) NOT NULL,
  `cgw_aws_ssh_sg` varchar(50) NOT NULL,
  `cgw_aws_kms_key` varchar(200) NOT NULL,
  `cgw_aws_elb` varchar(50) NOT NULL,
  `cgw_aws_sns_topic` varchar(200) NOT NULL,
  PRIMARY KEY (`cgw_aws_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;