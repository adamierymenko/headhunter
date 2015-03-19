headhunter: pull every GitHub repo in a geographic area
------

This utility consists of a small NodeJS program to dump 'git clone'
commands to pull every repository in a geographic area or city.

From there you can grep the code, perform analytics on it, anything you
want to find potential candidates with relevant coding skills. Note that
there are lots of great candidates out there without much on GitHub so
this is by no means an exhaustive search, but I wrote this because I
thought it was one interesting avenue to pursue.

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

It takes a while, so click here for a soundtrack:

[![Front 242: Headhunter](http://img.youtube.com/vi/m1cRGVaJF7Y/0.jpg)](http://www.youtube.com/watch?v=m1cRGVaJF7Y)

Enjoy!
