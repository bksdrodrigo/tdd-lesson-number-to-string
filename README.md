# Welcome to Pragmatic Test Driven Development with Node JS

## Learning Objectives

1. Understand the meaning of software value

2. Understand the key principles of TDD methodology

3. Patterns for TDD

## Notes

### Value of Software

- Creating software that add value to the business and to its end users is a difficult task

- As software engineers we should satisfy and deliver two value of software

  - **First Value of Software:** Software should be maintainable and adoptable for future requirement changes.

  - **Second Value of Software:** Software should deliver the intended experience to the end users.

### TDD - Methodology for creating valuable software

- TDD methodology allow software engineers to create software that ensures delivering both "First" and "Second" value of software.

- TDD ensures you can create maintainable, changeable and cost effective software that delivers its intended purposes.

### Three Rules of TDD

- Never write production code before writing a failing test
- Only write enough test to prove failure and compiler issues are considered failures.
- Only write enough production code to pass the failing test.

### The 3Ds of TDD

Doing TDD demands 3 things from a developer. I.e. "Discipline", "Discipline" and "Discipline" (3Ds).

TDD methodology is really simple and in most fo the case two simple for many of the season developers. Hence, they tend to ignore certain rules and practicies of TDD which will lead to failure in delivering the ultimate value and promise of TDD.

TDD is like being a "Good Person", i.e. you  want to be a good person, you have to always be good. Even if you are bad once, people will say you are NOT a good person. Like wise, following TDD will only give you a benefit if you have the discipline to follow it's rules ALWAYS.

### Rapid cycles of RED, GREEN, Refactor

While adhering to TDD rules, we should follow the RED, GREEN and Refactor approach when executing TDD methodology.

- First We write a failing Test and confirm the tests are failing (RED state)
- We write production code to fix the failing test. And We write ONLY enough production code to pass the test (GREEN state)
- Then we refactor both the test and production code.

### Our Approach

We will follow a certain pattern when using TDD (Please refer to my YouTube video for more info). In Summary This is our approach when creating BLL using TDD

- We adhere to KISS (Keep it Simple Stupid)
- Always write the simplest test first and most Complex test Last. I.e. we will increase the complexity as we progress
- Cover the Error Scenarios as early as possible.
- Follow 3 rules of TDD
- Execute rapid RED, GREEN, Refactor cycles
- We Refactor both production and Test code as we go on
- We will always strive to have 100% code coverage.
- We will only write 'enough' production code to ensure teh test pass.