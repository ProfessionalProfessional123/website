#!/bin/bash

HTML_FILE="index.html"

joke=$(curl -H "Accept: application/json" https://icanhazdadjoke.com/ | jq -r '.joke')

sed -i -e "/<div id=\"dad-joke\">/,/<\/div>/c\\
<div id=\"dad-joke\">\\
<p>$joke</p>\\
</div>
" "$HTML_FILE"

echo "Dad joke in $HTML_FILE."