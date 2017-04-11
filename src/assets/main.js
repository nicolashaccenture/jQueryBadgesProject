$(function() {

$.ajax({
    url: 'https://www.codeschool.com/users/3645491.json',
    dataType: 'jsonp',
    success: function(response) {
    //	console.log(response, 'response')
    	addCourses(response.courses.completed)
    // addCourses(response.badges)
    //	addBadges(response.badges)
      // handle response
    }
  });

function addCourses(courses) {

	var $badges = $('#badges');

	courses.forEach(function(course) {

		var $course = $('<div />', {
			'class': 'course'
		}).appendTo($badges);

		$('<h3 />', {
			text: course.title
		}).appendTo($course);

		$('<img />', {
			src: course.badge
		}).appendTo($course)

		$('<a />', {
			'class': 'btn btn-primary',
			target: '_blank',
			href: course.url,
			text: 'See Course'
		}).appendTo($course)


	})


	}

/*
function addBadges(courses) {

var $badges = $('#badges');

	courses.forEach(function(course) {
		var $badge = $('<div />', {
			'class': 'course'
		}).appendTo($badges);

	//	$('<h3 />', {
	//		text: course.title
	//	}).appendTo($course);


	})

	}

*/

});


