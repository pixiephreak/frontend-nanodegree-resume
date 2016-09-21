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
		'location':'Washington, D.C.'
	},
	'welcomeMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'skills':[
		'Project Management',
		'Instruction', 'Graphic Design',
		'Installation Design', 'HTML',
		'Javascript', 'CSS', 'Python',
		'Adobe Suite'
	],
	'bioPic':'images/fry.jpg'

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
	'projects':[{
		'title':'Project 1',
		'dates':'2014-2015',
		'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}],
	'images':[
		'images/fry.jpg', 'images/fry.jpg'
	]
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


	$('#header').prepend(formattedName, formattedRole, formattedPic, formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedWelcome);

	//loop through skills array
	if(bio.skills.length > 0){

		$('#header').append(HTMLskillsStart);

		for (var i=0; i<bio.skills.length-1; i++){
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
	for(school in education.schools){

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
	for(course in education.onlineCourses){
		//create 'education-entry' class
		$('#education').append(HTMLschoolStart);


		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

		$('.education-entry:last').append(formattedTitleSchool, formattedOnlineDates, formattedOnlineURL);



	}

}

education.displayOnline();

// populate html with user work experience
// TO-DO: CHANGE FOR IN LOOPS TO FOREACH?

work.display = function(){

	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);

	}

}

work.display();

// populate html with user's projects
//TO_DO FIX IMAGE LOOP

projects.display = function(){

	for (project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedProjectDescription);

		console.log(projects.images.length);
		for (image in projects.images){
			var formattedProjectImage = HTMLprojectImage.replace('%data%', project.image);
			$('.project-entry:last').append(formattedProjectImage);
		}

		// console.log(projects.projects[project].images.length);

		// if (projects.projects[project].images.length > 0) {

		// 	// for (image in project.images){
		// 	// 	var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
		// 	// 	$('.project-entry:last').append(formattedProjectImage);
		// 	}
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

function map(){

}







