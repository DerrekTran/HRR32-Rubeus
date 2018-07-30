const c = require('../db/index.js');
const users = require('../db/users.js');

/**********************************************************
Function Name: getNames
Input:  No input
Output:  The names of all town halls formatted as an array
Description: Used to populate any dropdown on the front
            end that show which town halls are currently
            available to choose from
**********************************************************/
var getNames = () => {
  return new Promise ((resolve, reject) => {
    const sql = 'SELECT name FROM townhalls';
    c.connection.query(sql, (err, results, data) => {
      //init an array to cleanly place all townhall names in
      let townHallNames = [];
      results.forEach((townHallRow) => townHallNames.push(townHallRow.name));
      err ? reject(err) : resolve(townHallNames);
    });
  });
};

/**************************************************************************
Function Name: createQuestion
Input:  Question (string),
        User's Unique Row ID (Foreign Key, taken from passport Req.user)
        TownHall Name (used to obtain ID Foreign Key)

Output:  no output
Description: Used to insert a question assigned to a
             specific townHall and user
***************************************************************************/
var createQuestion = (questionBody, userRowId, hallName) => {
  return new Promise ((resolve, reject) => {
    //first obtain the unique row id related to the townhall name
    const inserts1 = [hallName];
    const sql1 = 'SELECT id FROM townhalls WHERE name LIKE (?)';
    c.connection.query(sql1, inserts1, (err, results, data) => {
      if (err) {
        reject(err);
      } else {
        //now we have the (foreign key id) of the townHall to insert in
        const hallId = results[0].id;
        const inserts2 = [userRowId, hallId, questionBody];
        const sql2 = 'INSERT INTO questions (user_id, townhall_id, question) VALUES (?, ?, ?)';
        c.connection.query(sql2, inserts2, (err, results, data) => {
          err ? reject(err) : resolve(results);
        });
      }
    });
  });
};

// var createQuestion2 = (questionBody, userRowId, hallName, callback) => {
//   const inserts1 = [hallName];
//   const sql1 = 'SELECT id FROM townhalls WHERE name LIKE (?)';
//   c.connection.query(sql1, inserts1, (err, results, data) => {
//     if (err) {
//       console.log('error');
//     } else {
//       const hallId = results[0].id;
//       const inserts2 = [userRowId, hallId, questionBody];
//       const sql2 = 'INSERT INTO questions (user_id, townhall_id, question) VALUES (?, ?, ?)';
//       c.connection.query(sql2, inserts2, (err, results, data) => {
//         err ? console.log(err) : resolve(results);
//       });
//     }
//   });
// };


/**************************************************************************
Function Name: getQuestions
Input:  Town Hall Name (string)

Output:  an array composed of question/answer objects for the townHall name
         passed in.

         Each object within the array will contain a question
         property and if that particular question has an answer, the object
         will also contain an answer property.


Description: Used to insert a question assigned to a
             specific townHall and user
***************************************************************************/
// var getQuestions = (hallName) => {
//   return new Promise ((resolve, reject) => {
//     hallName = String(hallName);
//     const inserts = [hallName];
//     const sql = 'SELECT townhall_id, question, response FROM questions q WHERE q.townhall_id =  (SELECT id FROM townhalls where name like (?))';
//     c.connection.query(sql, inserts, (err, results, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         //Init a question array that will hold objects of questions and answers
//         let questions = [];

//         results.forEach(rowData => {
//           let tempObject = {};
//           tempObject.question = rowData.question;

//           /*Check if there is an answer, if there is create an answer property on the object*/
//           rowData.response ? tempObject.answer = rowData.response : null;

//           //now push the tempObject into the main array (that will be returned to frontEnd)
//           questions.push(tempObject);
//         });

//         resolve(questions);
//       }
//     });
//   });
// };





var getQuestions = (hallName) => {
  return new Promise ((resolve, reject) => {
    hallName = String(hallName);
    const inserts = [hallName];
    const sql = 'SELECT t.name as townHall, t.createDate as createDate, q.townhall_id, q.question, q.response FROM questions q INNER JOIN townhalls t ON q.townhall_id = t.id WHERE q.townhall_id = (SELECT id FROM townhalls where name like (?))';
    c.connection.query(sql, inserts, (err, results, data) => {
      if (err) {
        reject(err);
      } else {
        //Init a question array that will hold objects of questions and answers
        let questions = [];
        results.forEach(rowData => {
          let tempObject = {};
          tempObject.question = rowData.question;

          /*Check if there is an answer, if there is create an answer property on the object*/
          rowData.response ? tempObject.answer = rowData.response : null;

          tempObject.townHallName = rowData.townHall;
          tempObject.createDate = rowData.createDate;
          //now push the tempObject into the main array (that will be returned to frontEnd)
          questions.push(tempObject);
        });

        resolve(questions);
      }
    });
  });
};









var createTownHall = (townHallName) => {
  return new Promise ((resolve, reject) => {
    const inserts = [townHallName];
    const sql = "INSERT INTO townhalls (name) VALUES (?)";
    c.connection.query(sql, inserts, (err, results, data) => {
      err ? reject(err) : resolve(results);
    });
  });
};

module.exports = {
  getNames: getNames,
  createQuestion: createQuestion,
  getQuestions: getQuestions,
  createTownHall: createTownHall
};