#!/bin/bash
#
# Get source directory
#

if [ "$(uname -s)" = 'Linux' ]; then
    SOURCE=$(readlink -f $(dirname $(readlink -f ${BASH_SOURCE[0]}))"/..")
    HOMEDIR=/home
else
    SOURCE="${BASH_SOURCE[0]}"
    while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
        DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
        SOURCE="$(readlink "$SOURCE")"
        [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
    done
    SOURCE="$(dirname $( cd -P "$( dirname "$SOURCE" )" && pwd ))"
    HOMEDIR=/Users
fi
