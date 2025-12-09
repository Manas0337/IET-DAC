package com.demo.dao;

import java.util.List;
import java.util.Map;

import com.demo.beans.Customer;
import com.demo.beans.Item;

public interface OrderDaoI 
{

	boolean save(Customer customer, List<Item> ilist);

	Map<Customer, List<Item>> displayAll();

	List<Item> displaybyCustomerId(int cid);

	boolean deleteCustomerById(int cid);

	boolean deleteItemInExistingOrder(int cid, int iid);

	boolean addNewItemInExixtingOrder(int cid, Item item);

}
