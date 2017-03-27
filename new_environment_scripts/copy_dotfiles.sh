#!/bin/bash

pushd dotFiles > /dev/null
cp .vimrc ~
cp .zshrc ~
cp .tmux.conf ~
cp -r .tmux/ ~
popd > /dev/null
