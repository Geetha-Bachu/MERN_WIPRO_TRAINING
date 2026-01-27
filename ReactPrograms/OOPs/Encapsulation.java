package OOPs;

public class Encapsulation {
    private int id;
    private String name;
    private long phoneNo;
    private double balance;
    
//public double balance;//is calculated via deposit and withdraw
   

    public double getBalance() {
    return balance;
}
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public long getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(long phoneNo) {
        this.phoneNo = phoneNo;
    }
    public void deposit(double amount){
        if(amount>0){
            balance+=amount;
        }

    }
    public static void main(String[] args){
        Encapsulation e=new Encapsulation();
        e.setName("Geetha");
        e.deposit(5000);
        System.out.println("Hi"+e.getName()+" after deposit:"+e.getBalance());

    }

}

