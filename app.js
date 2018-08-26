var db_queries = require('./db_queries.js');
var express = require('express');
//var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.set('mysql', mysql);

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_chanjess',
  password        : '1180',
  database        : 'cs340_chanjess'
});
module.exports.pool = pool;

//HOME
app.get('/', function(req, res) {
	res.render('home');
});

//to view people table
app.get('/view/people', function(req, res) {
  var viewPeopleQuery = db_queries.viewPeopleQuery;

  pool.query(viewPeopleQuery, function(error, rows, fields) {
    res.render('peopleTable', {peoples:rows, error_message:error});
  });
});

//to view shoe table
app.get('/view/shoes', function(req, res) {
  var viewShoesQuery = db_queries.viewShoesQuery;

  pool.query(viewShoesQuery, function(error, rows, fields) {
    res.render('shoeTable', {shoes:rows, error_message:error});
  });
});

//to view achievement table
app.get('/view/achievement', function(req, res) {
  var viewAchievementQuery = db_queries.viewAchievementQuery;

  pool.query(viewAchievementQuery, function(error, rows, fields) {
    res.render('achievementTable', {achievements:rows, error_message:error});
  });
});

//to view coach table
app.get('/view/coach', function(req, res) {
  var viewCoachQuery = db_queries.viewCoachQuery;

  pool.query(viewCoachQuery, function(error, rows, fields) {
    res.render('coachTable', {coaches:rows, error_message:error});
  });
});

//to view ranking table
app.get('/view/ranking', function(req, res) {
  var viewRankingQuery = db_queries.viewRankingQuery;

  pool.query(viewRankingQuery, function(error, rows, fields) {
    res.render('rankingTable', {ranking:rows, error_message:error});
  });
});

//to view people shoe relation table
app.get('/view/peopleshoes', function(req, res) {
  var viewPeopleShoesQuery = db_queries.viewPeopleShoesQuery;

  var viewPeopleQuery = db_queries.viewPeopleQuery;
  var viewShoesQuery = db_queries.viewShoesQuery;
  

  pool.query(viewPeopleShoesQuery, function(error, rows, fields) {
    pool.query(viewPeopleQuery, function(error, rowsPeople, fields) {
      pool.query(viewShoesQuery, function(error, rowsShoes, fields) {
      res.render('peopleShoes', {peopleShoe:rows, people:rowsPeople, shoes:rowsShoes, error_message:error});
      });
    }); 
  });
});

//to view people achievement relation table
app.get('/view/peopleachievement', function(req, res) {
  var viewPeopleAchievementQuery = db_queries.viewPeopleAchievementQuery;

  var viewPeopleQuery = db_queries.viewPeopleQuery;
  var viewAchievementQuery = db_queries.viewAchievementQuery;

  pool.query(viewPeopleAchievementQuery, function(error, rows, fields) {
    pool.query(viewPeopleQuery, function(error, rowsPeople, fields) {
      pool.query(viewAchievementQuery, function(error, rowsAchievement, fields) {
      res.render('peopleAchievement', {peopleAchievement:rows, people:rowsPeople, achievement:rowsAchievement, error_message:error});
      });
    }); 
  });
});

//to view people ranking relation table
app.get('/view/peopleranking', function(req, res) {
  var viewPeopleRankingQuery = db_queries.viewPeopleRankingQuery;

  var viewPeopleQuery = db_queries.viewPeopleQuery;
  var viewRankingQuery = db_queries.viewRankingQuery;

  pool.query(viewPeopleRankingQuery, function(error, rows, fields) {
    pool.query(viewPeopleQuery, function(error, rowsPeople, fields) {
      pool.query(viewRankingQuery, function(error, rowsRanking, fields) {
      res.render('peopleRanking', {peopleRanking:rows, people:rowsPeople, ranking:rowsRanking, error_message:error});
      });
    }); 
  });
});

//to view people coach relation table
app.get('/view/peoplecoach', function(req, res) {
  var viewPeopleCoachQuery = db_queries.viewPeopleCoachQuery;

  var viewPeopleQuery = db_queries.viewPeopleQuery;
  var viewCoachQuery = db_queries.viewCoachQuery;

  pool.query(viewPeopleCoachQuery, function(error, rows, fields) {
    pool.query(viewPeopleQuery, function(error, rowsPeople, fields) {
      pool.query(viewCoachQuery, function(error, rowsCoach, fields) {
      res.render('peopleCoach', {peopleCoach:rows, people:rowsPeople, coach:rowsCoach, error_message:error});
      });
    }); 
  });
});

//adding new people
app.post('/add/people', function(req, res) {
	var people = {
		fname:req.body.people_fname,
    lname:req.body.people_lname,
    height:req.body.people_height,
    weight:req.body.people_weight,
    age:req.body.people_age
	};

	pool.query(db_queries.createPeopleQuery, people, function(error, result) {
		res.redirect(302, '/view/people');
	});
});

//adding new shoes
app.post('/add/shoes', function(req, res) {
	var shoes = {
		brand:req.body.shoe_brand,
    model:req.body.shoe_model,
    year:req.body.shoe_year
	};

	pool.query(db_queries.createShoesQuery, shoes, function(error, result) {
		res.redirect(302, '/view/shoes');
	});
});

