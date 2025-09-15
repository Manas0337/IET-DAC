#include<iostream>
#include<climits>
using namespace std;
int main()
{
    int n;
    cout<<"Enter Array "<<endl;
    cin>>n;

    int* arr = new int[n];

    int slarge = INT_MIN;
    int largets = INT_MIN;

    cout<<"Enter array values"<<endl;
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }

    for(int i=0;i<n;i++)
    {
        if(arr[i] > largets)
    {
       slarge = largets;
       largets = arr[i];
    }
    else if(arr[i] > slarge && arr[i] != largets){
        slarge = arr[i];
    }  
    }
    cout<<"Second largest is "<<slarge;
    
}