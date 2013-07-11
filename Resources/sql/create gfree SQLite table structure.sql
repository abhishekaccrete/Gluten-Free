#region Table Structure:'"tblgroup"'

CREATE TABLE IF NOT EXISTS  tblgroup ( 
  idtblGroup INTEGER PRIMARY KEY AUTOINCREMENT, 
  vchShortCode varchar(8) NOT NULL, 
  vchDesc varchar(45) NOT NULL, 
  vchNote varchar(45) DEFAULT NULL 
);


#endregion

#region Table Structure:'"tblmanuf"'

CREATE TABLE IF NOT EXISTS  tblmanuf ( 
  idtblManuf INTEGER PRIMARY KEY AUTOINCREMENT, 
  vchShortCode varchar(8) NOT NULL, 
  vchName varchar(30) NOT NULL, 
  vchAddr1 varchar(30) DEFAULT NULL, 
  vchAddr2 varchar(30) DEFAULT NULL, 
  vchAddr3 varchar(30) DEFAULT NULL, 
  vchPostCode varchar(10) DEFAULT NULL, 
  vchCounty varchar(20) DEFAULT NULL, 
  vchCountry varchar(30) DEFAULT NULL, 
  vchTel varchar(30) DEFAULT NULL, 
  vchEMail varchar(20) DEFAULT NULL, 
  vchContact1 varchar(25) DEFAULT NULL, 
  vchTel1 varchar(20) DEFAULT NULL, 
  vchEmail1 varchar(30) DEFAULT NULL, 
  vchDetail1 varchar(45) DEFAULT NULL, 
  vchContatct2 varchar(25) DEFAULT NULL, 
  vchEmail2 varchar(20) DEFAULT NULL, 
  vchTel2 varchar(30) DEFAULT NULL, 
  vchDetail2 varchar(45) DEFAULT NULL 
);


#endregion

#region Table Structure:'"tblproduct"'

CREATE TABLE IF NOT EXISTS  tblproduct ( 
  idtblProduct INTEGER PRIMARY KEY AUTOINCREMENT, 
  fk_idtblGroup int(11) NOT NULL, 
  fk_idtblType int(11) NOT NULL, 
  fk_idtblManuf int(11) NOT NULL, 
  vchDesc varchar(100) NOT NULL, 
  fltWtGrams float DEFAULT NULL, 
  fltVolCcs float DEFAULT NULL, 
  flgFreeGluten tinyint(1) DEFAULT NULL, 
  flgFreeWheat tinyint(1) DEFAULT NULL, 
  flgFreeLactose tinyint(1) DEFAULT NULL, 
  flgFreeEgg tinyint(1) DEFAULT NULL, 
  flgFreeNut tinyint(1) DEFAULT NULL, 
  flgFreeGM tinyint(1) DEFAULT NULL, 
  fglIsVegan tinyint(1) DEFAULT NULL, 
  flgIsVeggie tinyint(1) DEFAULT NULL, 
  flgTraceEgg tinyint(1) DEFAULT NULL, 
  flgTraceNut tinyint(1) DEFAULT NULL, 
  flgTraceSoya tinyint(1) DEFAULT NULL, 
  flgContainsEgg tinyint(1) DEFAULT NULL, 
  flgContainsNut tinyint(1) DEFAULT NULL, 
  flgContainsSoya tinyint(1) DEFAULT NULL, 
  vchBoxLabel varchar(100),
  vchProductUrl varchar(100),
  FOREIGN KEY (fk_idtblGroup) REFERENCES tblgroup (idtblGroup), 
  FOREIGN KEY (fk_idtblType) REFERENCES tbltype (idtblType), 
  FOREIGN KEY (fk_idtblManuf) REFERENCES tblmanuf (idtblManuf) 
);


#endregion

#region Table Structure:'"tblstore"'

CREATE TABLE IF NOT EXISTS  tblstore ( 
  idtblStore INTEGER PRIMARY KEY AUTOINCREMENT, 
  vchShortCode varchar(8) NOT NULL, 
  vchName varchar(20) NOT NULL, 
  vchDesc varchar(45) DEFAULT NULL 
);


#endregion

#region Table Structure:'"tbltype"'

CREATE TABLE IF NOT EXISTS  tbltype ( 
  idtblType INTEGER PRIMARY KEY AUTOINCREMENT, 
  vchName varchar(20) NOT NULL, 
  vchDesc varchar(45) DEFAULT NULL 
);


#endregion

#region Table Structure:'"tbluser"'

CREATE TABLE IF NOT EXISTS  tbluser ( 
  idtblUser INTEGER PRIMARY KEY AUTOINCREMENT, 
  vchUsername varchar(30) NOT NULL, 
  vchPassword varchar(30) NOT NULL, 
  fk_idtblManuf INTEGER NOT NULL, 
  fk_idtblAccess INTEGER NOT NULL DEFAULT 2, 
  FOREIGN KEY (fk_idtblManuf) REFERENCES tblmanuf (idtblManuf) 
);


#endregion

#region Table Structure:'"tblaccess"'

CREATE TABLE IF NOT EXISTS  tblaccess ( 
  idtblAccess INTEGER PRIMARY KEY AUTOINCREMENT, 
  intLevel INTEGER NOT NULL, 
  vchLevelDesc varchar(30) NOT NULL 
);


#endregion