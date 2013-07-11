module.exports.selectGroups = function() {
	try {
		var sql = "SELECT idtblGroup, vchDesc FROM tblgroup ORDER BY vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectTypes = function() {
	try {
		var sql = "SELECT idtblType, vchName FROM tbltype ORDER BY vchName ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectManufs = function() {
	try {
		var sql = "SELECT idtblManuf, vchName FROM tblmanuf ORDER BY vchName ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectProductsByGroup = function(id_group) {
	// updated 24/09/2012 to return the manufactures's name also
	try {
		var sql = "SELECT tblproduct.idtblProduct, tblproduct.vchDesc, tblManuf.vchName FROM tblproduct, tblManuf ";
		sql = sql + "WHERE tblProduct.fk_idtblgroup = " + id_group + " AND tblProduct.fk_idtblManuf = tblManuf.idtblManuf"
		sql = sql + " ORDER BY vchName, vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

// module.exports.selectProductsByGroup = function(id_group) {
	// try {
		// var sql = "SELECT idtblProduct, vchDesc FROM tblproduct WHERE fk_idtblgroup = " + id_group + " ORDER BY vchDesc ASC";
		// var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		// var result;
// 
		// if (db) {
			// result = db.execute(sql);
			// db.close();
		// } else {
			// alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		// }
// 
		// if (result)
			// return result;
	// } catch (ex) {
	// }
// }

module.exports.selectProductsByType = function(id_type) {
	try {
		var sql = "SELECT idtblProduct, vchDesc FROM tblproduct WHERE fk_idtblType = " + id_type + " ORDER BY vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectProductsByManuf = function(id_type) {
	try {
		var sql = "SELECT idtblProduct, vchDesc FROM tblproduct WHERE fk_idtblManuf = " + id_type + " ORDER BY vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectProductsAll = function() {
	try {
		var sql = "SELECT idtblProduct, vchDesc FROM tblproduct ORDER BY vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectProductDetail = function(id_product) {
	try {
		//var sql = "SELECT * FROM tblproduct WHERE idtblProduct = " + id_product + " ORDER BY vchDesc ASC";
		// revised to return Manufacturer's name and the flags
		var sql = "SELECT tblmanuf.vchName, tblproduct.idtblproduct, tblproduct.vchDesc, tblproduct.flgFreeGluten, tblproduct.flgFreeEgg, tblproduct.flgFreeGM, ";
		sql = sql + "tblproduct.flgFreeLactose, tblproduct.flgFreeNut, tblproduct.flgFreeWheat, tblproduct.flgIsVeggie, tblproduct.fglIsVegan, ";
		sql = sql + "tblproduct.flgContainsEgg, tblproduct.flgContainsNut, tblproduct.flgContainsSoya, tblproduct.vchProductUrl, tblproduct.flgIsFav ";
		sql = sql + "FROM tblmanuf, tblproduct ";
		sql = sql + "WHERE tblproduct.fk_idtblManuf = tblmanuf.idtblmanuf AND idtblProduct = " + id_product + " ORDER BY tblproduct.vchDesc ASC;";

		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.selectProductsBySearch = function(e) {
	try {
		// glutenfree : Boolean(chkFreeGluten.value),
			// dairyfree : Boolean(chkFreeDairy.value),
			// eggfree : Boolean(chkFreeEggs.value),
			// nutfree : Boolean(chkFreeNuts.value),
			// gmfree : Boolean(chkFreeGM.value),
			// isveggie : Boolean(chkIsVeggie.value),
			// isvegan : Boolean(chkIsVegan.value)
		var sql = "SELECT idtblProduct, vchDesc FROM tblproduct WHERE ('" + e.search + "' = '' or vchDesc LIKE '%" + e.search + "%') AND (" + e.glutenfree + " = 0 or flgFreeGluten = " + e.glutenfree + ") AND (" + e.dairyfree + " = 0 or flgFreeLactose = " + e.dairyfree + ")  ORDER BY vchDesc ASC";	
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		alert(sql);
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

module.exports.updateProductSetFavourite = function(id, value) {
	try {
		var sql = "UPDATE tblproduct SET flgIsFav = " + value + " WHERE idtblProduct = " + id;
		//alert(sql);
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

	} catch (ex) {
		alert('DB Error: ' + ex);
	}
}

module.exports.dropDB = function(strSearch) {
	try {
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		db.remove();
		db = null;
		alert('Database deleted!');
	} catch (ex) {
	}
}

module.exports.selectProductsByFav = function() {
	try {
		var sql = "SELECT idtblProduct, vchDesc FROM tblproduct WHERE flgIsFav = 1 ORDER BY vchDesc ASC";
		var db = Titanium.Database.install('/gfree_sqlite_db.sqlite', 'gfdb');
		var result;

		if (db) {
			result = db.execute(sql);
			db.close();
		} else {
			alert('Sorry, there appears to be a problem with your device or the application installation.\n\nPlease restart and try again.');
		}

		if (result)
			return result;
	} catch (ex) {
	}
}

