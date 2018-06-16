# ScaleUp

# CHECK db PASSWORD in the CONFIG FILE!!! Make sure its your password.


This is a temporary place to put info that may otherwise get lost
Inorder to run the app I had to comment out the following in \ScaleUp\node_modules\express\lib\application.js



# ScaleUp
## UNC Coding BootCamp - Project 2

![ScaleUp App](https://user-images.githubusercontent.com/33872841/41495498-f30217b0-70f6-11e8-81b8-158d308dee96.png)

## Background
This app is called ScaleUp and it was done as part of Project 2 for the February 2018 UNC Coding Boot Camp.

This app figures out percent utilization of utilities for a business that measures efficiency of utilities when preparing to use that space for manufacturing of new drugs.  After figuring out percent utilization for each utility, that is then displayed on a chart.

## How to get started with the app
The application is online at https://github.com/WaleedHamza/ScaleUp. 

Please install Git Bash, MySQL, and Node.js if you want to use the app locally. 

After all of these are installed, download the ScaleUp App.

In the project's root directory:
  Install the database from the command line by by entering:

      mysql -u root -p < schema.sql
      Enter password: <enter password here>

      mysql -u root -p < seeds.sql
      Enter password: <enter password here>

  Next install the project dependencies by entering:

      npm install

This step is important: Remember to change the mysql password in the config file so that it is your password.

The project is now ready to run!

Start the server by typing in:

    node server.js

Open a browser and navigate to:

  http://localhost:8080/ 

in the address line.


Start figuring out percent utilization for your facility!
!

## Authors
This app was built and will be maintained by Waleed Hamza, Jeannie Rose & Tony Hill.