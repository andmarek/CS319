package HW1;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashSet;

public class Server {
	private int portNumber;

	private ServerSocket ss = null;

	private HashSet<UserThread> connectedUsers = new HashSet<>();

	public Server(int portNumber) {
		this.portNumber = portNumber;

		try {
			ss = new ServerSocket(this.portNumber);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public void run() {
		System.out.println("Server started running");

		Socket s = null;

		while (true) {
			try {
				s = ss.accept();
				UserThread u = new UserThread(s, this);

				connectedUsers.add(u);

				Thread p = new Thread(u);

				p.start();

			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

	public static void main(String args[]) {
		Server s = new Server(9090);
		s.run();
	}

	public HashSet<UserThread> getUserList() {
		return connectedUsers;
	}
}
