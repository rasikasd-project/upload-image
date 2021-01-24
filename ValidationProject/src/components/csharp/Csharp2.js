import React from 'react'
import {SiCsharp} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './c3.png'
import icon2 from './c2.png'

const Csharp1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "C-SHARP" language = "Csharp" next="/Csharp3" icon2={logo.Lname2}
             theoryContent = {
                <p>
                    <h4>C# Variables and (Primitive) Data Types<hr/></h4>
                     <p>A variable is a symbolic name given to a memory location. Variables are used to store data in a computer program.</p>


                    <h5>How to declare variables in C#?<hr/></h5>
                    Here's an example to declare a variable in C#.
                    <div class="card card-body">
                         <pre>
                             {`int age;
`}
                         </pre>
                         </div>

 

                             

                    <h5>However, the variable can also be initialized to some value during declaration. For example,<hr/></h5>
                    
                    <div class="card card-body">
                         <pre>
                             {`int age = 24;

`}
                         </pre>      
                      </div>
<p>Here, a variable age of type int is declared and initialized to 24 at the same time.</p>


<h5>Since, it’s a variable, we can change the value of variables as well. For example,<hr/></h5>
                    
                    <div class="card card-body">
                         <pre>
                             {`int age = 24;
age = 35;
`}
                         </pre>      
                      </div>

                    
                      <h5>Integer Types<hr/></h5>
                    <p>The int data type can store whole numbers from -2147483648 to 2147483647. In general, and in our tutorial, the int data type is the preferred data type when we create variables with a numeric value
                    </p>
                    Example
                    <div class="card card-body">
                         <pre>
                             {`int myNum = 100000;
Console.WriteLine(myNum);
`}
                         </pre>
                         </div>


                    <h5>Long<hr/></h5>
                    <p>
                    The long data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when int is not large enough to store the value. Note that you should end the value with an "L":
                    </p>
                    Example
                    <div class="card card-body">
                         <pre>
                             {`long myNum = 15000000000L;
Console.WriteLine(myNum);
`}
                         </pre>
                         </div>

 


                         <h5>Floating Point Types<hr/></h5>
                    <p>You should use a floating point type whenever you need a number with a decimal, such as 9.99 or 3.14515.</p>
                    Example
                    <div class="card card-body">
                         <pre>
                             {`int myNum = 100000;
Console.WriteLine(myNum);
`}
                         </pre>
                         </div>


                    <h5>Float<hr/></h5>
                    <p>
                    The float data type can store fractional numbers from 3.4e−038 to 3.4e+038. Note that you should end the value with an "F":
                    </p>
                    Example
                    <div class="card card-body">
                         <pre>
                             {`float myNum = 5.75F;
Console.WriteLine(myNum);
`}
                         </pre>
                         </div>

                         <h5>Double<hr/></h5>
                    <p>
                    The double data type can store fractional numbers from 1.7e−308 to 1.7e+308. Note that you can end the value with a "D" (although not required):
                    </p>
                    Example
                    <div class="card card-body">
                         <pre>
                             {`double myNum = 19.99D;
Console.WriteLine(myNum);
`}
                         </pre>
                         </div>

 
                    
                      
                    
                     
                </p> 
             }
             />


        </div>
    )
}

export default Csharp1
