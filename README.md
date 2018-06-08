# ScaleUp

# CHECK db PASSWORD in the CONFIG FILE!!! Make sure its your password.


This is a temporary place to put info that may otherwise get lost
Inorder to run the app I had to comment out the following in \ScaleUp\node_modules\express\lib\application.js

Lines 209-211
  // if (fns.length === 0) {
  //   throw new TypeError('app.use() requires a middleware function')
  // }

