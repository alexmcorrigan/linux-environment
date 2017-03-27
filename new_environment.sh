#!/bin/bash

echo 'Running setup for new environment'

SCRIPTS_DIR='./new_environment_scripts'

run_script() {
    echo "  - $1"
    ./$SCRIPTS_DIR/$1.sh
}

run_script update
run_script filesystem
run_script package_installs
run_script configure_shell
run_script theming
run_script clean_up
run_script copy_dotfiles

echo "All Done."
echo "Restarting system..."
sudo shutdown -r 0
