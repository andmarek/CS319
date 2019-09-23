# Chat Server
- Data structures to hold: Port, userNames, userThreads, access code
- Chat server constructor w/ port and accessCode 
- Socket socket
- Method to display messages to other users
  - basically call a method from UserThread class that extends thread
- method to add user and store usernames in a set or list
- remove user method
- encapsulate

#UserThreads
- Socket (for connection endpoint)
- ChatServer instantiation
- PrintWriter

- A UserThread consists of:
  - socket
  - server

- Run method does:
  - InputStream
  - Reader - gets input from newly connected user
    - reader.readLine();
  - OutputStream


