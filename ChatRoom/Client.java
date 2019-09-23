package HW1;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class Client {
	
	static Socket sock = null;

	
	public static void main(String args[]) {
		// Get input from user
		Scanner scan = new Scanner(System.in);

		System.out.print("Enter port: ");
		String port = scan.nextLine();

		/* Finally connecting to the client */
		try {
			sock = new Socket("localhost", Integer.parseInt(port));

			DataInputStream in = new DataInputStream(sock.getInputStream());
			DataOutputStream out = new DataOutputStream(sock.getOutputStream());

			Thread listener = new Thread(new Runnable(){
				@Override
				public void run() {
					while (true) { 
						try {
							System.out.println(in.readUTF());
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}					
				}});

			Thread writer = new Thread(new Runnable() {

				@Override
				public void run() {
					try {
						while(true) 
							if( scan.hasNextLine() )
								out.writeUTF(scan.nextLine());
						
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} finally {
						try {
							sock.close();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}
				}
			});

			listener.start();
			writer.start();
		} catch (IOException e ) {
			System.out.println("Could not connect to: Localhost, " + port +"." );
			e.printStackTrace();
		} 
	}
}
