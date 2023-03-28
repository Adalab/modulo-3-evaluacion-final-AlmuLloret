# Harry Potter´s Character Search Application

This web application grant you access to a Harry Potter database. You can search characters by its name, filter and reorder them. You can also view and  the detail of any particular character. It is resposive and has been design following a Mobile First strategy. 

It has been built using HTML, SCSS and React. 

Other resources used are as follows:  
- Adalab web starter kit: The project template developed by Adalab. 
- Font awesome. 
- Google fonts. 

## Structure 

The application has a very simple structure. It is divided in three main parts: 

- Header: Image and heading.  
- Search section: Form where  you can search by name, filter by house, status and orden alphabetically. 
- Character section: list resulf of matching characters. It will show the image and name of the characters. If the api does not contain any image for the character, it will show a different image placeholder depending on its house. 

Besides, there are two addicional routes: 
- Character section: where you can see  additional information of each character. It will show you and image, name, status with corresponding logo, patronus and a crest of his house. 
- Error page where you are director when the route doenst match any result. 


## SCSS 

The scss follows the same structure of the html file: 

- Header - Display flex. 
- Search section - Display flex. 
- Characters - Display grid. 


## React 

The application has been developed with React. It is composed of the following different components: 
- App
- CharacterList: 
  - Character
- Filters: 
  - FilterName: 
    - ErrorMsj
  - FilterAlive
  - FilterHouse
  - OrderByName  
- Characterdetail 
- Error404


## Author 

Final exercise module 3 - Adalab. 
Almudena Lloret Gallego
March 2023
