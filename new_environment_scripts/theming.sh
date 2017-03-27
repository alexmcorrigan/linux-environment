#!/bin/bash

git clone https://github.com/chriskempson/base16-shell.git ~/.config/base16-shell

mkdir -p ~/.vim/colors
cd ~/.vim/colors
git clone git://github.com/chriskempson/base16-vim.git base16
cp base16/colors/*.vim .

