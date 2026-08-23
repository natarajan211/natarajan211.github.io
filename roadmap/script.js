/* =========================================
   PATHPILOT JAVASCRIPT
========================================= */

let selectedLanguage = "";

let selectedLevel = "beginner";

let completedSteps = [];


/* =========================================
   ROADMAP DATA
========================================= */

const roadmapData = {

    python: [

        {
            title: "Python Fundamentals",

            description:
                "Start Python from zero and learn the basic building blocks of programming.",

            topics: [
                "What is Programming?",
                "Python Setup",
                "Variables",
                "Data Types",
                "Input",
                "Output"
            ],

            logic:
                "A program receives input, processes the information and produces output.",

            code:
`name = input("Enter your name: ")

age = 20

print("Hello", name)
print("Age:", age)`,

            challenge:
                "Create a program that asks for your name and age and displays them.",

            errors: [
                "NameError - variable not found",
                "SyntaxError - incorrect syntax",
                "TypeError - incompatible data"
            ]

        },


        {
            title: "Conditions & Loops",

            description:
                "Learn how programs make decisions and repeat tasks.",

            topics: [
                "if",
                "else",
                "elif",
                "for",
                "while",
                "Operators"
            ],

            logic:
                "Conditions allow a program to choose between different actions. Loops repeat instructions.",

            code:
`mark = 75

if mark >= 50:
    print("PASS")
else:
    print("FAIL")`,

            challenge:
                "Create a program that checks whether a student passed or failed.",

            errors: [
                "Incorrect indentation",
                "Missing colon",
                "Using = instead of =="
            ]

        },


        {
            title: "Functions & Data Structures",

            description:
                "Learn reusable functions and ways to store multiple values.",

            topics: [
                "Functions",
                "Parameters",
                "Return",
                "Lists",
                "Tuples",
                "Sets",
                "Dictionary"
            ],

            logic:
                "Functions divide large problems into smaller reusable pieces. Data structures organize information.",

            code:
`def add(a, b):
    return a + b

result = add(10, 20)

print(result)`,

            challenge:
                "Create a function that returns the largest of two numbers.",

            errors: [
                "Missing return",
                "Wrong arguments",
                "KeyError"
            ]

        },


        {
            title: "Object Oriented Programming",

            description:
                "Learn classes and objects used in real software development.",

            topics: [
                "Class",
                "Object",
                "Constructor",
                "Inheritance",
                "Encapsulation"
            ],

            logic:
                "OOP represents real-world things as objects containing data and functions.",

            code:
`class Student:

    def __init__(self, name):
        self.name = name

student = Student("Arun")

print(student.name)`,

            challenge:
                "Create a Student class containing name, department and marks.",

            errors: [
                "AttributeError",
                "Constructor error",
                "Incorrect object creation"
            ]

        },


        {
            title: "Build Projects",

            description:
                "Use your knowledge to create practical applications.",

            topics: [
                "Calculator",
                "Quiz App",
                "Expense Tracker",
                "Student Management"
            ],

            logic:
                "Break a project into small features and implement each feature one by one.",

            code:
`expenses = []

amount = float(
    input("Expense: ")
)

expenses.append(amount)

print(sum(expenses))`,

            challenge:
                "Build a Student Expense Tracker.",

            errors: [
                "ValueError",
                "IndexError",
                "Logic errors"
            ]

        },


        {
            title: "DSA & Career Preparation",

            description:
                "Prepare for coding interviews and software development jobs.",

            topics: [
                "Arrays",
                "Strings",
                "Searching",
                "Sorting",
                "Stack",
                "Queue",
                "Git",
                "GitHub"
            ],

            logic:
                "Efficient algorithms help solve problems faster and prepare you for technical interviews.",

            code:
`def find_max(numbers):

    maximum = numbers[0]

    for number in numbers:

        if number > maximum:
            maximum = number

    return maximum`,

            challenge:
                "Solve beginner DSA problems and build two portfolio projects.",

            errors: [
                "Wrong algorithm",
                "Poor time complexity",
                "Ignoring edge cases"
            ]

        }

    ],


    java: [

        {
            title: "Java Fundamentals",

            description:
                "Learn Java syntax and basic programming concepts.",

            topics: [
                "JDK",
                "Variables",
                "Data Types",
                "Operators",
                "Input",
                "Output"
            ],

            logic:
                "Java source code is compiled into bytecode and executed by the JVM.",

            code:
`public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World");

    }

}`,

            challenge:
                "Create a Java program that displays your name.",

            errors: [
                "Missing semicolon",
                "Class name error",
                "Syntax error"
            ]

        },


        {
            title: "Conditions & Loops",

            description:
                "Learn Java decision making and repetition.",

            topics: [
                "if",
                "else",
                "switch",
                "for",
                "while",
                "do while"
            ],

            logic:
                "Conditions control decisions while loops execute code repeatedly.",

            code:
`int mark = 75;

if(mark >= 50) {

    System.out.println("PASS");

} else {

    System.out.println("FAIL");

}`,

            challenge:
                "Create an even-or-odd program.",

            errors: [
                "Incorrect condition",
                "Missing braces",
                "Wrong data type"
            ]

        },


        {
            title: "Object Oriented Programming",

            description:
                "Learn the core of Java development.",

            topics: [
                "Class",
                "Object",
                "Constructor",
                "Inheritance",
                "Polymorphism",
                "Abstraction"
            ],

            logic:
                "OOP organizes programs using objects that contain data and behavior.",

            code:
`class Student {

    String name;

    Student(String name) {

        this.name = name;

    }

}`,

            challenge:
                "Create a Student class.",

            errors: [
                "NullPointerException",
                "Constructor error",
                "Access modifier error"
            ]

        },


        {
            title: "Java Projects",

            description:
                "Build real applications using Java.",

            topics: [
                "Banking App",
                "Quiz App",
                "Library System",
                "Student Management"
            ],

            logic:
                "Projects combine syntax, OOP, collections and problem-solving.",

            code:
`class Account {

    double balance;

    void deposit(double amount) {

        balance += amount;

    }

}`,

            challenge:
                "Build a simple Banking System.",

            errors: [
                "NullPointerException",
                "Logic errors",
                "Object creation errors"
            ]

        },


        {
            title: "DSA & Placement",

            description:
                "Prepare for coding interviews.",

            topics: [
                "Arrays",
                "Strings",
                "Linked List",
                "Stack",
                "Queue",
                "Sorting",
                "Searching"
            ],

            logic:
                "DSA teaches you how to solve problems efficiently.",

            code:
`int max = numbers[0];

for(int n : numbers) {

    if(n > max) {

        max = n;

    }

}`,

            challenge:
                "Solve beginner DSA problems and create two Java projects.",

            errors: [
                "Incorrect algorithm",
                "Time complexity problem",
                "Edge cases"
            ]

        }

    ],


    javascript: [

        {
            title: "Web Fundamentals",

            description:
                "Understand how websites are created.",

            topics: [
                "HTML",
                "CSS",
                "Browser",
                "Forms",
                "Web Pages"
            ],

            logic:
                "HTML creates structure, CSS creates design and JavaScript adds behavior.",

            code:
`<h1>Hello World</h1>

<style>

h1 {
    color: purple;
}

</style>`,

            challenge:
                "Create a personal profile website.",

            errors: [
                "HTML structure error",
                "CSS selector error",
                "Missing closing tag"
            ]

        },


        {
            title: "JavaScript Basics",

            description:
                "Learn programming logic using JavaScript.",

            topics: [
                "Variables",
                "Data Types",
                "Conditions",
                "Loops",
                "Functions",
                "Arrays"
            ],

            logic:
                "JavaScript executes instructions and can respond to user actions.",

            code:
`let mark = 75;

if(mark >= 50) {

    console.log("PASS");

} else {

    console.log("FAIL");

}`,

            challenge:
                "Create a positive-or-negative number checker.",

            errors: [
                "ReferenceError",
                "TypeError",
                "SyntaxError"
            ]

        },


        {
            title: "DOM & Events",

            description:
                "Make webpages interactive.",

            topics: [
                "DOM",
                "Events",
                "Buttons",
                "Forms",
                "Local Storage"
            ],

            logic:
                "JavaScript listens for user actions and changes webpage content.",

            code:
`const button =
document.querySelector("#btn");

button.addEventListener(
    "click",
    function() {

        alert("Hello");

    }
);`,

            challenge:
                "Build a Todo List.",

            errors: [
                "Null element",
                "Wrong selector",
                "Event error"
            ]

        },


        {
            title: "JavaScript Projects",

            description:
                "Create useful web applications.",

            topics: [
                "Calculator",
                "Todo App",
                "Quiz App",
                "Expense Tracker",
                "Weather App"
            ],

            logic:
                "Divide your application into interface, data, events and functions.",

            code:
`function addExpense(amount) {

    expenses.push(amount);

    updateTotal();

}`,

            challenge:
                "Build a Student Expense Tracker.",

            errors: [
                "Undefined variable",
                "DOM error",
                "Event handling error"
            ]

        },


        {
            title: "Web Developer Career",

            description:
                "Prepare for professional web development.",

            topics: [
                "Git",
                "GitHub",
                "APIs",
                "React",
                "Portfolio",
                "Projects"
            ],

            logic:
                "Professional web applications combine frontend, APIs, reusable components and data.",

            code:
`fetch("https://example.com/api")
    .then(response => response.json())
    .then(data => {

        console.log(data);

    });`,

            challenge:
                "Build and publish a professional portfolio.",

            errors: [
                "CORS error",
                "API error",
                "Promise error"
            ]

        }

    ],


    c: [

        {
            title: "C Fundamentals",

            description:
                "Build strong programming fundamentals using C.",

            topics: [
                "Variables",
                "Data Types",
                "Operators",
                "Input",
                "Output"
            ],

            logic:
                "C programs are compiled into machine code before execution.",

            code:
`#include <stdio.h>

int main() {

    printf("Hello World");

    return 0;

}`,

            challenge:
                "Write a program to display your name.",

            errors: [
                "Compiler error",
                "Missing semicolon",
                "Syntax error"
            ]

        },


        {
            title: "Conditions & Loops",

            description:
                "Learn decision making and loops in C.",

            topics: [
                "if",
                "else",
                "switch",
                "for",
                "while",
                "Functions"
            ],

            logic:
                "Conditions make decisions while loops repeat instructions.",

            code:
`int mark = 75;

if(mark >= 50) {

    printf("PASS");

} else {

    printf("FAIL");

}`,

            challenge:
                "Create a prime-number program.",

            errors: [
                "Incorrect condition",
                "Array index error",
                "Compiler warning"
            ]

        },


        {
            title: "Pointers & Memory",

            description:
                "Understand computer memory and pointers.",

            topics: [
                "Pointers",
                "Addresses",
                "malloc",
                "free",
                "Structures"
            ],

            logic:
                "Pointers store memory addresses and allow direct access to memory.",

            code:
`int number = 10;

int *ptr = &number;

printf("%d", *ptr);`,

            challenge:
                "Create a Student structure.",

            errors: [
                "Segmentation fault",
                "Invalid pointer",
                "Memory leak"
            ]

        },


        {
            title: "Data Structures",

            description:
                "Learn how data is organized efficiently.",

            topics: [
                "Linked List",
                "Stack",
                "Queue",
                "Searching",
                "Sorting"
            ],

            logic:
                "Data structures define how information is stored and accessed.",

            code:
`struct Node {

    int data;

    struct Node *next;

};`,

            challenge:
                "Create a linked list.",

            errors: [
                "Segmentation fault",
                "Null pointer",
                "malloc error"
            ]

        },


        {
            title: "Projects & Career",

            description:
                "Use C to build practical projects and prepare for interviews.",

            topics: [
                "Student Management",
                "Banking System",
                "File Handling",
                "DSA",
                "Git"
            ],

            logic:
                "Projects combine programming concepts to solve complete problems.",

            code:
`int findMax(int arr[], int n) {

    int max = arr[0];

    for(int i = 1; i < n; i++) {

        if(arr[i] > max)
            max = arr[i];

    }

    return max;
}`,

            challenge:
                "Build a Student Management System.",

            errors: [
                "Memory errors",
                "Pointer errors",
                "Logic errors"
            ]

        }

    ]

};


