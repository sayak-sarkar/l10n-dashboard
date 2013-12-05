l10n-dashboard
==============

A dashboard for keeping track of l10n statistics for various projects in a single page being developed with ease of access for localizers in mind. As an added feature the Dashboard would be developed in a mobile friendly responsive layout.


Development Status
==================

~~The project is currently in **Development Phase 1**, with only a basic list of localiztion project links.~~

~~The project is currently in **Development Phase 2**, with a list of localization project links and an option to customize the links as per the users choice of locale.~~

The project is currently in **Development Phase 3**, where the dashboard APIs are currently being implemented.

Development Plan
================

The Dashboard would be developed in phases as follows:-

Phase 1:
--------
Create a simple HTML page listing out various l10n initiatives across various Open Source projects, and providing links to their individual l10n dashboards.

Phase 2:
--------
Incorporate language selection buttons [Dropdown menu with a list of most common languages], which would allow localizers to select the language of their choice. Upon selection of a prefered locale, the individual project links would be replaced by links to locale specific dashboard for the projects. For non-existing locales links to remain unchanged.

*Technical Details:*

**Note:** All Language codes are underscore separated.

**KDE Localization**
For the KDE Localization System: Replace the default URL[http://l10n.kde.org/teams-list.php] with 'http://l10n.kde.org/team-infos.php?teamcode=<language_code>' [e.g.:http://l10n.kde.org/team-infos.php?teamcode=bn]

**Pootle:**
For Pootle Based Systems: Append 'language-code/' [e.g.: bn_IN/]to the existing project URL. 

Custom implementations of Pootle include Verbatim [https://localize.mozilla.org/] and Localize [http://localize.mozilla.org/] for Mozilla as well as Damned Lies [https://l10n.gnome.org] for GNOME and Document Foundation [https://translations.documentfoundation.org/] for LibreOffice.

**Locamotion**
For Locamotion: Replace the string "projects" with the selected language code within the URL. For example, for the bn_IN locale for Firefox, the URL would change from http://mozilla.locamotion.org/projects/firefox/ to http://mozilla.locamotion.org/bn_IN/firefox/

**Transifex:**
For Transifex Based Systems: Append 'language/<language_code>/' [e.g.: language/bn_IN/] to the existing project URL. For example, for the Mozilla Webmaker project at https://www.transifex.com/projects/p/webmaker/, the URL would change to https://www.transifex.com/projects/p/webmaker/language/bn_IN/.

Phase 3:
--------
Incorporate Dashboard APIs from the most common l10n dashboards such as Transifex and Pootle, to provide translation statistics on the L10n Dashboard itself, hence allowing the localizers to have a good idea of the progress in translations in a single glance.

Phase 4:
--------
Incorporate Visual improvements to provide interactive menus as well as colorful progress bars. Incorporate an app-manifest to allow the usage of the site as a Web-App.

Incorporate Project Groups to sort the list of projects based on variou factors such as type of localization it uses, number of translators, completion status, etc.

Phase 5:
--------
Incorporate Translation leaderboard to display a sorted list of top l10n contributors across locales as well as in locale specific order.


Directory Structure:
====================

index.html:
-----------
Dashboard landing Page.

languages.json:
---------------
JSON file consisting of the list of supported languages, in the format "language": "language_code".

scripts/selector.js:
--------------------
JavaScript file consisting of application logic to extract the list of languages from languages.json and populate the language selector drop down menu in the primary landing page.

scripts/transifex.js:
---------------------
JavaScript file consisting of application logic to extract data from Transifex using the Transifex APIs and populate the dashboard with the relevant data.

stylesheets/style.css:
----------------------
Base style sheet for the dashboard landing page.