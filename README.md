# Gold MSI Survey: jsPsych Implementation

This repository contains all materials needed to run the self report survey for the Goldsmiths Musical Sophistication Index.
All information to run this locally is provided and is written for those unfamiliar with github and jsPsych so they can understand what is happening in the code, not be intimidated by it, and thus hopefully start to contribute to creating more #musicscience tools for the community to use.

## Getting the Gold MSI Files 

The first thing you will want to do if you want to use these files in your own reserach is download this repository.
You can do this by clicking on the green 'Clone or download' button near the top of this page.
This will download everything you need to run this survey locally on your machine.
It also downloads an R Script and example data that you can run the functions on.
Of course there is also a way of doing this at the command line, but if you know that you probably are not reading this anyway.

Once you have this repository downloaded, unzip the file where you would like it on your computer.
The file will have a copy of this README file, as well as an ``.html`` file used to run the experiment and a ``.js`` file that contains all of the scales needed.
After this has been set up you then need to download jsPsych so that these scripts will run.
 
## The jsPsych Library

jsPsych is an open source library that is made for running experiments in the web browser.
Download it by going the repository [here](https://github.com/jspsych/jsPsych/releases/tag/v5.0) and then clicking the green 'Clone or download' button.
Right now the current is set to work with the 5.0 release, updates will be made soon for 6.0 compatability.
If you 'Dowload ZIP' just like you did before, then your browser will save the file and its contents to your downloads. 
Move that file to inside the directory you just downloaded and then unzip it.
The last thing that you will then need to do is to change the name of the folder from ``jsPsych-master`` to ``jspsych-5.0``.
Doing this will the scripts from the Gold-MSI folder to read the jsPsych files needed to run the survey.

This will allow you to access all of jsPsych's libraries and make the Gold MSI run.
Just double click the ``.html`` file in your folder and the experiment will run!
Feel free to also change the name of the folder to you know what is in it.

## Scoring Your Files

See R Script for instructions on how to run the scoring scripts.

## Exploring the Scripts

Inside both the ``.html`` and the ``.js`` files are lines of code that begin with a //.
I have provided comments as to what each block of code is doing in order to help 
someone that is new to this better understand how the code is functioning. 

Once you feel comfortable with playing around with these scripts, try learn how to clone the repo from the command line!
This way you can more easily stay up to date with changes made on the jsPsych or Gold MSI end of things (adding new versions!). 
