***SPIDER RESTURANT***
Author:  Oluwajuwon Mayomi Akanbi
Contributor: Mazeedah Hamzat


Contents
1. Introduction
2. Home Page component
3. Product page
4. Product detail page
5. The Cart component
6. The Checkout component
7. Login and Signup components
8.  Contact and About components
9. Navbar and Footer components

**1. Introduction**

Spider Restaurant is a modern, user-friendly web application built with React and created using npx create-react-app. This application is designed to provide an exceptional dining experience, giving customers an easy way to browse through our menu and place an order.

The homepage features all our products, along with a search bar for filtering options. The product page offers in-depth information about each dish and pricing. The About page gives customers insight into our restaurant's history, mission, and values. The Cart page allows customers to view items added to their order, and the Checkout page provides a seamless way to place the final order.

The Navbar and Footer are present on every page, providing easy navigation and access to important information. Our Contact page is available for customers to reach out to us with any questions or feedback.

Spider resuturant provide the best possible dining experience and are dedicated to serving delicious food and exceptional service.

1.1 Getting Started
To run the application locally, follow these steps:

Clone the repository to your local machine using git clone https://github.com/Akanom/Spider-Restaurant.git
Navigate to the project directory using cd spider-restaurant
Install the required dependencies using npm install or yarn install
Start the development server using npm start or yarn start
Open your browser and visit http://localhost:3000 to view the application

**2. Home Page component**

The code is a React functional component called "Home" that displays a UI layout with a hero image, a product listing, and a step-by-step process with images. It imports a component called "Products" and uses it in the component. The layout includes a title and description, and the images and their corresponding descriptions represent the steps in the process. The component returns a div with various nested elements that display the information.

![](images/spider%20homepage.png)


**3. Product page**

This is a React component named "Products". It displays a list of products that are imported from the "../DATA" file. The component allows the user to search for a product using a search bar. The products are displayed using a card layout. The component uses the "useEffect" and "useState" hooks from the React library to manage the state and update the display of the products based on the search value.

Here's a concise documentation of the code:
Products
- Imports "DATA" file and "NavLink" component from "react-router-dom"
- Imports "useEffect" and "useState" hooks from "react"
- Renders a list of products with a search bar to search for a specific product
- Uses "useEffect" hook to filter the displayed products based on the search value
- Renders a card for each product, showing its image, title, price, and a "Buy Now" button


**4. Product detail page**

The code is a React functional component that displays a product detail page. The component starts by importing the following dependencies:

DATA from "../DATA": This is an array of product data that's used to display the product details on the page.
useState from "react": This is a hook from React that allows the component to maintain and update state values.
useDispatch from "react-redux": This is a hook from the react-redux library that provides access to the Redux store's dispatch function.
addItem and delItem from "../redux/actions/index": These are two Redux action creators that add an item to the cart and remove an item from the cart, respectively.
useLocation from "react-router-dom": This is a hook from the react-router-dom library that provides access to the current URL location.
The component then defines two state values using the useState hook:

cartBtn: This state value holds the text for the Add to Cart/Remove from Cart button. It starts with "Add to Cart" as its initial value.
qty: This state value holds the quantity of the product being added to the cart. It starts with 1 as its initial value.
The component uses the useLocation hook to retrieve the current URL location and extracts the product ID from it. It then uses this ID to find the corresponding product detail in the DATA array.

The component also uses the useDispatch hook to retrieve the Redux store's dispatch function, which will be used to dispatch the addItem and delItem action creators.

The handleCart function is defined to handle the button click events on the Add to Cart/Remove from Cart button. This function takes a product as an argument and creates a new object with the product detail and the current quantity. If the button text is "Add to Cart", the function dispatches the addItem action creator with the new object. If the button text is "Remove from Cart", the function dispatches the delItem action creator with the new object.

