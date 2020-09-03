CREATE TABLE `tbl_cgw_az_resources` (
  `cgw_az_uuid` varchar(15) NOT NULL,
  `cgw_az_public_ip` varchar(25) DEFAULT NULL,
  `cgw_az_nic` varchar(40) NOT NULL,
  `cgw_az_vm` varchar(40) NOT NULL,
  `cgw_az_sc` varchar(50) NOT NULL,
  `cgw_az_ssh_sg` varchar(50) NOT NULL,
  PRIMARY KEY (`cgw_az_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
