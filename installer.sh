#!/bin/bash

REPO_URL="https://github.com/aspanel/aspanel.git"
INSTALL_DIR="/opt/aspanel"

if ! command -v git &> /dev/null; then
    sudo apt-get install git -Y
fi


display_usage() {
    echo "Usage: $0 [--uninstall]     -> Removes aspanel and all of the dependencies installed during the installation process."
}

install() {
    while true; do
        read -p "Make sure aspanel is not already installed otherwise new installation may break the system configuration. Do you want to proceed? (y/n): " yn
        case $yn in
        [Yy]*)
            sudo mkdir -p $INSTALL_DIR
            sudo git clone $REPO_URL $INSTALL_DIR
            break
            ;;
        [Nn]*)
            echo "Aborting the installation of aspanel"
            exit
            ;;
        *)
            echo "Please answer 'yes' or 'no'."
            ;;
        esac
    done

    # sudo chmod -R +x /opt/aspanel/tasks
    # sudo /bin/bash -c "source /opt/aspanel/tasks/dependencies/node/install.sh"
    # sudo /bin/bash -c "source /opt/aspanel/tasks/creations/conf.service.sh"
}

uninstall() {
    while true; do
        read -p "Are you sure you want to uninstall aspanel ? This action is destructive. It will uninstall all the packages and dependencies that aspanel installed. Do you want to proceed? (y/n): " yn
        case $yn in
        [Yy]*)
            echo "Removing aspanel project"
            sudo rm -rf /opt/aspanel
            echo "Removed project"
            break
            ;;
        [Nn]*)
            echo "Thanks for using aspanel."
            exit
            ;;
        *)
            echo "Please answer 'yes' or 'no'."
            ;;
        esac
    done
}

if [ "$1" == "--help" ]; then
    display_usage
    exit 1
fi

if [ "$1" == "--uninstall" ]; then
    uninstall
else
    install
fi
