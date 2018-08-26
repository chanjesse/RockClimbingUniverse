**DATABASE OUTLINE**

ENTITIES:

• Rock Climber – this will have a name, height, weight, age. User will be able
to view all this on a table. User will also be able to add and delete a new
rock climber.

• Shoes – this will have shoe year, shoe brand name, shoe model name. User
will be able to view all this on a table. User will also be able to add a new
shoe.

• Achievements – this will have achievement year and achievement name.
User will be able to view all this on a table. User will also be able to add a
new achievement.

• World Ranking – this will have a rank and location. User will be able to
view all this on table. User will also be able to add a new ranking and
location.

• Coach – this will have the coach first name, last name, and years of
experience. User will be able to view all this on table. User will also be
able to add a new coach.

**RELATIONSHIPS:**

• Rock Climbers have shoes – MANY TO MANY – climbers can have many
shoes and each shoe can be owned by many different climbers. This will
be the people_shoes table. User will be able to view, add, and delete.

• Rock Climbers have achievements – MANY TO MANY – climbers can have
achievements and climbers may have achieved the same award (e.g. in a
different year of the same competition). This will be the
people_achievement table. User will be able to view, add, and delete.

• Rock Climbers have a ranking – ONE TO ONE - climbers will have a
ranking number assigned (e.g. if the best, it will be #1) and a location
(ranking for that specific region, e.g. Asia). This will be the people_ranking
table. User will be able to view, add, and delete.

• Rock Climbers have a coach – ONE TO MANY (MANY TO ONE) – climbers
will have a unique coach assigned to them, however one coach can have
many climbers underneath them. This will be the people_coach table. User
will b able to view, add, and delete.

**ER DIAGRAM:**
![image](https://user-images.githubusercontent.com/13804972/44624368-54c1fb00-a8a1-11e8-9e23-6e2b75ee4534.png)

**SCHEMA:**
![image](https://user-images.githubusercontent.com/13804972/44624369-5be90900-a8a1-11e8-80e8-e8e5cde0c74e.png)

