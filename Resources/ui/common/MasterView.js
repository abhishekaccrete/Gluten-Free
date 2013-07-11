//Master View Component Constructor
function MasterView(rsData) {
	var tableData = [];
	var dataLayer = require('ui/common/DataLayer')
	var utilityLayer = require('ui/common/UtilityLayer');
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	
	var table = Ti.UI.createTableView({
		//data:tableData
	});
	self.add(table);
	
	// load table with top-level data based on category button selected
	self.addEventListener('mnv_btnSelected',function(e){
		switch(e.type) {
			
			case 'groups':
				table.setData(utilityLayer.buildGroupRows(dataLayer.selectGroups()));
				break;
				
		    case 'types':
		    	table.setData(utilityLayer.buildTypeRows(dataLayer.selectTypes()));
				break;		
				
			case 'manufacturers':
				table.setData(utilityLayer.buildManufRows(dataLayer.selectManufs()));
				break;	
				
			case 'products':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsAll()));
				break;	
		
		}
	});
	
	//load table with products based on the sub-category selection
	table.addEventListener('click', function(e){
		self.fireEvent('categorySelected', {id:e.rowData.id,type:e.rowData.type});
	});
	
	
	return self;
};

module.exports = MasterView;