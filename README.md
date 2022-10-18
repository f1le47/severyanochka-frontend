# SEVERYANOCHKA FRONTEND

My name is Matvey and this is my frontend for pet-project

## About frontend

It was my first time developing an application, not counting projects from different courses

### Difficulties

I faced many challenges and learned a lot from them.
Problems arose, both due to the fact that I was not good enough, and due to the fact that a lot when working with business logic depends on the backend,
and I am not strong in it, and I do not position myself as a backend developer.

### What I learned while developing this project

I did it for 2 months and it's hard enough to remember everything I learned.

I started using redux toolkit instead of regular redux; learned how to work with modal windows (I used them for login/registration windows); began to understand hooks better, and also made custom hooks; improved knowledge of typescript (now I think that the project cannot exist without it); learned about phone number validation

### Application flaws

1. When registering, you should receive an SMS with a confirmation code on your phone, but it will not come, because it is paid
2. Also, the confirmation code is essentially not needed, since without it you can only prohibit access to placing an order, and it is impossible to place an order.
3. Checkout: I didn’t write this logic because I didn’t know how to do it (I know that you can google it, but I didn’t pursue the goal of making the site commercial, it’s impossible, because I found the [design](https://zasovskiy.ru/dizajn-sajta-severyanochki/) of the site in the public domain)
4. The search string does not work, because first it needs to be implemented on the backend, and I don’t know how to do it (more precisely, I have an idea, but it seems to me that this is wrong, most likely later, I will finalize it)
5. Some blocks can break when responsive, in most cases this is my fault, since the original goal of the project was to show my work with logic, by the end I realized that the front-end developer must understand how to make the site responsive, but in some cases the design of the application is not allowed me to do everything right.
6. The lack of animations, they are on hover, registered on css, but there is no talk of cool animations, I think that they will not be in this project, it’s better to make a separate project for studying animations
7. There is no user profile page, because this was not in the design layout, but I can’t make a beautiful design myself and I didn’t want to disfigure such a beautiful design
8. There is also no admin panel and interface for managers (I added all the products thanks to endpoints and postman), while I have no plans to complete this, since the site is not commercial, but maybe later I will make an admin panel to get to know this part better development
9. There is no order page, for the obvious reason that orders will not be there, since there is no payment system
10. Breadcrumbs show their ID instead of the category/product name

## How to start

For an application to work, you need a frontend, a backend, and a database.

To make it easier for you to start my project, I made a docker compose file, which is placed in the github [repository](https://github.com/f1le47/severyanochka-docker). In the README.md file I described what needs to be done to start the project.

## [BACKEND](https://github.com/f1le47/severyanochka-backend)

## SCREENSHOTS
![Image alt](https://github.com/f1le47/severyanochka-frontend/raw/master/src/assets/projectScreens/1.png)
