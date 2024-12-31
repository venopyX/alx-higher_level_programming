**Object-Relational Mapping with Python**
=====================================

In this project, we explored the concept of object-relational mapping (ORM) and its application in database scripting using Python. We worked with MySQLdb and SQLAlchemy to perform CRUD (Create, Read, Update, Delete) operations on MySQL tables.

**Testing**
-----------

We used a set of SQL and Python scripts to set up test tables for all files, provided by ALX. These tests ensured that our code was working as expected.

**Tasks**
---------

### 1. Retrieve All States

* **Script:** `0-select_states.py`
* **Usage:** `./0-select_states.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all states in the `hbtn_0e_0_usa` database, ordered by ascending `states.id`.

### 2. Filter States

* **Script:** `1-filter_states.py`
* **Usage:** `./1-filter_states.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all states with names starting with `N` in the `hbtn_0e_0_usa` database, ordered by ascending `states.id`.

### 3. Filter States by User Input

* **Script:** `2-my_filter_states.py`
* **Usage:** `./2-my_filter_states.py \<mysql_username\> \<mysql_password\> \<database_name\> \<state_name_searched\>`
* **Description:** Display all values matching a given name in the `states` table of the `hbtn_0e_0_usa` database, ordered by ascending `states.id`.

### 4. Prevent SQL Injection

* **Script:** `3-my_safe_filter_states.py`
* **Usage:** `./3-my_safe_filter_states.py \<mysql_username\> \<mysql_password\> \<database_name\> \<state_name_searched\>`
* **Description:** Display all values matching a given name in the `states` table of the `hbtn_0e_0_usa` database, ordered by ascending `states.id`, while preventing SQL injection attacks.

### 5. Retrieve Cities by State

* **Script:** `4-cities_by_state.py`
* **Usage:** `./4-cities_by_state.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all cities from the `hbtn_0e_4_usa` database, ordered by ascending `cities.id`.

### 6. Define a State Model

* **Script:** `model_state.py`
* **Description:** Define a `State` class that inherits from SQLAlchemy `Base` and links to the MySQL table `states`.

### 7. Retrieve All States using SQLAlchemy

* **Script:** `7-model_state_fetch_all.py`
* **Usage:** `./7-model_state_fetch_all.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all `State` objects from the `hbtn_0e_6_usa` database, ordered by ascending `states.id`.

### 8. Retrieve the First State

* **Script:** `8-model_state_fetch_first.py`
* **Usage:** `./8-model_state_fetch_first.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** Print the first `State` object from the `hbtn_0e_6_usa` database, ordered by `states.id`.

### 9. Filter States containing 'a'

* **Script:** `9-model_state_filter_a.py`
* **Usage:** `./9-model_state_filter_a.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all `State` objects that contain the letter `a` in the `hbtn_0e_6_usa` database, ordered by ascending `states.id`.

### 10. Retrieve a State by Name

* **Script:** `10-model_state_my_get.py`
* **Usage:** `./10-model_state_my_get.py \<mysql_username\> \<mysql_password\> \<database_name\> \<state_searched_name\>`
* **Description:** Print the `id` of the `State` object with a name matching the given name in the `hbtn_0e_6_usa` database.

### 11. Add a New State

* **Script:** `11-model_state_insert.py`
* **Usage:** `./11-model_state_insert.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** Add a new `State` object with the name "Louisiana" to the `hbtn_0e_6_usa` database.

### 12. Update a State

* **Script:** `12-model_state_update_id_2.py`
* **Usage:** `./12-model_state_update_id_2.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** Update the name of the `State` object with `id = 2` in the `hbtn_0e_6_usa` database to "New Mexico".

### 13. Delete States containing 'a'

* **Script:** `13-model_state_delete_a.py`
* **Usage:** `./13-model_state_delete_a.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** Delete all `State` objects that contain the letter `a` in the `hbtn_0e_6_usa` database.

### 14. Define a City Model

* **Script:** `model_city.py`
* **Description:** Define a `City` class that inherits from SQLAlchemy `Base` and links to the MySQL table `cities`.

### 15. Establish a Relationship between State and City

* **Script:** `relationship_state.py` and `relationship_city.py`
* **Description:** Establish a relationship between the `State` and `City` classes, allowing for easy access to related objects.

### 16. List States and Cities

* **Script:** `101-relationship_states_cities_list.py`
* **Usage:** `./101-relationship_states_cities_list.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all `State` and corresponding `City` objects in the `hbtn_0e_101_usa` database.

### 17. List Cities

* **Script:** `102-relationship_cities_states_list.py`
* **Usage:** `./102-relationship_cities_states_list.py \<mysql_username\> \<mysql_password\> \<database_name\>`
* **Description:** List all `City` objects from the `hbtn_0e_101_usa` database, ordered by ascending `cities.id`.
