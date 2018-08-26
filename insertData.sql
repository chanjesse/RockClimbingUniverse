
INSERT INTO people (fname, lname, height, weight, age)
VALUES  ("Chris", "Sharma", 185, 80, 28),
        ("Steph", "Davis", 170, 56, 22),
        ("Catherine", "Destivelle", 167, 50, 42),
        ("Dean", "Potter", 164, 75, 25),
        ("Alex", "Hannold", 180, 71, 29);


INSERT INTO coach (fname, lname, yearsExp)
VALUES  ("Heidi", "Abbott", 10),
        ("Christy", "Breed", 3),
        ("Jason", "Groves", 7),
        ("Brian", "Nissen", 12),
        ("Andrea", "Szekely", 20);


INSERT INTO shoes (brand, model, year)
VALUES  ("La Sportiva", "TC PRO", 2015),
        ("La Sportiva", "Genius", 2017),
        ("Evolv", "Defy", 2016),
        ("Scarpa", "Instinct", 2014),
        ("Butora", "Acro", 2016);
        

INSERT INTO achievement (name, year)
VALUES  ("Climbing World Championship", 2017),
        ("Climbing World Cup", 2016),
        ("European Championships", 2014),
        ("Sportroccia", 2015),
        ("IFSC Climbing World Youth Championship", 2004);


INSERT INTO ranking (rank, location)
VALUES  (1, "United States"),
        (2, "United States"),
        (32, "World"),
        (4, "Asia"),
        (6, "Europe");


INSERT INTO people_shoes (people_id, shoes_id)
VALUES  ((SELECT id FROM people WHERE fname = "Chris" AND lname = "Sharma"),
              (SELECT id FROM shoes WHERE model = "TC PRO")),
        ((SELECT id FROM people WHERE fname = "Chris" AND lname = "Sharma"),
              (SELECT id FROM shoes WHERE model = "Genius")),
        ((SELECT id FROM people WHERE fname = "Steph" AND lname = "Davis"),
              (SELECT id FROM shoes WHERE model = "Genius")),
        ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM shoes WHERE model = "Defy")),
        ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM shoes WHERE model = "Instinct")),
        ((SELECT id FROM people WHERE fname = "Dean" AND lname = "Potter"),
              (SELECT id FROM shoes WHERE model = "Acro")),
        ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM shoes WHERE model = "TC PRO")),
        ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM shoes WHERE model = "Instinct")),
        ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM shoes WHERE model = "Genius"));


INSERT INTO people_achievement (people_id, achievement_id)
VALUES ((SELECT id FROM people WHERE fname = "Chris" AND lname = "Sharma"),
              (SELECT id FROM achievement WHERE name = "Climbing World Championship")),
       ((SELECT id FROM people WHERE fname = "Steph" AND lname = "Davis"),
              (SELECT id FROM achievement WHERE name = "Climbing World Cup")),
       ((SELECT id FROM people WHERE fname = "Steph" AND lname = "Davis"),
              (SELECT id FROM achievement WHERE name = "European Championships")),
       ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM achievement WHERE name = "Sportroccia")),
       ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM achievement WHERE name = "IFSC Climbing World Youth Championship")),
       ((SELECT id FROM people WHERE fname = "Dean" AND lname = "Potter"),
              (SELECT id FROM achievement WHERE name = "Climbing World Cup")),
       ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM achievement WHERE name = "Climbing World Cup")),
       ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM achievement WHERE name = "European Championships")),
       ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM achievement WHERE name = "Sportroccia"));


INSERT INTO people_ranking (people_id, ranking_id)
VALUES ((SELECT id FROM people WHERE fname = "Chris" AND lname = "Sharma"),
              (SELECT id FROM ranking WHERE rank = 1)),
       ((SELECT id FROM people WHERE fname = "Steph" AND lname = "Davis"),
              (SELECT id FROM ranking WHERE rank = 4)),
       ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM ranking WHERE rank = 2)),
       ((SELECT id FROM people WHERE fname = "Dean" AND lname = "Potter"),
              (SELECT id FROM ranking WHERE rank = 32)),
       ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM ranking WHERE rank = 6));

INSERT INTO people_coach (people_id, coach_id)
VALUES ((SELECT id FROM people WHERE fname = "Chris" AND lname = "Sharma"),
              (SELECT id FROM coach WHERE fname = "Heidi" AND lname = "Abbott")),
       ((SELECT id FROM people WHERE fname = "Steph" AND lname = "Davis"),
              (SELECT id FROM coach WHERE fname = "Christy" AND lname = "Breed")),
       ((SELECT id FROM people WHERE fname = "Catherine" AND lname = "Destivelle"),
              (SELECT id FROM coach WHERE fname = "Jason" AND lname = "Groves")),
       ((SELECT id FROM people WHERE fname = "Dean" AND lname = "Potter"),
              (SELECT id FROM coach WHERE fname = "Brian" AND lname = "Nissen")),
       ((SELECT id FROM people WHERE fname = "Alex" AND lname = "Hannold"),
              (SELECT id FROM coach WHERE fname = "Andrea" AND lname = "Szekely"));

