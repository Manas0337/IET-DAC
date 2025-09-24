#include<iostream>
#include<string.h>
#include<fstream>
using namespace std;
class Item{
    int itemID;
    int stockQuantity;
    char itemName[50];
    float price;
    public:
    Item(){};
    Item(int itemID,int stockQuantity, char itemName[50],float price){
        this->itemID = itemID;
        strcpy(this->itemName,itemName);
        this->price = price;
        this->stockQuantity = stockQuantity;
        try{
            if(stockQuantity<=0){
                throw "Error : Qyt cannot be zero or negative";
            }
        }catch(const char* str){
            cout<<str<<endl;
        }
        try{
            if(price<=0){
            throw "Error : Price cannot be zero or negative";
        }
        }catch(const char* str){
            cout<<str<<endl;
        } 
    }
    friend class Bill;
};
class Bill{
    int billID;
    static int index;
    char customerName[50];
    Item purchased[50];
    public:
    Bill(){};
    Bill(int billID,char customerName[50]){
        this->billID = billID;
        strcpy(this->customerName,customerName);
    }
    Bill& operator+(Item & i1){
        purchased[index] = i1;
        index++;
        return *this;
    }
   ostream& operator<<(ostream& out){
        out << this->billID <<endl;
        out << this->customerName<<endl;
        out << this->purchased->itemID<<endl;
        out << this->purchased->itemName<<endl;
        out << this->purchased->stockQuantity<<endl;
        out << this->purchased->price<<endl;
        return out;
    }
    void saveTOFile(){
        ofstream my_file("Bill.txt" , ios::app);
        if(!my_file.is_open()){
            cout<<"Error : File not opened"<<endl;
        }
        else{
            my_file<<"Bill ID : "<<this->billID<<endl;
            my_file<<"Customer : "<<this->customerName<<endl;
            cout<<"Purchased Items"<<endl;
            my_file<<"Item ID : "<< this->purchased->itemID<<endl;
            my_file<<"Item Name : "<< this->purchased->itemName<<endl;
            my_file<<"Quantity : "<< this->purchased->stockQuantity<<endl;
            my_file<<"Price : "<< this->purchased->price<<endl;
            my_file.close();
        }
    }
    
};
int Bill::index = 0;
void loadFile(){
        ifstream my_file("Bill.txt");
        if(!my_file.is_open()){
            cout<<"Error : File not found"<<endl;
        }
        else{
            string line;
            while(getline(my_file,line)){
                cout<<line<<endl;
            }
                
            
        }
    }
int main(){
    loadFile();
    int stock;
    int itemID;
    float price;
    char itemName[50];
    cout<<"Enter Product details"<<endl;
    cout<<"Enter Product ID"<<endl;
    cin>>itemID;
    cout<<"Enter Product name"<<endl;
    cin>>itemName;
    cout<<"Enter quantity"<<endl;
    cin>>stock;
    cout<<"Enter Price"<<endl;
    cin>>price;
    Item i1(itemID,stock,itemName,price);
    char name[50];
    int billID;
    cout<<"Enter Bill ID"<<endl;
    cin>>billID;
    cout<<"Enter Customer Name"<<endl;
    cin>>name;
    Bill b1(billID,name);
    Bill b2 = b1 + i1;
    b2<<cout<<endl; 
    b2.saveTOFile();

}