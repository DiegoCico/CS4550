# Quiz System Backend Documentation

This document explains how the quiz backend works and all the API calls it has.

## Overview

The backend has 3 main parts:
1. **Quizzes** - Creating and managing quizzes
2. **Questions** - Adding questions to quizzes
3. **Quiz Attempts** - Students taking quizzes and getting graded

---

## 1. QUIZZES API

### Get All Quizzes for a Course
**GET** `/api/courses/:courseId/quizzes`

What it does:
- Gets all quizzes in a course
- Faculty sees all quizzes (even unpublished ones)
- Students only see quizzes that are:
  - Published
  - Past the available date (if set)
  - Before the until date (if set)

Returns: Array of quiz objects

---

### Get One Quiz
**GET** `/api/quizzes/:quizId`

What it does:
- Gets details for one quiz
- Faculty can see any quiz
- Students can only see if:
  - Quiz is published
  - Current time is after available date
  - Current time is before until date

Returns: Quiz object or error

---

### Create Quiz (Faculty Only)
**POST** `/api/courses/:courseId/quizzes`

What it does:
- Creates a new quiz in a course
- Only faculty can do this

Send in body:
- title
- description
- points (auto-calculated from questions)
- published (true/false)
- availableDate
- untilDate
- dueDate
- timeLimit (in minutes)
- multipleAttempts (true/false)
- howManyAttempts (number)
- accessCode (optional password)
- oneQuestionAtATime (true/false)
- lockQuestionsAfterAnswering (true/false)
- showCorrectAnswers ("IMMEDIATELY", "AFTER_DUE_DATE", "NEVER")

Returns: New quiz object

---

### Update Quiz (Faculty Only)
**PUT** `/api/quizzes/:quizId`

What it does:
- Updates quiz settings
- Only faculty can do this

Send in body: Any quiz fields you want to update

Returns: Success status

---

### Delete Quiz (Faculty Only)
**DELETE** `/api/quizzes/:quizId`

What it does:
- Deletes a quiz
- Only faculty can do this

Returns: Success status

---

### Publish Quiz (Faculty Only)
**PUT** `/api/quizzes/:quizId/publish`

What it does:
- Makes quiz visible to students
- Only faculty can do this

Returns: Success status

---

### Unpublish Quiz (Faculty Only)
**PUT** `/api/quizzes/:quizId/unpublish`

What it does:
- Hides quiz from students
- Only faculty can do this

Returns: Success status

---

## 2. QUESTIONS API

### Get All Questions for a Quiz
**GET** `/api/quizzes/:quizId/questions`

What it does:
- Gets all questions in a quiz
- Faculty sees everything including correct answers
- Students see questions but:
  - If quiz is "one question at a time", they get an error
  - Correct answers are hidden unless quiz settings allow it
  - Quiz must be published and available

Returns: Array of question objects

---

### Get One Question
**GET** `/api/questions/:questionId`

What it does:
- Gets one question by ID
- Faculty sees full question
- Students see question but correct answers might be hidden

Returns: Question object

---

### Create Question (Faculty Only)
**POST** `/api/quizzes/:quizId/questions`

What it does:
- Adds a new question to a quiz
- Auto-updates the quiz total points

