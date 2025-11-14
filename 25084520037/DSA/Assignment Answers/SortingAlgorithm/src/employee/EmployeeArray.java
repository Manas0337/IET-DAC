package employee;
import beans.Employee;
public class EmployeeArray {
	
	// Bubble Sort
    public static void bubbleSort(Employee[] arr, int n) {
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j].getSalary() > arr[j + 1].getSalary()) {
                    Employee temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Insertion Sort (for adding new employees)
    public static void insertionSort(Employee[] arr, int n) {
        for (int i = 1; i < n; i++) {
            Employee key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j].getSalary() > key.getSalary()) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    // Print employees
    public static void printEmployees(Employee[] arr, int n) {
        for (int i = 0; i < n; i++) {
            System.out.println(arr[i]);
        }

}
}
