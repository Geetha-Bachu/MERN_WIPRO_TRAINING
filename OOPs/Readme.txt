Object Oriented Programming:Reusable,Organize code,Security
    It has main pillars :
        Class / Object
        object:
          1.Each objects have its own data  but shares same behavious

        Encapsulation -Wrapping the data + methods
        Hiding actual data using private as a keyword
        1) Mainly focus on data 
        2) permission access either to read or write or both 
        3) validation while setting the data 
                    
        all attributes of a class are private in nature but indirectly we can 
                        access them so, to achieve  this we create getter and setter methods

                        for eg :  private long password ;  
                        we create a setter method which is write only method to 
                    set the password and we cannot read it as we have not created a getter method for it ( read method) .
        
        Abstraction : focussing on implementation hiding (achieved by either abstract class or interface)
        (cares what it does but not how it does)

        Inheritance :  when a child class is inheriting the features of base class like a child inherit the properties of father
       
       
        Polymorphism :  many forms when one object behaves many forms. 
        There  are two types static polymorphism and dynamic polymorphism
           1. Static Polymorphism: When we have multiple methodswith same name but different signature in same class
           2.Dynamic Polymorphism: When we have multiple methods with same name,with same signature in child class---(overriding)
         