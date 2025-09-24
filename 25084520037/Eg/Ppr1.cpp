#include<iostream>
#include<fstream>
#include<stdexcept>
using namespace std;

class Item{

     public:
    int id, stock;
    string itemName;
    double price;

    Item(){}
    Item(int i, int s,string n, double p){

        if(p<0 || s < 0)throw invalid_argument("Negative price/stock");
        id = i;
        itemName = n;
        price = p;
        stock = s;

    }
};
class Bill{

    public:
    int billID;
    string customer;
    int itemIDs[10],qtys[10],count;

    Bill(int id, string c){
        billID = id;
        customer = c;
        count = 0;
    }

Bill& operator+(Item &it){
    int qty;
    cout<<"Enter the qty for "<<it.itemName<<":";
    cin >> qty;
    if(qty <= 0)throw invalid_argument("qty must be greater than 0");
    if(qty > it.stock)throw runtime_error("stock not enough");
    it.stock = it.stock - qty;
    itemIDs[count] = it.id;
    qtys[count] = qty;
    count++;
    return *this;
}
Bill& operator<<(Bill &b){
if(b.count== 0) throw runtime_error("Empty bill");

cout <<" \n --Bill#" <<b.billID <<"--\nCustomer:"<<b.customer<<"\n";
for(int i = 0; i < b.count; i++){
    cout <<"itemID:"<<b.itemIDs[i]<<"qty"<<b.qtys[i]<<"\n";

}
cout<<"-------\n";
return b;
}

void save(){
    if(count == 0)throw runtime_error("Empty bill cannot be save");
    ofstream file("bill.txt",ios :: app);
    file<<"BillID: "<<billID<<"Customer: "<<customer<<"Items:\n";
    for(int i = 0; i < count; i++)
    file<<"("<<itemIDs[i]<<":"<<qtys[i]<<")";
    file<<"\n";

}


};
int  main(){
    try{
        Item item[3]= {{1,10,"mouse",500},{2,10,"Pendrive",700},{3,15,"keybourd",1200}};
        string name;
        cout<<"Enter customer name"<<endl;
        getline(cin,name);

        Bill b(1, name);
        int id = -1;
        while(id != 0){
            cout<<"\n Avilable items: \n";
            for(int i = 0 ; i< 3; i++)
            cout<<item[i].id <<")"<<item[i].itemName<<"Rs."<<item[i].price<<"Stock:" <<item[i].stock<<"\n";
            cout<<"Enter item id ( 0 to finish): ";
            cin >>id;
            if(id == 0)break;
            bool found = false;
            for(int i =0; i <3; i++){
                if(item[i].id == id){
                    b + item[i];
                    found = true;
                }
            }
            if(!found)
            cout<<"Invalid ID \n";
    }
    b<<b;
    b.save();
    cout<<"Bills save to bill .txt\n";
}

catch(exception &e){
    cout<<"Error:"<<e.what()<<"\n";
}
}