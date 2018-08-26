/*
FOR VIEWING PEOPLE TABLE
*/
exports.viewPeopleQuery =  "SELECT ";
exports.viewPeopleQuery += "people.id AS people_id, ";
exports.viewPeopleQuery += "people.fname AS people_fname, ";
exports.viewPeopleQuery += "people.lname AS people_lname, ";
exports.viewPeopleQuery += "people.height AS people_height, ";
exports.viewPeopleQuery += "people.weight AS people_weight, ";
exports.viewPeopleQuery += "people.age AS people_age ";
exports.viewPeopleQuery += "FROM people; ";

/*
FOR VIEWING SHOES TABLE
*/
exports.viewShoesQuery =  "SELECT ";
exports.viewShoesQuery += "shoes.id AS shoes_id, ";
exports.viewShoesQuery += "shoes.year AS shoes_year, ";
exports.viewShoesQuery += "shoes.brand AS shoes_brand, ";
exports.viewShoesQuery += "shoes.model AS shoes_model ";
exports.viewShoesQuery += "FROM shoes; ";

/*
FOR VIEWING ACHIEVEMENT TABLE
*/
exports.viewAchievementQuery =  "SELECT ";
exports.viewAchievementQuery += "achievement.id AS achievement_id, ";
exports.viewAchievementQuery += "achievement.year AS achievement_year, ";
exports.viewAchievementQuery += "achievement.name AS achievement_name ";
exports.viewAchievementQuery += "FROM achievement; ";

/*
FOR VIEWING COACH TABLE
*/
exports.viewCoachQuery =  "SELECT ";
exports.viewCoachQuery += "coach.id AS coach_id, ";
exports.viewCoachQuery += "coach.fname AS coach_fname, ";
exports.viewCoachQuery += "coach.lname AS coach_lname, ";
exports.viewCoachQuery += "coach.yearsExp AS coach_yearsExp ";
exports.viewCoachQuery += "FROM coach; ";

/*
FOR VIEWING RANKING TABLE
*/
exports.viewRankingQuery =  "SELECT ";
exports.viewRankingQuery += "ranking.id AS ranking_id, ";
exports.viewRankingQuery += "ranking.rank AS ranking_rank, ";
exports.viewRankingQuery += "ranking.location AS ranking_location ";
exports.viewRankingQuery += "FROM ranking; ";

/*
FOR VIEWING PEOPLE SHOES RELATION TABLE
*/
exports.viewPeopleShoesQuery =  "SELECT ";
exports.viewPeopleShoesQuery += "people.id as people_id, ";
exports.viewPeopleShoesQuery += "shoes.id as shoes_id, ";
exports.viewPeopleShoesQuery += "people.fname AS people_fname, ";
exports.viewPeopleShoesQuery += "people.lname AS people_lname, ";
exports.viewPeopleShoesQuery += "shoes.brand AS shoes_brand, ";
exports.viewPeopleShoesQuery += "shoes.model AS shoes_model ";
exports.viewPeopleShoesQuery += "FROM people_shoes ";
exports.viewPeopleShoesQuery += "INNER JOIN people ";
exports.viewPeopleShoesQuery += "ON people.id = people_shoes.people_id ";
exports.viewPeopleShoesQuery += "INNER JOIN shoes ";
exports.viewPeopleShoesQuery += "ON shoes.id = people_shoes.shoes_id; ";

/*
FOR VIEWING PEOPLE ACHIEVEMENT RELATION TABLE
*/
exports.viewPeopleAchievementQuery =  "SELECT ";
exports.viewPeopleAchievementQuery += "people.id as people_id, ";
exports.viewPeopleAchievementQuery += "achievement.id as achievement_id, ";
exports.viewPeopleAchievementQuery += "people.fname AS people_fname, ";
exports.viewPeopleAchievementQuery += "people.lname AS people_lname, ";
exports.viewPeopleAchievementQuery += "achievement.year AS achievement_year, ";
exports.viewPeopleAchievementQuery += "achievement.name AS achievement_name ";
exports.viewPeopleAchievementQuery += "FROM people_achievement ";
exports.viewPeopleAchievementQuery += "INNER JOIN people ";
exports.viewPeopleAchievementQuery += "ON people.id = people_achievement.people_id ";
exports.viewPeopleAchievementQuery += "INNER JOIN achievement ";
exports.viewPeopleAchievementQuery += "ON achievement.id = people_achievement.achievement_id; ";