//adding new achievement
app.post('/add/achievement', function(req, res) {
	var achievement = {
		year:req.body.achievement_year,
    name:req.body.achievement_name
	};

	pool.query(db_queries.createAchievementQuery, achievement, function(error, result) {
		res.redirect(302, '/view/achievement');
	});
});

//adding new coach
app.post('/add/coach', function(req, res) {
	var coach = {
		fname:req.body.coach_fname,
    lname:req.body.coach_lname,
    yearsExp:req.body.coach_yearsExp
	};

	pool.query(db_queries.createCoachQuery, coach, function(error, result) {
		res.redirect(302, '/view/coach');
	});
});

//adding new ranking
app.post('/add/ranking', function(req, res) {
	var ranking = {
		rank:req.body.ranking_rank,
    location:req.body.ranking_location
	};

	pool.query(db_queries.createRankingQuery, ranking, function(error, result) {
		res.redirect(302, '/view/ranking');
	});
});

//deleting people and all its relationships
app.get('/delete/people/:id', function(req, res) {
  //deleting all relationships and then people
  var deletePeopleCoachQuery = db_queries.deletePeopleCoachQuery + mysql.escape(req.params.id);
  var deletePeopleRankingQuery = db_queries.deletePeopleRankingQuery + mysql.escape(req.params.id);
  var deletePeopleAchievementQuery = db_queries.deletePeopleAchievementQuery + mysql.escape(req.params.id);
  var deletePeopleShoesQuery = db_queries.deletePeopleShoesQuery + mysql.escape(req.params.id);
  var deletePeopleQuery = db_queries.deletePeopleQuery + mysql.escape(req.params.id);

  pool.query(deletePeopleCoachQuery, function(error, result) {
    pool.query(deletePeopleRankingQuery, function(error, result) {
      pool.query(deletePeopleAchievementQuery, function(error, result) {
        pool.query(deletePeopleShoesQuery, function(error, result) {
          pool.query(deletePeopleQuery, function(error, result) {
            res.redirect(302, '/view/people');
          });
        });
      });
    });
  });
});

//deleting people and shoes relationships
app.get('/delete/peopleshoes/:id/:id2', function(req, res) {

  var deletePeopleShoesQuery = db_queries.deletePeopleShoesQuery + mysql.escape(req.params.id) + " AND shoes_id=" + mysql.escape(req.params.id2);

	pool.query(deletePeopleShoesQuery, function(error, result) {
		res.redirect(302, '/view/peopleshoes');
  });
});

//deleting people and achievement relationships
app.get('/delete/peopleachievement/:id/:id2', function(req, res) {
  
    var deletePeopleAchievementQuery = db_queries.deletePeopleAchievementQuery + mysql.escape(req.params.id) + " AND achievement_id=" + mysql.escape(req.params.id2);
  
    pool.query(deletePeopleAchievementQuery, function(error, result) {
      res.redirect(302, '/view/peopleachievement');
  });
});


//deleting people and ranking relationships
app.get('/delete/peopleranking/:id/:id2', function(req, res) {
  
    var deletePeopleRankingQuery = db_queries.deletePeopleRankingQuery + mysql.escape(req.params.id) + " AND ranking_id=" + mysql.escape(req.params.id2);
  
    pool.query(deletePeopleRankingQuery, function(error, result) {
      res.redirect(302, '/view/peopleranking');
    });
  });

//deleting people and coach relationships
app.get('/delete/peoplecoach/:id/:id2', function(req, res) {
  
    var deletePeopleCoachQuery = db_queries.deletePeopleCoachQuery + mysql.escape(req.params.id) + " AND coach_id=" + mysql.escape(req.params.id2);
  
    pool.query(deletePeopleCoachQuery, function(error, result) {
      res.redirect(302, '/view/peoplecoach');
    });
  });

//adding new people shoes relations
app.post('/add/peopleshoes', function(req, res) {

	var data = {
		people_id:req.body.people,
    shoes_id:req.body.shoe
	};

	pool.query(db_queries.addPeopleShoesQuery, data, function(error, result) {
		res.redirect(302, '/view/peopleshoes');
	});
});

//adding new people achievement relations
app.post('/add/peopleachievement', function(req, res) {

	var data = {
		people_id:req.body.people,
    achievement_id:req.body.achievement
	};

	pool.query(db_queries.addPeopleAchievementQuery, data, function(error, result) {
		res.redirect(302, '/view/peopleachievement');
	});
});

//adding new people ranking relations
app.post('/add/peopleranking', function(req, res) {

	var data = {
		people_id:req.body.people,
    ranking_id:req.body.ranking
	};

	pool.query(db_queries.addPeopleRankingQuery, data, function(error, result) {
		res.redirect(302, '/view/peopleranking');
	});
});

//adding new people coach relations
app.post('/add/peoplecoach', function(req, res) {

	var data = {
		people_id:req.body.people,
    coach_id:req.body.coach
	};

	pool.query(db_queries.addPeopleCoachQuery, data, function(error, result) {
		res.redirect(302, '/view/peoplecoach');
	});
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
