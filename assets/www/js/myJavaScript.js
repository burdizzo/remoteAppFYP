	// called from html body tag
	function init() 
	{
           document.addEventListener("deviceready", onDeviceReady, false);// checks if native devices is ready   		   
	}
		
	// Device is ready
    function onDeviceReady() 
	{
        navigator.splashscreen.hide();// remove splash screen
		document.getElementById("devready").innerHTML = "OnDeviceReady fired.";
		
    }	
	// insert menu panel dynamically into 
	$(document).on('pagebeforecreate', '[data-role="page"]', function()
	{    
			
   		 $('<div>').attr({'data-role':'panel','id':'menu','data-theme':'a', 'data-position-fixed':'true', 'data-display' :'overlay'}).appendTo($(this)).html('<ul data-role="listview" data-theme="a"> <li data-icon="info"><a href="#about">About</a></li><li data-icon="home"><a href="#landingmap" >Map</a></li><li data-icon="back"><a href="#technologies" >Technologies</a></li><li data-icon="back"><a href="#sites" >Sites</a></li></ul>');
	});
	
	$(function () {
  		  $( ".togglemenu" ).click(function() {
 				console.log ( '#togglemenu was clicked' );
				if ($(".ui-panel").hasClass("ui-panel-open")){
					
					 $.mobile.activePage.find('#menu').panel("close");
				}
				else if($(".ui-panel").hasClass("ui-panel-closed"))
				{
 		
					   $.mobile.activePage.find('#menu').panel("open");
				}
				  
			});
});
 	
	
	
	$(document).on("pageshow","#landingmap", function() 
	{	
		
		getMaxHeight(); 
		getPanelHeight();
		var startloc = new google.maps.LatLng(53.270872,-9.056643);
		alert("pageshow was called");
		$('#mapcanvas').gmap({'center': startloc, 'zoom': 8, 'zoomControlOptions': {'position':google.maps.ControlPosition.LEFT_TOP} });
		$('#mapcanvas').gmap().bind('init', function(ev, map) {
			$('#mapcanvas').gmap('addMarker', {'position': '53.043909,-9.046858',  'bounds': false}).click(function() {
				$('#mapcanvas').gmap('openInfoWindow', { 'content':  'The Burren Perfumery'}, this);
			 });
			 $('#mapcanvas').gmap('addMarker', {'position': '53.279148,-9.060423',  'bounds': false}).click(function() {
				$('#mapcanvas').gmap('openInfoWindow', { 'content':  'NUI Galway Engineering Building'}, this);
			 });
			 $('#mapcanvas').gmap('addMarker', {'position': '53.11934,-9.665716',  'bounds': false}).click(function() {
				$('#mapcanvas').gmap('openInfoWindow', { 'content':  'Aran Bike Hire (Rothai Arainn Teo)'}, this);
			 });
			 $('#mapcanvas').gmap('addMarker', {'position': '53.068039,-9.530348',  'bounds': false}).click(function() {
				$('#mapcanvas').gmap('openInfoWindow', { 'content':  'Inishoirr Arts Centre (Aras Eanna)'}, this);
			 });
		});				
    });	 
	
	$(document).on("pageshow","#about", function() 
	{	
		getPanelHeight();
		
	
    });	 
	
	$(document).on("pageshow","#sites", function() 
	{	
		getPanelHeight();
		
	
    });	 
	
	$(document).on("pageshow","#technologies", function() 
	{	
		getPanelHeight();
		
	
    });	 
	
	$(document).on("pageshow","#burren", function() 
	{	
		getPanelHeight();
		
	
    });	 
		
	function getMaxHeight() 
	{
	    var header = $('[data-role=header]').outerHeight();
		var footer = $('[data-role=footer]').outerHeight();
		var content = $("div[data-role='content']:visible:visible");
		var window_size_height = $(window).height();
		
		var window_size_height = (window_size_height - header - footer);
		if((content.outerHeight() - header - footer) <= window_size_height)
		{
			window_size_height -= (content.outerHeight() - content.height());
		} 
		$.mobile.activePage.find('[data-role="content"]').height(window_size_height);
		
	}
	
	function getPanelHeight()
	 {
       var header = $('[data-role=header]').outerHeight();
	   var panel = $('.ui-panel').height();
	   var panel_height = panel - header;
	   
			$('.ui-panel').css({
				'top': (header - 2 ),
				'min-height': panel_height
			});
    }	
