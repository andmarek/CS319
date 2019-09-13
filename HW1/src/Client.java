import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.util.Scanner;

public class Client {

    private Socket socket;
    private Scanner s;

    public Client(InetAddress addr, int port) throws Exception {
        this.socket = new Socket(addr, port);
        this.s = new Scanner(System.in);
    }

    public void ConnectToServer() throws IOException {
        String in;

        while (true) {
            in = s.nextLine();

            PrintWriter out = new PrintWriter(this.socket.getOutputStream(), true);
            out.println(in);
            out.flush();
        }
    }
    public static void main(String[] args) throws Exception {
        Client client = new Client(
                InetAddress.getByName(args[0]),
                Integer.parseInt(args[1])
        );

        System.out.println("Connected to server: " + client.socket.getInetAddress());
        client.ConnectToServer();
    }
}
