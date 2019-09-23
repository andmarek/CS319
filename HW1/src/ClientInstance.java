import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

public class ClientInstance {
    public static void main(String[] args) {
        Socket sock = null;
        int portNumber = 4444;

        try {
            sock = new Socket("localhost", portNumber);
        } catch (IOException e) {
            System.err.println("Connection error on port: " + portNumber);
            e.printStackTrace();
        }
    }


}
