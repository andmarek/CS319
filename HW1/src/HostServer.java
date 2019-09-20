import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashSet;
import java.util.Set;

import static java.lang.System.*;

public class HostServer {
    private int accessCode;
    private int portNumber;

    //A set doesn't allow duplicates
    private Set<String> connectedUsers = new HashSet<>();
    private Set<User> users = new HashSet<>();

    public HostServer(int portNumber, int accessCode) {
        this.portNumber = portNumber;
        this.accessCode = accessCode;
    }

    public void run() {
        try (ServerSocket serverSocket = new ServerSocket(portNumber)) {

            System.out.println("Server successfully listening on port: " + portNumber);

            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("New user connected");

                // Instantiate a new thread (a user)
                User newUser = new User(socket, this);
                //Add a new user to the set
                users.add(newUser);
                // Starts the thread
                newUser.start();
            }

        } catch (IOException e) {
            System.out.println("Error" + e.getMessage());
            e.printStackTrace();
        }

    }

    /**
     * Adds a username to the userName set.
     * @param userName
     */
    public void addUserName(String userName) {
        connectedUsers.add(userName);
    }

    /**
     * Removes a username to the userName set.
     * @param userName
     */
    public void removeUserName(String userName) {
        this.connectedUsers.remove(userName);
    }

    /**
     * Removes a user (class) from the set.
     * @param u
     */
    public void removeUser(User u) {
        this.connectedUsers.remove(u);
    }
}
