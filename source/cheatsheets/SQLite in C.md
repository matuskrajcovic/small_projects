# SQLite in C

```
sqlite3 *                   database variable

int sqlite3_open();         opens database, returns value other than SQLITE_OK on failure
    char *                      name of the file with the database
    sqlite3 **                  pointer to the database variable

int sqlite3_close();        closes the database
    sqlite3 * 

sqlite3_stmt *              SQL prepared statement variable

int sqlite3_prepare();      prepares SQL statement, returns SQLITE_OK when successful
    sqlite3                     database variable
    const char                  SQL query, might contain ? symbols for variable binding
    int nByte,                  maximum length of query (set to -1)
    sqlite3_stmt **             statement variable
    const char **               unused portion of SQL statement (set to NULL)

?                           symbol in SQL statement, where value will be binded

int sqlite3_bind_"type"();  binds variable values of certain type into the SQL statement
    sqlite3_stmt **             SQL statement variable
    int                         index of the parameter to be set
    "type"                      value to be binded
    int                         size of the value (not in all types)
    void(*)(void*)              destructor (only in text and blob)
        SQLITE_TRANSIENT            freeing
        SQL_STATIC                  not freeing

    types:
        text, blob, double, int,...

int sqlite3_step()          launches the statement, returned row (if exists) is saved in statement variable
    sqlite3_stmt *              with multiple rows, it needs to be iterated over, getting values with column function

sqlite3_column_"type"();    returns values from the query
    sqlite3_stmt *              statement variable
    int                         column index

sqlite3_exec();             executes a query
    sqlite **                   database variable
    const char *                string with a query
    callback                    callback function
    void *
    char **                     string for error message

sqlite3_finalize();         destroy a statement variable
    sqlite3_stmt *
```