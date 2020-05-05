# The Pizza Task

Here is only frontend

## Installation

Copy or download this reposithory
 
Fix configuration environment in file `.env`. 
Set here url from API 
    
    /* backend url for get all pizzas */
    REACT_APP_GET_PIZZAS=https://agile-reaches-90236.herokuapp.com/api/pizzas
    
    /* backend url for action cart */
    REACT_APP_CART=https://agile-reaches-90236.herokuapp.com/api/cart/
    
    /* backend url for get all orders */
    REACT_APP_GET_ORDERS=https://agile-reaches-90236.herokuapp.com/api/orders/
    
    /* backend url for get order from cart */
    REACT_APP_ORDER=https://agile-reaches-90236.herokuapp.com/api/order/
    
    /* backend url for create customer*/
    REACT_APP_CUSTOMER=https://agile-reaches-90236.herokuapp.com/api/customer

## Run    

    npm start

## Deploy to Heroku

    heroku create --buildpack mars/create-react-app

    git push heroku master

    heroku open

