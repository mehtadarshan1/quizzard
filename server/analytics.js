/*
analytics.js

Copyright (C) 2016  Alexei Frolov, Larry Zhang
Developed at University of Toronto

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var users = require('./users.js');
var logger = require('./log.js').logger;
var common = require('./common.js');

exports.getChart = function(query, callback){
    switch(query.type) {
        case 'QuestionsAnsweredVsClass':
            return getQuestionsAnsweredVsClass(query, callback);
        case 'AccuracyVsClass':
            return callback(null, [5,3]);
        case 'PointsVsClass':
            return callback(null, [9,4]);
        case 'RatingVsClass':
            return callback(null, [2,1]);
        default:
            return callback('notFound', null);
    }
}

var getQuestionsAnsweredVsClass = function(query, callback){
    users.getStudentsList(function(err, students) {
        if (err) {
            return callback(err, null);
        }

        if (!students) {
            return  callback('no results', null);
        }

        var studentId = query.user.id;
        var studentAnswered = 0;
        var classAnswered = 0;
        var classCount = 0;
        var classAnsweredAverage = 0;

        for (i in students) {
            if (students[i].id === studentId) {
                studentAnswered = students[i].correctAttemptsCount;
            } else {
                classAnswered += students[i].correctAttemptsCount;
                classCount++;
            }
        }

        classAnsweredAverage = (classAnswered / classCount).toFixed(2);
        console.log(studentAnswered);
        console.log(classAnsweredAverage);
        return callback(null, [studentAnswered, classAnsweredAverage]);
    });
}