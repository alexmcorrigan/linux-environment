#!/bin/bash

echo '  - intellij'

VERSION='2017.2'
BUILD_NO='172.3317.76'

FILENAME="ideaIU-${VERSION}.tar.gz"
BUILD_DIR="idea-IU-${BUILD_NO}"

URL="https://download.jetbrains.com/idea/${FILENAME}"

wget --quiet $URL -P ~/tmp/

pushd ~/tmp/
tar -xvf $FILENAME
sudo mkdir /opt/jetbrains
mv $BUILD_DIR /opt/jetbrains
rm $FILENAME
popd

pushd /opt/jetbrains
sudo ln -s $BUILD_DIR intellij
popd
