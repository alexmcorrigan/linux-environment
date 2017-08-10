#!/bin/bash

CLI_PACKAGES=( vim zsh wget curl tidy tmux unzip openssh-client cowsays )
LEKTOR_DEPENDENCIES=( build-essential python-dev libssl-dev libffi-dev imagemagick )

install_package() {
    echo "          - $1"
    sudo apt-get -f -m -qq -y install $1
}

install_package_group() {
    GROUP=("${!1}")
    for PACKAGE in ${GROUP[@]}
    do
        install_package $PACKAGE
    done 
}

echo '      - CLI Packages'
install_package_group CLI_PACKAGES[@]
install_package_group LEKTOR_DEPENDENCIES[@]
