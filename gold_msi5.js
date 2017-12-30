////////////////////////////////////////////////////////////////////
// Here are all of the Objects and Scales used for the Experiment!!
/////////////////////////////////////////////////////////////////////

var intro = {
    type: 'instructions',
    pages: ["<p>Welcome to the Goldsmiths' Sophistication Index version 1.0. </p>" +
	    "<p> Please click NEXT to start the survey!</p>",
	
          "<p>Before collecting any data we are required to obtain a confirmation of consent all for participants.</p>" 
    	+ "<p>Please read the following statement: </p>" 
        + "<p>This survey will ask you to self report on your musical background. You may choose not to participate or to withdraw from the study at any time without penalty or loss of any benefit.  "
   	+ "All data will be made anonymous and all efforts will be made to keep data private and secure. For questions concerning participant rights, feel free"
    	+ " to contact Dr. Dennis Landin, chair of the Institutional Review Board at either (225)-578-8692 or irb@lsu.edu.</p>"
        + "<p> If you are willing to partake in this study, please press any key on the keyboard and the survey will begin." ,

      	   'Thank you for choosing to participate in this experiment.</p>'  
    	        + "<p>Please answer the following survey questions about your musical background.</p>"
    	        + '<p>Click the number below on each statement to indicate the extent to which you either agree or disagree with each statement.</p>'],

    show_clickable_nav: true
  }

// The code above here creates an object called trial, which we will call later when we run the timeline.
// Essentially, the code is saying "Make a variable 'var' and call it intro.
// It is going to need to code from the plugins file called 'instructions' (we called it at the top of the script) 
// And each page is just a string of text, "Which means we have to put it in quotes!" with commas between each set of pages.
// I also have a bit of HTML formatting in there, so if you know a bit of HTML you can make it look a little prettier.
// Lastly, the final bit of code, show_clickable_nav: , just says we want our participants to be able to click back and forth on this object.
// Try to set it to false and see what happens.
// Try to add in a new page in this object by adding a comma after the last statment and adding in some new text
// that is surrounded by quotes!
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create Scales To Be Used
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In order to use the Likert scale functions in jsPsych, we need to create each scale we want to use.
// The beauty of doing this is that each time we want to use the same seven point response,
// we don't have to recreate the scale, we have to just call 'likert_7' in this case.
// Notice there is a unique object for every scale needed.

/// Create Seven point Likert Scale For First Four Pages

var likert_7 = ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly Agree"];

/// Create Occupation Scale
var occupation_scale = ["Still at school", "At University", 
			"In Full-time employment", "In part-time employment", 
			"Self-employed", "Homemaker/Full-time parent", 
			"Unemployed", "Retired"];

/// Genre Scale (Original GMSI) 
var genre_scale = ["Rock/Pop", "Jazz", "Classical Music"];

// Education Scale (Original GMSI) 
var education_complete_scale = ["Did not complete any school qualification.", 
"Completed first school qualification at ~16 years (Junior High/GCSE)", 
"Completed second qualification (e.g. High school/A-levels)", 
"Ungergraduate degree/Professional qualification", "Graduate school/Postgraduate degree", 
"I am still in education" ];

/// Expected Education Scale (Original GMSI)
var education_expected_scale = ["First school qualification (Junior High/GCSE)", 
"Post-16 vocational school", "Second school qualification (High school/A-levels)", 
"Undergraduate degree or professional qualification", "Postgraduate degree", "Not Applicable"];


/// Create Likert Level Scale for Musical Training Questions
/// Note that each variable refers to the question number for easy callback later!

var scale_32 = ["0", "1","2","3","4-5","6-9","10 or more"];
var scale_33 = ["0",".5","1","1.5","2","3-4","5 or more"];
var scale_34	= ["0","1","2","3","4-6", "7-10","11 or more"];
var scale_35 = ["0",".5","1","2","3","4-6","7 or more"];
var scale_36 = ["0",".5","1","2","3-5","6-9","10 or more"];
var scale_37 = ["0","1","2","3","4","5","6"];
var scale_38 = ["0-15 min","15-30 min","30-60 min", "60-90 min", "2 hours", "2-3 hours", "4 hours or more"];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create Objects//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

//1

