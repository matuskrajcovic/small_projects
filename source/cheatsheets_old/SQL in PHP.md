# SQL in PHP

```
mysql_connect();            connects to a SQL server, returns link identifier/false
    host                    localhost, server
    user                    user name
    password

mysql_close();              disconnects from SQL server, returns true/false
    link_identifier

mysql_select_db();          selecting of database, returns link identifier/false
	database_name
	link_identifier

mysql_query();              sends a query, returns data variable/false
	query
	link_identifier

mysql_num_rows();           returns number of items in data variable
	data_variable           variable returned by mysql_query()

mysql_fetch_array()         returns array with data from a data variable
	data_variable

mysql_free_result()         delete data variable
    data_variable

mysql_affected_rows()       returns number of rows affected in previous query

mysql_errno()               returns error code from previous query
mysql_error()               returns description of an error from previous query
```