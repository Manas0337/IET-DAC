package com.demo.service;

import java.util.List;
import java.util.Map;

import com.demo.beans.Customer;
import com.demo.beans.Item;

public interface OrderServiceI 
{

	boolean addNewCustomer();

	Map<Customer, List<Item>> displayAll();

	List<Item> displayByCustomerId(int cid);

	boolean deleteCustomerById(int cid);

	boolean deleteItemInExistingOrder(int cid, int iid);

	boolean addNewItemInExixtingOrder(int cid, Item item);

	

}
