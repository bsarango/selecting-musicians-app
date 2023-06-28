# Selecting Musicians App

# Description
This app is a basic musician selector app that allows the user to select given musicians to put on their roster of desired musicians. The user also has the option of adding additonial musicians to their options by submitting the desired information.
This app uses Events and AddEventListeners to respond to certain user events and inputs as well as fetch and post methods to retrieve and send data to a server with data used in the app

# Installation
To access the all the code required for the app, fork a copy of the app repository to your local machine from the following link: 

https://github.com/bsarango/selecting-musicians-app

Click on the fork button on the top right and accept the option to clone. Once redirected back to the home page of the repository, click the code and copy the repo in SSH format

To clone the project repo to you machine, open terminal and enter the path for the desired folder. Then and enter the following command and hit enter

    'git clone (copied link to repo in SSH format)'

The repository is now cloned to your local computer

Enter the new directory that was just cloned:

    'cd selecting-musicians-app'

You are now inside the directory with access to all the files needed to run the app.

Before opening the App in the browser, you want to setup a json server to run the db.json file that contains the objects necessary for running the app and for sending POST request to.

To setup it up, open a new terminal window by clicking 'shell' on the top menu followed by 'new terminal'. Enter the path to the new directory that was just cloned. 
Once in the directory enter the following command to start the json server:

    'json-server --watch db.json '

To access the app in the browser after setting up the json server, enter the following in the first terminal window:

   'open index.html'

The browser should open a webpage wwith an alert saying "select your band!" following by images appearing on the webpage. If that has occurred, the app was successfully installed, setup, and opened.

For additional instructions on setting up, take a look at the following:

    https://youtu.be/tEK26D8VBa0    

# Roadmap
Future goals for this app are to include the ability to limit the user to a select number of musicians that one can choose for their band and prevent any more from being selected beyond that point unless the number of the band is reduced. 
The following goal, built on the first goal, is to add a delete functionality to remove and musician tag from either the main selection container as well as in the band container of the page. This would be for any new added musicians to the page and and all musicians in the band container.

# Support 
For any help with accessing and setting up the application, please feel free to contact brian.sarango@baruchmail.cuny.edu 