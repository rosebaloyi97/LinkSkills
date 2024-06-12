//imports required dependencies
const db = require("./db");

//exporting questions
exports.getQuestions = (req, res) => {
  //initializing empty questions and choices arrays
  let questions = [];

  //quering the questions from the database
  db.query("SELECT * FROM question", async (err, rows, fields) => {
    if (!err) {
      questions = rows;

      //quering the choices from the database
      await db.query("SELECT * FROM choice", (err, rows, fields) => {
        //looping through the questios array to macth the questions with their options
        for (let i = 0; i < questions.length; i++) {
          questions[i].options = [
            ...rows.filter(
              (row) => row.question_id == questions[i].question_id
            ),
          ];
        }

        res.json(questions);
      });
    } else {
      throw err;
    }
  });
};

// inserting into respondent table
exports.postRespondent = (req, res) => {
  const sql =
    "INSERT INTO respondent (company_name, respondent_name, Email) VALUES (?, ?, ?)";
  db.query(
    sql,
    [req.body.company_name, req.body.respondent_name, req.body.Email],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        throw err;
      }
    }
  );
};

// inserting into answer table
exports.answer = async (req, res) => {
  const { question_id, option_id, respondent_id } = req.body;
  console.log(req.body);

  let SQL = "";

  for (let i = 0; i < option_id.length; i++) {
    SQL += `INSERT INTO answer (question_id, option_id, respondent_id) VALUES(${question_id}, ${option_id[i]}, ${respondent_id}); `;
  }

  var query = await db.query(SQL);

  query
    .on("fields", function (fields, index) {})
    .on("result", function (row, index) {});

  return res.json({ success: true });
};

//totalNoOfPeople

exports.totPeople = (req, res) => {
  let people = db.query(
    "select count(respondent_id) AS total \
  from respondent;",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        throw err;
      }
    }
  );
};

//techicalskills stats

exports.technicalSkills = (req, res) => {
  db.query(
    " select c.option_id, choice_description\
    from answer a, choice c\
    where a.option_id= c.option_id\
    AND c.question_id= 1;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "JavaScript", total: 0 },
          { name: "AWS", total: 0 },
          { name: "Java", total: 0 },
          { name: "PHP", total: 0 },
          { name: "Python", total: 0 },
          { name: "C#", total: 0 },
          { name: "R", total: 0 }, 
          { name: "Flutter", total: 0 },
          { name: "Ruby", total: 0 },
          { name: "Angular", total: 0 },
          { name: "Typescript", total: 0 },
          { name: "SQL", total: 0 },
          { name: "C++", total: 0 },
          { name: "Ionic", total: 0 },
          { name: "Swift", total: 0 }
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting softskills
exports.softSkills = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 2;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Communication skill", total: 0 },
          { name: "Strong ethic", total: 0 },
          { name: "Big picture thinking", total: 0 },
          { name: "Team player", total: 0 },
          { name: "Leadership", total: 0 },
          { name: "Initiative", total: 0 },
          { name: "Honesty", total: 0 },
          { name: "Time management", total: 0 },
          { name: "Stress management", total: 0 },
          { name: "Inclusive", total: 0 }
          
        ];
        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting tabs or space stats from the database
exports.tabsOrSpace = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 9;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Tabs", total: 0 },
          { name: "Spaces", total: 0 },
          { name: "It does not matter", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting age stats from the database
exports.ageStats = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 3;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "18-24", total: 0 },
          { name: "25-34", total: 0 },
          { name: "35-44", total: 0 },
          { name: "45-54", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting IDE stats from the database
exports.IDE = (req, res) => {
  db.query(
    "  select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 10;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "VS Code", total: 0 },
          { name: "Expresso", total: 0 },
          { name: "Eclipse", total: 0 },
          { name: "Netbeans", total: 0 },
          { name: "Xcode", total: 0 },
          { name: "Coda", total: 0 },
          { name: "Nitrous", total: 0 },
          { name: "Visual Studio", total: 0 },
          { name: "InteliJ", total: 0 },
          { name: "Atom", total: 0 },
          { name: "Notepad++", total: 0 },
          { name: "Vim", total: 0 },
          { name: "IDLE", total: 0 },
          { name: "Android Studio", total: 0 },
          { name: "Sublime Text", total: 0 },
          { name: "Pycharm", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting gender stats from the database
exports.gender = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 4;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Female", total: 0 },
          { name: "Male", total: 0 },
          { name: "Other", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting cap or shuft stats from the database
exports.capOrShift = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 11;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Caps Lock", total: 0 },
          { name: "Shift Key", total: 0 },
          { name: "It does not matter", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting cap or ethnicity stats from the database
exports.ethnicity = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 5;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Black", total: 0 },
          { name: "Coloured", total: 0 },
          { name: "Indian", total: 0 },
          { name: "White", total: 0 },
          { name: "Asian", total: 0 },
          { name: "It does not matter", total: 0}
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim("")) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting cap or technologies stats from the database
exports.technologies = (req, res) => {
  db.query(
    "  select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 12;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Artificial Intelligence", total: 0 },
          { name: "Cloud Computing", total: 0 },
          { name: "Block Chain", total: 0 },
          { name: "DevOps", total: 0 },
          { name: "Cyber Security", total: 0 },
          { name: "Machine Learning", total: 0 },
          { name: "Virtual Reality Apps", total: 0 },
          { name: "Data Science", total: 0 },
          { name: "Robotic Process Automation(RPA)", total: 0 },
          { name: "Internet of Things(IoT)", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting home or work stats from the database
exports.homeOrWork = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 13;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Home", total: 0 },
          { name: "Office", total: 0 },
          { name: "Both", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};

//getting stats of most used operating system from the database
exports.operatingSystems = (req, res) => {
  db.query(
    " select c.option_id, choice_description \
    from answer a, choice c \
    where a.option_id= c.option_id \
    AND c.question_id= 8;",
    (err, rows, fields) => {
      if (!err) {
        let skills = [
          { name: "Linux", total: 0 },
          { name: "Mac OS", total: 0 },
          { name: "Windows", total: 0 },
        ];

        for (let i = 0; i < skills.length; i++) {
          for (let j = 0; j < rows.length; j++) {
            if (skills[i].name == rows[j].choice_description.trim()) {
              skills[i].total += 1;
            }
          }
        }

        res.json(skills);
      } else {
        throw err;
      }
    }
  );
};