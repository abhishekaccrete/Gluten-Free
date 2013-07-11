module.exports.buildGroupRows = function(rsData) {
	var recordsArray = [];

	while (rsData.isValidRow()) {
		recordsArray.push({
			id: rsData.fieldByName('idtblGroup'),
			title : rsData.fieldByName('vchDesc'),
			color : 'black',
			type : 'group'
		});
		rsData.next();
	}

	rsData.close();
	rsData = null;
	return recordsArray;
}


module.exports.buildTypeRows = function(rsData) {
	var recordsArray = [];

	while (rsData.isValidRow()) {
		recordsArray.push({
			id: rsData.fieldByName('idtblType'),
			title : rsData.fieldByName('vchName'),
			color : 'black',
			type : 'type'
		});
		rsData.next();
	}

	rsData.close();
	rsData = null;
	return recordsArray;
}

module.exports.buildManufRows = function(rsData) {
	var recordsArray = [];

	while (rsData.isValidRow()) {
		recordsArray.push({
			id: rsData.fieldByName('idtblManuf'),
			title : rsData.fieldByName('vchName'),
			color : 'black',
			type : 'manuf'
		});
		rsData.next();
	}

	rsData.close();
	rsData = null;
	return recordsArray;
}


module.exports.buildProductRows = function(rsData) {
	var recordsArray = [];

	while (rsData.isValidRow()) {
		recordsArray.push({
			id: rsData.fieldByName('idtblProduct'),
			title : rsData.fieldByName('vchName') + ": " + rsData.fieldByName('vchDesc'),
			color : 'black',
			type : 'product'
		});
		rsData.next();
	}

	rsData.close();
	rsData = null;
	return recordsArray;
}