import React from 'react'
import Tutorial from '../Tutorial'
import {SiJava} from 'react-icons/si'
import icon from './java9.png'
import icon2 from './java1.png'

const Java1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
          <Tutorial icons = {logo.Lname} name = "JAVA" language = "java" next="/Java3" icon2={logo.Lname2}
          theoryContent = {
                   <p className="TutorialPadding">
                       <h3 className="Thead">Java Methods<hr/></h3>
                        <p>A method is a block of code that performs a specific task.</p>

                      

                       <h4 className="Thead">Declaring a Java Method<hr/></h4>
                       The syntax to declare a method is:
                       <div class="card card-body">
                            <pre>
                                {`returnType methodName() {
  // method body
}
`}
                            </pre>      
                         </div>
    Here,
   <p> 1. returnType - It specifies what type of value a method returns For example if a method has an int return type then it returns an integer value.If the method does not return a value, its return type is void.</p>
   <p> 2. methodName - It is an identifier that is used to refer to the particular method in a program.</p>
<p>3. method body - It includes the programming statements that are used to perform some tasks. The method body is enclosed inside the curly braces { }.</p>
<p>For example,</p>

                       <div class="card card-body">
                            <pre>
                                {`int addNumbers() {
// code
}
`}
                            </pre>      
                         </div>

                         
                       <p> In the above example, the name of the method is adddNumbers(). And, the return type is int. We will learn more about return types later in this tutorial.</p>

                       <h4 className="Thead">Static vs. Non-Static<hr/></h4>
                       <p>You will often see Java programs that have either static or public attributes and methods.

In the example above, we created a static method, which means that it can be accessed without creating an object of the class, unlike public, which can only be accessed by objects:</p>
                       <div class="card card-body">
                            <pre>
                                {`public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  // Main method
  public static void main(String[] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would compile an error

    Main myObj = new Main(); // Create an object of Main
    myObj.myPublicMethod(); // Call the public method on the object
  }
}
  // method body
}
`}
                            </pre>      
                         </div>




                         <h4 className="Thead">Access Methods With an Object<hr/></h4>
                       <p>Create a Car object named myCar. Call the fullThrottle() and speed() methods on the myCar object, and run the program:</p>
                       <div class="card card-body">
                            <pre>
                                {`public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  // Main method
  public static void main(String[] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would compile an error

    Main myObj = new Main(); // Create an object of Main
    myObj.myPublicMethod(); // Call the public method on the object
  }
}
  // method body
}
`}
                            </pre>      
                         </div>

                   </p> 

                    

                }
                />
            
        </div>
    )
}

export default Java1