/* =========================================
   CHOOSE LEVEL
========================================= */

function chooseLevel(button) {

    document
        .querySelectorAll(".level")
        .forEach(function(item) {

            item.classList.remove("active");

        });

    button.classList.add("active");

    selectedLevel =
        button.dataset.level;
}


/* =========================================
   CHOOSE LANGUAGE
========================================= */

function chooseLanguage(button) {

    document
        .querySelectorAll(".language")
        .forEach(function(item) {

            item.classList.remove("selected");

        });

    button.classList.add("selected");

    selectedLanguage =
        button.dataset.language;
}


/* =========================================
   SCROLL
========================================= */

function goToGenerator() {

    document
        .getElementById("generator")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   GENERATE
========================================= */

function generateRoadmap() {

    const name =
        document
            .getElementById("name")
            .value
            .trim();

    const education =
        document
            .getElementById("education")
            .value;

    const career =
        document
            .getElementById("career")
            .value;


    if (!name) {

        alert("Please enter your name.");

        return;
    }


    if (!education) {

        alert("Please select your education.");

        return;
    }


    if (!selectedLanguage) {

        alert("Please select a programming language.");

        return;
    }


    if (!career) {

        alert("Please select your career goal.");

        return;
    }


    completedSteps = [];


    /* SAVE DATA */

    localStorage.setItem(
        "pathpilotName",
        name
    );

    localStorage.setItem(
        "pathpilotEducation",
        education
    );

    localStorage.setItem(
        "pathpilotCareer",
        career
    );

    localStorage.setItem(
        "pathpilotLanguage",
        selectedLanguage
    );

    localStorage.setItem(
        "pathpilotProgress",
        JSON.stringify([])
    );


    /* DISPLAY */

    document.getElementById(
        "welcome"
    ).textContent =
        "Welcome, " + name + " 👋";


    document.getElementById(
        "showLanguage"
    ).textContent =
        getLanguageName(selectedLanguage);


    document.getElementById(
        "showCareer"
    ).textContent =
        career;


    document.getElementById(
        "result"
    ).style.display = "block";


    updateW3Link();

    renderRoadmap();

    updateProgress();


    document
        .getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   LANGUAGE NAME
========================================= */

function getLanguageName(language) {

    const names = {

        python: "Python",

        java: "Java",

        javascript: "JavaScript",

        c: "C"

    };

    return names[language] || language;

}


/* =========================================
   W3SCHOOLS LINK
========================================= */

function updateW3Link() {

    const links = {

        python:
            "https://www.w3schools.com/python/",

        java:
            "https://www.w3schools.com/java/",

        javascript:
            "https://www.w3schools.com/js/",

        c:
            "https://www.w3schools.com/c/"

    };


    document.getElementById(
        "w3Link"
    ).href =
        links[selectedLanguage];

}


/* =========================================
   RENDER ROADMAP
========================================= */

function renderRoadmap() {

    const container =
        document.getElementById("roadmap");


    container.innerHTML = "";


    const data =
        roadmapData[selectedLanguage];


    if (!data) {

        container.innerHTML =
            "<p>Roadmap not available.</p>";

        return;
    }


    data.forEach(function(step, index) {


        const topicHTML =
            step.topics
                .map(function(topic) {

                    return `
                        <span class="topic">
                            ${topic}
                        </span>
                    `;

                })
                .join("");


        const errorsHTML =
            step.errors
                .map(function(error) {

                    return `
                        <li>${error}</li>
                    `;

                })
                .join("");


        const done =
            completedSteps.includes(index);


        container.innerHTML += `

            <div class="roadmap-card">

                <div class="step-number">
                    ${index + 1}
                </div>

                <h3>
                    ${step.title}
                </h3>

                <p class="description">
                    ${step.description}
                </p>

                <div class="topics">
                    ${topicHTML}
                </div>


                <div class="info-grid">


                    <div class="info">

                        <h4>
                            🧠 How Logic Works
                        </h4>

                        <p>
                            ${step.logic}
                        </p>

                    </div>


                    <div class="info">

                        <h4>
                            🧪 Practice Challenge
                        </h4>

                        <p>
                            ${step.challenge}
                        </p>

                    </div>


                    <div class="info">

                        <h4>
                            🐞 Common Errors
                        </h4>

                        <ul>
                            ${errorsHTML}
                        </ul>

                    </div>


                    <div class="info">

                        <h4>
                            📚 Learn & Train
                        </h4>

                        <p>
                            Learn this topic using
                            W3Schools and then practice
                            it using Coddy.
                        </p>


                        <div class="resource-buttons">

                            <a
                                class="resource-btn"
                                href="${getW3Link()}"
                                target="_blank"
                            >
                                📚 W3Schools
                            </a>


                            <a
                                class="resource-btn"
                                href="https://coddy.tech/"
                                target="_blank"
                            >
                                💻 Coddy
                            </a>

                        </div>

                    </div>

                </div>


                <div class="code">

                    <div class="code-title">
                        💻 Example Code
                    </div>

                    <pre>${escapeHTML(step.code)}</pre>

                </div>


                <button
                    class="complete ${done ? "done" : ""}"
                    onclick="completeStep(${index})"
                >

                    ${
                        done
                            ? "✓ Level Completed"
                            : "Mark Level Complete"
                    }

                </button>

            </div>

        `;

    });

}


/* =========================================
   GET W3 LINK
========================================= */

function getW3Link() {

    const links = {

        python:
            "https://www.w3schools.com/python/",

        java:
            "https://www.w3schools.com/java/",

        javascript:
            "https://www.w3schools.com/js/",

        c:
            "https://www.w3schools.com/c/"

    };

    return links[selectedLanguage];

}


/* =========================================
   COMPLETE STEP
========================================= */

function completeStep(index) {


    if (
        completedSteps.includes(index)
    ) {

        completedSteps =
            completedSteps.filter(
                function(item) {

                    return item !== index;

                }
            );

    } else {

        completedSteps.push(index);

    }


    localStorage.setItem(
        "pathpilotProgress",
        JSON.stringify(completedSteps)
    );


    renderRoadmap();

    updateProgress();

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    if (!selectedLanguage) {
        return;
    }


    const total =
        roadmapData[selectedLanguage].length;


    const completed =
        completedSteps.length;


    const percentage =
        Math.round(
            (completed / total) * 100
        );


    document.getElementById(
        "progressText"
    ).textContent =
        percentage;


    document.getElementById(
        "progressNumber"
    ).textContent =
        percentage;


    document.getElementById(
        "progressBar"
    ).style.width =
        percentage + "%";


    const recommendation =
        document.getElementById(
            "recommendationText"
        );


    if (percentage === 0) {

        recommendation.textContent =
            "Start Level 1 and focus on understanding the fundamentals.";

    } else if (percentage < 40) {

        recommendation.textContent =
            "Good start! Keep practicing your programming fundamentals.";

    } else if (percentage < 70) {

        recommendation.textContent =
            "Great progress! Start building small projects.";

    } else if (percentage < 100) {

        recommendation.textContent =
            "Excellent! Complete the remaining levels and practice DSA.";

    } else {

        recommendation.textContent =
            "🎉 Roadmap completed! Build advanced projects and prepare for interviews.";

    }

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   LOAD SAVED DATA
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    function() {


        const savedName =
            localStorage.getItem(
                "pathpilotName"
            );


        const savedEducation =
            localStorage.getItem(
                "pathpilotEducation"
            );


        const savedCareer =
            localStorage.getItem(
                "pathpilotCareer"
            );


        const savedLanguage =
            localStorage.getItem(
                "pathpilotLanguage"
            );


        const savedProgress =
            localStorage.getItem(
                "pathpilotProgress"
            );


        if (savedName) {

            document.getElementById(
                "name"
            ).value =
                savedName;

        }


        if (savedEducation) {

            document.getElementById(
                "education"
            ).value =
                savedEducation;

        }


        if (savedCareer) {

            document.getElementById(
                "career"
            ).value =
                savedCareer;

        }


        if (savedLanguage) {

            selectedLanguage =
                savedLanguage;


            const languageButton =
                document.querySelector(
                    `[data-language="${savedLanguage}"]`
                );


            if (languageButton) {

                languageButton.classList.add(
                    "selected"
                );

            }

        }


        if (savedProgress) {

            completedSteps =
                JSON.parse(
                    savedProgress
                );

        }

    }
);