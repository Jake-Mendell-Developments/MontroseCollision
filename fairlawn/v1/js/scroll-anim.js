$(document).ready(function () {

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	new ScrollMagic.Scene({
		triggerElement: '#pinsection',
		triggerHook: 0.1,
		duration: '90%',
	})
		.setPin('#pinsection')
		.addTo(controller);


	// build a scene
	new ScrollMagic.Scene({
		triggerElement: '.textOne',
		triggerHook: 0.01
	})
		.setClassToggle('.liOne', 'showanim') // add class to project01
		.addTo(controller);

	//ListTwo
	new ScrollMagic.Scene({
		triggerElement: '.textTwo',
		triggerHook: 0.02
	})
		.setClassToggle('.liTwo', 'showanim') // add class to project01
		.addTo(controller);

	//ListThree
	new ScrollMagic.Scene({
		triggerElement: '.textThree',
		triggerHook: 0.03
	})
		.setClassToggle('.liThree', 'showanim') // add class to project01
		.addTo(controller);

	//ListFOUR
	new ScrollMagic.Scene({
		triggerElement: '.textFour',
		triggerHook: 0.04
	})
		.setClassToggle('.liFour', 'showanim') // add class to project01
		.addTo(controller);

	//ListFive
	new ScrollMagic.Scene({
		triggerElement: '.textFive',
		triggerHook: 0.05
	})
		.setClassToggle('.liFive', 'showanim') // add class to project01
		.addTo(controller);

	//ListSix
	new ScrollMagic.Scene({
		triggerElement: '.textSix',
		triggerHook: 0.06
	})
		.setClassToggle('.liSix', 'showanim') // add class to project01
		.addTo(controller);


	// STAR ICON ANIM
	// build a scene
	new ScrollMagic.Scene({
		triggerElement: '.textOne',
		triggerHook: 0.01,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgone', 'showanim')
		.addTo(controller);

	//ListTwo
	new ScrollMagic.Scene({
		triggerElement: '.textTwo',
		triggerHook: 0.02,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgtwo', 'showanim')
		.addTo(controller);

	//ListThree
	new ScrollMagic.Scene({
		triggerElement: '.textThree',
		triggerHook: 0.03,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgthree', 'showanim')
		.addTo(controller);

	//ListFOUR
	new ScrollMagic.Scene({
		triggerElement: '.textFour',
		triggerHook: 0.04,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgfour', 'showanim')
		.addTo(controller);

	//ListFive
	new ScrollMagic.Scene({
		triggerElement: '.textFive',
		triggerHook: 0.05,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgfive', 'showanim')
		.addTo(controller);

	//ListSix
	new ScrollMagic.Scene({
		triggerElement: '.textSix',
		triggerHook: 0.06,
		duration: '10%'
	})
		.setClassToggle('.icon-process .imgsix', 'showanim')
		.addTo(controller);
});
