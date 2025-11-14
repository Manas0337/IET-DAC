package com.demo.linkedlists;



public class SinglyLinkedList {
     Node head;
     
		class Node{ 
			int data;
			Node next;
	
			public Node(int data) {
				
				this.data = data;
				next = null;
			}	
		}

		public SinglyLinkedList() {
			
			head = null;
		}
		
		
		
		//add at end
		public void addNodeAtend(int val) {
		
		 Node newNode= new Node(val);
		 
		 if(head==null)
		 {
			 head = newNode;
			 
		 }
		 else {
			Node temp= head;
			
			while(temp.next != null)
			{
				temp=temp.next;
			}
			
		    temp.next=newNode;
		    
	 
		}
		 System.out.println("Node Added Succesfully............\n");
			
		}



		public void displaylinkedList() {
			if(head==null)
			{
				System.out.println("List Is Empty ");
			}else {
				
				for (Node temp = head; temp!=null ; temp=temp.next) {
					System.out.print(temp.data + " --> ");
				}
				System.out.println("null\n");
			}
			
		}


		//add By Position
		public void addNodeAtpos(int pos , int val) {
			Node newNode = new Node(val);
			
			if(pos==1)
			{
				newNode.next=head;
				head = newNode;
				
			}else {
				
				Node temp = head;
				for(int i =1 ;  i < pos - 1 && temp!=null; i++)
				{
					temp= temp.next;
				}
				if(temp!=null) {
					newNode.next = temp.next;
					temp.next = newNode;
					System.out.println("Value added at position " + pos);
				}
				else {
					System.out.println("Given positoin out of beyond!!.....");
				}
			}
			
		}


			//Add after Number
		public void addAfterNumber(int num, int val) {
			Node newNode = new Node(val);
			Node temp = head;
			while(temp != null && temp.data != num) {
				temp = temp.next;
			}
			if(temp!=null) {
				newNode.next = temp.next;
				temp.next = newNode; 
				System.out.println("Done........");
				
			}
			else {
				System.out.println(num+" Not Found........");
			}
			
		}



		public void DeleteByValue(int val) {
			
			if(head.data == val) {
				head = head.next;
				head.next = null;
			}
			else {
				Node temp = head;
				Node prev = null;
				
				while(temp!=null && temp.data != val) {
					prev = temp;
					temp = temp.next;
					
				}
				if(temp != null) {
					prev.next = temp.next;
					temp.next = null;
					System.out.println("Deleted done.........");
				}
				else {
					System.out.println("Values Not Found....");
				}
				
			}
			
		}



		public void DeleteByPos(int pos) {
			// TODO Auto-generated method stub
			
		}



	
		
		
		
		
		
		
		
}
