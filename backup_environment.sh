#!/bin/bash

echo 'Backing Up Current Environment'

SCRIPTS_DIR='./backup_environment_scripts'

run_script() {
    echo "  - $1"
    $SCRIPTS_DIR/$1.sh
}

run_script backup_dotfiles
run_script backup_home_scripts
run_script backup_others

echo "All Done."
