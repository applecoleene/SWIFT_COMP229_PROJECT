//instance variables
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our survey answers Model
let Survey = require('../models/survey');

/* GET Route for the server answers - READ Operation */
router.get('/', (req, res, next) => {
    Survey.find((err, surveyAnswers) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(surveyAnswers);

            res.render('survey', {title: 'Survey Table', SurveyList: surveyAnswers})            
        }
    });
});

module.exports = router;