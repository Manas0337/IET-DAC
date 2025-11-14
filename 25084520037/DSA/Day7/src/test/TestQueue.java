package test;
import queue.MyQueue;
public class TestQueue {

	public static void main(String[] args) {
		MyQueue qlist=new MyQueue();
		qlist.enQueue(12);
		qlist.enQueue(34);
		qlist.enQueue(3);
		qlist.enQueue(5);
		qlist.enQueue(16);
		System.out.println(qlist.deQueue());
		System.out.println(qlist.deQueue()); 
		System.out.println(qlist.deQueue());
		System.out.println(qlist.deQueue());
		System.out.println(qlist.deQueue());
		System.out.println(qlist.deQueue());//queue is empty


	}

}
