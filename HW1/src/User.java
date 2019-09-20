import java.io.*;
import java.net.Socket;

public class User extends Thread {
    private Socket socket;
    private HostServer server;
    private PrintWriter writer;

    public User(Socket socket, HostServer server) {
       this.socket = socket;
       this.server = server;
    }

    public void run() {
        try {
            //Create an input stream to get input from socket.
            InputStream input = socket.getInputStream();

            //Reader to read input from stream.
            BufferedReader r = new BufferedReader(new InputStreamReader(input));

            OutputStream o = socket.getOutputStream();
            writer = new PrintWriter(o, true);

            //Prompt for username
            String userName = r.readLine();

            server.addUserName(userName);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
