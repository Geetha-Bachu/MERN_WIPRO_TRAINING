// data/mockData.js

const data = {

  users: [
    { id:1, username:"admin", role:"admin" },
    { id:2, username:"john", role:"instructor" }
  ],

  instructors: [],

  courses: [
    { id:1, title:"NodeJS", instructorId:2 }
  ]

};

module.exports = data;
