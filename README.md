# Griffin Code Challenge


The goal is to build a web app that finds and displays the lowest rated parking lots in a given region, using the Yelp API.

The minimum frontend requirements are as such:
Search field that enables you to enter a location like San Francisco or Atlanta. 
```css
height: 56px;
width: 461px;
border-radius: 4px;
placeholder: Enter location
```
When the user press Enter on the keyboard displays requirement 3 below
Button that when click displays requirement 3 below.
```css
Text: Search
height: 36px;
width: 72px;
border-radius: 4px;
padding: 10px, 20px, 10px, 20px;
```

Show a list of parking lots from Yelp in that location with the address, an image if available, star rating, review count, and link to the Yelp page.

Display a parking lot score that factors in number of reviews and ratings, using the formula: 
```javascript
score = ( number of reviews * rating ) / (number of reviews + 1) 
```
to understand a bit about why this is needed, read this -  https://fulmicoton.com/posts/bayesian_rating/


# Rules

No use of frontend frameworks or libraries such has Angular, React, Vue, JQuery, etc. However other utility JavaScript packages such as axios can be used
Upload code to a github repo and reply to this email with the link upon completion 
Include a README with instructions to run the solution in the repo

NOTE: Certain requirements are left out such as the design/specification of certain visual elements. Use your judgement to best fill the gaps (remember this is designed to see how much you know). You will be judged not only on functionality and completing the requirements but also on clean code, modularity, and mobile first designs 

# Set-up the project
To start this project you will first need to run 
```bash
npm install
```

# Starting the Project
Once the NPM packages install you can start the project by running
```bash
npm run dev
```
# About this Project
This project is build using NODEJS and Pug. The SCSS is in BEM and compiled using Gulp.
If you want to run the Gulp file to see the automation process for compiling the CSS you will need to just run the Gulp command.
```bash
gulp
```
This project has a basic mobile responsive query set - you can see it by using the developer tools and setting the emulator to mobile screens. All of the SCSS files can be found in src/scss
