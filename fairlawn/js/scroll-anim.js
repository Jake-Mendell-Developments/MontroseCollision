$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#pinsection',
		triggerHook: 0.09,
		duration: '84%',
	})
	.setPin('#pinsection')
	//.addIndicators({
	//	name: 'PIN',
	//	colorTrigger: 'orange',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);


	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textOne',
		triggerHook: 0.1
	})
	.setClassToggle('.liOne', 'showanim') // add class to project01
	//.addIndicators({
	//	name: 'One',
	//	colorTrigger: 'pink',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	//ListTwo
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textTwo',
		triggerHook: 0.1
	})
	.setClassToggle('.liTwo', 'showanim') // add class to project01
	//.addIndicators({
		//name: 'TWO',
		//colorTrigger: 'pink',
		//colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	//ListThree
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textThree',
		triggerHook: 0.1
	})
	.setClassToggle('.liThree', 'showanim') // add class to project01
	//.addIndicators({
	//	name: 'THREE',
	//	colorTrigger: 'pink',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	//ListFOUR
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textFour',
		triggerHook: 0.1
	})
	.setClassToggle('.liFour', 'showanim') // add class to project01
	//.addIndicators({
		//name: 'FOUR',
		//colorTrigger: 'pink',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	//ListFive
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textFive',
		triggerHook: 0.1
	})
	.setClassToggle('.liFive', 'showanim') // add class to project01
	//.addIndicators({
	//	name: 'FIVE',
	//	colorTrigger: 'pink',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	//ListSix
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textSix',
		triggerHook: 0.1
	})
	.setClassToggle('.liSix', 'showanim') // add class to project01
	//.addIndicators({
	//	name: 'SIX',
	//	colorTrigger: 'pink',
	//	colorStart: '#75C695'
	//}) // this requires a plugin
	.addTo(controller);
	
	
	// STAR ICON ANIM
	
	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textOne',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgone', 'showanim') 
	.addTo(controller);
	
	//ListTwo
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textTwo',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgtwo', 'showanim') 
	.addTo(controller);
	
	//ListThree
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textThree',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgthree', 'showanim') 
	.addTo(controller);
	
	//ListFOUR
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textFour',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgfour', 'showanim') 
	.addTo(controller);
	
	//ListFive
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textFive',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgfive', 'showanim') 
	.addTo(controller);
	
	//ListSix
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.textSix',
		triggerHook: 0.1,
		duration: '13%'
	})
	.setClassToggle('.icon-process .imgsix', 'showanim') 
	.addTo(controller);

});
