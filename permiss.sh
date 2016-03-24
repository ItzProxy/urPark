#!/bin/tcsh
#file: chmod files

set files = "map.php index.php header.php side-nav.php"
set folders = "js/ css/ fonts/"

echo "Setting permission 711 to " $files
chmod 711 $files
if [$? -eq 0]; then
	echo OK
else
	echo FAIL
fi
echo "Setting permission 644 to " $folders
if [$? -eq 0]; then
	echo OK
else
	echo FAIL
fi

echo "Done!"
exit