function DetailView() {
	var productID = 0;
	
	var checkboxStyle = {
		//style : Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
		color : 'black',
		touchEnabled : false,
		top : '5dp',
		left : 10,
		width : 300
	};

	var scrollView = Titanium.UI.createScrollView({
		top : 0,
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		layout : 'vertical',
		scrollType : 'vertical'
	});

	var self = Ti.UI.createView({
		backgroundColor : '#fff',
		layout : 'vertical',
		height : Ti.UI.SIZE
	});
	scrollView.add(self);

	var lblProduct = Ti.UI.createLabel({
		text : 'Please select an item',
		height : '30dp',
		width : '90%',
		top : '5dp',
		color : '#000'
	});
	self.add(lblProduct);

	var lblManuf = Ti.UI.createLabel({
		text : 'Manufacturer:',
		height : '30dp',
		width : '90%',
		top : '5dp',
		color : '#000'
	});
	self.add(lblManuf);

	var chkFreeGluten = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeGluten.title = "Gluten Free";
	self.add(chkFreeGluten);

	var chkFreeDairy = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeDairy.title = "Dairy Free";
	self.add(chkFreeDairy);

	var chkFreeEggs = Titanium.UI.createSwitch(checkboxStyle);
    chkFreeEggs.title = "Egg Free",
	self.add(chkFreeEggs);

	var chkFreeNuts = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeNuts.title = "Nut Free",
	self.add(chkFreeNuts);

	var chkFreeGM = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeGM.title = "GM Free",
	self.add(chkFreeGM);

	var chkIsVeggie = Titanium.UI.createSwitch(checkboxStyle);
	chkIsVeggie.title = "Suitable for Vegetarians",
	self.add(chkIsVeggie);

	var chkIsVegan = Titanium.UI.createSwitch(checkboxStyle);
	chkIsVegan.title = "Suitable for Vegans",
	self.add(chkIsVegan);

	var btnGoWeb = Ti.UI.createButton({
		//top : '375dp',
		width : '90%',
		height : '40dp'
	});
	btnGoWeb.title = 'View Product Web Site';
	btnGoWeb.addEventListener('click', function(e) {
		Ti.Platform.openURL(e.source.url);
	});
	self.add(btnGoWeb);

	var chkIsFav = Titanium.UI.createSwitch(checkboxStyle);
	chkIsFav.addEventListener('click', function(e) {
		var isFavourite = 0;
		if (chkIsFav.value)
			isFavourite = 1;
			
		scrollView.fireEvent('setFavourite', {id:productID,value:isFavourite});
	});
	chkIsFav.title = "Favourite";
	chkIsFav.touchEnabled = true;
	
	self.add(chkIsFav);

	scrollView.addEventListener('loadProductDetail', function(rsData) {
		productID = rsData.data.fieldByName('idtblProduct');
		lblProduct.text = rsData.data.fieldByName('vchDesc');
		lblManuf.text = rsData.data.fieldByName('vchName');
		if (rsData.data.fieldByName('vchProductUrl') == '') {
			btnGoWeb.url = 'http://www.google.com';
		} else {
			btnGoWeb.url = rsData.data.fieldByName('vchProductUrl');
		}
		chkFreeGluten.value = Boolean(rsData.data.fieldByName('flgFreeGluten'));
		chkFreeDairy.value = Boolean(rsData.data.fieldByName('flgFreeLactose'));
		chkFreeEggs.value = Boolean(rsData.data.fieldByName('flgFreeEgg'));
		chkFreeNuts.value = Boolean(rsData.data.fieldByName('flgFreeNut'));
		chkFreeGM.value = Boolean(rsData.data.fieldByName('flgFreeGM'));
		chkIsVeggie.value = Boolean(rsData.data.fieldByName('flgIsVeggie'));
		chkIsVegan.value = Boolean(rsData.data.fieldByName('fglIsVegan'));
		chkIsFav.value = Boolean(rsData.data.fieldByName('flgIsFav'));
		rsData.data.close();									
		rsData = null;
	});

	return scrollView;
};

module.exports = DetailView;
