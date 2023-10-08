# remote-assignments
hw1:   
   1. Description
      I write the two files. One is sync and another is async base. This two files demo how to let js files follow the pattern I wish to run the code.  
   2. Environment requirements
       Node.js
   3. How to use
       just Directly run one of two files, and in terminal it would show the specific running time of three function call and total execution time. 

hw2:
   1. Description
      This folder contains three js files and many images. The test_client and test_server simulated the web server and user to sign up or query a id. Healthcheck is a simple function to test    whether our code can simply connect to the address.
   2. Environment requirements
      Node.js, EC2.
   3. How to use.
      No matter run the files in localhost or EC2 elastic IP, we have same method to set up our code. Firstly make sure you have a terminal(local prompt or EC2) to run test_server files. It may console.log "Server is running on port 3000" and "Connected to the database". then open a local terminal to run test_client. If you want to demo post request, please comment out the getrequest part and vice versa. Postrequest : Revise the data's user, email, password, and run the client files. If the email is used in the database, you may get response fail. In the other hand, you get your id, name, and email. Getrequest : Revise the userid you want to check. If it exist, might return its id, name, email. Otherwise, return User is not exist.   
