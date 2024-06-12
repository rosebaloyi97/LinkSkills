//imports required dependencies
const express = require("express");
const route = express.Router();
const controller = require("./controller");

//route to get questions
route.get("/questions", controller.getQuestions);

//route to post respondent
route.post("/respondent", controller.postRespondent);

//route to post answers
route.post("/answer", controller.answer);

//route to get technicalskills stats
route.get("/technicalSkills", controller.technicalSkills);

//route to get Softskills stats
route.get("/softskills", controller.softSkills);

//route to get tab/space stats
route.get("/tabsOrSpace", controller.tabsOrSpace);

//route to get age stats
route.get("/age", controller.ageStats);

//route to get IDE stats
route.get("/IDE", controller.IDE);

//route to get gender stats
route.get("/gender", controller.gender);

//route to get cap or shift stats
route.get("/capOrShift", controller.capOrShift);

//route to get ethnicity stats
route.get("/ethnicity", controller.ethnicity);

//route to get technologies stats
route.get("/technologies", controller.technologies);

//route to get home or work stats
route.get("/homeOrWork", controller.homeOrWork);

//route to get most used operating system stats
route.get("/operatingSystems", controller.operatingSystems);

//getting the total number of people who took the survey
route.get("/people", controller.totPeople);


module.exports = route;