public class StringExample {
    public static void main(String[] args) {
        String s="Here is my java Program";
        int count=0;
        s=s.toLowerCase();//s="here is my java program"
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
                count++;
            }
        }
        System.out.println("VOWELS Count from a given string:"+count);

    }
}