Send in body:
- title (the question text)
- type ("MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_BLANK")
- points (how many points it's worth)

For Multiple Choice:
- choices: array of { text, isCorrect }

For True/False:
- correctAnswer: true or false

For Fill in Blank:
- possibleAnswers: array of acceptable answers
- caseSensitive: true or false

Returns: New question object

---

### Update Question (Faculty Only)
**PUT** `/api/questions/:questionId`

What it does:
- Updates a question
- Auto-updates quiz total points

Send in body: Any question fields to update

Returns: Success status

---

### Delete Question (Faculty Only)
**DELETE** `/api/questions/:questionId`

What it does:
- Deletes a question
- Auto-updates quiz total points

Returns: Success status

---

## 3. QUIZ ATTEMPTS API

### Start an Attempt
**POST** `/api/quizzes/:quizId/start`

What it does:
- Creates a new attempt when student clicks "Start Quiz"
- Checks if student has attempts remaining
- Checks access code if required
- Records start time for time limit

Send in body:
- accessCode (if quiz requires it)

Returns: New attempt object with attemptId

---

### Get All My Attempts
**GET** `/api/quizzes/:quizId/attempts`

What it does:
- Gets all attempts for current user on this quiz

Returns: Array of attempt objects

---

### Get My Latest Attempt
**GET** `/api/quizzes/:quizId/attempts/latest`

What it does:
- Gets the most recent attempt for current user
- Returns null if no attempts yet

Returns: Attempt object or null

---

### Get Next Question (for one-at-a-time mode)
**GET** `/api/quizzes/:quizId/attempts/:attemptId/next`

What it does:
- If quiz shows all questions at once: returns all questions
- If quiz is one-at-a-time: returns the next unanswered question
- Tracks progress by counting how many answers are saved

Returns:
```javascript
{
  mode: "FULL" or "ONE",
  questions: [...] // if FULL mode
  question: {...}  // if ONE mode
  index: 0         // current question number
  done: false      // true if quiz complete
}
```

---

### Answer One Question (for one-at-a-time mode)
**PATCH** `/api/quizzes/:quizId/attempts/:attemptId/answer`

What it does:
- Saves answer for one question
- Grades it immediately
- Returns next question or completion message
- Enforces question order
- Checks if question is locked

Send in body:
```javascript
{
  questionId: "...",
  answer: "..." // choice ID, true/false, or text
}
```

Returns: Next question or done message

---

### Submit Quiz (full page mode)
**POST** `/api/quizzes/:quizId/attempts`

What it does:
- Submits all answers at once
- Grades all questions automatically
- Checks time limit
- Checks if already submitted
- Saves final score

Send in body:
```javascript
{
  attemptId: "...",
  answers: [
    { question: "id1", answer: "..." },
    { question: "id2", answer: "..." }
  ]
}
```

Returns: Graded attempt with score

---

### Get Attempt Details
**GET** `/api/quizzes/:quizId/attempts/:attemptId`

What it does:
- Gets attempt with all answers and questions
- Students can only see their own attempts
- Correct answers shown based on quiz settings:
  - "IMMEDIATELY" - show right away
  - "AFTER_DUE_DATE" - show after due date passes
  - "NEVER" - never show

Returns:
```javascript
{
  attempt: {...},
  questions: [...]
}
```

---

### Get All Attempts (Faculty Only)
**GET** `/api/quizzes/:quizId/attempts/all`

What it does:
- Gets all student attempts for a quiz
- Only faculty can see this
- Used for grading and analytics

Returns: Array of all attempts

---

### Get Attempt Status
**GET** `/api/quizzes/:quizId/attempts/:attemptId/status`

What it does:
- Checks if attempt is still in progress
- Calculates time remaining
- Checks if time expired
- Checks if already submitted

Returns:
```javascript
{
  inProgress: true/false,
  submitted: true/false,
  expired: true/false,
  timeRemainingMs: 123456,
  deadline: "2024-01-01T12:00:00Z"
}
```

---

### Preview Quiz (Faculty Only)
**POST** `/api/quizzes/:quizId/preview`

What it does:
- Lets faculty test the quiz without saving an attempt
- Grades answers just like a real attempt
- Does NOT save to database

Send in body:
```javascript
{
  answers: [
    { question: "id1", answer: "..." }
  ]
}
```

Returns: Graded results without saving

---

## How Grading Works

The backend auto-grades all question types:

**Multiple Choice:**
- Correct if student's answer matches the choice marked as correct

**True/False:**
- Correct if student's answer matches the correctAnswer field

**Fill in the Blank:**
- Correct if student's answer matches any of the possibleAnswers
- Can be case-sensitive or case-insensitive based on settings

Each correct answer gives the student the full points for that question.

---

## Security Rules

1. **Students can only:**
   - See published quizzes within date range
   - Start attempts if they have attempts remaining
   - See their own attempts
   - See correct answers based on quiz settings

2. **Faculty can:**
   - Create, edit, delete quizzes
   - Create, edit, delete questions
   - See all attempts
   - Preview quizzes
   - Publish/unpublish quizzes

3. **Time limits:**
   - Tracked from startedAt time
   - Enforced on submission
   - Auto-calculated deadline

4. **Attempt limits:**
   - Checked when starting attempt
   - Single attempt by default
   - Can allow multiple attempts with limit

5. **Access codes:**
   - Required on start if set
   - Students must provide correct code
