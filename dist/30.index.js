(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '--',\r\n        blockComment: ['/*', '*/'],\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.sql',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    keywords: [\r\n        \"ACCESSIBLE\", \"ACCOUNT\", \"ACTION\", \"ADD\", \"AFTER\", \"AGAINST\", \"AGGREGATE\", \"ALGORITHM\", \"ALL\", \"ALTER\", \"ALWAYS\", \"ANALYSE\", \"ANALYZE\",\r\n        \"AND\", \"ANY\", \"AS\", \"ASC\", \"ASCII\", \"ASENSITIVE\", \"AT\", \"AUTOEXTEND_SIZE\", \"AUTO_INCREMENT\", \"AVG\", \"AVG_ROW_LENGTH\", \"BACKUP\", \"BEFORE\",\r\n        \"BEGIN\", \"BETWEEN\", \"BIGINT\", \"BINARY\", \"BINLOG\", \"BIT\", \"BLOB\", \"BLOCK\", \"BOOL\", \"BOOLEAN\", \"BOTH\", \"BTREE\", \"BY\", \"BYTE\", \"CACHE\", \"CALL\",\r\n        \"CASCADE\", \"CASCADED\", \"CASE\", \"CATALOG_NAME\", \"CHAIN\", \"CHANGE\", \"CHANGED\", \"CHANNEL\", \"CHAR\", \"CHARACTER\", \"CHARSET\", \"CHECK\", \"CHECKSUM\",\r\n        \"CIPHER\", \"CLASS_ORIGIN\", \"CLIENT\", \"CLOSE\", \"COALESCE\", \"CODE\", \"COLLATE\", \"COLLATION\", \"COLUMN\", \"COLUMNS\", \"COLUMN_FORMAT\", \"COLUMN_NAME\",\r\n        \"COMMENT\", \"COMMIT\", \"COMMITTED\", \"COMPACT\", \"COMPLETION\", \"COMPRESSED\", \"COMPRESSION\", \"CONCURRENT\", \"CONDITION\", \"CONNECTION\", \"CONSISTENT\",\r\n        \"CONSTRAINT\", \"CONSTRAINT_CATALOG\", \"CONSTRAINT_NAME\", \"CONSTRAINT_SCHEMA\", \"CONTAINS\", \"CONTEXT\", \"CONTINUE\", \"CONVERT\", \"CPU\", \"CREATE\",\r\n        \"CROSS\", \"CUBE\", \"CURRENT\", \"CURRENT_DATE\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_USER\", \"CURSOR\", \"CURSOR_NAME\", \"DATA\", \"DATABASE\",\r\n        \"DATABASES\", \"DATAFILE\", \"DATE\", \"DATETIME\", \"DAY\", \"DAY_HOUR\", \"DAY_MICROSECOND\", \"DAY_MINUTE\", \"DAY_SECOND\", \"DEALLOCATE\", \"DEC\", \"DECIMAL\",\r\n        \"DECLARE\", \"DEFAULT\", \"DEFAULT_AUTH\", \"DEFINER\", \"DELAYED\", \"DELAY_KEY_WRITE\", \"DELETE\", \"DESC\", \"DESCRIBE\", \"DES_KEY_FILE\", \"DETERMINISTIC\",\r\n        \"DIAGNOSTICS\", \"DIRECTORY\", \"DISABLE\", \"DISCARD\", \"DISK\", \"DISTINCT\", \"DISTINCTROW\", \"DIV\", \"DO\", \"DOUBLE\", \"DROP\", \"DUAL\", \"DUMPFILE\",\r\n        \"DUPLICATE\", \"DYNAMIC\", \"EACH\", \"ELSE\", \"ELSEIF\", \"ENABLE\", \"ENCLOSED\", \"ENCRYPTION\", \"END\", \"ENDS\", \"ENGINE\", \"ENGINES\", \"ENUM\", \"ERROR\",\r\n        \"ERRORS\", \"ESCAPE\", \"ESCAPED\", \"EVENT\", \"EVENTS\", \"EVERY\", \"EXCHANGE\", \"EXECUTE\", \"EXISTS\", \"EXIT\", \"EXPANSION\", \"EXPIRE\", \"EXPLAIN\", \"EXPORT\",\r\n        \"EXTENDED\", \"EXTENT_SIZE\", \"FALSE\", \"FAST\", \"FAULTS\", \"FETCH\", \"FIELDS\", \"FILE\", \"FILE_BLOCK_SIZE\", \"FILTER\", \"FIRST\", \"FIXED\", \"FLOAT\", \"FLOAT4\",\r\n        \"FLOAT8\", \"FLUSH\", \"FOLLOWS\", \"FOR\", \"FORCE\", \"FOREIGN\", \"FORMAT\", \"FOUND\", \"FROM\", \"FULL\", \"FULLTEXT\", \"FUNCTION\", \"GENERAL\", \"GENERATED\",\r\n        \"GEOMETRY\", \"GEOMETRYCOLLECTION\", \"GET\", \"GET_FORMAT\", \"GLOBAL\", \"GRANT\", \"GRANTS\", \"GROUP\", \"GROUP_REPLICATION\", \"HANDLER\", \"HASH\", \"HAVING\",\r\n        \"HELP\", \"HIGH_PRIORITY\", \"HOST\", \"HOSTS\", \"HOUR\", \"HOUR_MICROSECOND\", \"HOUR_MINUTE\", \"HOUR_SECOND\", \"IDENTIFIED\", \"IF\", \"IGNORE\", \"IGNORE_SERVER_IDS\",\r\n        \"IMPORT\", \"INDEX\", \"INDEXES\", \"INFILE\", \"INITIAL_SIZE\", \"INNER\", \"INOUT\", \"INSENSITIVE\", \"INSERT\", \"INSERT_METHOD\", \"INSTALL\", \"INSTANCE\",\r\n        \"INT\", \"INT1\", \"INT2\", \"INT3\", \"INT4\", \"INT8\", \"INTEGER\", \"INTERVAL\", \"INTO\", \"INVOKER\", \"IO\", \"IO_AFTER_GTIDS\", \"IO_BEFORE_GTIDS\", \"IO_THREAD\",\r\n        \"IPC\", \"ISOLATION\", \"ISSUER\", \"ITERATE\", \"JOIN\", \"JSON\", \"KEY\", \"KEYS\", \"KEY_BLOCK_SIZE\", \"KILL\", \"LANGUAGE\", \"LAST\", \"LEADING\", \"LEAVE\",\r\n        \"LEAVES\", \"LEFT\", \"LESS\", \"LEVEL\", \"LIKE\", \"LIMIT\", \"LINEAR\", \"LINES\", \"LINESTRING\", \"LIST\", \"LOAD\", \"LOCAL\", \"LOCALTIME\", \"LOCALTIMESTAMP\", \"LOCK\",\r\n        \"LOCKS\", \"LOGFILE\", \"LOGS\", \"LONG\", \"LONGBLOB\", \"LONGTEXT\", \"LOOP\", \"LOW_PRIORITY\", \"MASTER\", \"MASTER_AUTO_POSITION\", \"MASTER_BIND\", \"MASTER_CONNECT_RETRY\",\r\n        \"MASTER_DELAY\", \"MASTER_HEARTBEAT_PERIOD\", \"MASTER_HOST\", \"MASTER_LOG_FILE\", \"MASTER_LOG_POS\", \"MASTER_PASSWORD\", \"MASTER_PORT\", \"MASTER_RETRY_COUNT\",\r\n        \"MASTER_SERVER_ID\", \"MASTER_SSL\", \"MASTER_SSL_CA\", \"MASTER_SSL_CAPATH\", \"MASTER_SSL_CERT\", \"MASTER_SSL_CIPHER\", \"MASTER_SSL_CRL\", \"MASTER_SSL_CRLPATH\",\r\n        \"MASTER_SSL_KEY\", \"MASTER_SSL_VERIFY_SERVER_CERT\", \"MASTER_TLS_VERSION\", \"MASTER_USER\", \"MATCH\", \"MAXVALUE\", \"MAX_CONNECTIONS_PER_HOUR\", \"MAX_QUERIES_PER_HOUR\",\r\n        \"MAX_ROWS\", \"MAX_SIZE\", \"MAX_STATEMENT_TIME\", \"MAX_UPDATES_PER_HOUR\", \"MAX_USER_CONNECTIONS\", \"MEDIUM\", \"MEDIUMBLOB\", \"MEDIUMINT\", \"MEDIUMTEXT\", \"MEMORY\",\r\n        \"MERGE\", \"MESSAGE_TEXT\", \"MICROSECOND\", \"MIDDLEINT\", \"MIGRATE\", \"MINUTE\", \"MINUTE_MICROSECOND\", \"MINUTE_SECOND\", \"MIN_ROWS\", \"MOD\", \"MODE\", \"MODIFIES\",\r\n        \"MODIFY\", \"MONTH\", \"MULTILINESTRING\", \"MULTIPOINT\", \"MULTIPOLYGON\", \"MUTEX\", \"MYSQL_ERRNO\", \"NAME\", \"NAMES\", \"NATIONAL\", \"NATURAL\", \"NCHAR\", \"NDB\",\r\n        \"NDBCLUSTER\", \"NEVER\", \"NEW\", \"NEXT\", \"NO\", \"NODEGROUP\", \"NONBLOCKING\", \"NONE\", \"NO_WAIT\", \"NO_WRITE_TO_BINLOG\", \"NUMBER\", \"NUMERIC\",\r\n        \"NVARCHAR\", \"OFFSET\", \"OLD_PASSWORD\", \"ON\", \"ONE\", \"ONLY\", \"OPEN\", \"OPTIMIZE\", \"OPTIMIZER_COSTS\", \"OPTION\", \"OPTIONALLY\", \"OPTIONS\", \"OR\", \"ORDER\",\r\n        \"OUT\", \"OUTER\", \"OUTFILE\", \"OWNER\", \"PACK_KEYS\", \"PAGE\", \"PARSER\", \"PARSE_GCOL_EXPR\", \"PARTIAL\", \"PARTITION\", \"PARTITIONING\", \"PARTITIONS\", \"PASSWORD\",\r\n        \"PHASE\", \"PLUGIN\", \"PLUGINS\", \"PLUGIN_DIR\", \"POINT\", \"POLYGON\", \"PORT\", \"PRECEDES\", \"PRECISION\", \"PREPARE\", \"PRESERVE\", \"PREV\", \"PRIMARY\", \"PRIVILEGES\",\r\n        \"PROCEDURE\", \"PROCESSLIST\", \"PROFILE\", \"PROFILES\", \"PROXY\", \"PURGE\", \"QUARTER\", \"QUERY\", \"QUICK\", \"RANGE\", \"READ\", \"READS\", \"READ_ONLY\", \"READ_WRITE\",\r\n        \"REAL\", \"REBUILD\", \"RECOVER\", \"REDOFILE\", \"REDO_BUFFER_SIZE\", \"REDUNDANT\", \"REFERENCES\", \"REGEXP\", \"RELAY\", \"RELAYLOG\", \"RELAY_LOG_FILE\", \"RELAY_LOG_POS\",\r\n        \"RELAY_THREAD\", \"RELEASE\", \"RELOAD\", \"REMOVE\", \"RENAME\", \"REORGANIZE\", \"REPAIR\", \"REPEAT\", \"REPEATABLE\", \"REPLACE\", \"REPLICATE_DO_DB\", \"REPLICATE_DO_TABLE\",\r\n        \"REPLICATE_IGNORE_DB\", \"REPLICATE_IGNORE_TABLE\", \"REPLICATE_REWRITE_DB\", \"REPLICATE_WILD_DO_TABLE\", \"REPLICATE_WILD_IGNORE_TABLE\", \"REPLICATION\", \"REQUIRE\",\r\n        \"RESET\", \"RESIGNAL\", \"RESTORE\", \"RESTRICT\", \"RESUME\", \"RETURN\", \"RETURNED_SQLSTATE\", \"RETURNS\", \"REVERSE\", \"REVOKE\", \"RIGHT\", \"RLIKE\", \"ROLLBACK\", \"ROLLUP\",\r\n        \"ROTATE\", \"ROUTINE\", \"ROW\", \"ROWS\", \"ROW_COUNT\", \"ROW_FORMAT\", \"RTREE\", \"SAVEPOINT\", \"SCHEDULE\", \"SCHEMA\", \"SCHEMAS\", \"SCHEMA_NAME\", \"SECOND\", \"SECOND_MICROSECOND\",\r\n        \"SECURITY\", \"SELECT\", \"SENSITIVE\", \"SEPARATOR\", \"SERIAL\", \"SERIALIZABLE\", \"SERVER\", \"SESSION\", \"SET\", \"SHARE\", \"SHOW\", \"SHUTDOWN\", \"SIGNAL\", \"SIGNED\", \"SIMPLE\",\r\n        \"SLAVE\", \"SLOW\", \"SMALLINT\", \"SNAPSHOT\", \"SOCKET\", \"SOME\", \"SONAME\", \"SOUNDS\", \"SOURCE\", \"SPATIAL\", \"SPECIFIC\", \"SQL\", \"SQLEXCEPTION\", \"SQLSTATE\", \"SQLWARNING\",\r\n        \"SQL_AFTER_GTIDS\", \"SQL_AFTER_MTS_GAPS\", \"SQL_BEFORE_GTIDS\", \"SQL_BIG_RESULT\", \"SQL_BUFFER_RESULT\", \"SQL_CACHE\", \"SQL_CALC_FOUND_ROWS\", \"SQL_NO_CACHE\",\r\n        \"SQL_SMALL_RESULT\", \"SQL_THREAD\", \"SQL_TSI_DAY\", \"SQL_TSI_HOUR\", \"SQL_TSI_MINUTE\", \"SQL_TSI_MONTH\", \"SQL_TSI_QUARTER\", \"SQL_TSI_SECOND\", \"SQL_TSI_WEEK\",\r\n        \"SQL_TSI_YEAR\", \"SSL\", \"STACKED\", \"START\", \"STARTING\", \"STARTS\", \"STATS_AUTO_RECALC\", \"STATS_PERSISTENT\", \"STATS_SAMPLE_PAGES\", \"STATUS\", \"STOP\", \"STORAGE\",\r\n        \"STORED\", \"STRAIGHT_JOIN\", \"STRING\", \"SUBCLASS_ORIGIN\", \"SUBJECT\", \"SUBPARTITION\", \"SUBPARTITIONS\", \"SUPER\", \"SUSPEND\", \"SWAPS\", \"SWITCHES\", \"TABLE\", \"TABLES\",\r\n        \"TABLESPACE\", \"TABLE_CHECKSUM\", \"TABLE_NAME\", \"TEMPORARY\", \"TEMPTABLE\", \"TERMINATED\", \"TEXT\", \"THAN\", \"THEN\", \"TIME\", \"TIMESTAMP\", \"TIMESTAMPADD\", \"TIMESTAMPDIFF\",\r\n        \"TINYBLOB\", \"TINYINT\", \"TINYTEXT\", \"TO\", \"TRAILING\", \"TRANSACTION\", \"TRIGGER\", \"TRIGGERS\", \"TRUE\", \"TRUNCATE\", \"TYPE\", \"TYPES\", \"UNCOMMITTED\", \"UNDEFINED\", \"UNDO\",\r\n        \"UNDOFILE\", \"UNDO_BUFFER_SIZE\", \"UNICODE\", \"UNINSTALL\", \"UNION\", \"UNIQUE\", \"UNKNOWN\", \"UNLOCK\", \"UNSIGNED\", \"UNTIL\", \"UPDATE\", \"UPGRADE\", \"USAGE\", \"USE\", \"USER\",\r\n        \"USER_RESOURCES\", \"USE_FRM\", \"USING\", \"UTC_DATE\", \"UTC_TIME\", \"UTC_TIMESTAMP\", \"VALIDATION\", \"VALUE\", \"VALUES\", \"VARBINARY\", \"VARCHAR\", \"VARCHARACTER\", \"VARIABLES\",\r\n        \"VARYING\", \"VIEW\", \"VIRTUAL\", \"WAIT\", \"WARNINGS\", \"WEEK\", \"WEIGHT_STRING\", \"WHEN\", \"WHERE\", \"WHILE\", \"WITH\", \"WITHOUT\", \"WORK\", \"WRAPPER\", \"WRITE\", \"X509\", \"XA\",\r\n        \"XID\", \"XML\", \"XOR\", \"YEAR\", \"YEAR_MONTH\", \"ZEROFILL\"\r\n    ],\r\n    operators: [\r\n        \"AND\", \"BETWEEN\", \"IN\", \"LIKE\", \"NOT\", \"OR\", \"IS\", \"NULL\", \"INTERSECT\", \"UNION\", \"INNER\", \"JOIN\", \"LEFT\", \"OUTER\", \"RIGHT\"\r\n    ],\r\n    builtinFunctions: [\r\n        \"ABS\", \"ACOS\", \"ADDDATE\", \"ADDTIME\", \"AES_DECRYPT\", \"AES_ENCRYPT\", \"ANY_VALUE\", \"Area\", \"AsBinary\", \"AsWKB\", \"ASCII\", \"ASIN\",\r\n        \"AsText\", \"AsWKT\", \"ASYMMETRIC_DECRYPT\", \"ASYMMETRIC_DERIVE\", \"ASYMMETRIC_ENCRYPT\", \"ASYMMETRIC_SIGN\", \"ASYMMETRIC_VERIFY\",\r\n        \"ATAN\", \"ATAN2\", \"ATAN\", \"AVG\", \"BENCHMARK\", \"BIN\", \"BIT_AND\", \"BIT_COUNT\", \"BIT_LENGTH\", \"BIT_OR\", \"BIT_XOR\", \"Buffer\", \"CAST\",\r\n        \"CEIL\", \"CEILING\", \"Centroid\", \"CHAR\", \"CHAR_LENGTH\", \"CHARACTER_LENGTH\", \"CHARSET\", \"COALESCE\", \"COERCIBILITY\", \"COLLATION\",\r\n        \"COMPRESS\", \"CONCAT\", \"CONCAT_WS\", \"CONNECTION_ID\", \"Contains\", \"CONV\", \"CONVERT\", \"CONVERT_TZ\", \"ConvexHull\", \"COS\", \"COT\",\r\n        \"COUNT\", \"CRC32\", \"CREATE_ASYMMETRIC_PRIV_KEY\", \"CREATE_ASYMMETRIC_PUB_KEY\", \"CREATE_DH_PARAMETERS\", \"CREATE_DIGEST\", \"Crosses\",\r\n        \"CURDATE\", \"CURRENT_DATE\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_USER\", \"CURTIME\", \"DATABASE\", \"DATE\", \"DATE_ADD\",\r\n        \"DATE_FORMAT\", \"DATE_SUB\", \"DATEDIFF\", \"DAY\", \"DAYNAME\", \"DAYOFMONTH\", \"DAYOFWEEK\", \"DAYOFYEAR\", \"DECODE\", \"DEFAULT\", \"DEGREES\",\r\n        \"DES_DECRYPT\", \"DES_ENCRYPT\", \"Dimension\", \"Disjoint\", \"Distance\", \"ELT\", \"ENCODE\", \"ENCRYPT\", \"EndPoint\", \"Envelope\", \"Equals\",\r\n        \"EXP\", \"EXPORT_SET\", \"ExteriorRing\", \"EXTRACT\", \"ExtractValue\", \"FIELD\", \"FIND_IN_SET\", \"FLOOR\", \"FORMAT\", \"FOUND_ROWS\", \"FROM_BASE64\",\r\n        \"FROM_DAYS\", \"FROM_UNIXTIME\", \"GeomCollFromText\", \"GeometryCollectionFromText\", \"GeomCollFromWKB\", \"GeometryCollectionFromWKB\",\r\n        \"GeometryCollection\", \"GeometryN\", \"GeometryType\", \"GeomFromText\", \"GeometryFromText\", \"GeomFromWKB\", \"GeometryFromWKB\", \"GET_FORMAT\",\r\n        \"GET_LOCK\", \"GLength\", \"GREATEST\", \"GROUP_CONCAT\", \"GTID_SUBSET\", \"GTID_SUBTRACT\", \"HEX\", \"HOUR\", \"IF\", \"IFNULL\", \"INET_ATON\",\r\n        \"INET_NTOA\", \"INET6_ATON\", \"INET6_NTOA\", \"INSERT\", \"INSTR\", \"InteriorRingN\", \"Intersects\", \"INTERVAL\", \"IS_FREE_LOCK\", \"IS_IPV4\",\r\n        \"IS_IPV4_COMPAT\", \"IS_IPV4_MAPPED\", \"IS_IPV6\", \"IS_USED_LOCK\", \"IsClosed\", \"IsEmpty\", \"ISNULL\", \"IsSimple\", \"JSON_APPEND\", \"JSON_ARRAY\",\r\n        \"JSON_ARRAY_APPEND\", \"JSON_ARRAY_INSERT\", \"JSON_CONTAINS\", \"JSON_CONTAINS_PATH\", \"JSON_DEPTH\", \"JSON_EXTRACT\", \"JSON_INSERT\", \"JSON_KEYS\",\r\n        \"JSON_LENGTH\", \"JSON_MERGE\", \"JSON_MERGE_PRESERVE\", \"JSON_OBJECT\", \"JSON_QUOTE\", \"JSON_REMOVE\", \"JSON_REPLACE\", \"JSON_SEARCH\", \"JSON_SET\",\r\n        \"JSON_TYPE\", \"JSON_UNQUOTE\", \"JSON_VALID\", \"LAST_INSERT_ID\", \"LCASE\", \"LEAST\", \"LEFT\", \"LENGTH\", \"LineFromText\", \"LineStringFromText\",\r\n        \"LineFromWKB\", \"LineStringFromWKB\", \"LineString\", \"LN\", \"LOAD_FILE\", \"LOCALTIME\", \"LOCALTIMESTAMP\", \"LOCATE\", \"LOG\", \"LOG10\", \"LOG2\",\r\n        \"LOWER\", \"LPAD\", \"LTRIM\", \"MAKE_SET\", \"MAKEDATE\", \"MAKETIME\", \"MASTER_POS_WAIT\", \"MAX\", \"MBRContains\", \"MBRCoveredBy\", \"MBRCovers\",\r\n        \"MBRDisjoint\", \"MBREqual\", \"MBREquals\", \"MBRIntersects\", \"MBROverlaps\", \"MBRTouches\", \"MBRWithin\", \"MD5\", \"MICROSECOND\", \"MID\",\r\n        \"MIN\", \"MINUTE\", \"MLineFromText\", \"MultiLineStringFromText\", \"MLineFromWKB\", \"MultiLineStringFromWKB\", \"MOD\", \"MONTH\", \"MONTHNAME\",\r\n        \"MPointFromText\", \"MultiPointFromText\", \"MPointFromWKB\", \"MultiPointFromWKB\", \"MPolyFromText\", \"MultiPolygonFromText\", \"MPolyFromWKB\",\r\n        \"MultiPolygonFromWKB\", \"MultiLineString\", \"MultiPoint\", \"MultiPolygon\", \"NAME_CONST\", \"NOT IN\", \"NOW\", \"NULLIF\", \"NumGeometries\",\r\n        \"NumInteriorRings\", \"NumPoints\", \"OCT\", \"OCTET_LENGTH\", \"OLD_PASSWORD\", \"ORD\", \"Overlaps\", \"PASSWORD\", \"PERIOD_ADD\", \"PERIOD_DIFF\",\r\n        \"PI\", \"Point\", \"PointFromText\", \"PointFromWKB\", \"PointN\", \"PolyFromText\", \"PolygonFromText\", \"PolyFromWKB\", \"PolygonFromWKB\", \"Polygon\",\r\n        \"POSITION\", \"POW\", \"POWER\", \"PROCEDURE ANALYSE\", \"QUARTER\", \"QUOTE\", \"RADIANS\", \"RAND\", \"RANDOM_BYTES\", \"RELEASE_ALL_LOCKS\", \"RELEASE_LOCK\",\r\n        \"REPEAT\", \"REPLACE\", \"REVERSE\", \"RIGHT\", \"ROUND\", \"ROW_COUNT\", \"RPAD\", \"RTRIM\", \"SCHEMA\", \"SEC_TO_TIME\", \"SECOND\", \"SESSION_USER\", \"SHA1\",\r\n        \"SHA\", \"SHA2\", \"SIGN\", \"SIN\", \"SLEEP\", \"SOUNDEX\", \"SPACE\", \"SQRT\", \"SRID\", \"ST_Area\", \"ST_AsBinary\", \"ST_AsWKB\", \"ST_AsGeoJSON\", \"ST_AsText\",\r\n        \"ST_AsWKT\", \"ST_Buffer\", \"ST_Buffer_Strategy\", \"ST_Centroid\", \"ST_Contains\", \"ST_ConvexHull\", \"ST_Crosses\", \"ST_Difference\", \"ST_Dimension\",\r\n        \"ST_Disjoint\", \"ST_Distance\", \"ST_Distance_Sphere\", \"ST_EndPoint\", \"ST_Envelope\", \"ST_Equals\", \"ST_ExteriorRing\", \"ST_GeoHash\",\r\n        \"ST_GeomCollFromText\", \"ST_GeometryCollectionFromText\", \"ST_GeomCollFromTxt\", \"ST_GeomCollFromWKB\", \"ST_GeometryCollectionFromWKB\",\r\n        \"ST_GeometryN\", \"ST_GeometryType\", \"ST_GeomFromGeoJSON\", \"ST_GeomFromText\", \"ST_GeometryFromText\", \"ST_GeomFromWKB\", \"ST_GeometryFromWKB\",\r\n        \"ST_InteriorRingN\", \"ST_Intersection\", \"ST_Intersects\", \"ST_IsClosed\", \"ST_IsEmpty\", \"ST_IsSimple\", \"ST_IsValid\", \"ST_LatFromGeoHash\",\r\n        \"ST_Length\", \"ST_LineFromText\", \"ST_LineStringFromText\", \"ST_LineFromWKB\", \"ST_LineStringFromWKB\", \"ST_LongFromGeoHash\", \"ST_MakeEnvelope\",\r\n        \"ST_MLineFromText\", \"ST_MultiLineStringFromText\", \"ST_MLineFromWKB\", \"ST_MultiLineStringFromWKB\", \"ST_MPointFromText\", \"ST_MultiPointFromText\",\r\n        \"ST_MPointFromWKB\", \"ST_MultiPointFromWKB\", \"ST_MPolyFromText\", \"ST_MultiPolygonFromText\", \"ST_MPolyFromWKB\", \"ST_MultiPolygonFromWKB\",\r\n        \"ST_NumGeometries\", \"ST_NumInteriorRing\", \"ST_NumInteriorRings\", \"ST_NumPoints\", \"ST_Overlaps\", \"ST_PointFromGeoHash\", \"ST_PointFromText\",\r\n        \"ST_PointFromWKB\", \"ST_PointN\", \"ST_PolyFromText\", \"ST_PolygonFromText\", \"ST_PolyFromWKB\", \"ST_PolygonFromWKB\", \"ST_Simplify\", \"ST_SRID\",\r\n        \"ST_StartPoint\", \"ST_SymDifference\", \"ST_Touches\", \"ST_Union\", \"ST_Validate\", \"ST_Within\", \"ST_X\", \"ST_Y\", \"StartPoint\", \"STD\", \"STDDEV\",\r\n        \"STDDEV_POP\", \"STDDEV_SAMP\", \"STR_TO_DATE\", \"STRCMP\", \"SUBDATE\", \"SUBSTR\", \"SUBSTRING\", \"SUBSTRING_INDEX\", \"SUBTIME\", \"SUM\", \"SYSDATE\",\r\n        \"SYSTEM_USER\", \"TAN\", \"TIME\", \"TIME_FORMAT\", \"TIME_TO_SEC\", \"TIMEDIFF\", \"TIMESTAMP\", \"TIMESTAMPADD\", \"TIMESTAMPDIFF\", \"TO_BASE64\", \"TO_DAYS\",\r\n        \"TO_SECONDS\", \"Touches\", \"TRIM\", \"TRUNCATE\", \"UCASE\", \"UNCOMPRESS\", \"UNCOMPRESSED_LENGTH\", \"UNHEX\", \"UNIX_TIMESTAMP\", \"UpdateXML\", \"UPPER\",\r\n        \"USER\", \"UTC_DATE\", \"UTC_TIME\", \"UTC_TIMESTAMP\", \"UUID\", \"UUID_SHORT\", \"VALIDATE_PASSWORD_STRENGTH\", \"VALUES\", \"VAR_POP\", \"VAR_SAMP\", \"VARIANCE\",\r\n        \"VERSION\", \"WAIT_FOR_EXECUTED_GTID_SET\", \"WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS\", \"WEEK\", \"WEEKDAY\", \"WEEKOFYEAR\", \"WEIGHT_STRING\", \"Within\",\r\n        \"X\", \"Y\", \"YEAR\", \"YEARWEEK\"\r\n    ],\r\n    builtinVariables: [\r\n    // NOT SUPPORTED\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@comments' },\r\n            { include: '@whitespace' },\r\n            { include: '@numbers' },\r\n            { include: '@strings' },\r\n            { include: '@complexIdentifiers' },\r\n            { include: '@scopes' },\r\n            [/[;,.]/, 'delimiter'],\r\n            [/[()]/, '@brackets'],\r\n            [/[\\w@]+/, {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@operators': 'operator',\r\n                        '@builtinVariables': 'predefined',\r\n                        '@builtinFunctions': 'predefined',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }],\r\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\r\n        ],\r\n        whitespace: [\r\n            [/\\s+/, 'white']\r\n        ],\r\n        comments: [\r\n            [/--+.*/, 'comment'],\r\n            [/#+.*/, 'comment'],\r\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\r\n        ],\r\n        comment: [\r\n            [/[^*/]+/, 'comment'],\r\n            // Not supporting nested comments, as nested comments seem to not be standard?\r\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\r\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\r\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\r\n            [/./, 'comment']\r\n        ],\r\n        numbers: [\r\n            [/0[xX][0-9a-fA-F]*/, 'number'],\r\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\r\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\r\n        ],\r\n        strings: [\r\n            [/'/, { token: 'string', next: '@string' }],\r\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\r\n        ],\r\n        string: [\r\n            [/[^']+/, 'string'],\r\n            [/''/, 'string'],\r\n            [/'/, { token: 'string', next: '@pop' }],\r\n        ],\r\n        stringDouble: [\r\n            [/[^\"]+/, 'string.double'],\r\n            [/\"\"/, 'string.double'],\r\n            [/\"/, { token: 'string.double', next: '@pop' }]\r\n        ],\r\n        complexIdentifiers: [\r\n            [/`/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\r\n        ],\r\n        quotedIdentifier: [\r\n            [/[^`]+/, 'identifier'],\r\n            [/``/, 'identifier'],\r\n            [/`/, { token: 'identifier.quote', next: '@pop' }]\r\n        ],\r\n        scopes: [\r\n        // NOT SUPPORTED\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js?");

/***/ })

}]);