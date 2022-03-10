# SQL

## Databases

```
SHOW DATABASES;                         lists the databases  
CREATE DATABASE database_name;          creates new database
DROP DATABASE database_name;            deletes the database
CONNECT database_name;                  connects to a database
```

## Tables

```
SHOW TABLES;                shows all tables from a database
DROP TABLE table_name;      delete a table from the database
TRUNCATE TABLE table_name;  delete all table entries
ALTER TABLE table_name
    ADD col_name type;
    DROP COLUMN col_name;
```

### CREATE TABLE

```
CREATE TABLE table_name (name_1 type_1 [parameters], ...);
    types:
        INT/INTEGER
        FLOAT
        DOUBLE/REAL
        TINYINT, SMALLINT, MEDIUMINT, INT/INTEGER, BIGINT
        CHAR(n)
        VARCHAR(n)
        TEXT
        BLOB
        TINYTEXT, TINYBLOB, MEDIUMTEXT, MEDIUMBLOB, LONGTEXT, LONGBLOB
    parameters:
        NOT NULL                has to have a value
        PRIMARY KEY             primary column of the table
        AUTO_INCREMENT          unique number automatically assigned to an entry
        UNIQUE                  unique value

CREATE TABLE table_name (name_1 type_1 [params], FOREIGN KEY(name_1) REFERENCES table_2(column));
```

## Entries

```
INSERT INTO 
    table_name (col_1, col_2,...)               what columns information to insert
    VALUES (value_1, value_2,...);              the values to be inserted

UPDATE 
    table_name SET col_1 = value_1,...          change data in the columns
    WHERE condition;                            what rows should be affected

DELETE FROM 
    table_name                                  delete from the table
    WHERE condition;                            which rows should be deleted

```

### SELECT

```
SELECT {columns} FROM table_name
    ORDER BY cols [parameters],...  ordering by columns
    GROUP BY col                    grouping by column
    LIMIT n                         first n entries
    WHERE condition
    JOIN clause;

    columns:
        col_1, col_2,...            specific columns
        *                           all columns
        AVG()column_1)               average function
        COUNT(column_1)             number of entries in a table
        SUM(column_1)
        MAX(column_1)
        DISTINCT [column_1]         unique entries
        col AS new_name             alias (possible with table name too)
    order by paramaters:
        DESC                        descending order
    conditions:
        column_1 = "value_1"
        NOT col = "val"
        AND, OR
        column IS NULL              empty column
        column [NOT] LIKE "..."             
            "a%"                        starts with a
            %                           multiple characters
            ?                           one character
            [characters]                certain character from group
            [a-f]
            [^characters]               not
        col [NOT] IN (values)           columns has one of the values
        col [NOT] BETWEEN x AND y       value between values
    JOIN clauses:                   joins current table with another
        LEFT                            all from table1 + matches from table2
        RIGHT                           reversed
        INNER                           all from both
        table2 ON table1.field = table2.field
```


### Users and rights

```
CREATE USER 'user'@'host' IDENTIFIED BY 'password';

SET PASSWORD FOR 'root'@'localhost' = 'password';

GRANT rights ON place TO user@host;
REVOKE rights ON place FROM user@host;

rights:
    SELECT
    UPDATE
    INSERT
    DELETE
    ALL

places:
    database_name.*
    *.*
    database_name.table_name
```