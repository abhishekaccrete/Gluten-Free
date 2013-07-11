//Master View Component Constructor
function SubMasterView() {
	var tableData = [];
	var dataLayer = require('ui/common/DataLayer')
	var utilityLayer = require('ui/common/UtilityLayer');
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	var table = Ti.UI.createTableView();
	self.add(table);
	
	// load table with top-level data based on category button selected
	self.addEventListener('categorySelected',function(e){
		switch(e.type) {
			case 'group':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsByGroup(e.id)));
				break;
				
		    case 'type':
		    	table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsByType(e.id)));
				break;		
				
			case 'manuf':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsByManuf(e.id)));
				break;	
				
			case 'product':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsByManuf(e.id)));
				break;		
				
			case 'search':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsBySearch(e))); 
				break;		
				
			case 'favourites':
				table.setData(utilityLayer.buildProductRows(dataLayer.selectProductsByFav(e))); 
				break;	
		}
	});
	
	//load table with products based on the sub-category selection
	table.addEventListener('click', function(e){
		self.fireEvent('showProductDetail', {data:dataLayer.selectProductDetail(e.rowData.id)});
	});
	

	return self;
};

module.exports = SubMasterView;