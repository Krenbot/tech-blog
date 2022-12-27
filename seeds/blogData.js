const { Blog } = require('../models')

const blogData =
    [
        {
            "title": "Getting Started",
            "content": "This introductory module provides you with an overview and some activities to become familiar with the online learning experience and tools. You'll learn about the course objectives, expectations, and strategies to succeed. Then you'll install the necessary tools and validate that you've met all technical requirements.",
            "userId": 1
        },
        {
            "title": "HTML, CSS, and Git",
            "content": "A web developer relies on numerous tools to perform everyday tasks. You will be introduced to many such tools throughout the boot camp and will have ample chance to practice using them.\n\nLet's review the tools that you'll use this week, as well as some useful resources for extra help as you learn and practice.",
            "userId": 1
        },
        {
            "title": "Advanced CSS",
            "content": "More and more users are browsing the web from a mobile device—causing developers to change how they think about layout and design. Advanced CSS features like media queries and flexbox make it easier to accommodate multiple screen sizes and to build apps with a mobile-first mindset. Similarly, website design has evolved to include many niceties that users now take for granted, such as animated hover effects, rounded corners, and shadows. In the old days of the web, these tricks would have required some complex workarounds or even JavaScript, but newer CSS properties have simplified their implementation.\n\nIn this module, you'll learn how to build web apps that incorporate both responsive web design and advanced CSS. These skills are a must for modern web developers, and learning them will enable you to create attractive, engaging, and adaptive websites.",
            "userId": 1
        },
        {
            "title": "JavaScript",
            "content": "We've already explored how to structure webpages using HTML and style them using CSS. Now, with the help of JavaScript, we'll learn how to make webpages dynamic.\n\nJavaScript is a widely used scripting language that adds functionality and interactivity to a webpage. Building on a static HTML framework and CSS styling, using JavaScript you can store information in variables, manipulate your HTML, respond to an event, play audio and video, add decision-making to your code, and do much more.\n\nAs the only programming language native to web browsers, JavaScript is used all over the web—making it a crucial skill in your toolbox. But Javascript development skills are also versatile. Once you have mastered JavaScript, it is much easier to learn the fundamentals of other programming languages.",
            "userId": 1
        },
        {
            "title": "Web APIs",
            "content": "This week, you'll learn about application programming interfaces, or APIs, which allow web developers to create dynamic, interactive web applications. An essential part of a developer's toolbox, APIs can help add a wide range of functionality to your code.\n\nAPIs are built directly into the browser. When a webpage is loaded in the browser, an object representation of the webpage (the Document Object Model, or DOM) is created. As a programming interface, the DOM allows us to use JavaScript to interact with HTML elements.\n\nDuring class and in this week's Challenge, you'll practice navigating the DOM. You'll also learn how to create and manipulate HTML elements, add event listeners, create timers, and store data—all using the power of JavaScript and an API built into the browser itself.",
            "userId": 2
        },
        {
            "title": "Third Party APIs",
            "content": "When developers find themselves repeating a task, they tend to look for a way to simplify their workflow. We've already learned how CSS frameworks were developed to ensure consistency across applications and to expedite developer workflows; tools with similar goals have emerged in the JavaScript ecosystem.\n\njQuery is a JavaScript library that simplifies DOM manipulation and event handling. It allows us to write fewer lines of code than if we were using plain old JavaScript. jQuery also provides a number of methods for animations and working with APIs.\n\nSome developers might point out that jQuery is slowly being phased out and replaced with front-end frameworks such as React. It's true that you might not see as many job listings for jQuery developers specifically, but the library is still widely used in both new and legacy code—so it's an important skill to acquire.",
            "userId": 2
        }
    ]


const seedBlogs = () => Blog.bulkCreate(blogData)

module.exports = seedBlogs