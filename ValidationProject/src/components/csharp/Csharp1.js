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
            <Tutorial icons = {logo.Lname} name = "C-SHARP" language = "Csharp" next="/Csharp2" icon2={logo.Lname2}
             theoryContent = {
                <p>
                    <h4>C# Hello World - Your First C# Program<hr/></h4>
                     <p>The “Hello World!” program is often the first program we see when we dive into a new language. It simply prints Hello World! on the output screen.</p>
                    <div class="card card-body">
                         <pre>
                             {`// Hello World! program
namespace HelloWorld
{
    class Hello {         
        static void Main(sting[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
`}
                         </pre>      
                      </div>


                      <h4>C# Comments<hr/></h4>
                     <p>Comments can be used to explain C# code, and to make it more readable. It can also be used to prevent execution when testing alternative code.

Single-line comments start with two forward slashes (//).

Any text between // and the end of the line is ignored by C# (will not be executed).

This example uses a single-line comment before a line of code:</p>


<p>This example uses a single-line comment at the end of a line of code:</p>
                     Example               
                    <div class="card card-body">
                         <pre>
                             {`Console.WriteLine("Hello World!");  // This is a comment              
`}
                         </pre>      
                      </div>
 


                      <h4>C# Multi-line Comments<hr/></h4>
                     <p>Multi-line comments start with /* and ends with */.

Any text between /* and */ will be ignored by C#.

This example uses a multi-line comment (a comment block) to explain the code:</p>


<p>This example uses a single-line comment at the end of a line of code:</p>
                     Example               
                    <div class="card card-body">
                         <pre>
                             {`/* The code below will print the words Hello World
to the screen, and it is amazing */
Console.WriteLine("Hello World!");         
`}
                         </pre>      
                      </div>


                             

                    <h4>Alternative Hello World! implementation<hr/></h4>
                    
                    <div class="card card-body">
                         <pre>
                             {`// Hello World! program
using System;
 
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
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

export default Csharp1
