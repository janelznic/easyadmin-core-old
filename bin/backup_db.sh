#!/bin/bash
#
# Make development MySQL dump to files
# ------------------------------------
# 
# * Target files are located in db/dev/*.sql
#


# Get source directory
source _get_source_dir.sh


# Read installation input values
source $SOURCE/config/.env


# Set up datetime format
DATETIME=$(date '+%Y-%m-%d_%H-%M-%S')


# Paths
DB_DIR="$SOURCE/db/mysql/backup"
BACKUP_FILE="backup_${DATETIME}_${MYSQL_DBNAME}.sql"

echo $BACKUP_FILE

# Directories and files
echo "Preparing backup directory..."
mkdir -p $DB_DIR


# Dump
echo "Dumping MySQL database backup into the file..."
mysqldump -u $DB_USERNAME -p$DB_PASSWORD --databases $DB_DATABASE > $DB_DIR/$BACKUP_FILE --no-create-db --skip-add-locks


# Finish
echo "MySQL backup dump is complete. File saved in:"
echo $DB_DIR/$BACKUP_FILE
