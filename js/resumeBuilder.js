/*
// This is empty on purpose! Your code to build the resume will go here.*/

//  var formattedname = HTMLheadername.replace('%data%','Jane Claire');

// $('#header').prepend(formattedname);

// var formattedRole = HTMLheaderRole.replace('%data%', 'FrontEndDev');

// $('#header').prepend(formattedRole);

// var skills = ['art', ' ', 'design' ,' ', 'napping'];

// var bio = {'name':'JC', 'age':31, 'skills':skills};

// $('#main').append(bio);

// bio.contact = {'twitter':'ssl', 'facebook':'nope', 'instas':'ssl'};




// create objects with to store user resume data

var bio ={
	'name':'Jane Claire',
	'role':'Front-end Development',
	'contacts':{
		'mobile' : '555-555-5555',
		'email':'xxxxxx@gmail.com',
		'github':'github.com/pixiephreak',
		'twitter':'@xxxxx',
		'location':'Washington, D.C.',
		'phoneIcon':'<li class="flex-item"><span class="white-text"><i class="fa fa-phone" aria-hidden="true"></i></span></li>',
		'mailIcon': '<li class="flex-item"><span class="white-text"><i class="fa fa-envelope" aria-hidden="true"></i></span></li>',
		'githubIcon': '<li class="flex-item"><a class="white-text" href="https://github.com/pixiephreak" target="blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>',

        'twitterIcon': '<li class="flex-item"><a class="white-text "href="https://twitter.com/StreetSignsLife" target="blank">' +
   					 	'<i class="fa fa-twitter" aria-hidden="true"></i></a></li>'


	},
	'welcomeMessage': 'I have a background in visual art and design, which has motivated me to learn more about front-end development, human/computer interaction, and technology.',
	'skills':[
		'Project Management',
		'Instruction', 'Graphic Design',
		'Installation Design', 'HTML',
		'Javascript', 'CSS', 'Python',
		'Adobe Suite'
	],
	'bioPic':'images/bioPic.jpg'

};

var education = {
	'schools':[{
		'name':'Instituto Peruano de Arte y Diseno (Peruvian Institute of Design)',
		'location':'Lima, Peru',
		'degree':'Certificate',
		'majors':['Graphic Design','Visual Fundamentals'],
		'dates':'January - June, 2010 (completed one year program in six months)',
		'url': 'www.xxxx.com'
	},{
		'name':'Kalamazoo College',
		'location':'Kalamazoo, Michigan',
		'degree':'Bachelor of Arts',
		'majors':['Anthropology and Sociology', 'French'],
		'dates':'September 2003 - June 2007', 'url':
		'www.xxxx.com'
	}],
	'onlineCourses': [{
		'title':'Nanodegree: Front End Development',
		'school':'Udacity',
		'dates':'September-December 2016',
		'url':'www.udacity.com'
	},{
		'title':'Specialization: Web Design for Everybody (Basics of Web Development and Coding)',
		'school':'Coursera (University of Michigan School of Information)',
		'dates':'April-July 2016',
		'url': 'https://www.coursera.org/specializations/web-design'
	}, {
		'title':'Specialization: Programming for Everybody (Getting Started with Python)',
		'school':'Coursera (University of Michigan School of Information)',
		'dates':'December-June 2016',
		'url': 'https://www.coursera.org/learn/python'
	}]
};

var work = {
	'jobs':[{
		'title':'Designer',
		'employer':'Chris by Christopher Bu',
		'dates':'August 2015-February 2016',
		'location':'Beijing, China',
		'description':'Assistant to designer Christopher Bu. Translated designs into digital files for use in production, specializing in surface design using Adobe Illustrator, locating digital assets, and art historical research.'
	},{
		'title':'Visual Artist',
		'employer':'Freelance',
		'dates':'August 2004-Present',
		'location':'Varying',
		'description':'Visual artist specializing in conceptual new media, performance, and installation work. Working at galleries and alternative spaces in the U.S. and abroad.'
	},{
		'title':'Instructor: EFL and TOEFL',
		'employer':'Kaplan Aspect',
		'dates':'June 2008-October 2014',
		'location':'Washington, DC',
		'description':'Teacher of English as a foreign langauge to adult international students at all levels, specializing in TOEFL prep.'
	},{
		'title':'Graphic Designer',
		'employer':'Freelance',
		'dates':'June 2010-Present',
		'location':'Varying',
		'description':'Freelance graphic designer (digital/print) for clients in politics, entertainment, and fine art.'
	}]
};

var projects = {
	'projects': [{
		'title': 'Project 1',
		'dates': 'Fall 2016',
		'description': 'Resume built using javascript to fill out html.',
		'images': ['http://placehold.it/300x300','http://placehold.it/300x300']

	},{
		'title': 'Project 2',
		'dates': 'Fall 2016',
		'description': 'Whatever the next project ends up being.',
		'images': ['http://placehold.it/300x300','http://placehold.it/300x300']

	}]
};

