var speed = 1000;

var startup  = $("#startup").offset();


function scrollTo(id){
	if (id == 'startup')
	{
	$("html, body").animate({ scrollTop: startup.top} , speed) ;	
	};
};