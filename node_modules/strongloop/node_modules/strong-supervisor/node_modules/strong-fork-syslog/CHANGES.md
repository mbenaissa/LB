2014-12-02, Version 1.2.1
=========================

 * Remove homegrown ThrowException shim. (Ben Noordhuis)

 * Upgrade compat.h and compat-inl.h. (Ben Noordhuis)


2014-11-25, Version 1.2.0
=========================

 * Strongloop fork of node-syslog (Sam Roberts)

 * updated README with link and typo fix (Matt Simerson)

 * Update README.md (Nazar Kulyk)

 * Create LICENSE.txt (Nazar Kulyk)

 * Mark package as !win32 (Ryan Graham)

 * fixup! add and use Return() overload for int (Sam Roberts)

 * Support v0.10 through v0.11.13 (Sam Roberts)

 * Remove unused persistent callback to log() (Sam Roberts)

 * Removed unused ObjectWrapper base from Syslog (Sam Roberts)

 * Remove unused function export from binding (Sam Roberts)

 * package: add test.js as npm test script (Sam Roberts)

 * Add option flag for openlog : LOG_PERROR (Socolin)


2013-01-02, Version 1.1.7
=========================

 * Fix compatibility to 0.9.3 node version (schamane)

 * bump 1.1.6 version (schamane)

 * remove gcc flags that duplicate node-gyp flag and break support with older gcc versions (schamane)

 * use new nodemodule annotation (schamane)


2012-07-09, Version 1.1.5
=========================

 * fix build for node-gyp and remove deprecated code (schamane)


2012-07-09, Version 1.0.3
=========================

 * merge new version 1.0.3 (schamane)

 * Bump new version 1.1.4 (schamane)

 * cleanup scope hanler opened and not closed (schamane)

 * cleanup return values (schamane)

 * add node-gyp build file (schamane)

 * small build script cleanup (schamane)


2012-06-02, Version 1.1.3
=========================

 * fix issue #16 (schamane)

 * initial support for node 0.7.x versions (schamane)


2012-01-25, Version 1.1.2
=========================

 * Package new version 1.1.2 for npm update (schamane)

 * fix syslog.h include error (Vinay Pulim)

 * Update README.md (Nazar Kulyk)

 * bump 1.1.1 version with node 0.4 support (schamane)

 * allow usage of node v0.4 (Peter 'Pita' Martischka)

 * fix build script (schamane)

 * make code compatible to 0.4 and 0.5 version (schamane)

 * port to node v0.5 (schamane)


2011-09-16, Version 1.0.2
=========================

 * version bump to 1.0.2 (schamane)

 * Fixed a bug for the LOG_MAIL facility that made it log to SYSLOG_LOG instead. (Christopher Mooney)


2011-06-27, Version 1.0.1
=========================

 * Free log messages. (Jeremy Childs)

 * fix author listing (Nazar Kulyk)

 * Cleaup pull request #7 (Nazar Kulyk)

 * Removed leaking Syslog underlying function object from top-level library + simple formatting to be consistent (Pascal Deschenes)

 * add git ignore for build folder, wscript lock file, symlink (Pascal Deschenes)

 * formatted changelog and readme to use markdown syntax and rename file to .md (Pascal Deschenes)

 * add entry about setMask wiki page (Nazar Kulyk)

 * extend setMask for second parameter LOG_UPTO (Nazar Kulyk)

 * Refactor setMask. Bump version. (Nazar Kulyk)

 * Added setmask functionality. (Jeremy Childs)

 * add one more tag to package v1.0.0 (Nazar Kulyk)


2011-06-03, Version 1.0.0
=========================

 * cleanup naming problems (Nazar Kulyk)

 * Changed example code to provide the facility in the init call. (Jeremy Childs)

 * Changed package.json to reference js wrapper "nodesyslog.js" as "main". (Jeremy Childs)


2011-04-03, Version 0.6.2
=========================

 * update npm stuff and version (schamane)


2011-01-06, Version 0.6.1
=========================

 * tag new version 0.6.1 (schamane)


2011-01-04, Version 0.6.0
=========================

 * add version information to the syslogjs module. (schamane)

 * Add more info to the README file (schamane)

 * fix reference in package.json (Rohan Deshpande)

 * cleanup build files (schamane)

 * add npm package information (schamane)

 * better handling of the test file head to find node if installed to custom path (schamane)

 * bump version for feature node 0.3.0 release (schamane)

 * remove unneeded require in test file. Tested with current node 0.3.0-pre master (schamane)


2010-08-25, Version 0.5.0
=========================

 * First release!
