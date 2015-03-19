headhunter: pull every GitHub repo in a geographic area
------

This utility consists of a small NodeJS program to dump every GitHub
repository in a local area, and a shell script to pull them all.

From there you can grep the code, perform analytics on it, anything you
want to find potential candidates with relevant coding skills.

To use:

    npm install

    node headhunter.js GitHubAPIToken 'Location'

Examples:

    node headhunter.js GitHubAPIToken 'Irvine'
    node headhunter.js GitHubAPIToken 'Huntington Beach'
    node headhunter.js GitHubAPIToken 'Los Angeles'
    node headhunter.js GitHubAPIToken 'Lake Forest'

You get the idea.

Node that some place names might not be unique, so you'll still have to
more deeply research anyone who matches to make sure they're actually where
you think they are.

The script dumps git commands, and between each is a sleep delay to keep from
slamming GitHub too badly. Just redirect output into a file and then 'source'
or '/bin/bash' the file to execute it.

In case you need a soundtrack...

<iframe width="420" height="315" src="https://www.youtube.com/embed/m1cRGVaJF7Y" frameborder="0" allowfullscreen></iframe>

Enjoy!
