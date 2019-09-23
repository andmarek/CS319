package HW1;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;

public class UserThread implements Runnable {
	boolean access; 
	private Socket s;
	private DataInputStream in;
	private DataOutputStream out;
	private Server server;
	private String accessCode;

	public UserThread(Socket s, Server server) {
		this.server = server;
		this.s = s;

		accessCode = "9999";

		try {
			this.in = new DataInputStream(s.getInputStream());
			this.out = new DataOutputStream(s.getOutputStream());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Override
	public void run() {
		String userName = "";
		String enterAccess = "";

		try {
			//Ask for user name 
			this.out.writeUTF("Enter your username: ");
			out.flush();
			userName = this.in.readUTF();
			System.out.println("Your username is " + userName);

			//Ask for accessCode until it's right
			while (!(accessCode.equals(enterAccess))) {
				this.out.writeUTF("Enter your access code: ");
				out.flush();
				enterAccess = this.in.readUTF();
			}
			this.access = true;
			
			while (true) {
				try {
					String messageToSend = in.readUTF(); 
					System.out.println(userName + ": " + messageToSend);

					//Send messages
					for ( UserThread u : server.getUserList()) {
						if (u == this || !(u.access)) {
							continue;
						}
						u.out.writeUTF(userName + ": " + messageToSend);
						System.out.println(messageToSend);
					}

				} catch (IOException e) {
					// TODO Auto-generated catch block
				//	e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			System.out.println("Socket disconnected.");
		}
	}
}
