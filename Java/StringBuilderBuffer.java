public class StringBuilderBuffer {
    

public static void main(String[] args)
{
    long start , end;
    start =  System.currentTimeMillis();
    String s ="";//0x001
    for (int i=0 ;i<500 ; i++)
    {

      s+="SomeValue";//internally converts :s = new String(s + "SomeValue");//0x010
      System.out.println(System.identityHashCode(s));
      //Strings cant changes once it is created:Immutable
      //For every concatenation creates a new object
      //Old objects garbage collected
      //perfomance is low because every time creating new object and destroying old objects takes time
      //identityHashCode:Shows actual memory address of the object



    }
    end = System.currentTimeMillis();
    System.err.println("Total time take using normal String :" + (end-start));

    //StringBuilder -- it is a substitute of string to make it as mutable and fast - its not a thread safe 
    // efficient in appending to the same location and no new object will be created 

    System.out.println("Using String Builder");
    start =  System.currentTimeMillis();
    StringBuilder sb = new StringBuilder();
    for (int i=0 ;i<500 ; i++)
    {

      sb.append("SomeValue");
      System.out.println(System.identityHashCode(sb));
      //StringBuilder modifies the SAME object internally
      //NO new objects created - just grows the existing one


    }
    end = System.currentTimeMillis();
    System.out.println("Total time take using normal String :" + (end-start));



    //StringBuffer -- it is a substitute of string to make it as mutable and slow - it's a  thread safe apply using 
    //  synchronization
    // efficient in appending to the same location and no new object will be created 

    System.err.println("Using String Buffer");
    start =  System.currentTimeMillis();
    StringBuffer sbuffer = new StringBuffer();
    for (int i=0 ;i<500 ; i++)
    {

      sbuffer.append("SomeValue");
      System.out.println(System.identityHashCode(sbuffer));


    }
    end = System.currentTimeMillis();
    System.err.println("Total time take using normal String :" + (end-start));

}
}
