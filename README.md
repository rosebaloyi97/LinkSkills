Welcome to Link SKills😊

 Problem statement

Training centers are struggling with constant change in the skills that the industry requires, so they need a solution that will give them a list of skills required by the companies so they can train students according to the industry demands.

Solution

We came up with a solution that will allow companies to take a survey and listing all the skills that they want. Not only are they only going to list technical skills only but also interpersonal/soft skills.


Pre-requisites

1. Install Visual Studio Code from https://code.visualstudio.com/download, choose your operating system either (Windows,Linux and Linux)
then follow the installation instructions.
2. Install NodeJS at https://nodejs.org, and select the recommended for most users because its the most stable version. Download file then follow
installation instructions.
3. Install angular CLI from https://cli.angular.io, open Visual Studio Code and naviagte to Terminal(The tab on top of VS code, click terminal and select new terminal) after a terminal will appear at the bottom of VS code, type npm install -g @angular/cli  version  11.0.4.
4. Then install a version control which in this case is GIT, install git at https://git-scm.com and follow all installation instructions.
5. After navigate to https://gitlab.thedigitalacademy.co.za/linkskills1/linkskills
6. Change branch from master to develop on the upper left.
7. On your top right corner, click on the blue "Clone" option then select the clone with HTTPS option, copy the link and open your command line interface type cd Desktop(to move to Desktop) and type git clone space and the HTTPS url copied.
8. You will be prompted to enter your git credentials(email/user name and password), enter them and proceed.Go to Desktop, drag and drop the file(linkSkils) that appears on Desktop on the VScode IDE(IOS) 
(On Windows), open the cloned project, on the file explorer address bar, type cmd then enter. A command line interface will appear and type code . then enter and the project will open.  
9. On your bottom left corner, a text written 'master' will appear click on it and select origin/develop or open the terminal and type git checkout develop to switch to the develop branch
 

Steps to run client side (Front-End)

1. Open Visual Studio Terminal-> new terminal.
2. Type cd client to move to the client folder.
3. Install node modules using - npm install.
4. Run angular application using - ng build, ng serve or npm run start.
5. Go to your browser and type localhost:4200 on the url, or type ng serve --open on step 4 instead.
6. When the project is running you should see the landing page, click on the button to begin taking the quiz.
7. Answer all the questions then click submit.
8. When you want to stop running the angular project, click ctrl + c (control and letter 'c') on the terminal.

Steps to running the server side of the project

1. On your terminal click on the plus sign (+) on the far right of the terminal to add another terminal.
2. Once that's done, type cd server.
3. Once inside the server install node modules by typing - npm install on terminal.
4. The node modules will install all the required dependecies for the server/back-end.
5. After that run the back-end by typing - npm start.
6. To stop running the server click ctrl + c (control and letter 'c').

Steps to run database (MySQL)

1. Firstly go to your browser and navigate to this link https://dev.mysql.com/downloads/mysql/ click on the first search to download  MySQL Community.
2. After you've clicked the link, a page will appear with a headline of MySQL Community Download, from there navigate to the option which says "select operating system" then from there chose an operating system that is running on your machine either Windows, Linux, MacOS and etc..
3. After selecting your OS, navigate to "Go to Download Page" and choose which one to download according to bits either 32-bit or 64 bits, then click the download button on your  far right.
4. After clicking the download button it will give you an option to sign up for an oracle account or login if you have it, ignore all that and navigate to the last option below "No thanks, just start my download." then click on it and select a folder to save your file.
5. Once the file is downloaded navigate to the folder where you saved it or on your browser download and double click it, the agree to install it on your machine.
6. When the file has run it will open a MYSQL installer then on your top right click on Add, at center of your installer two table will appear whcih is Available products and products to be installed. Select the version of MySQL server you would like the clicking in the drop downn and version number the use the arrow pointying to the right.
7. And for the Applications option select MySQL workbench and use the arrow to push it to Products to be installed, then after select a MyQL connector which is the Connector/ODBC then after that,navigate to the next button on your bottom right and a new page will appear showing you which products you want installed after confirming that you chose the correct products click on execute on your bottom right.
8. After execution click next then finish.
9. Once all products have been installed search for MYSQL workbench and open it, after it is opened create a new Database connection by lciking the plus (+) symbol next to the text written MySQL connections bewlow the app page, name the connection then test it and if its okay click on OK.
10. Once the app is open on the top ribbon navigate to the Server option and on the drop down select the Data Import option and select the folder your database schema is located and start import.
