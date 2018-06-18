# ScaleUp
## UNC Coding BootCamp - Project 2

![ScaleUp App](https://user-images.githubusercontent.com/33872841/41495498-f30217b0-70f6-11e8-81b8-158d308dee96.png)

## Background
This app is called ScaleUp and it was done as part of Project 2 for the February 2018 UNC Coding Boot Camp.

This app figures out percent utilization of utilities for a business that measures efficiency of utilities when preparing to use that space for manufacturing of new drugs.  After figuring out percent utilization for each utility, that is then displayed on a chart.

## How to get started with the app
The application is online at https://github.com/WaleedHamza/ScaleUp. It is also available online at Heroku at https://scale-up20182.herokuapp.com/. You will more than likely have to wait a little while after visiting this url before Heroku spins up the virtual machine which hosts the project.

Please install Git Bash, MySQL, and Node.js if you want to use the app locally. 

After all of these are installed, download the ScaleUp Github Repo.

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


You can enter utilities for Building 1, Zones 1-3, & Building 2, Zones 1-3

Navigate over to the results page, and you'll see the percent utilization for each of the zones in each building.  You can click on any of the zones aboe the chart to temporarily remove them from the chart.

## Authors
This app was built by Jeannie Rose, Walheed Hamza, & Tony Hill.

## Issues we encountered
The charts on the results page are not generated dynamically, and expecting data to be entered exactly as explained above.  Given more time we could have added this functionality.

The foreign keys in mySql are not operating as intended.  Because they are based off of primary keys which are autoincrementing, each time a building or zone is entered, a new primary key and thus new foreign key is created.  This could have been resolved by generating foreign keys based on building or zone names as opposed to primary keys.
