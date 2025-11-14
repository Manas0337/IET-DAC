
package test.demo.java;

import com.demo.java.DoublyLinkedList;

public class TestDoublyLinkedList {

	public static void main(String[] args) {
		DoublyLinkedList dlist=new DoublyLinkedList();
	dlist.addByValue(1, 12);
	dlist.addByPosition(2, 14);
	dlist.addNode(11);
	dlist.deleteByPosition(2);
	dlist.deleteByValue(0);
	dlist.addNode(13);
	dlist.displayData();
	dlist.displayDataReverse();
	
	}

}
