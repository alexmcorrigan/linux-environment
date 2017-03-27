#!/bin/bash

echo '  - node'
NODE_VERSION='4.5.0'
NODE_FILENAME="node-v4.5.0-linux-x86"

wget https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x86.tar.xz -P ~/devTools/

pushd ~/devTools/
tar -xf ${NODE_FILENAME}.tar.xz
ln -s ${NODE_FILENAME} node
rm ${NODE_FILENAME}.tar.xz
popd

