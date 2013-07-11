#-------------------------------------------------------------------------------------------------------
# Nucleon Database Master SQL Dump
# Host: SQLite  3.6.23.1
# Database: gfree_sqlite_db
# Date Time:12/09/2012 17:47:33
# Encoding: Unicode (UTF-8)
# Culture: en-GB(English (United Kingdom))
#-------------------------------------------------------------------------------------------------------

#region Database Structure: ''

#CREATE DATABASE IF NOT EXISTS ;


#endregion

#region Table Structure:'"sqlite_sequence"'

#CREATE TABLE IF NOT EXISTS  sqlite_sequence(name,seq);


#endregion

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

#region Table Data:'sqlite_sequence'

INSERT INTO sqlite_sequence VALUES('tblgroup','3');
INSERT INTO sqlite_sequence VALUES('tblmanuf','33');
INSERT INTO sqlite_sequence VALUES('tblproduct','38');
INSERT INTO sqlite_sequence VALUES('tblstore','14');
INSERT INTO sqlite_sequence VALUES('tbltype','15');
INSERT INTO sqlite_sequence VALUES('tbluser','2');
INSERT INTO sqlite_sequence VALUES('tblaccess','6');

#endregion

#region Table Data:'tblgroup'

INSERT INTO tblgroup VALUES('1','BFC00001','Breakfast Cereals','');
INSERT INTO tblgroup VALUES('2','CRL00001','Cereals / Rice / Linseed','');
INSERT INTO tblgroup VALUES('3','CHEES001','Cheese /Cheese Spreads /Cheese Alternatives','');

#endregion

#region Table Data:'tblmanuf'

