package test;
import stacks.MyStackLinkedList;
public class TestMyStackLinkedList {

	public static void main(String[] args) {
		MyStackLinkedList list = new MyStackLinkedList();
		list.push(12);
		list.push(23);
        list.push(54);
        list.push(56);
        list.push(34);
        list.push(25);
        list.push(33);
        
        
        
        System.out.println("--------------");
        System.out.println(list.pop());
        System.out.println(list.pop());
		System.out.println(list.pop());
		System.out.println(list.pop());
		System.out.println(list.pop());
		System.out.println(list.pop());
		System.out.println(list.pop());//stack is empty
	}

}
