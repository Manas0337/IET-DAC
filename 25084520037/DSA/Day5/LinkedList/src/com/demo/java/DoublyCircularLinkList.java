package com.demo.java;

public class DoublyCircularLinkList {
	
	class Node {
        int data;
        Node next, prev;

        Node(int data) {
            this.data = data;
        }
    }

    private Node head = null;

    // Add by position
    public void addByPosition(int data, int position) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            head.next = head;
            head.prev = head;
            return;
        }

        if (position == 1) { // insert at head
            Node tail = head.prev;
            newNode.next = head;
            newNode.prev = tail;
            tail.next = newNode;
            head.prev = newNode;
            head = newNode;
            return;
        }

        Node temp = head;
        for (int i = 1; i < position - 1 && temp.next != head; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        newNode.prev = temp;
        temp.next.prev = newNode;
        temp.next = newNode;
    }

    // Add by value (insert after a given value)
    public void addByValue(int data, int value) {
        if (head == null) return;

        Node temp = head;
        do {
            if (temp.data == value) {
                Node newNode = new Node(data);
                newNode.next = temp.next;
                newNode.prev = temp;
                temp.next.prev = newNode;
                temp.next = newNode;
                return;
            }
            temp = temp.next;
        } while (temp != head);
    }

    // Delete by position
    public void deleteByPosition(int position) {
        if (head == null) return;

        if (position == 1) {
            if (head.next == head) {
                head = null;
                return;
            }
            Node tail = head.prev;
            head = head.next;
            head.prev = tail;
            tail.next = head;
            return;
        }

        Node temp = head;
        for (int i = 1; i < position && temp.next != head; i++) {
            temp = temp.next;
        }

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }

    // Delete by value
    public void deleteByValue(int value) {
        if (head == null) return;

        Node temp = head;
        do {
            if (temp.data == value) {
                if (temp == head) {
                    if (head.next == head) {
                        head = null;
                        return;
                    }
                    Node tail = head.prev;
                    head = head.next;
                    head.prev = tail;
                    tail.next = head;
                } else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                }
                return;
            }
            temp = temp.next;
        } while (temp != head);
    }

    // Display list
    public void display() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        Node temp = head;
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println();
    }
	}



