#!/bin/bash

sudo apt-get update -y -m -qq || sudo apt-get upgrade -u -m -qq

sudo ./clean_up.sh
