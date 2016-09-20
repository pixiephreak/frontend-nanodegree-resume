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

var bio = {'name':'Jane Claire', 'role':'Front-end Development', 'contacts':{'mobile' : '555-555-5555', 'email':'xxxxxx@gmail.com','github':'github.com/pixiephreak','twitter':'@xxxxx', 'location':'Washington, D.C.'},
'welcomeMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
'skills':['Project Management', 'Instruction', 'Graphic Design', 'Installation Design', 'HTML', 'Javascript', 'CSS', 'Python', 'Adobe Suite'], 'bioPic':'images/fry.jpg'};

var education = {'Schools':[{'name':'Instituto Peruano de Arte y Diseno (Peruvian Institute of Design)', 'degree':'Certificate', 'majors':['Graphic Design', 'Visual Fundamentals'], 'location':'Lima, Peru', 'dates':'June, 2010', 'url': 'www.xxxx.com'},
{'name':'Kalamazoo College', 'degree':'Bachelor of Arts', 'majors':['Anthropology and Sociology', 'French'], 'location':'Kalamazoo, Michigan', 'dates':'June 2007', 'url': 'www.xxxx.com'}],
'onlineCourses': [{'title':'Nanodegree: Front End Development', 'school':'Udacity','dates':'September-December 2016','url':'www.udacity.com'},{'title':'Specialization: Web Design for Everybody (Basics of Web Development and Coding)',
'school':'Coursera (University of Michigan School of Information', 'dates':'April-July 2016', 'url': 'https://www.coursera.org/specializations/web-design'}, {'title':'Specialization: Programming for Everybody (Getting Started with Python)',
'school':'Coursera (University of Michigan School of Information', 'dates':'December-June 2016', 'url': 'https://www.coursera.org/learn/python'}]};

var work = {'jobs':[{'title':'Designer','employer':'Chris by Christopher Bu', 'dates':'August 2015-February 2016', 'location':'Beijing, China',
'description':'Assistant to designer Christopher Bu. Translated designs into digital files for use in production, specializing in surface design using Adobe Illustrator, locating digital assets, and art historical research.'},
{'title':'Visual Artist','employer':'Freelance', 'dates':'August 2004-Present', 'location':'Varying', 'description':'Visual artist specializing in conceptual new media, performance, and installation work. Working at galleries and alternative spaces in the U.S. and abroad.'},
{'title':'Instructor: EFL and TOEFL','employer':'Kaplan Aspect', 'dates':'June 2008-October 2014', 'location':'Washington, DC', 'description':'Teacher of English as a foreign langauge to adult international students at all levels, specializing in TOEFL prep.'},
{'title':'Graphic Designer','employer':'Freelance', 'dates':'June 2010-Present', 'location':'Varying', 'description':'Freelance graphic designer (digital/print) for clients in politics, entertainment, and fine art.'}]};

var projects = {'projects':[{'title':'Project 1', 'dates':'2014-2015','description':
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}], 'images':['images/fry.jpg', 'images/fry.jpg']};

// populate html with user bio info


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


	if(bio.skills.length > 0){

		$('#header').append(HTMLskillsStart);

		for (var i=0; i<bio.skills.length-1; i++){
			formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}

// populate html with user work experience
// TO-DO: CHANGE FOR IN LOOPS TO FOREACH

function displayWork(){

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

displayWork();

// populate html with user's projects

function displayProjects(){

	for (project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedProjectDescription);

		console.log(projects.projects[project].images);

		// if (projects.projects[project].images.length > 0) {

		// 	// for (image in projects.projects[project].images){
		// 	// 	var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
		// 	// 	$('.project-entry:last').append(formattedProjectImage);
		// 	}
		}
	}



displayProjects();

// TO-DO: revisit encapsulation

// projects.display = function() {

// $('#projects').append(HTMLprojectStart);
// 		console.log('yep');
// 	}
// }

// create international option for name formatting

function inName(name){

	var nameArray =  name.split(' ')
	firstName = nameArray[0].toLowerCase();
	lastName = nameArray[1].toUpperCase();
	internationalName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName;

	return internationalName;
}

inName('Jane Claire');

$('#main').append(internationalizeButton);







