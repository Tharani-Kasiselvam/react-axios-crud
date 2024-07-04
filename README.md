# AXIOS and CRUD Operations

***Introduction:***   
- A Home Page is designed to load the data fetched via **Axios**.   
- Each data are loaded into a Cards with an Edit and Delete button.   
- A Create User Button is available to add New Users.   
- A Home button is available to route back to Home page.   
- While loading the Home page, there is APIDataLoad component with **loader()** function to fetch the data from mockAPI entrypoint and keep it ready before loading other components.   
    "https://666161f063e6a0189fe98846.mockapi.io/userData"   
- useEffect is used to load the data and assign the result to a state variable.   
- **ContextAPI** provider wrapped the App component to pass the state variable across its children components.     
- Toast from *React-Toastify* is used to pop-up messages on screen using the ToastContainer.   
- using React Router DOM Provider, routings are configured for each pages.   

***Functionality:***
- Axios CRUD operation performed:   
&emsp; a. **CREATE** - on click of *Create User* Button a Form will be displyed to keyin new user details. On clicking *Add User* button, data will be loaded into the mockAPI entry point using axios **POST** method.   
&emsp; b. **READ** - From home page, we are getting all the user date and loading into a cards using axios **GET** method.
&emsp; c. **UPDATE** - There is an Edit icon imported from *React-icons* through which the specific user data is loaded into a form. We can modify the details and click on *Update User* button. Modifed data will be updated using axios **PUT** method.    
&emsp; d. **DELETE** - There is a Delete icon imported from React icons through which a specific user data can be Deleted from the API entry point using axios **DELETE** method.   

***Note:*** After performing each CRUD operations, the page will be routed to Home page to reload the modifed contents.   

**Author : Tharani K**
