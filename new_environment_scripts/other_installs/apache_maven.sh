#!/bin/bash

echo '  - apache maven'

VERSION='3.5.0'
FILENAME="apache-maven-${VERSION}-bin.tar.gz"

URL="http://mirrors.ukfast.co.uk/sites/ftp.apache.org/maven/maven-3/${VERSION}/binaries/${FILENAME}"

wget --quiet $URL -P ~/tmp/

pushd ~/tmp/
tar -xvf $FILENAME
mv apache-maven-${VERSION} ~/devTools
rm $FILENAME
popd

pushd ~/devTools
ln -s apache-maven-${VERSION} maven
popd
