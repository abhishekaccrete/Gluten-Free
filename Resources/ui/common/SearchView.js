function SearchView() {
	var helper = require('ui/common/Helpers');
		
	var checkboxStyle = {
		//style : Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
		color : 'black',
		touchEnabled : true,
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

	var lblSearch = Ti.UI.createLabel({
		text : 'Enter text you wish to search for in the box below, select any additional flags, then click the Start Search bar',
		height : '50dp',
		width : '90%',
		top : '5dp',
		color : '#000'
	});
	self.add(lblSearch);

	var txtSearchText = Ti.UI.createTextField({
		backgroundColor : '#fff',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		//layout : 'vertical',
		height : Ti.UI.SIZE,
		hintText : 'Search Text',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT
	})
	self.add(txtSearchText);

	// ============ Search Flags =================
	var chkFreeGluten = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeGluten.title = "Gluten Free";
	chkFreeGluten.value = 'true';
	touchEnabled = 'false', // gf flag should always be on
	self.add(chkFreeGluten);

	var chkFreeDairy = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeDairy.title = "Dairy Free";
	chkFreeDairy.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});
	self.add(chkFreeDairy);

	var chkFreeEggs = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeEggs.title = "Egg Free", self.add(chkFreeEggs);
	chkFreeEggs.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});

	var chkFreeNuts = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeNuts.title = "Nut Free", self.add(chkFreeNuts);
	chkFreeNuts.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});

	var chkFreeGM = Titanium.UI.createSwitch(checkboxStyle);
	chkFreeGM.title = "GM Free", self.add(chkFreeGM);
	chkFreeGM.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});

	var chkIsVeggie = Titanium.UI.createSwitch(checkboxStyle);
	chkIsVeggie.title = "Suitable for Vegetarians", self.add(chkIsVeggie);
	chkIsVeggie.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});

	var chkIsVegan = Titanium.UI.createSwitch(checkboxStyle);
	chkIsVegan.title = "Suitable for Vegans", self.add(chkIsVegan);
	chkIsVegan.addEventListener('click',function(e){
		helper.blurControl(txtSearchText);
	});

	var btnSearch = Ti.UI.createButton({
		width : '90%',
		height : '40dp'
	});
	self.add(btnSearch);
	btnSearch.title = 'Start Search';
	btnSearch.addEventListener('click', function(e) {
		var helpers = require('ui/common/Helpers');
		scrollView.fireEvent('shv_searchSelected', {
			search : txtSearchText.value,
			type : 'search',
			glutenfree : helpers.boolToInt(chkFreeGluten.value),
			dairyfree : helpers.boolToInt(chkFreeDairy.value),
			eggfree : helpers.boolToInt(chkFreeEggs.value),
			nutfree : helpers.boolToInt(chkFreeNuts.value),
			gmfree : helpers.boolToInt(chkFreeGM.value),
			isveggie : helpers.boolToInt(chkIsVeggie.value),
			isvegan : helpers.boolToInt(chkIsVegan.value)
		});
	});

	return scrollView;
};

module.exports = SearchView;