/*
FOR VIEWING PEOPLE RANKING RELATION TABLE
*/
exports.viewPeopleRankingQuery =  "SELECT ";
exports.viewPeopleRankingQuery += "people.id as people_id, ";
exports.viewPeopleRankingQuery += "ranking.id as ranking_id, ";
exports.viewPeopleRankingQuery += "people.fname AS people_fname, ";
exports.viewPeopleRankingQuery += "people.lname AS people_lname, ";
exports.viewPeopleRankingQuery += "ranking.rank AS ranking_rank, ";
exports.viewPeopleRankingQuery += "ranking.location AS ranking_location ";
exports.viewPeopleRankingQuery += "FROM people_ranking ";
exports.viewPeopleRankingQuery += "INNER JOIN people ";
exports.viewPeopleRankingQuery += "ON people.id = people_ranking.people_id ";
exports.viewPeopleRankingQuery += "INNER JOIN ranking ";
exports.viewPeopleRankingQuery += "ON ranking.id = people_ranking.ranking_id; ";

/*
FOR VIEWING PEOPLE COACH RELATION TABLE
*/
exports.viewPeopleCoachQuery =  "SELECT ";
exports.viewPeopleCoachQuery += "people.id as people_id, ";
exports.viewPeopleCoachQuery += "coach.id as coach_id, ";
exports.viewPeopleCoachQuery += "people.fname AS people_fname, ";
exports.viewPeopleCoachQuery += "people.lname AS people_lname, ";
exports.viewPeopleCoachQuery += "coach.fname AS coach_fname, ";
exports.viewPeopleCoachQuery += "coach.lname AS coach_lname ";
exports.viewPeopleCoachQuery += "FROM people_coach ";
exports.viewPeopleCoachQuery += "INNER JOIN people ";
exports.viewPeopleCoachQuery += "ON people.id = people_coach.people_id ";
exports.viewPeopleCoachQuery += "INNER JOIN coach ";
exports.viewPeopleCoachQuery += "ON coach.id = people_coach.coach_id; ";



/*
INSERTING NEW PEOPLE
*/
exports.createPeopleQuery = "INSERT INTO people SET ?;"

/*
INSERTING NEW SHOES
*/
exports.createShoesQuery = "INSERT INTO shoes SET ?;"

/*
INSERTING NEW ACHIEVEMENT
*/
exports.createAchievementQuery = "INSERT INTO achievement SET ?;"

/*
INSERTING NEW COACH
*/
exports.createCoachQuery = "INSERT INTO coach SET ?;"

/*
INSERTING NEW RANKING
*/
exports.createRankingQuery = "INSERT INTO ranking SET ?;"


//DELETING PEOPLE
exports.deletePeopleQuery = "DELETE FROM people WHERE id = ";


//FOLLOWING DELETES ALL OF PEOPLES RELATIONS WITH SHOES, ACHIEVEMENTS, RANKING, AND COACHES
exports.deletePeopleShoesQuery = "DELETE FROM people_shoes WHERE people_id = ";

exports.deletePeopleAchievementQuery = "DELETE FROM people_achievement WHERE people_id = ";

exports.deletePeopleRankingQuery = "DELETE FROM people_ranking WHERE people_id = ";

exports.deletePeopleCoachQuery = "DELETE FROM people_coach WHERE people_id = ";



//ADDING PEOPLE SHOES RELATIONSHIP
exports.addPeopleShoesQuery = "INSERT INTO people_shoes SET ?";

//ADDING PEOPLE ACHIEVEMENT RELATIONSHIP
exports.addPeopleAchievementQuery = "INSERT INTO people_achievement SET ?";

//ADDING PEOPLE RANKING RELATIONSHIP
exports.addPeopleRankingQuery = "INSERT INTO people_ranking SET ?";

//ADDING PEOPLE COACH RELATIONSHIP
exports.addPeopleCoachQuery = "INSERT INTO people_coach SET ?";