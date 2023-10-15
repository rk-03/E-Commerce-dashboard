Integrating API on signUp page - 
we have already created name,email,passwprd and will update it by useState and for frontend part we have alresdy created input form where the value that is intially assigned as name,email and password in their respective inputs will be updated to set.. (e.target.value) by triggering onChange Event.
now for API integration we can use axios but here we are using fetch of js.(core module of js).
So,for this we will create first a function assigned to a const named as result.fetch(URL,{method that we want(POST/GET),body},body:data that we want to send (as api do not take direct object,for this we have to stringify the JSON),headers:backend developer will tell us which header we have to send otherwise we have to send always written header)
now if we hover on this result we will find that it is returning some promise so we will use async await.
if we will find the result we'll redirect it to home page('/)(for it import useNavigate)

now we want to store this data in localdata as on refershing the page we'll lose the data if we don't do this.
for it we will add  line27 SignUp.js now we can't use result directly we have to first convert it into string.(JSON.stringify(result))

localStorage.getItem('user') ->user is the key in the local storage(check it in application of browser) in which data is stored

Now we are creating a privateComponent to access certain pages/components onl when user is logged in/sign up.
store the data from localStorage in auth
if(auth has some data)outlet milega nhi toh navigate kr do sign up wale page pr ab yeh joh outlet h woh tbkamm m lege jb apn app.js m se joh joh private bnane h unko route k andar wrap kr de with element as <PrivateComponent/> 
Ab sign up ho jaane k baad we don't want that signUp wala button so hide it.
so again use this localStorage wala part in signUp in useEffect. If auth is there we can't redirect to signUp wala page .Now we don't want that button too.So go to Navbar 


Now we will check our Logout wali functionality
