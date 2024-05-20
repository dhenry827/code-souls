import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/styles.css'
import { TopicContext } from "../App";



const Home = () => {

    const { topic, changeTopic } = useContext(TopicContext)

    const htmlProblems = [
        [
            { problem: "What does HTML stand for?" },
            { answers: ["hyper text markup language", "hyper text mark-up language"] },
            { explanation: "HTML stands for Hyper Text Markup Language." }
        ],
        [
            { problem: "Which HTML tag is used for creating hyperlinks?" },
            { answers: ["a", "<a>"] },
            { explanation: "The '<a>' tag is used for creating hyperlinks." }
        ],
        [
            { problem: "Which HTML element is used for creating a bulleted list?" },
            { answers: ["ul", "<ul>"] },
            { explanation: "The '<ul>' tag is used for creating bulleted lists." }
        ],
        [
            { problem: "Which tag is used to define the structure of an HTML document?" },
            { answers: ["html", "<html>"] },
            { explanation: "The '<html>' tag defines the structure of an HTML document." }
        ],
        [
            { problem: "Which HTML tag defines a footer for a document or section?" },
            { answers: ["footer", "<footer>"] },
            { explanation: "The '<footer>' tag defines a footer for a document or section." }
        ],
        [
            { problem: "This HTML tag contains meta-information about the HTML document." },
            { answers: ["head", "<head>"] },
            { explanation: "The '<head>' tag contains meta-information about an HTML document." }
        ],
        [
            { problem: "How can you make text bold in HTML?" },
            { answers: ["strong", "b", "<strong>", "<b>"] },
            { explanation: "Text can be made bold using either the '<b>' tag or the '<strong>' tag." }
        ],
        [
            { problem: "What does the acronym DOCTYPE stand for?" },
            { answers: ["document type definition"] },
            { explanation: "DOCTYPE is short for document type definition." }
        ],
        [
            { problem: "Which HTML tag is used to create an ordered list?" },
            { answers: ["ol", "<ol>"] },
            { explanation: "The '<ol>' tag is used to create ordered lists." }
        ],
        [
            { problem: "Represents introductory content, usually a group of introductory or navigational aids." },
            { answers: ["header", "<header>"] },
            { explanation: "The '<header>' tag represents introductory content, usually a group of introductory or navigational aids." }
        ],
        [
            { problem: "In an <img> tag, this attribute provides alternative text for the image." },
            { answers: ["alt"] },
            { explanation: "The 'alt' attribute in an '<img>' tag provides alternative text for the image." }
        ],
        [
            { problem: "Which tag is used to create a line break in HTML?" },
            { answers: ["br", "<br>"] },
            { explanation: "The '<br>' tag is used to create a line break in HTML." }
        ],
        [
            { problem: "What is the default alignment of text in an HTML document?" },
            { answers: ["left", "left-align", "left-aligned", "left align", "left aligned"] },
            { explanation: "The default alignment of text in an HTML document is left." }
        ],
        [
            { problem: "Which tag is used to define an inline frame?" },
            { answers: ["iframe", "<iframe>"] },
            { explanation: "The '<iframe>' tag is used to define an inline frame." }
        ],
        [
            { problem: "This HTML tag represents a section of a page that links to other pages or to parts within the page." },
            { answers: ["nav", "<nav>"] },
            { explanation: "The '<nav>' tag represents a section of a page that links to other pages or to parts within the page." }
        ],
        [
            { problem: "This HTML tag represents a self-contained piece of content that could be distributed and reused independently." },
            { answers: ["article", "<article>"] },
            { explanation: "The '<article>' tag represents a self-contained piece of content that could be distributed and reused independently." }
        ],
        [
            { problem: "Which tag is used to define a form in HTML?" },
            { answers: ["form", "<form>"] },
            { explanation: "The '<form>' tag is used to define a form in HTML." }
        ],
        [
            { problem: "This HTML tag represents a generic section of a document." },
            { answers: ["section", "<section>"] },
            { explanation: "The '<section>' tag represents a generic section of a document." }
        ],
        [
            { problem: "Which HTML tag is used for defining a clickable button?" },
            { answers: ["button", "<button>"] },
            { explanation: "The '<button>' tag is used for defining a clickable button." }
        ],
        [
            { problem: "Which tag is used for defining subscript text?" },
            { answers: ["sub", "<sub>"] },
            { explanation: "The '<sub>' tag is used for defining subscript text." }
        ],
        [
            { problem: "How do you make text italic in HTML?" },
            { answers: ["i", "<i>", "em", "<em>"] },
            { explanation: "Text can be made italic using either the '<i>' tag or the '<em>' tag." }
        ],
        [
            { problem: "Which attribute is used to specify the language of the text in an HTML document?" },
            { answers: ["lang"] },
            { explanation: "The 'lang' attribute is used to specify the language of the text in an HTML document." }
        ],
        [
            { problem: "This HTML tag represents text that should be marked or highlighted." },
            { answers: ["mark", "<mark>"] },
            { explanation: "The '<mark>' tag represents text that should be marked or highlighted." }
        ],
        [
            { problem: "Which tag is used for defining the main content of an HTML document?" },
            { answers: ["main", "<main>"] },
            { explanation: "The '<main>' tag is used for defining the main content of an HTML document." }
        ],
        [
            { problem: "Which tag is used for defining a group of related options in a dropdown list?" },
            { answers: ["optgroup", "<optgroup>"] },
            { explanation: "The '<optgroup>' tag is used for defining a group of related options in a dropdown list." }
        ],
        [
            { problem: "Which attribute is used to set the maximum number of characters allowed in an input field?" },
            { answers: ["maxlength"] },
            { explanation: "The 'maxlength' attribute is used to set the maximum number of characters allowed in an input field." }
        ],
        [
            { problem: "Which attribute is used to set the minimum number of characters allowed in an input field?" },
            { answers: ["minlength"] },
            { explanation: "The 'minlength' attribute is used to set the minimum number of characters allowed in an input field." }
        ],
        [
            { problem: "Which tag is used for defining a list item in an ordered or unordered list?" },
            { answers: ["li", "<li>"] },
            { explanation: "The '<li>' tag is used for defining a list item in an ordered or unordered list." }
        ],
        [
            { problem: "This HTML tag represents the completion progress of a task." },
            { answers: ["progress", "<progress>"] },
            { explanation: "The '<progress>' tag represents the completion progress of a task." }
        ],
        [
            { problem: "Which tag is used for defining a definition description in a description list?" },
            { answers: ["dd", "<dd>"] },
            { explanation: "The '<dd>' tag is used for defining a definition description in a description list." }
        ],
        [
            { problem: "Which HTML tag defines the largest heading size?" },
            { answers: ["h1", "<h1>"] },
            { explanation: "The '<h1>' tag defines the largest heading size." }
        ],
        [
            { problem: "Which HTML tag defines the smallest heading size?" },
            { answers: ["h6", "<h6>"] },
            { explanation: "The '<h6>' tag defines the smallest heading size." }
        ],
        [
            { problem: "Which attribute is used to specify the type of input in an <input> tag?" },
            { answers: ["type"] },
            { explanation: "The 'type' attribute is used to specify the type of input in an '<input>' tag." }
        ],
        [
            { problem: "Which tag is used for defining superscript text?" },
            { answers: ["sup", "<sup>"] },
            { explanation: "The '<sup>' tag is used for defining superscript text." }
        ],
        [
            { problem: "Which attribute is used to set the placeholder text in an input field?" },
            { answers: ["placeholder"] },
            { explanation: "The 'placeholder' attribute is used to set the placeholder text in an input field." }
        ],
        [
            { problem: "Which HTML tag is used for creating a dropdown list?" },
            { answers: ["select", "<select>"] },
            { explanation: "The '<select>' tag is used for creating a dropdown list." }
        ],
        [
            { problem: "Elements such as <nav>, <header>, <footer> and <form> are known as ____ HTML elements." },
            { answers: ["semantic"] },
            { explanation: "" }
        ],
        // [
        //   { problem: "" },
        //   { answers: [""] }
        // ],
    ]

    const cssProblems = [
        [
            { problem: "What does CSS stand for?" },
            { answers: ["cascading style sheets"] },
            { explanation: "CSS stands for Cascading Style Sheets." }
        ],
        [
            { problem: "Which CSS property is used for changing the text color?" },
            { answers: ["color"] },
            { explanation: "The 'color' property is used to change the text color." }
        ],
        [
            { problem: "Which property is used to control the space between letters in a text?" },
            { answers: ["letter-spacing"] },
            { explanation: "The 'letter-spacing' property controls the space between letters in a text." }
        ],
        [
            { problem: "What is the CSS property for changing the background color of an element?" },
            { answers: ["background-color"] },
            { explanation: "The 'background-color' property changes the background color of an element." }
        ],
        [
            { problem: "Which CSS property controls the space inside an element's border?" },
            { answers: ["padding"] },
            { explanation: "The 'padding' property controls the space inside an element's border." }
        ],
        [
            { problem: "Which CSS property controls the space outside an element's border?" },
            { answers: ["margin"] },
            { explanation: "The 'margin' property controls the space outside an element's border." }
        ],
        [
            { problem: "This is how can you hide an element in CSS: 'display: ______'" },
            { answers: ["none", "none;"] },
            { explanation: "You can hide an element using 'display: none;'." }
        ],
        [
            { problem: "Which CSS property is used to create rounded corners?" },
            { answers: ["border-radius"] },
            { explanation: "The 'border-radius' property is used to create rounded corners." }
        ],
        [
            { problem: "Which CSS property is used to control the space between lines of text?" },
            { answers: ["line-height"] },
            { explanation: "The 'line-height' property controls the space between lines of text." }
        ],
        [
            { problem: "This CSS property specifies the positioning method used for an element." },
            { answers: ["position"] },
            { explanation: "The 'position' property specifies the positioning method used for an element." }
        ],
        [
            { problem: "Which CSS property is used for controlling the size of text?" },
            { answers: ["font-size"] },
            { explanation: "The 'font-size' property controls the size of text." }
        ],
        [
            { problem: "This CSS property controls the transparency of an element." },
            { answers: ["opacity"] },
            { explanation: "The 'opacity' property controls the transparency of an element." }
        ],
        [
            { problem: "How do you apply a shadow to text in CSS?" },
            { answers: ["text-shadow"] },
            { explanation: "You apply a shadow to text using the 'text-shadow' property." }
        ],
        [
            { problem: "Which CSS property is used to control the order of overlapping elements?" },
            { answers: ["z-index"] },
            { explanation: "The 'z-index' property controls the order of overlapping elements." }
        ],
        [
            { problem: "This CSS property defines how the sizing of an element's box model should be calculated." },
            { answers: ["box-sizing"] },
            { explanation: "The 'box-sizing' property defines how the sizing of an element's box model should be calculated." }
        ],
        [
            { problem: "This CSS property adds transition effects to CSS properties." },
            { answers: ["transition"] },
            { explanation: "The 'transition' property adds transition effects to CSS properties." }
        ],
        [
            { problem: "Which CSS property is used for controlling the space between words in text?" },
            { answers: ["word-spacing"] },
            { explanation: "The 'word-spacing' property controls the space between words in text." }
        ],
        [
            { problem: "What is the CSS property for controlling the spacing between elements in a flex container?" },
            { answers: ["justify-content"] },
            { explanation: "The 'justify-content' property controls the spacing between elements in a flex container." }
        ],
        [
            { problem: "How do you select the first child of an element in CSS?" },
            { answers: [":first-child", "first-child"] },
            { explanation: "You select the first child of an element using ':first-child'." }
        ],
        [
            { problem: "What is the CSS property for controlling the visibility of an element?" },
            { answers: ["visibility"] },
            { explanation: "The 'visibility' property controls the visibility of an element." }
        ],
        [
            { problem: "How do you select the last child of an element in CSS?" },
            { answers: [":last-child", "last-child"] },
            { explanation: "You select the last child of an element using ':last-child'." }
        ],
        [
            { problem: "What is the CSS property for controlling the spacing between columns in a multi-column layout?" },
            { answers: ["column-gap"] },
            { explanation: "The 'column-gap' property controls the spacing between columns in a multi-column layout." }
        ],
        [
            { problem: "What is the CSS property for controlling the indentation of the first line of text in an element?" },
            { answers: ["text-indent"] },
            { explanation: "The 'text-indent' property controls the indentation of the first line of text in an element." }
        ],
        [
            { problem: "This CSS property specifies whether an element should float to the left, right, or none." },
            { answers: ["float"] },
            { explanation: "The 'float' property specifies whether an element should float to the left, right, or none." }
        ],
        [
            { problem: "How do you select an element with a specific class in CSS? '_classname { }'" },
            { answers: ["."] },
            { explanation: "You select an element with a specific class using '.' followed by the class name." }
        ],
        [
            { problem: "How do you select all paragraphs in CSS? '____ { }'" },
            { answers: ["p"] },
            { explanation: "You select all paragraphs using 'p'." }
        ],
        [
            { problem: "What does the CSS acronym RGB stand for?" },
            { answers: ["red, green, blue", "red green blue"] },
            { explanation: "RGB stands for Red, Green, Blue." }
        ],
        [
            { problem: "True or False: You can include multiple CSS files in HTML by using multiple <link> tags in the <head> section." },
            { answers: ["true", "1"] },
            { explanation: "True. You can include multiple CSS files in HTML by using multiple '<link>' tags in the '<head>' section." }
        ],
        [
            { problem: "How can you select an element with a specific ID in CSS? '_elementid { }" },
            { answers: ["#"] },
            { explanation: "You select an element with a specific ID using '#' followed by the ID." }
        ],
        [
            { problem: "How do you select all elements inside another element in CSS? '_____ _____ { }'" },
            { answers: ["parentelement childelement"] },
            { explanation: "You select all elements inside another element using 'parentelement childelement'." }
        ],
        [
            { problem: "This CSS property defines how an element should be displayed." },
            { answers: ["display"] },
            { explanation: "The 'display' property defines how an element should be displayed." }
        ],
        [
            { problem: "This CSS property sets the border properties of an element." },
            { answers: ["border"] },
            { explanation: "The 'border' property sets the border properties of an element." }
        ],
        [
            { problem: "This CSS property controls how content that is too big to fit into an element is handled." },
            { answers: ["overflow"] },
            { explanation: "The 'overflow' property controls how content that is too big to fit into an element is handled." }
        ],
        [
            { problem: "This CSS property sets the maximum width of an element." },
            { answers: ["max-width"] },
            { explanation: "The 'max-width' property sets the maximum width of an element." }
        ],
        [
            { problem: "This CSS property sets the minimum width of an element." },
            { answers: ["min-width"] },
            { explanation: "The 'min-width' property sets the minimum width of an element." }
        ],
        // [
        //   { problem: "" },
        //   { answers: [""] }
        // ],
    ]

    const javaScriptProblems = [
        [
            { problem: "What does DOM stand for?" },
            { answers: ["document object model"] },
            { explanation: "DOM stands for Document Object Model. It is a programming interface for web documents that represents the page so that programs can change the document structure, style, and content." }
        ],
        [
            { problem: "Name a keyword that can be used to declare a variable in JavaScript?" },
            { answers: ["var", "let", "const"] },
            { explanation: "In JavaScript, variables can be declared using var, let, or const. 'var' is function-scoped, while 'let' and 'const' are block-scoped. 'const' is used to declare variables whose values cannot be reassigned." }
        ],
        [
            { problem: "What does AJAX stand for?" },
            { answers: ["asynchronous javascript and xml"] },
            { explanation: "AJAX stands for Asynchronous JavaScript and XML. It is a set of web development techniques using many web technologies on the client side to create asynchronous web applications." }
        ],
        [
            { problem: "What method is used to add an element to the end of an array?" },
            { answers: ["push", "push()", "array.push()"] },
            { explanation: "The 'push' method adds one or more elements to the end of an array and returns the new length of the array." }
        ],
        [
            { problem: "What does JSON stand for?" },
            { answers: ["javascript object notation"] },
            { explanation: "JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate." }
        ],
        [
            { problem: "What method is used to remove the last element from an array?" },
            { answers: ["pop", "pop()", "array.pop()"] },
            { explanation: "The 'pop' method removes the last element from an array and returns that element. This method changes the length of the array." }
        ],
        [
            { problem: "What does 'NaN' stand for?" },
            { answers: ["not a number"] },
            { explanation: "'NaN' stands for 'Not-a-Number'. It is a value representing a computational error in JavaScript, often the result of invalid arithmetic operations." }
        ],
        [
            { problem: "What is the scope of the 'let' keyword in JavaScript?" },
            { answers: ["block", "block scope"] },
            { explanation: "'let' declarations are block-scoped, meaning they are only accessible within the block (denoted by curly braces) in which they are declared." }
        ],
        [
            { problem: "What method is used to join elements of an array into a string?" },
            { answers: ["join", "join()", "array.join()"] },
            { explanation: "The 'join' method joins all elements of an array into a string. The elements are separated by a specified separator string." }
        ],
        [
            { problem: "In JavaScript, function binding is handled by which method?" },
            { answers: ["bind", "bind()"] },
            { explanation: "The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called." }
        ],
        [
            { problem: "What method is used to create a new array with the results of calling a provided function on every element in the calling array?" },
            { answers: ["map", "map()", "array.map()"] },
            { explanation: "The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array." }
        ],
        [
            { problem: "Which operator is used for data type checking?" },
            { answers: ["typeof", "typeof()"] },
            { explanation: "The 'typeof' operator returns a string indicating the type of the unevaluated operand." }
        ],
        [
            { problem: "What method is used to sort the elements of an array?" },
            { answers: ["sort", "sort()", "array.sort()"] },
            { explanation: "The 'sort' method sorts the elements of an array in place and returns the sorted array." }
        ],
        [
            { problem: "What method is used to execute a function after a specified amount of time?" },
            { answers: ["settimeout", "settimeout()"] },
            { explanation: "The 'setTimeout' method calls a function or evaluates an expression after a specified number of milliseconds." }
        ],
        [
            { problem: "What method is used to check if an array includes a certain value?" },
            { answers: ["includes", "includes()", "array.includes()"] },
            { explanation: "The 'includes' method determines whether an array includes a certain value among its entries, returning true or false." }
        ],
        [
            { problem: "What method is used to remove the first element from an array?" },
            { answers: ["shift", "shift()", "array.shift()"] },
            { explanation: "The 'shift' method removes the first element from an array and returns that removed element. This method changes the length of the array." }
        ],
        [
            { problem: "In JavaScript, an empty value is represented by what value?" },
            { answers: ["null"] },
            { explanation: "In JavaScript, 'null' is a value that represents no value or a non-existent value." }
        ],
        [
            { problem: "What method is used to convert a string to lowercase?" },
            { answers: ["tolowercase", "tolowercase()", "string.tolowercase()"] },
            { explanation: "The 'toLowerCase' method returns the calling string value converted to lowercase." }
        ],
        [
            { problem: "In JavaScript an invalid number is indicated by what value?" },
            { answers: ["nan", "not a number"] },
            { explanation: "An invalid number in JavaScript is indicated by 'NaN', which stands for 'Not-a-Number'." }
        ],
        [
            { problem: "What method is used to execute a function repeatedly, with a fixed time delay between each call?" },
            { answers: ["setinterval", "setinterval()"] },
            { explanation: "The 'setInterval' method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call." }
        ],
        [
            { problem: "In JavaScript module export is handled by what keyword?" },
            { answers: ["export"] },
            { explanation: "In JavaScript, the 'export' keyword is used to export functions, objects, or primitive values from a module so they can be used by other programs with the 'import' statement." }
        ],
        [
            { problem: "What method is used to create a shallow copy of an array?" },
            { answers: ["slice", "slice()", "array.slice()"] },
            { explanation: "The 'slice' method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified." }
        ],
        [
            { problem: "In JavaScript, which keyword handles parent class reference?" },
            { answers: ["super"] },
            { explanation: "The 'super' keyword is used to access and call functions on an object's parent." }
        ],
        [
            { problem: "What method is used to convert a string to uppercase?" },
            { answers: ["touppercase", "touppercase()", "string.touppercase()"] },
            { explanation: "The 'toUpperCase' method returns the calling string value converted to uppercase." }
        ],
        [
            { problem: "What method is used to search for a specified value in an array and returns its index?" },
            { answers: ["indexof", "indexof()"] },
            { explanation: "The 'indexOf' method returns the first index at which a given element can be found in the array, or -1 if it is not present." }
        ],
        [
            { problem: "What method is used to concatenate two or more arrays?" },
            { answers: ["concat", "concat()"] },
            { explanation: "The 'concat' method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array." }
        ],
        [
            { problem: "What method is used to concatenate two or more strings?" },
            { answers: ["concat", "concat()", "string.concat()"] },
            { explanation: "The 'concat' method is used to concatenate two or more strings." }
        ],
        [
            { problem: "What method is used to create a new array with all elements that pass the test implemented by the provided function?" },
            { answers: ["filter", "filter()"] },
            { explanation: "The 'filter' method creates a new array with all elements that pass the test implemented by the provided function." }
        ],
        [
            { problem: "What method is used to get the length of a string in JavaScript?" },
            { answers: ["length", "length()", "string.length()"] },
            { explanation: "The 'length' property of a string object returns the length of a string, in terms of the number of characters in the string." }
        ],
        [
            { problem: "Which statement handles loop termination in JavaScript?" },
            { answers: ["break"] },
            { explanation: "The 'break' statement is used to terminate the current loop, switch, or label statement and transfers program control to the statement following the terminated statement." }
        ],
        [
            { problem: "What method is used to create a new array by removing elements from an existing array?" },
            { answers: ["splice", "splice()", "array.splice()"] },
            { explanation: "The 'splice' method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place." }
        ],
        [
            { problem: "What method is used to loop through the elements of an array?" },
            { answers: ["foreach", "foreach()", "array.foreach()"] },
            { explanation: "The 'forEach' method executes a provided function once for each array element." }
        ],
        [
            { problem: "True or False: JavaScript is a statically typed language." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript is a dynamically typed language, meaning variables can hold values of any type without any type constraints." }
        ],
        [
            { problem: "True or False: In JavaScript, '===' compares both value and type, while '==' compares only values." },
            { answers: ["true", "1"] },
            { explanation: "True. The '===' operator checks both value and type, whereas '==' only checks value and performs type coercion if necessary." }
        ],
        [
            { problem: "What method is used to extract a section of a string?" },
            { answers: ["substring", "substring()", "string.substring()"] },
            { explanation: "The 'substring' method returns the part of the string between the start and end indexes, or to the end of the string." }
        ],
        [
            { problem: "True or False: The '&&' operator in JavaScript is used for logical OR." },
            { answers: ["false", "0"] },
            { explanation: "False. The '&&' operator is used for logical AND, not OR." }
        ],
        [
            { problem: "True or False: 'NaN' stands for 'Not a Number' in JavaScript and represents an invalid number." },
            { answers: ["true", "1"] },
            { explanation: "True. 'NaN' stands for 'Not-a-Number' and is used to represent a value that is not a valid number." }
        ],
        [
            { problem: "True or False: In JavaScript, a function declaration always returns a value." },
            { answers: ["false", "0"] },
            { explanation: "False. A function declaration itself does not return a value. It defines a function that can return a value when invoked, but the declaration itself has no return value." }
        ],
        [
            { problem: "True or False: The 'null' value in JavaScript represents an empty or non-existent value." },
            { answers: ["true", "1"] },
            { explanation: "True. 'null' is a value that represents no value or a non-existent value." }
        ],
        [
            { problem: "True or False: The 'typeof' operator in JavaScript returns 'object' for arrays." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'typeof' operator returns 'object' for arrays because arrays are a type of object in JavaScript." }
        ],
        [
            { problem: "True or False: JavaScript does not support multi-line strings." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript supports multi-line strings using template literals, which are enclosed by backticks (` `)." }
        ],
        [
            { problem: "True or False: A JavaScript variable declared with 'var' is block-scoped." },
            { answers: ["false", "0"] },
            { explanation: "False. Variables declared with 'var' are function-scoped or globally scoped, not block-scoped." }
        ],
        [
            { problem: "True or False: JavaScript is a case-sensitive language." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript is case-sensitive, meaning identifiers such as variable names and function names must be written with consistent capitalization." }
        ],
        [
            { problem: "True or False: The 'break' statement in JavaScript can only be used within loops." },
            { answers: ["false", "0"] },
            { explanation: "False. The 'break' statement can be used within loops as well as switch statements to terminate the execution of the loop or switch." }
        ],
        [
            { problem: "True or False: In JavaScript, 'undefined' and 'null' are the same." },
            { answers: ["false", "0"] },
            { explanation: "False. 'undefined' and 'null' are different. 'undefined' means a variable has been declared but not assigned a value, whereas 'null' is an assignment value that represents no value." }
        ],
        [
            { problem: "True or False: 'JSON' stands for JavaScript Object Notation." },
            { answers: ["true", "1"] },
            { explanation: "True. 'JSON' stands for JavaScript Object Notation, a lightweight format for data interchange." }
        ],
        [
            { problem: "True or False: JavaScript arrays are always sparse, meaning they have gaps between indexes." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript arrays can be sparse, but they are not always sparse. Sparsity depends on how the array is created and manipulated." }
        ],
        [
            { problem: "True or False: JavaScript supports tail call optimization." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript supports tail call optimization in strict mode, where certain types of recursive functions can be optimized to prevent stack overflow." }
        ],
        [
            { problem: "True or False: JavaScript is primarily used for client-side scripting." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript is primarily used for client-side scripting to create interactive web pages, though it is also used on the server side with environments like Node.js." }
        ],
        [
            { problem: "True or False: JavaScript does not have a built-in module system." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript has a built-in module system, introduced in ECMAScript 2015 (ES6), which uses 'import' and 'export' statements." }
        ],
        [
            { problem: "True or False: JavaScript is an interpreted language." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript is generally considered an interpreted language, though modern engines often use Just-In-Time (JIT) compilation to improve performance." }
        ],
        [
            { problem: "True or False: JavaScript's 'Math.random()' function returns a random number between 0 and 1." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'Math.random()' function returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)." }
        ],
        [
            { problem: "True or False: In JavaScript, 'setTimeout()' is a synchronous function." },
            { answers: ["false", "0"] },
            { explanation: "False. 'setTimeout()' is an asynchronous function that schedules the execution of a function after a specified delay." }
        ],
        [
            { problem: "True or False: JavaScript does not support regular expressions." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript supports regular expressions, which are patterns used to match character combinations in strings." }
        ],
        [
            { problem: "True or False: The '===' operator in JavaScript evaluates to true if both operands are equal in value and type." },
            { answers: ["true", "1"] },
            { explanation: "True. The '===' operator evaluates to true if both operands are equal in value and type." }
        ],
        [
            { problem: "True or False: JavaScript does not have a built-in date object." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript has a built-in 'Date' object that provides methods for working with dates and times." }
        ],
        [
            { problem: "True or False: JavaScript does not support object-oriented programming." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript supports object-oriented programming, including the use of prototypes, classes, and inheritance." }
        ],
        [
            { problem: "True or False: The 'instanceof' operator in JavaScript can be used to check if an object is of a specific type." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'instanceof' operator checks if an object is an instance of a specific constructor or class." }
        ],
        [
            { problem: "True or False: In JavaScript, functions are first-class citizens, meaning they can be assigned to variables and passed as arguments to other functions." },
            { answers: ["true", "1"] },
            { explanation: "True. Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from other functions." }
        ],
        [
            { problem: "True or False: JavaScript's 'switch' statement can only be used with numbers." },
            { answers: ["false", "0"] },
            { explanation: "False. The 'switch' statement can be used with numbers, strings, and other data types." }
        ],
        [
            { problem: "True or False: JavaScript's 'typeof' operator returns 'function' for function objects." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'typeof' operator returns 'function' for function objects." }
        ],
        [
            { problem: "True or False: JavaScript's 'NaN' value is equal to itself." },
            { answers: ["false", "0"] },
            { explanation: "False. 'NaN' is not equal to itself." }
        ],
        [
            { problem: "'NaN' value is considered as a special case in JavaScript." },
            { answers: ["true", "1"] },
            { explanation: "True. 'NaN' is considered a special case in JavaScript." }
        ],
        [
            { problem: "True or False: JavaScript's 'Array.push()' method adds elements to the end of an array." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: JavaScript's 'for...in' loop iterates over the values of an array." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "What method is used to reverse the order of elements in an array?" },
            { answers: ["reverse", "reverse()", "array.reverse()"] },
            { explanation: "The 'reverse' method reverses the order of elements in an array in place." }
        ],
        [
            { problem: "What method is used to get the day of the week for a specified date according to local time?" },
            { answers: ["getday", "getday()", "date.getday()"] },
            { explanation: "The 'getDay' method returns the day of the week for the specified date object according to local time." }
        ],
        [
            { problem: "What method is used to get the month for a specified date according to local time?" },
            { answers: ["getmonth", "getmonth()", "date.getmonth()"] },
            { explanation: "The 'getMonth' method returns the month for the specified date object according to local time." }
        ],
        [
            { problem: "What method is used to get the year for a specified date according to local time?" },
            { answers: ["getfullyear", "getfullyear()", "date.getfullyear()"] },
            { explanation: "The 'getFullYear' method returns the year for the specified date object according to local time." }
        ],
        [
            { problem: "What method is used to get the hours for a specified date according to local time?" },
            { answers: ["gethours", "gethours()", "date.gethours()"] },
            { explanation: "The 'getHours' method returns the hour for the specified date object, according to local time." }
        ],
        [
            { problem: "What method is used to get the minutes for a specified date according to local time?" },
            { answers: ["getminutes", "getminutes()", "date.getminutes()"] },
            { explanation: "The 'getMinutes' method returns the minutes for the specified date object, according to local time." }
        ],
        [
            { problem: "What method is used to get the seconds for a specified date according to local time?" },
            { answers: ["getseconds", "getseconds()", "date.getseconds()"] },
            { explanation: "The 'getSeconds' method returns the seconds for the specified date object, according to local time." }
        ],
        [
            { problem: "What method is used to get the milliseconds for a specified date according to local time?" },
            { answers: ["getmilliseconds", "getmilliseconds()", "date.getmilliseconds()"] },
            { explanation: "The 'getMilliseconds' method returns the milliseconds for the specified date object, according to local time." }
        ],
        [
            { problem: "True or False: JavaScript's 'parseFloat()' function parses a string and returns an integer." },
            { answers: ["false", "0"] },
            { explanation: "False. JavaScript's 'parseFloat()' function parses a string and returns a floating-point number, not an integer." }
        ],
        [
            { problem: "What method is used to convert a number to a floating-point number in JavaScript?" },
            { answers: ["parsefloat", "parsefloat()", "number.parsefloat()"] },
            { explanation: "The 'parseFloat' function parses an argument and returns a floating point number." }
        ],
        [
            { problem: "What method is used to return the string representation of a date?" },
            { answers: ["tostring", "tostring()", "date.tostring()"] },
            { explanation: "The 'toString' method returns a string representing the specified date object." }
        ],
        [
            { problem: "True or False: JavaScript's 'new' keyword is used to create a new instance of an object." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'new' keyword is used in JavaScript to create a new instance of an object." }
        ],
        [
            { problem: "True or False: JavaScript's 'call()' method is used to call a function with a given 'this' value and arguments provided individually." },
            { answers: ["true", "1"] },
            { explanation: "True. In JavaScript, the 'call()' method is used to call a function with a specified 'this' value and individual arguments provided as arguments to the function." }
        ],
        [
            { problem: "True or False: JavaScript's 'Promise' object represents a value that may not be available yet, but will be resolved at some point in the future." },
            { answers: ["true", "1"] },
            { explanation: "True. In JavaScript, a Promise object represents a value that may not be available yet, but will be resolved at some point in the future." }
        ],
        [
            { problem: "True or False: JavaScript's 'forEach()' method can only be used with arrays." },
            { answers: ["true", "1"] },
            { explanation: "True. In JavaScript, the 'forEach()' method is used to execute a provided function once for each array element." }
        ],
        [
            { problem: "True or False: JavaScript's 'parseInt()' function parses a string and returns a floating-point number." },
            { answers: ["false", "0"] },
            { explanation: "False. The 'parseInt()' function in JavaScript parses a string and returns an integer." }
        ],
        [
            { problem: "True or False: JavaScript's 'Object.keys()' method returns an array of an object's own enumerable property names." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'Object.keys()' method in JavaScript returns an array of a given object's own enumerable property names, in the same order as that provided by a 'for...in' loop." }
        ],
        [
            { problem: "True or False: JavaScript's 'map()' method creates a new array with the results of calling a provided function on every element in the calling array." },
            { answers: ["true", "1"] },
            { explanation: "True. In JavaScript, the 'map()' method is used to create a new array with the results of calling a provided function on every element in the calling array." }
        ],
        [
            { problem: "True or False: JavaScript's 'reduce()' method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'reduce()' method in JavaScript applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value." }
        ],
        [
            { problem: "True or False: JavaScript's 'indexOf()' method returns the first index at which a given element can be found in the array, or -1 if it is not present." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'indexOf()' method in JavaScript returns the first index at which a given element can be found in the array, or -1 if it is not present." }
        ],
        [
            { problem: "True or False: JavaScript's 'split()' method splits a string object into an array of strings by separating the string into substrings." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'split()' method in JavaScript splits a string object into an array of strings by separating the string into substrings. It takes a delimiter as an argument." }
        ],
        [
            { problem: "True or False: JavaScript's 'pop()' method removes the last element from an array and returns that element." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'pop()' method in JavaScript removes the last element from an array and returns that element. It mutates the original array." }
        ],
        [
            { problem: "True or False: JavaScript's 'shift()' method removes the first element from an array and returns that element." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'shift()' method in JavaScript removes the first element from an array and returns that element. It mutates the original array." }
        ],
        [
            { problem: "True or False: JavaScript's 'splice()' method changes the contents of an array by removing or replacing existing elements and/or adding new elements." },
            { answers: ["true", "1"] },
            { explanation: "True. The 'splice()' method in JavaScript changes the contents of an array by removing or replacing existing elements and/or adding new elements." }
        ],
        [
            { problem: "True or False: JavaScript's 'filter()' method creates a new array with all elements that pass the test implemented by the provided function." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript's 'filter()' method creates a new array with all elements that pass the test implemented by the provided function." }
        ],
        [
            { problem: "True or False: JavaScript's 'concat()' method is used to merge two or more arrays." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript's 'concat()' method is used to merge two or more arrays." }
        ],
        [
            { problem: "True or False: JavaScript's 'includes()' method determines whether an array includes a certain value among its entries." },
            { answers: ["true", "1"] },
            { explanation: "True. JavaScript's 'includes()' method determines whether an array includes a certain value among its entries." }
        ],
        // [
        //     { problem: "" },
        //     { answers: [""] }
        // ],
    ]

    const reactProblems = [
        [
            { problem: "React is an example of a _____ library." },
            { answers: ["javascript"] },
            { explanation: "React is a JavaScript library for building user interfaces." }
        ],
        [
            { problem: "What does JSX stand for?" },
            { answers: ["javascript xml"] },
            { explanation: "JSX stands for JavaScript XML. It allows writing HTML elements in JavaScript and placing them in the DOM." }
        ],
        [
            { problem: "What is a reusable UI unit in React called?" },
            { answers: ["component", "a component", "components"] },
            { explanation: "Components are the building blocks of React applications. They allow you to split the UI into independent, reusable pieces." }
        ],
        [
            { problem: "Data management in React is called?" },
            { answers: ["state"] },
            { explanation: "State is a built-in object that stores property values that belong to a component. State can change over time and influences the rendering of the component." }
        ],
        [
            { problem: "Component properties in react are called?" },
            { answers: ["props"] },
            { explanation: "Props are read-only attributes that are passed to components to give them dynamic behavior." }
        ],
        [
            { problem: "A function-based component is called?" },
            { answers: ["functional component", "a functional component", "functional components"] },
            { explanation: "Functional components are stateless components defined as JavaScript functions. They return JSX and can use hooks to manage state and side effects." }
        ],
        [
            { problem: "Life-cycle methods are unique to which kind of React component?" },
            { answers: ["class", 'class based', "class-based"] },
            { explanation: "Lifecycle methods are special methods in class components that allow you to run code at specific points in a component's life (e.g., componentDidMount, componentDidUpdate)." }
        ],
        [
            { problem: "Hooks are unique to which kind of React component?" },
            { answers: ["functional", 'function based', "function-based"] },
            { explanation: "Hooks are special functions that let you use state and other React features in functional components." }
        ],
        [
            { problem: "A class-based component is called?" },
            { answers: ["class component", "a class component", "class components"] },
            { explanation: "Class components are ES6 classes that extend from React.Component and can hold and manage state and lifecycle methods." }
        ],
        [
            { problem: "In React, componentDidMount() is an example of a?" },
            { answers: ["lifecycle method"] },
            { explanation: "componentDidMount() is a lifecycle method that is invoked immediately after a component is mounted." }
        ],
        [
            { problem: "In React, componentDidUpdate() is an example of a?" },
            { answers: ["lifecycle method"] },
            { explanation: "componentDidUpdate() is a lifecycle method that is invoked immediately after updating occurs. It is not called for the initial render." }
        ],
        [
            { problem: "In React, componentWillUnmount() is an example of a?" },
            { answers: ["lifecycle method"] },
            { explanation: "componentWillUnmount() is a lifecycle method that is invoked immediately before a component is unmounted and destroyed." }
        ],
        [
            { problem: "_____ act as unique identifiers in React." },
            { answers: ["keys"] },
            { explanation: "Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside an array to give them a stable identity." }
        ],
        [
            { problem: "The hook that handles state management is?" },
            { answers: ["usestate", "usestate()", "usestate hook"] },
            { explanation: "The useState hook is a function that lets you add state to functional components." }
        ],
        [
            { problem: "The hook that handles context API is?" },
            { answers: ["usecontext", "usecontext()", "usecontext hook"] },
            { explanation: "The useContext hook allows you to access the context API to manage global state and avoid prop drilling." }
        ],
        [
            { problem: "The hook that handles side effects is?" },
            { answers: ["useeffect", "useeffect()", "useeffect hook"] },
            { explanation: "The useEffect hook lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM." }
        ],
        [
            { problem: "The hook that handles refs in React is?" },
            { answers: ["useref", "useref()", "useref hook"] },
            { explanation: "The useRef hook allows you to create a reference to a DOM element or store a mutable value that persists across renders." }
        ],
        [
            { problem: "The hook that handles memoization in React is?" },
            { answers: ["usememo", "usememo()", "usememo hook"] },
            { explanation: "The useMemo hook memoizes a value so that it is only recomputed when its dependencies change, helping to optimize performance." }
        ],
        [
            { problem: "The hook that handles memoized callbacks in React is?" },
            { answers: ["usecallback", "usecallback()", "usecallback hook"] },
            { explanation: "The useCallback hook returns a memoized callback function that only changes if one of its dependencies changes." }
        ],
        [
            { problem: "The hook that handles complex state logic in React is?" },
            { answers: ["usereducer", "usereducer()", "usereducer hook"] },
            { explanation: "The useReducer hook is used for managing complex state logic and is an alternative to useState for more complex state scenarios." }
        ],
        [
            { problem: "Display based on condition is referred to as?" },
            { answers: ["conditional rendering"] },
            { explanation: "Conditional rendering in React allows you to render different components or elements based on a condition." }
        ],
        [
            { problem: "What is the purpose of error boundaries in React?" },
            { answers: ["error handling"] },
            { explanation: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI." }
        ],
        [
            { problem: "What is the function for context creation in React?" },
            { answers: ["createcontext", "createcontext()"] },
            { explanation: "The createContext function is used to create a new Context object that can be used to pass data through the component tree without prop drilling." }
        ],
        [
            { problem: "What is the useState hook equivalent in class components?" },
            { answers: ["this.state"] },
            { explanation: "In class components, this.state is used to hold the state object, similar to the useState hook in functional components." }
        ],
        [
            { problem: "componentDidMount, componentDidUpdate, componentWillUnmount, are equivalent to which hook in functional components?" },
            { answers: ["useeffect", "useeffect()"] },
            { explanation: "The useEffect hook can replicate the behavior of lifecycle methods in functional components, running effects after render, update, and cleanup." }
        ],
        [
            { problem: "True or False: React uses a virtual DOM to improve performance." },
            { answers: ["true", "1"] },
            { explanation: "React uses a virtual DOM to optimize performance by minimizing direct DOM manipulation and only updating the parts of the DOM that have changed." }
        ],
        [
            { problem: "True or False: React components must always return a single JSX element." },
            { answers: ["true", "1"] },
            { explanation: "React components should return a single JSX element, but you can wrap multiple elements in a parent element or React.Fragment." }
        ],
        [
            { problem: "True or False: React components can be written in both functional and class-based syntax." },
            { answers: ["true", "1"] },
            { explanation: "React components can be defined using both functional and class-based syntax." }
        ],
        [
            { problem: "True or False: In React, props are immutable." },
            { answers: ["true", "1"] },
            { explanation: "Props are read-only and cannot be modified by the component that receives them. They should not be mutated." }
        ],
        [
            { problem: "True or False: React components can have local state." },
            { answers: ["true", "1"] },
            { explanation: "React components can manage their own local state, which can be updated independently of other components." }
        ],
        [
            { problem: "True or False: React elements are plain JavaScript objects." },
            { answers: ["true", "1"] },
            { explanation: "React elements are plain objects representing the DOM nodes, created by the React.createElement function." }
        ],
        [
            { problem: "True or False: React allows server-side rendering." },
            { answers: ["true", "1"] },
            { explanation: "React supports server-side rendering (SSR), which can improve performance and SEO." }
        ],
        [
            { problem: "True or False: React hooks are available in class components." },
            { answers: ["false", "0"] },
            { explanation: 'Hooks are exclusive to functional components and cannot be used in class components.' }
        ],
        [
            { problem: "True or False: React's 'useState' hook allows functional components to use state." },
            { answers: ["true", "1"] },
            { explanation: "The useState hook allows functional components to have state, similar to this.state in class components." }
        ],
        [
            { problem: "True or False: The 'key' prop in React is used to uniquely identify elements in an array." },
            { answers: ["true", "1"] },
            { explanation: "The key prop helps React identify which items have changed, been added, or removed in lists, optimizing rendering." }
        ],
        [
            { problem: "True or False: React's 'useEffect' hook is only called after the first render." },
            { answers: ["false", "0"] },
            { explanation: "The useEffect hook runs after every render by default but can be configured to run conditionally based on dependencies." }
        ],
        [
            { problem: "True or False: React's 'setState' function is synchronous." },
            { answers: ["false", "0"] },
            { explanation: "setState is asynchronous, meaning updates to the state may be batched and not applied immediately." }
        ],
        [
            { problem: "True or False: React components must always be defined using a class." },
            { answers: ["false", "0"] },
            { explanation: "React components can be defined using both classes and functions." }
        ],
        [
            { problem: "True or False: React's 'Fragment' component can only contain a single child." },
            { answers: ["false", "0"] },
            { explanation: "React.Fragment can wrap multiple children without adding extra nodes to the DOM." }
        ],
        [
            { problem: "True or False: React components cannot be nested within each other." },
            { answers: ["false", "0"] },
            { explanation: "React components can be nested within each other to create complex UIs." }
        ],
        [
            { problem: "True or False: React's 'useEffect' hook can replace lifecycle methods in class components." },
            { answers: ["true", "1"] },
            { explanation: "The useEffect hook can replace the lifecycle methods in functional components." }
        ],
        [
            { problem: "True or False: React components can have default props." },
            { answers: ["true", "1"] },
            { explanation: "Components can have default props, which are fallback values for props that are not provided." }
        ],
        [
            { problem: "True or False: React's 'forwardRef' function allows components to pass refs to child components." },
            { answers: ["true", "1"] },
            { explanation: "The forwardRef function lets parent components pass refs to their child components." }
        ],
        [
            { problem: "True or False: React's 'Context' API is used to manage global state." },
            { answers: ["true", "1"] },
            { explanation: "The Context API is used to share global state across components without passing props manually at every level." }
        ],
        [
            { problem: "True or False: React's 'PureComponent' performs a shallow comparison of props and state." },
            { answers: ["true", "1"] },
            { explanation: "PureComponent performs a shallow comparison of props and state to determine if a re-render is necessary." }
        ],
        [
            { problem: "True or False: React's 'memo' function can be used to memoize functional components." },
            { answers: ["true", "1"] },
            { explanation: "The memo function is a higher-order component that memoizes functional components to prevent unnecessary re-renders." }
        ],
        [
            { problem: "True or False: React's 'PropTypes' library is used for static type checking." },
            { answers: ["true", "1"] },
            { explanation: "The PropTypes library provides runtime type checking for React props." }
        ],
        [
            { problem: "True or False: React components can only render JSX elements." },
            { answers: ["false", "0"] },
            { explanation: "React components can render JSX elements as well as strings, numbers, arrays, and fragments." }
        ],
        [
            { problem: "True or False: React's 'useCallback' hook is used to memoize callback functions." },
            { answers: ["true", "1"] },
            { explanation: "The useCallback hook is used to memoize callback functions, which can optimize performance by preventing unnecessary re-creations of functions." }
        ],
        [
            { problem: "True or False: React's 'useMemo' hook is used to memoize expensive calculations." },
            { answers: ["true", "1"] },
            { explanation: "The useMemo hook memoizes expensive calculations so they are only recomputed when dependencies change." }
        ],
        [
            { problem: "True or False: React's 'useReducer' hook is used for simple state management." },
            { answers: ["false", "0"] },
            { explanation: "The useReducer hook is used for managing more complex state logic compared to the useState hook." }
        ],
        [
            { problem: "True or False: React's 'useState' hook returns an array with the current state value and a function to update it." },
            { answers: ["true", "1"] },
            { explanation: "The useState hook returns a pair: the current state value and a function that lets you update it." }
        ],
        [
            { problem: "True or False: React components can have side effects." },
            { answers: ["true", "1"] },
            { explanation: "React components can have side effects, such as data fetching, subscriptions, or manually updating the DOM, which can be managed using hooks like useEffect." }
        ],
        [
            { problem: "True or False: React's 'setState' function can accept a callback as an argument." },
            { answers: ["true", "1"] },
            { explanation: "The setState function can accept a callback function that runs after the state update has been applied." }
        ],
        [
            { problem: "True or False: React's 'createContext' function creates a new context object." },
            { answers: ["true", "1"] },
            { explanation: "The createContext function creates a new Context object for passing data through the component tree without prop drilling." }
        ],
        [
            { problem: "True or False: React's 'Component' class is used to define functional components." },
            { answers: ["false", "0"] },
            { explanation: "The Component class is used to define class-based components, not functional components." }
        ],
        [
            { problem: "True or False: React's 'useContext' hook is used to access context values." },
            { answers: ["true", "1"] },
            { explanation: "The useContext hook lets you access the context values provided by the Context API." }
        ],
        [
            { problem: "True or False: React's 'useRef' hook is used to create mutable refs." },
            { answers: ["true", "1"] },
            { explanation: "The useRef hook creates a mutable ref object that persists across renders." }
        ],
        [
            { problem: "True or False: React's 'useLayoutEffect' hook is similar to 'useEffect' but fires synchronously." },
            { answers: ["true", "1"] },
            { explanation: "The useLayoutEffect hook runs synchronously after all DOM mutations but before the browser paints, making it useful for reading layout from the DOM and synchronously re-rendering." }
        ],
        [
            { problem: "True or False: React's 'memo' function only works for class components." },
            { answers: ["false", "0"] },
            { explanation: "The memo function is specifically for functional components, not class components." }
        ],
        [
            { problem: "True or False: React's 'Suspense' component is used for code splitting." },
            { answers: ["true", "1"] },
            { explanation: "The Suspense component is used to handle code splitting by displaying a fallback until the lazy-loaded component has loaded." }
        ],
        [
            { problem: "True or False: React's 'cloneElement' function creates a new element with the same type and props." },
            { answers: ["true", "1"] },
            { explanation: "The cloneElement function creates a new React element with the same type and props as the original element." }
        ],
        [
            { problem: "True or False: React's 'StrictMode' component only affects production builds." },
            { answers: ["false", "0"] },
            { explanation: "The StrictMode component checks for potential issues in development mode and does not affect production builds." }
        ],
        [
            { problem: "True or False: React's 'contextType' property can only be used in functional components." },
            { answers: ["false", "0"] },
            { explanation: "The contextType property is used in class components to consume a context." }
        ],
        [
            { problem: "True or False: React's 'Children' utilities are used to manipulate child components." },
            { answers: ["true", "1"] },
            { explanation: "The React.Children utilities are useful for dealing with children props, providing methods for counting, mapping, and forEaching over child components." }
        ],
        [
            { problem: "True or False: React's 'dangerouslySetInnerHTML' prop allows inserting raw HTML into a component." },
            { answers: ["true", "1"] },
            { explanation: "The dangerouslySetInnerHTML prop allows you to insert raw HTML directly into a component, but it should be used cautiously to avoid XSS attacks." }
        ],
        [
            { problem: "True or False: React's 'createRef' function creates a ref object." },
            { answers: ["true", "1"] },
            { explanation: "The createRef function creates a new ref object that can be attached to React elements to access their DOM nodes or React elements directly." }
        ],
        [
            { problem: "True or False: React's 'lazy' function is used for server-side rendering." },
            { answers: ["false", "0"] },
            { explanation: "The lazy function is used for code splitting by loading components dynamically but not specifically for server-side rendering." }
        ],
        [
            { problem: "True or False: React's 'memo' function can only be used for class components." },
            { answers: ["false", "0"] },
            { explanation: "The memo function is designed to optimize functional components by memoizing them, not class components." }
        ],
        [
            { problem: "True or False: React's 'useImperativeHandle' hook is used to expose imperative methods to parent components." },
            { answers: ["true", "1"] },
            { explanation: "The useImperativeHandle hook customizes the instance value that is exposed when using refs in functional components." }
        ],
        [
            { problem: "True or False: React's 'forwardRef' function can only be used with functional components." },
            { answers: ["false", "0"] },
            { explanation: "The forwardRef function can be used with both class and functional components to forward refs to child components." }
        ],
        [
            { problem: "True or False: React's 'Profiler' component is used to measure component render performance." },
            { answers: ["true", "1"] },
            { explanation: "The Profiler component measures the performance of rendering components to help identify performance bottlenecks." }
        ],
        [
            { problem: "True or False: React's 'unmountComponentAtNode' function is used to render components." },
            { answers: ["false", "0"] },
            { explanation: "The unmountComponentAtNode function is used to unmount a React component from the DOM, not to render it." }
        ],
        [
            { problem: "True or False: React's 'useState' hook can accept an initial state value as an argument." },
            { answers: ["true", "1"] },
            { explanation: "The useState hook can take an initial state value as its argument, which sets the initial state for the component." }
        ],
        // [
        //     { problem: "" },
        //     { answers: ["", ""] },
        //     { explanation: "" }
        // ],
    ]

    const pythonProblems = [
        [
            { problem: "What is Python?" },
            { answers: ["programming language", "a programming language"] }
        ],
        [
            { problem: "What is PEP 8?" },
            { answers: ["style guide", "a style guide"] }
        ],
        [
            { problem: "What is a resubale block of code called in Python?" },
            { answers: ["function", "a function", "functions"] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "In Python, an ordered collection is called?" },
            { answers: ["list", "a list"] }
        ],
        [
            { problem: "In Python, an immutable collection is called?" },
            { answers: ["tuple", "a tuple"] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "" },
            { answers: [""] }
        ],
        [
            { problem: "True or False: Python is a dynamically typed language." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python is a compiled language." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python is a case-sensitive language." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python uses indentation to denote blocks of code." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python supports both procedural and object-oriented programming paradigms." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: In Python, variables must be explicitly declared before use." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python supports multi-threading out of the box." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python is not suitable for web development." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's '==' operator compares both value and type." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'else' statement can be used without an 'if' statement." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's list is a mutable data type." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's tuple is a mutable data type." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'not' keyword is used for logical negation." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'range()' function generates a list of numbers." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'for' loop can iterate over dictionaries." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'break' statement can only be used within loops." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'None' value is equivalent to '0'." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'lambda' keyword is used to define anonymous functions." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'with' statement is used for exception handling." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'pass' statement does nothing and can be used as a placeholder." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'try' statement must always be followed by an 'except' block." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'continue' statement skips the rest of the code in the current loop iteration." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'import' statement is used to include external modules." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'dict' is an ordered collection of items." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'del' statement is used to delete variables." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'and' operator returns True if both operands are True." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'sys.argv' variable contains command-line arguments passed to a script." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'os.path.exists()' function checks if a file or directory exists." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'zip()' function can only be used with two iterables of the same length." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 're.compile()' function is used to compile regular expressions." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'global' keyword is used to declare global variables." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'os.getcwd()' function returns the current working directory." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'sorted()' function modifies the original list in place." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'enumerate()' function returns a list of tuples." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'pow()' function raises a number to a power." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'format()' function is used to format strings." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'chr()' function returns the Unicode character for the specified Unicode code." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'is' operator compares the memory addresses of two objects." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'filter()' function returns a list of elements for which a function returns True." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'frozenset' is a mutable data type." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'eval()' function executes a string containing Python code." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'round()' function always rounds down." },
            { answers: ["false", "0"] }
        ],
        [
            { problem: "True or False: Python's 'any()' function returns True if any element in an iterable is True." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'max()' function can be used to find the maximum element in a list of strings." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'isinstance()' function checks if an object is an instance of a specified class." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'assert' statement raises an exception if a condition is False." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'int()' function can convert a string to an integer." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'slice()' function is used to create a slice object." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'divmod()' function returns both the quotient and remainder of a division." },
            { answers: ["true", "1"] }
        ],
        [
            { problem: "True or False: Python's 'super()' function can only be used in class methods." },
            { answers: ["true", "1"] }
        ],
        // [
        //     { problem: "" },
        //     { answers: [""] }
        // ],
    ]

    useEffect(() => {

    }, [topic])

    return (
        <div id="menuCont">
            <h1>CodeSouls</h1>
            <h5 style={{ textAlign: 'center' }}>Welcome to Code Souls, a trivia game geared towards helping web developers practice and improve their knowledge of various languages. </h5><br/>
            <h6>Pick a categoty and press play to begin: </h6>
            <div id="menu">
                <div id="topics">
                    <button className="topicBtn" onClick={() => changeTopic([...htmlProblems])}>HTML</button>
                    <button className="topicBtn" onClick={() => changeTopic([...cssProblems])}>CSS</button>
                    <button className="topicBtn" onClick={() => changeTopic([...javaScriptProblems])}>JavaScript</button>
                    {/* <button disabled>Java</button> */}
                    <button className="topicBtn" onClick={() => changeTopic([...reactProblems])}>React</button>
                    {/* <button disabled>Python</button> */}
                </div>
                <Link to="/game">
                    <button disabled={!topic.length}>Play</button>
                </Link>
            </div>
        </div>
    )
}

export default Home