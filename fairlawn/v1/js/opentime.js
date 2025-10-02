$(document).ready(function () {

	function getOpenFormat(hour, minutes) {
		let time = '';
		let type = '';

		if (hour < 12) {

			if (hour === 0) {
				hour = 12;
			}

			time = hour;

			if (minutes !== 0) {
				time += ":" + (minutes < 10 ? "0" : "") + minutes;
			}

			type = 'AM';
		} else {
			time = hour

			if (hour > 12) {
				time = hour - 12;
			}

			if (minutes !== 0) {
				time += ":" + (minutes < 10 ? "0" : "") + minutes;
			}

			type = 'PM';
		}

		return time + type;
	}

	function isOpenNow(hour, minutes, time) {
		if (hour < time[0]) {
			return "CLOSED NOW";
		} else if (hour >= time[0] && minutes < time[1]) {
			return "CLOSED NOW";
		} else if (hour > time[2]) {
			return "CLOSED NOW";
		} else if (hour === time[2] && minutes >= time[3]) {
			return "CLOSED NOW";
		}

		return "OPEN NOW";
	}

	const timetable = [
		[],
		[8, 0, 17, 30],
		[8, 0, 17, 30],
		[8, 0, 17, 30],
		[8, 0, 17, 30],
		[8, 0, 17, 30],
		[9, 0, 13, 00],
	];

	const d = new Date();
	const todayTime = timetable[d.getDay()];

	if (todayTime.length === 0) {
		$('#opennow').html("CLOSED TODAY");
	} else {
		const openFormat = getOpenFormat(todayTime[0], todayTime[1]);
		const closedFormat = getOpenFormat(todayTime[2], todayTime[3]);
		$('#opennow').html(isOpenNow(d.getHours(), d.getMinutes(), todayTime) + ": " + openFormat + "-" + closedFormat);
	}
});