// populate html with user bio info using a function

// function displayBio(){

// 	var formattedName = HTMLheaderName.replace('%data%', bio.name);
// 	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
// 	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
// 	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
// 	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
// 	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
// 	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
// 	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
// 	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);


// 	$('#header').prepend(formattedName, formattedRole, formattedPic, formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedWelcome);

// 	//loop through skills array
// 	if(bio.skills.length > 0){

// 		$('#header').append(HTMLskillsStart);

// 		for (var i=0; i<bio.skills.length-1; i++){
// 			formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
// 			$('#skills').append(formattedSkill);
// 		}
// 	}
// };

// displayBio();

//Now, append that function to the bio object using encapsulation

bio.display = function(){

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);

	$('#header').prepend(formattedName, formattedRole);
	$('#pic').append(formattedPic);
	$('#message').append( formattedWelcome);
	$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	$('#footerContacts').append(bio.contacts.phoneIcon);
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(bio.contacts.mailIcon);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(bio.contacts.githubIcon);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(bio.contacts.twitterIcon);
	$('#footerContacts').append(formattedTwitter);
	//loop through skills array
	if(bio.skills.length > 0){

		$('#header').append(HTMLskillsStart);

		for (var i=0; i<bio.skills.length; i++){
			formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
};

bio.display();


// populate html with user educational experience

education.display = function(){

	//loop through objects and arrays held in 'schools' object and assign data to inner html from helper.js
	// var HTMLschoolStart = '<div class="education-entry"></div>';
	// var HTMLschoolName = '<a href="#">%data%';
	// var HTMLschoolDegree = ' -- %data%</a>';
	// var HTMLschoolDates = '<div class="date-text">%data%</div>';
	// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
	// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

	if (education.schools.length > 0){


		for(var school=0; school<education.schools.length; school++){

			//create 'education-entry' class for each entry
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var formattedSchoolDegree = formattedSchoolName + formattedDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);

			$('.education-entry:last').append(formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedMajor);

		}
	}



}

education.display();


education.displayOnline = function(){
	//append section heading for online courses
	$('#education').append(HTMLonlineClasses);

	// loop through online courses object in education object and assign data to inner html from helper.js
		// var HTMLonlineClasses = '<h3>Online Classes and Programs</h3>';
		// var HTMLonlineTitle = '<a href="#">%data%';
		// var HTMLonlineSchool = ' - %data%</a>';
		// var HTMLonlineDates = '<div class="date-text">%data%</div>';
		// var HTMLonlineURL = '<br><a href="#">%data%</a>';

	education.onlineCourses.forEach(function(course){

		//create 'education-entry' class
		$('#education').append(HTMLschoolStart);


		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', course.url);

		$('.education-entry:last').append(formattedTitleSchool, formattedOnlineDates, formattedOnlineURL);


	});


}

education.displayOnline();

// populate html with user work experience
// TO-DO: CHANGE FOR IN LOOPS TO FOREACH?

work.display = function(){

	//loop through objects and arrays held in 'schools' object and assign data to inner html from helper.js
		// var HTMLworkStart = '<div class="work-entry"></div>';
		// var HTMLworkEmployer = '<a href="#">%data%';
		// var HTMLworkTitle = ' - %data%</a>';
		// var HTMLworkDates = '<div class="date-text">%data%</div>';
		// var HTMLworkLocation = '<div class="location-text">%data%</div>';
		// var HTMLworkDescription = '<p><br>%data%</p>';


	work.jobs.forEach(function(job){

		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedDescription);

	});

}

work.display();

// populate html with user's projects
//TO_DO FIX IMAGE LOOP

projects.display = function(){

	if (projects.projects.length>0){

	//loop through objects and arrays held in 'schools' object and assign data to inner html from helper.js
		// var HTMLprojectStart = '<div class="project-entry"></div>';
		// var HTMLprojectTitle = '<a href="#">%data%</a>';
		// var HTMLprojectDates = '<div class="date-text">%data%</div>';
		// var HTMLprojectDescription = '<p><br>%data%</p>';
		// var HTMLprojectImage = '<img src="%data%">';

		for (var project=0; project < projects.projects.length; project++){

			$('#projects').append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			$('.project-entry:last').append(formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$('.project-entry:last').append(formattedProjectDates);

			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$('.project-entry:last').append(formattedProjectDescription);

			for (var image=0; image<projects.projects[project].images.length; image++){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedProjectImage);
			}

		}
	}
}

projects.display();


function inName(name){

	var nameArray =  name.split(' ')
	firstName = nameArray[0].toLowerCase();
	lastName = nameArray[1].toUpperCase();
	internationalName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName;

	return internationalName;
}

inName('Jane Claire');

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);







