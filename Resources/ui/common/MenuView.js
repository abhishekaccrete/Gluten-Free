//Master View Component Constructor
function MenuView() {
	var buttonStyle = {top : '5dp',width : '90%',height : '90dp'};
	//create object instance, parasitic subclass of Observable
	
	var scrollView = Titanium.UI.createScrollView({
		top : 0,
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		layout : 'vertical',
		scrollType : 'vertical'
	});
	

	var self = Ti.UI.createView({
		backgroundColor:'white',
		layout : 'vertical',
		height : Ti.UI.SIZE
	});
	scrollView.add(self);
	
	var btnGroups = Ti.UI.createButton(buttonStyle);
	btnGroups.title = 'Groups';
	btnGroups.image = '/images_gt/group_icon.png';
	btnGroups.addEventListener('click',function(e)
	{
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnGroups);
	
	
	var btnTypes = Ti.UI.createButton(buttonStyle);
	btnTypes.title = 'Types';
	btnTypes.image = '/images_gt/type_icon.png';
	btnTypes.addEventListener('click',function(e){
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnTypes);
	
	var btnManufacturer = Ti.UI.createButton(buttonStyle);
	btnManufacturer.title = 'Manufacturers';
	btnManufacturer.image = '/images_gt/manuf_icon.png';
	btnManufacturer.addEventListener('click',function(e){
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnManufacturer);
	
	var btnProducts = Ti.UI.createButton(buttonStyle);
	btnProducts.title = 'Products A - Z';
	btnProducts.image = '/images_gt/products_icon.png';
	btnProducts.addEventListener('click',function(e){
		// 24/09/2012 button title has changes, so set the 'type' paramenter manually
		scrollView.fireEvent('mnv_btnSelected', {type:'products'});
	});
	self.add(btnProducts);
	
	var btnSearch = Ti.UI.createButton(buttonStyle);
	btnSearch.title = 'Search';
	btnSearch.image = '/images_gt/search_icon.png';
	btnSearch.addEventListener('click',function(e){
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnSearch);
	
	var btnFavourites = Ti.UI.createButton(buttonStyle);
	btnFavourites.title = 'Favourites';
	btnFavourites.image = '/images_gt/favourites_icon.png';
	btnFavourites.addEventListener('click',function(e){
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnFavourites);
	
	var btnSettings = Ti.UI.createButton(buttonStyle);
	btnSettings.title = 'Settings';
	btnSettings.image = '/images_gt/settings_icon.png';
	btnSettings.addEventListener('click',function(e){
		scrollView.fireEvent('mnv_btnSelected', {type:e.source.title.toString().toLowerCase()});
	});
	self.add(btnSettings);
	
	return scrollView;
};

module.exports = MenuView;