Finally, the component returns the JSX for the product detail page, which consists of a container with two columns: one for the product image and one for the product details. The product image is displayed using a background image with the divStyle object. The product details include the title, price, description, quantity, and the Add to Cart/Remove from Cart button. The quantity can be adjusted using the "+" and "-" buttons, which call the setQty function to update the qty state value.

![](Akanom/Spider-Restaurant/images/productdetail.png)

4.1 Redux reducer function

The code defines a reducer function addItems for a Redux store. The reducer is called with the current state and an action, and returns a new state.

Initially, the state is set to an empty array addItem. The reducer handles two actions: "ADDITEM" and "DELITEM".

When the action "ADDITEM" is dispatched, it adds a new item to the state using the spread operator, which creates a new array with all the elements of the old array and the new item.

When the action "DELITEM" is dispatched, it filters the state array to remove the item with a matching id and returns the new state.

In the default case, the state is returned unchanged.

The reducer is exported as the default export, so it can be imported and used in the Redux store.


**5. The Cart component**

This is a React component that renders a shopping cart, which displays the items the user has added to their cart. It uses the React Redux library to manage its state and dispatch actions.

The component starts by importing the useSelector and useDispatch hooks from react-redux and the delItem action from index.js in the actions folder. Additionally, it imports the NavLink component from react-router-dom to provide navigation to the checkout page.

The component uses the useSelector hook to access the addItem state from the global Redux store. It uses the useDispatch hook to get access to the dispatch function, which is used to dispatch the delItem action.

The component defines a handleClose function that dispatches the delItem action with the item passed to it as an argument. This is used to remove items from the cart when the user clicks the "Close" button.

The component defines a cartItems function that returns a JSX element representing a single item in the cart. This function takes a single item in the cart as an argument and displays its image, title, price, quantity, and total price.

The component also defines an emptyCart function that returns a JSX element representing an empty cart. This is displayed when the cart has no items in it.

The component defines a button function that returns a JSX element representing a button that navigates to the checkout page. This is displayed when the cart has items in it.

Finally, the component returns a JSX element that either displays the empty cart or a list of cart items and the checkout button, depending on the state of the cart.


**6. The Checkout component**

The code imports the useSelector hook from the react-redux library and creates a component named Checkout. The component retrieves the value of state.addItem from the store using useSelector. The component loops over the items in the state to calculate the total price of all items and displays them in a list. The component also has a form for entering billing information, including first and last name, username, email, address, and more. The form uses Bootstrap classes for styling and validation.


**7. Login and Signup components**

7.1 Login.js

This is a React  component that displays a login modal. The component includes a login button that when clicked triggers a modal with a form for users to enter their email and password. The form also includes buttons to sign in with Google and Facebook. The modal is implemented using Bootstrap's modal component.
7.2 Signup.js
This is a React functional component that displays a sign up modal. The component includes a sign up button that when clicked triggers a modal with a form for users to enter their information to create an account. The form also includes buttons to sign up with Google and Facebook. The modal is implemented using Bootstrap's modal component.

8. Contact and About components

8.1 Contact page
This is a React component that represents a "Contact" page. The component is a functional component that returns a div containing HTML elements for displaying a form for the user to enter their name, email, and message. The form also has a submit button. The component uses Bootstrap CSS classes to style the form elements.

8.2
This is a React component that represents an "About" page. The component is a functional component that returns a div containing HTML elements for displaying text and an image about the company. The component uses Bootstrap CSS classes to style the text and the image. The component also uses the NavLink component from the react-router-dom library to create a link to the "Contact" page.

**9. Navbar and Footer components**

9.1 Navbar Component

This component is responsible for rendering the navigation bar at the top of the website. It includes links to the Home, Products, About and Contact pages, as well as buttons for Login, Signup and Cart.

9.2 Footer Component

This component is responsible for rendering the footer at the bottom of the website. It includes links to the Home, Products, About and Contact pages and social media buttons for Instagram, Facebook, Twitter and Youtube. There is also a phone number and email link provided.