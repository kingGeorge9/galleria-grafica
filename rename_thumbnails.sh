#!/bin/bash

# Script to rename thumbnail files
cd "$(dirname "$0")/images/thumbs" || exit 1

# Rename all .thumbnail files to .jpg
for file in *.thumbnail; do
    if [ -f "$file" ]; then
        mv "$file" "${file%.thumbnail}.jpg"
    fi
done

echo "All thumbnail files have been renamed to .jpg extension"
