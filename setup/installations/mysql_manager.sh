#!/bin/bash

# Function to install the MySQL server
function install_mysql() {
#   echo "Enter username for the root user:"
#   read root_username
  echo "Enter a strong password for the root user:"
  read root_user_password

  sudo apt install mysql-server -y
  sudo mysql_secure_installation --password=$root_user_password
  sudo systemctl start mysqld
}

# Function to uninstall the MySQL server
function uninstall_mysql() {
  sudo apt remove mysql-server
  sudo systemctl stop mysqld
}

# Function to create a new database
function create_database() {
  local database_name=$1

  sudo mysql -u root -p -e "CREATE DATABASE $database_name"
}

# Function to delete a database
function delete_database() {
  local database_name=$1

  sudo mysql -u root -p -e "DROP DATABASE $database_name"
}

# Function to create a new user
function create_user() {
  local username=$1
  local password=$2

  sudo mysql -u root -p -e "CREATE USER '$username'@'localhost' IDENTIFIED BY '$password'"
}

# Function to grant privileges to a user
function grant_privileges() {
  local username=$1
  local database_name=$2
  local privileges=$3

  sudo mysql -u root -p -e "GRANT $privileges ON $database_name.* TO '$username'@'localhost'"
}

# Function to revoke privileges from a user
function revoke_privileges() {
  local username=$1
  local database_name=$2
  local privileges=$3

  sudo mysql -u root -p -e "REVOKE $privileges ON $database_name.* FROM '$username'@'localhost'"
}

# Function to print the usage message
function print_usage() {
  echo "Usage: mysql_manager.sh [command]"
  echo ""
  echo "Commands:"
  echo "  install: Install the MySQL server"
  echo "  uninstall: Uninstall the MySQL server"
  echo "  create_database: Create a new database"
  echo "  delete_database: Delete a database"
  echo "  create_user: Create a new user"
  echo "  grant_privileges: Grant privileges to a user"
  echo "  revoke_privileges: Revoke privileges from a user"
}

# Main function
main() {
  if [ $# -eq 0 ]; then
    print_usage
    exit 1
  fi

  local command=$1

  case $command in
    install)
      install_mysql
      ;;
    uninstall)
      uninstall_mysql
      ;;
    create_database)
      create_database $2
      ;;
    delete_database)
      delete_database $2
      ;;
    create_user)
      create_user $2 $3
      ;;
    grant_privileges)
      grant_privileges $2 $3 $4
      ;;
    revoke_privileges)
      revoke_privileges $2 $3 $4
      ;;
    *)
      echo "Invalid command: $command"
      print_usage
      exit 1
      ;;
  esac
}

# Call the main function
main $@