public class WordCount{

   public static void main(String[] args) {
      String var1 = "Here is my Java Program";
      String[] var2 = var1.split(" "); //var2={"Here","is","my","Java"."progran"}
      int count = 0;

      for(int i= 0; i < var2.length; i++) {
         count++;
      }

      System.out.println("Total words count from a given string:" + count);
   }
}

