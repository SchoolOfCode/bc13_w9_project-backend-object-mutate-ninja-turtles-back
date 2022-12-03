# Reflections-app

This app is designed to enhance the remote experience of a bootcamper. We have specifically focused our app on the weekly reflections that bootcampers are expected to submit.

This is a simple 3 page app with a landing page, a self assessment tool and a summary.

### Homepage 
User reads instructions.

### Self assessment tool

User inputs topics to be added to their list and provides a score between 1 and 10 based on how they feel they are doing in each topic.

### Summary
User is provided with a summary of current and previous self assessed scores. 

## Demo 

![Demo GIF:](reflectifyDemo.mov)


# Documentation 

## Front-end
This section should be read and the page component trees should be used as a visual reference. The Front-end documentation outlines the main functionality of each component within the Reflectify App.

To start the server run `npm start`.

### Component Trees
<img align="center" alt="landing page component tree" width="100%" src="./Images/Landing page component tree.png" style="padding-bottom:10px;" />
<img align="center" alt="asessment page component tree" width="100%" src="./Images/Self-assessment component tree.png" style="padding-bottom:10px;" />
<img align="center" alt="summary component tree" width="100%" src="./Images/Summary component tree.png" style="padding-bottom:10px;" />


### `App.js`

Each page of the App is routed through the App.js and is assigned individual URLs as follows:

- Home: http://localhost:3000/
- Self-assessment tool: http://localhost:3000/assessment
- Summary page: http://localhost:3000/summary

The Header & Footer are rendered in the App.js file and applied to all pages in the App.

### `Home.js`

Landing page for the user that contains guidance on how to use the self-assessment tool on a weekly basis. This page has a 'begin' button that allows navigation to the self-assessment tool page.

### `Assessment.js`

The assessment page renders the following components for the self-assessment tool:

1. User input text field to generate user topic list
2. Sliders to score understanding in each individual topic
3. Submit All button to send scores to the database and allow navigation to the Summary page

Assessment.js passes props and functions to the following files:

- `NewTopic.js`
- `TopicList.js`

Assessment.js contains three functions, descriptions of these functions are available within the JS Docs for this App.

#### `NewTopic.js`

This javascript file handles the user input field and the add button on the Assessment page.
The handleUserInput function tracks and stores the text input by the user. The handleAddButtonClick adds the stored text(along with a slider) to the list on the Assessment page and the the resetInputField function resets the text input field to blank when the Add button is clicked.

#### `TopicList.js`

This file maps the topics onto a list on the assignment page. It requires the topics and setSliderValue function as parameters.
The setSliderValue sets new topics and slider scores as key-value pairs.

TopicList.js passes props and a function to the following files:

- `TopicItem.js`

#### `TopicItem.js`

This file is required to display the Topics inputed by the user along with the sliderValues. The TopicItem function requires the text and sliderValue values along with the setSliderValue function.

The slider input field tracks changes to topic scores on each slider using the setSliderValue function and passes these back up to the Assessment.js file. The handleSliderChange function updates the changes to the sliderValue scores everytime a change is made by the user. The topics and scores are saved in an array of objects(topics).

Body.js and Title.js components are for App display purposes only.

### `Summary.js`

TBC. See Limitations and Extra Features.

### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#006d77](https://via.placeholder.com/10/006d77?text=+) #006d77 |
| Secondary Color | ![#FAEBD7](https://via.placeholder.com/10/FAEBD7?text=+) #FAEBD7 |

## Back-end

### API Reference
#### Bootcampers
| HTTP Method | Path            | Query Params | Result                        |
| ----------- | --------------- | ------------ |------------------------------ |
| GET         | /api/bootcampers     |         | Gets all bootcampers           |
| GET         | /api/bootcampers/:id| ?id=`name`| Gets a bootcamper by name  |
| POST        | /api/bootcampers     |              | Adds a new bootcamper     |

#### Reviews
| HTTP Method | Path            | Query Params |Resquest Body|Result                         |
| ----------- | --------------- | ------------ |-|------------------------------ |
| GET         | /api/reviews     |              | | Gets all reviews                |
| GET         | /api/reviews/:id | ?id=`id` | | Gets a review by id |
| POST        | /api/reviews     |              |topic_id, score, bootcamper_id| Adds a new review            |
| PATCH       | /api/reviews/:id |              | | Updates a review                |

#### Topics
| HTTP Method | Path            | Query Params |Result                         |
| ----------- | --------------- | ------------ | ------------------------------ |
| GET         | /api/topics     |              |Gets all topics                |
| GET         | /api/topics/:title | ?subject_title=`title` |Gets a topic by its title |


<img align="center" alt="Entity Relationship Diagram" width="700px" src="/reflections-project/Screenshot 2022-11-22 at erd.png" style="padding-right:50px;" /> 


To run the app locally you need to create a `.env` file and add it to your `.gitignore` file. The `.env` file must contain your PORT number and your DATABASE_URL.

 The following commands run the scripts to set up the database:
- `npm db-create` creates the database tables
- `npm db-drop` drops the tables
- `npm db-seed` adds seed data into the database
- `npm db-reset` will drop, then create, then seed all tables in the database

To start the server run `npm start`.

## Testing

When running in development ...
Cypress E2E tests are run using `npx cypress open` in the React app.
For these to run you will also need to have the server running on both the front and back end and the database set up. 

Supertest unit tests are run in the Node app using `npm test`.

## Authors

- [@Hicham B](https://www.github.com/HBE17)
- [@Iona M](https://www.github.com/ionajosephine)
- [@Matthew D](https://www.github.com/matt190589)
- [@Andrew R](https://www.github.com/AndyRoo0)

## Limitations / Future Features

### Saving multiple scores to the database
The app currently only supports one user input to be saved at a time. In future we aim for the full array of inputs to be saved in one fetch (POST) request.

### Gamification on the Summary Page
Users earn badges based on the frequency of their reflections, whether they submitted them on time and the progress they've made (calculated using their own scores and how they change over time)