INSERT INTO tblmanuf VALUES('1','WIND0001','Windmill Organics','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('2','ALARA001','Alara Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('3','BARK0001','Barkat','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('4','BEZG0001','Bezgluten','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('5','BIGOZ001','Big Oz','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('6','ROBRED01','Robs Red Mill Natural Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('7','DIETS001','Dietary Specials','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('8','DOVES001','Doves Farm Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('9','FINAX001','Finax of Sweden','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('10','FREET001','Free To Enjoy','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('11','GIUL0001','Giuliani International','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('12','HALEH001','Hale and Hearty Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('13','HERON001','Heron Quality Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('14','INFIN001','Infinity Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('15','JUVE0001','Juvela','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('16','KALL0001','Kallo Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('17','KELK0001','Kelkin','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('18','LIFEF000','Life Force Foods','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('19','MEIL0001','Meilei','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('20','NATUP001','Natures Path','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('21','ORGR0001','Orgran','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('22','RUDEH000','Rude Health','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('23','SAVAN001','Savana','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('24','WHOLE000','Whole Earth','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('25','ADMIN001','Administrator','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('26','GLAN0001','Glannagaul Foods and Spices','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('27','CLRS0001','Clearspring Organic and Tradit','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');
INSERT INTO tblmanuf VALUES('33','GASH0001','Added for Delete Test','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a');

#endregion

#region Table Data:'tblproduct'

INSERT INTO tblproduct VALUES('1','1','1','2','Alara - Into the Garden - Organic Active Muesli',NULL,NULL,'1','0','1','0','1','0','1','0','1','0','1','0','1','0', '', '');
INSERT INTO tblproduct VALUES('2','1','1','2','Alara - Into the Garden - Organic Goji and Cranberries Muesli','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('3','1','1','2','Alara - Everyday - Organic Delight Muesli','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('4','1','1','2','Alara - Everyday - Luxury Muesli','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('5','1','2','2','Alara Gluten Free Luxury Porridge','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('6','1','3','1','Amisa Buckwheat Puffs with Agave Nectar','225','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('7','1','3','1','Wild Berry Puff Mix with Agave Nectar','225','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('8','1','3','1','Whole Rice Puffs with Agave Nectar','225','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('12','1','5','3','Corn Flakes (Non-Organic)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('13','1','2','3','Organic Gluten Free Porridge (Rice and Millet)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('14','1','5','3','Organic Corn Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('15','1','5','3','Organic Chocolate Corn Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('16','1','6','3','Organic Rice Crunchies','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('17','1','6','3','Organic Choc Rice Crunchies','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('18','1','7','3','Organic Breakfast Pops','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('19','1','1','3','Organic Gluten Free Muesli','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('20','1','5','4','Corn Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('21','1','1','4','Gluten Free Muesli','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('22','1','3','5','Morning Puffs Agave Rice Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('23','1','5','5','Amaranth Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('24','1','3','5','Amaranth Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('25','1','3','5','Black Currant Rice Puffs (Arborio Rice)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('26','1','5','5','Brown Rice Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('27','1','3','5','Buckwheat Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('28','1','3','5','Corn Puffs (Maize)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('29','1','3','5','Gluten Free Mix Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('30','1','3','5','Honey and Maple Corn Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('31','1','3','5','Honey and Maple Rice Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('32','1','3','5','Honey Rice Puffs (Arborio Rice)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('33','1','5','5','Millet Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('34','1','3','5','Millet Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('35','1','3','5','Pomengranate and Blueberry Rice Puffs (Arborio Rice)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('36','1','2','5','Porridge (Rice and Millet)','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('37','1','5','5','Quinoa Flakes','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');
INSERT INTO tblproduct VALUES('38','1','3','5','Rice Puffs','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', '', '');

#endregion

#region Table Data:'tblstore'

INSERT INTO tblstore VALUES('1','TESCO001','Tesco General','');
INSERT INTO tblstore VALUES('2','TESCO002','Tesco Extra','');
INSERT INTO tblstore VALUES('3','TESCO003','Tesco Local','');
INSERT INTO tblstore VALUES('4','SUPERV01','Super Value Local','');
INSERT INTO tblstore VALUES('5','SUPERV02','Super Value Large','');
INSERT INTO tblstore VALUES('6','DUNNES01','Dunnes Stores','');
INSERT INTO tblstore VALUES('7','MARKS001','Marks and Spencers','');
INSERT INTO tblstore VALUES('8','CENTRA01','Centra Local','');
INSERT INTO tblstore VALUES('9','CENTRA02','Centra Main','');
INSERT INTO tblstore VALUES('10','SPAR0001','Spar','');
INSERT INTO tblstore VALUES('11','SUPERQ01','SuperQuinn','');
INSERT INTO tblstore VALUES('12','LIDL0001','Lidl','');
INSERT INTO tblstore VALUES('13','ALDI0001','Aldi','Aldi general store');
INSERT INTO tblstore VALUES('14','MACE0001','Mace','');

#endregion

#region Table Data:'tbltype'

INSERT INTO tbltype VALUES('1','Muesli','');
INSERT INTO tbltype VALUES('2','Porridge','');
INSERT INTO tbltype VALUES('3','Puffs','');
INSERT INTO tbltype VALUES('4','Granola','');
INSERT INTO tbltype VALUES('5','Flakes','');
INSERT INTO tbltype VALUES('6','Rice Crunchies','');
INSERT INTO tbltype VALUES('7','Breakfast Pops','');
INSERT INTO tbltype VALUES('8','Hot Cereal','');
INSERT INTO tbltype VALUES('9','Other','');
INSERT INTO tbltype VALUES('10','Rice Crispies','');
INSERT INTO tbltype VALUES('11','Rice Cereal','');
INSERT INTO tbltype VALUES('12','Os','');
INSERT INTO tbltype VALUES('15','GASH003','Added for delete then edited');

#endregion

#region Table Data:'tbluser'

INSERT INTO tbluser VALUES('1','admin','gfapp','25','0');
INSERT INTO tbluser VALUES('2','glannagaul','8621','26','0');

#endregion

#region Table Data:'tblaccess'

INSERT INTO tblaccess VALUES('1','1','admin');
INSERT INTO tblaccess VALUES('2','2','visitor');
INSERT INTO tblaccess VALUES('3','3','user');
INSERT INTO tblaccess VALUES('4','4','supplier');
INSERT INTO tblaccess VALUES('5','5','store');
INSERT INTO tblaccess VALUES('6','6','distributor');

#endregion
