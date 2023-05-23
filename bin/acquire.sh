#!/bin/bash

while read line; do
	echo ">>> $line"

	if [[ $(echo $line | grep -E "tiff") ]]; then
		FNAME=$(echo $line | cut -d' ' -f4 | cut -d'.' -f1)
		convert $FNAME.tiff /tmp/$FNAME.png
		mv /tmp/$FNAME.png $FNAME.png
		echo "saved image as $FNAME.png"
	fi
done < <(sudo /home/malcom/dev/ct/bin/acquire_tiff)