var likert_page1 = {
    type: 'survey-likert',
    questions: [{prompt: "I spend a lot of my free time doing music related activites.", labels: likert_7, required: true},
		{prompt: "I sometimes choose music that can trigger shivers down my spine.", labels: likert_7, required: true},
		{prompt: "I enjoy writing about music, for example on blogs and forums.", labels: likert_7, required: true},
		{prompt: "If somebody starts singing a song I don't know I can usually join in.", labels: likert_7, required: true},
		{prompt: "I am able to judge if someone is a good singer or not.", labels: likert_7, required: true},
		{prompt: "I usually know when I am hearing a song for the first time.", labels: likert_7, required: true},
		{prompt: "I can sing or play music from memory.", labels: likert_7, required: true},
		{prompt: "I am intrigued by musical styles I am not familiar with and want to find out more.", labels: likert_7, required: true},
		{prompt: "Pieces of music rarely evoke emotions for me.", labels: likert_7, required: true},
		{prompt: "I am able to hit the right notes when I sing along with a recording.",labels: likert_7, required: true}],
}; 

//2
var likert_page2 = {
    type: 'survey-likert',
    questions: [{prompt: "I find it difficult to spot mistakes in a performance of a song even if I know the tune.", labels: likert_7, required: true},
		{prompt: "I can compare and discuss differences between two peformances of the same piece of music.", labels: likert_7, required: true},
		{prompt: "I have trouble recognizing a familiar song when played in a different way or by a different performer.", labels: likert_7, required: true},
		{prompt: "I have never been complimented for my talents as a musical performer.",labels: likert_7, required: true},
		{prompt: "I often read or search the internet for things related to music.", labels: likert_7, required: true},
		{prompt: "I often pick certain music to motivate or excite me.", labels: likert_7, required: true},
		{prompt: "I am not able to sing in harmony when someone is singing a familiar tune.", labels: likert_7, required: true},
		{prompt: "I can tell when people sing or play out of time with the beat.", labels: likert_7, required: true},
		{prompt: "I am able to identify what is special about a given musical piece.", labels: likert_7, required: true},
		{prompt: "I am able to talk about the emotions that a piece of music evokes for me.",labels: likert_7, required: true}],
}; 

//3
var likert_page3 = {
    type: 'survey-likert',
    questions: [{prompt: "I don't spend much of my disposable income on music.", labels: likert_7, required: true},
		{prompt: "I can tell when people sing or play out of tune.", labels: likert_7, required: true},
		{prompt: "When I sing I have no idea whether when I am in tune or not.", labels: likert_7, required: true},
		{prompt: "Music is kind of like an addiction for me- I can't live without it.", labels: likert_7, required: true},
		{prompt: "I don't like singing in public because I am afraid I will sing wrong notes.", labels: likert_7, required: true},
		{prompt: "When I hear a piece of music I can usually identify its genre.", labels: likert_7, required: true},
		{prompt: "I would not consider myself a musician.", labels: likert_7, required: true},
		{prompt: "I keep track of new music that I come across (eg. new artists or recordings).", labels: likert_7, required: true},
		{prompt: "After hearing a new song two or three times I can usually sing it by myself.", labels: likert_7, required: true},
		{prompt: "I only need to hear a new song once and I can sing it back hours later.", labels: likert_7, required: true},
		{prompt: "Music can evoke my memories of past people and places.",labels: likert_7, required: true}],
}; 
//4
var likert_page4 = {
    type: 'survey-likert',
    questions: [{prompt: "I engage in regular, daily practice of a musical instrument (including voice) for __ years.", labels: scale_32, required: true},
		{prompt: "At the peak of my interest, I practiced __ hours per day on my primary instrument.", labels: scale_33, required: true},
		{prompt: "I have atteneded __ live music events as an audience member in the past twelve months.",labels: scale_34, required: true},
		{prompt: "I have had formal training in music theory for __ years.", labels: scale_35, required: true},
		{prompt: "I have had __ years of formal training on a musical instrument (including voice) during my lifetime.",labels: scale_36, required: true},
		{prompt: "I can play __ musical instruments.",labels: scale_37, required: true},
		{prompt: "I listen attentively ot music for __ per day.",labels: scale_38, required: true}],
}; 

//5
var likert_page5 = {
    type: 'survey-likert',
    questions: [{prompt: "Please select your occupational status.", labels: occupation_scale , required: true},
		{prompt: "What is the musical genre you mainly listen to?", labels: genre_scale,required: true},
		{prompt: "What is the highest educational qualification you have attained?", labels: education_complete_scale, required: true},
		{prompt: "If you are still in education, what is the highest qualification you expect to obtain?",labels: education_expected_scale, required: true}],
}; 


var age_block = {
	type: 'survey-text',
	questions: [{prompt: "What is your age in years?", value: "Years"}], 
	};


var gender_block = {
	type: 'survey-text',
	questions: [{prompt: "What gender do you identify with?"}], 
	};



var instrument_block = {
	type: 'survey-text',
	questions: [{prompt: "What instrument do you play best?"}], 
	};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// David John Baker
// Dec 29th, 2017
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
