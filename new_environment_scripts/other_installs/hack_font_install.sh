#!/bin/bash

echo '  - hack font'

VERSION='2_020'
FILENAME="Hack-v${VERSION}-ttf.zip"

https://github.com/chrissimpkins/Hack/releases/download/v2.020/$FILENAME
wget https://github.com/chrissimpkins/Hack/releases/download/v2.020/$FILENAME -P ~/tmp/

pushd ~/tmp/
unzip $FILENAME
sudo cp *.ttf /usr/share/fonts
sudo fc-cache -fv
rm *.ttf
rm $FILENAME
popd

