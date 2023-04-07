# Shabana-FC-Tickets-App
Shabana Tickets app is a web app that help fans to the club commit their attendance to the cclub's upcoming matches. The page has a list of upcoming fixtures each held in a card where a user can commit their attendance which is visible to all. Users can also submit their desired clubs which they would wish the club administration to plan and arrange a friendly match with. 

![Page  Preview](https://ibb.co/XSZh5Qg)


# Description
Shabana ticket commits app has utilized a number of event listeners, amongst them being, a window scroll event where the user is able to change the pages navigation properties once they start scrolling down the page. The user also can enjoy the mouse over and mouse out events on individual cards. 

The app has got its own external API which JSON uses to get data to the DOM through the fetch method. 

The page utilizes rwo functions; the create match function and the create new game function. The create match function is the one that is responsible for creating the individual matches in the fixture. The create new game function is responsible for creating a new game and adding it to the fixture.

The functionality of the page utilizes all the HTTP verb methods. CRUD operations are performed in the page. The page dynamically creates new matches once a user enters all the fields and clicks on the Add to fixtures button. The read functionality renders all fixtures to the page. Update works in a way that it updates the number of attendance of fans to the current values in the server.

During the implementation of my project ideas, I faced some challanges in creating edit features whereby a user can change any field that they wrongly filled in. I also wanted to add a buy ticket button which once a user buys a ticket, they would see the total of the amount of their ticket displayed in a cart. Lastly, I wanted to add a variety of tickets to each game like VIP, VVIP, and regular tickets.


# PROJECT SET-UP
To set-up this project, you will need to have the following installed in your computer:
    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
    3. JSON server
   
To run the project, you need to;
    1. Create a new project folder.
    2. Create a new GitHub repository
    3. Create and the following files
       1. index.html
       2. style.css
       3. script.js
       4. games.json
    4. run json-server --watch games.json on yourterminal to get the backend started.
    5. add any necessary code to make the app better than its current version.To set-up this project, you will need to have the following installed in your computer:
    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
    3. JSON server
   
To run the project, you need to;
    1. Create a new project folder.
    2. Create a new GitHub repository
    3. Create and the following files
       1. index.html
       2. style.css
       3. script.js
       4. games.json
    4. run json-server --watch games.json on yourterminal to get the backend started.
    5. add any necessary code to make the app better than its current version.