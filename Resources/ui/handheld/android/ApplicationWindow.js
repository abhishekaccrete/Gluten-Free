function ApplicationWindow() {
	//declare module dependencies
	var MenuView = require('ui/common/MenuView'), 
	    MasterView = require('ui/common/MasterView'), 
	    SubMasterView = require('ui/common/SubMasterView'), 
	    DetailView = require('ui/common/DetailView'), 
	    SearchView = require('ui/common/SearchView'), 
	    DataLayer = require('ui/common/DataLayer');

	//create object instance
	var self = Ti.UI.createWindow({
		title : 'Select Products',
		exitOnClose : true,
		navBarHidden : false,
		backgroundColor : '#ffffff'
	});

	var menuView = new MenuView();
	self.add(menuView);

	menuView.addEventListener('mnv_btnSelected', function(e) {
		if (e.type == 'search') {
			var searchView = new SearchView()
			var searchContainerWindow = Ti.UI.createWindow({
				title : e.type,
				navBarHidden : false,
				backgroundColor : '#ffffff'
			});
			searchContainerWindow.add(searchView);
			//searchView.fireEvent('mnv_searchSelected', e);
			searchContainerWindow.open();

			searchView.addEventListener('shv_searchSelected', function(e4) {
				showSubMasterView(e4);
			});
		} else if (e.type == 'favourites') {
			showSubMasterView(e);
		} else {
			var masterView = new MasterView()
			var masterContainerWindow = Ti.UI.createWindow({
				title : e.type,
				navBarHidden : false,
				backgroundColor : '#ffffff'
			});
			masterContainerWindow.add(masterView);
			masterView.fireEvent('mnv_btnSelected', e);
			masterContainerWindow.open();

			masterView.addEventListener('categorySelected', function(e2) {
				showSubMasterView(e2);
			});
		}
	});

	function showSubMasterView(e) {
		var subMasterView = new SubMasterView()
		var subMasterContainerWindow = Ti.UI.createWindow({
			title : e.type,
			navBarHidden : false,
			backgroundColor : '#ffffff'
		});
		subMasterContainerWindow.add(subMasterView);
		subMasterView.fireEvent('categorySelected', e);
		subMasterContainerWindow.open();

		subMasterView.addEventListener('showProductDetail', function(e2) {
			var detailView = new DetailView();
			var detailContainerWindow = Ti.UI.createWindow({
				title : e2.data.fieldByName('vchDesc'),
				navBarHidden : false,
				backgroundColor : '#ffffff'
			});
			detailContainerWindow.add(detailView);
			detailContainerWindow.open();
			detailView.fireEvent('loadProductDetail', e2);

			detailView.addEventListener('setFavourite', function(e3) {
				DataLayer.updateProductSetFavourite(e3.id, e3.value);
				alert('Favourite Saved!');
			});

		});
	}

	return self;
};

module.exports = ApplicationWindow;
