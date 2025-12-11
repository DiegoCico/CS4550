# Quiz System Frontend Documentation

This document explains how the quiz frontend works and what each page does.

## Overview

The frontend has pages for:
1. **Viewing quizzes** - List and detail pages
2. **Managing quizzes** - Create, edit, publish (faculty)
3. **Managing questions** - Add, edit, delete questions (faculty)
4. **Taking quizzes** - Student quiz-taking experience
5. **Viewing results** - See scores and review answers

---

## Page Structure

```
/Kambaz/Courses/[cid]/Quizzes/
├── page.tsx                           # List all quizzes
├── new/page.tsx                       # Create new quiz
└── [qid]/
    ├── page.tsx                       # Quiz detail page
    ├── edit/page.tsx                  # Edit quiz settings
    ├── Questions/
    │   ├── page.tsx                   # Manage questions list
    │   ├── new/page.tsx               # Add new question
    │   └── [questionId]/page.tsx      # Edit question
    ├── Take/
    │   ├── page.tsx                   # Redirect page
    │   └── [attemptId]/page.tsx       # Take quiz page
    └── Attempts/
        ├── page.tsx                   # View all attempts (faculty)
        └── [attemptId]/
            └── review/page.tsx        # Review attempt results
```

---

## 1. QUIZ LIST PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/page.tsx`

What it shows:
- All quizzes in the course
- Faculty sees all quizzes with edit/delete buttons
- Students only see published quizzes that are available

Features:
- Search/filter quizzes
- Create new quiz button (faculty only)
- Click quiz to see details
- Publish/unpublish toggle (faculty)
- Delete quiz (faculty)

API calls:
- `findQuizzesForCourse(courseId)` - loads all quizzes

---

## 2. QUIZ DETAIL PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/page.tsx`

What it shows:
- Quiz title and description
- Points, time limit, attempt info
- Available dates and due date

**For Faculty:**
- Edit Quiz button
- Manage Questions button
- View Attempts button

**For Students:**
- Start Quiz button (if allowed)
- Access code input (if required)
- Latest attempt score
- Review Attempt button

Logic:
- Checks if quiz is available (dates)
- Checks if student has attempts remaining
- Shows why quiz is unavailable if blocked

API calls:
- `findQuizById(quizId)` - loads quiz details
- `findAttemptsForQuiz(quizId)` - loads student's attempts
- `findLatestAttempt(quizId)` - loads most recent attempt
- `startAttempt(quizId, accessCode)` - starts new attempt

---

## 3. CREATE QUIZ PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/new/page.tsx`

What it does:
- Form to create a new quiz
- Faculty only

Form fields:
- Title
- Description
- Quiz Type (graded, practice, survey)
- Assignment Group
- Time Limit (minutes)
- Multiple Attempts (yes/no)
- How Many Attempts
- Access Code
- Available From/Until dates
- Due Date
- One Question at a Time (yes/no)
- Lock Questions After Answering (yes/no)
- Show Correct Answers (immediately, after due date, never)

API calls:
- `createQuiz(courseId, quizData)` - creates the quiz

After creating:
- Redirects to quiz detail page
- Can then add questions

---

## 4. EDIT QUIZ PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/edit/page.tsx`

What it does:
- Same form as create page
- Pre-filled with existing quiz data
- Faculty only

API calls:
- `findQuizById(quizId)` - loads current data
- `updateQuiz(quizId, updates)` - saves changes

---

## 5. MANAGE QUESTIONS PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Questions/page.tsx`

What it shows:
- List of all questions in the quiz
- Each question shows:
  - Title
  - Points
  - Question type

Features:
- Add New Question button
- Edit button for each question
- Delete button for each question
- Back to Quiz button

API calls:
- `findQuestionsForQuiz(quizId)` - loads all questions
- `deleteQuestion(questionId)` - deletes a question

---

## 6. ADD QUESTION PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Questions/new/page.tsx`

What it does:
- Form to create a new question
- Faculty only

Form fields:
- Question Title (the question text)
- Points
- Question Type (dropdown)

**For Multiple Choice:**
- List of choices
- Text input for each choice
- Checkbox to mark correct answer
- Add/Delete choice buttons
- Must have at least 2 choices

**For True/False:**
- Radio buttons for True or False
- Select which is correct

**For Fill in the Blank:**
- Text input for acceptable answers (comma separated)
- Checkbox for case sensitive

Validation:
- Must have a title
- Multiple choice must have at least one correct answer
- Fill in blank must have at least one acceptable answer

API calls:
- `createQuestionForQuiz(quizId, questionData)` - creates question

After creating:
- Redirects back to manage questions page

---

## 7. EDIT QUESTION PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Questions/[questionId]/page.tsx`

What it does:
- Same form as add question page
- Pre-filled with existing question data
- Faculty only

API calls:
- `findQuestionById(questionId)` - loads current data
- `updateQuestion(questionId, updates)` - saves changes

---

## 8. TAKE QUIZ PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Take/[attemptId]/page.tsx`

What it does:
- Shows questions for student to answer
- Two modes based on quiz settings

**Full Page Mode:**
- Shows all questions at once
- Student can answer in any order
- Submit button at bottom
- All answers sent together

**One Question at a Time Mode:**
- Shows one question
- Student must answer before seeing next
- Next button submits current answer
- Cannot go back to previous questions

Features:
- Timer countdown (if time limit set)
- Auto-submit when time runs out
- Question counter (Question 1 of 5)

Question types:
- **Multiple Choice:** Radio buttons
- **True/False:** Radio buttons for True/False
- **Fill in Blank:** Text input

API calls:
- `findQuizById(quizId)` - loads quiz settings
- `getNextQuestion(quizId, attemptId)` - gets questions
- `answerOneQuestion(quizId, attemptId, {questionId, answer})` - for one-at-a-time
- `submitAttempt(quizId, {attemptId, answers})` - for full page

After submitting:
- Redirects to review page

---

## 9. REVIEW ATTEMPT PAGE
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Attempts/[attemptId]/review/page.tsx`

What it shows:
- Final score
- Each question with student's answer
- Correct/incorrect indicator
- Points earned per question

What student sees depends on quiz settings:
- **Show Immediately:** See correct answers right away
- **After Due Date:** See correct answers after due date
- **Never:** Only see if right/wrong, not the correct answer

Features:
- Back to Quiz button
- Try Again button (if attempts remaining)

API calls:
- `getAttemptById(attemptId)` - loads attempt with answers and questions

---

## 10. VIEW ALL ATTEMPTS PAGE (Faculty)
**Path:** `/Kambaz/Courses/[cid]/Quizzes/[qid]/Attempts/page.tsx`

What it shows:
- All student attempts for this quiz
- Table with:
  - Student name
  - Attempt number
  - Score
  - Submitted date
  - Time taken

Features:
- Click attempt to review it
- Sort by student, score, date
- Export to CSV

API calls:
- `findAttemptsForQuiz(quizId)` - loads all attempts (faculty only)

---

## How Data Flows

### Creating a Quiz (Faculty):
1. Click "New Quiz" on list page
2. Fill out form on create page
3. Submit → API creates quiz
4. Redirect to quiz detail page
5. Click "Manage Questions"
6. Add questions one by one
7. Each question auto-updates quiz total points
8. Click "Publish" when ready

### Taking a Quiz (Student):
1. See quiz on list page
2. Click to view details
3. Enter access code if needed
4. Click "Start Quiz"
5. API creates attempt with start time
6. Redirect to take page
7. Answer questions
8. Submit answers
9. API grades automatically
10. Redirect to review page
11. See score and feedback

### Reviewing Results:
1. From quiz detail page, click "Review Attempt"
2. See all questions with answers
3. See which were correct/incorrect
4. See correct answers (if allowed by settings)
5. See total score

---

## State Management

Each page manages its own state with React hooks:

**useState:**
- Form data (quiz settings, question data)
- Loading states
- Error messages
- Current question index
- Timer countdown
- Answers object

**useEffect:**
- Load data when page opens
- Start timer
- Clean up timer on unmount

**useRouter:**
- Navigate between pages
- Get URL parameters (cid, qid, attemptId)

**useSelector (Redux):**
- Get current user
- Check if faculty or student
- Show/hide features based on role

---

## Client Functions

All API calls are in `/Kambaz/Courses/client.ts`:

**Quiz functions:**
- `findQuizzesForCourse(courseId)`
- `findQuizById(quizId)`
- `createQuiz(courseId, quiz)`
- `updateQuiz(quizId, updates)`
- `deleteQuiz(quizId)`
- `publishQuiz(quizId)`
- `unpublishQuiz(quizId)`

**Question functions:**
- `findQuestionsForQuiz(quizId)`
- `findQuestionById(questionId)`
- `createQuestionForQuiz(quizId, question)`
- `updateQuestion(questionId, updates)`
- `deleteQuestion(questionId)`

**Attempt functions:**
- `startAttempt(quizId, accessCode)`
- `findAttemptsForQuiz(quizId)`
- `findLatestAttempt(quizId)`
- `getNextQuestion(quizId, attemptId)`
- `answerOneQuestion(quizId, attemptId, {questionId, answer})`
- `submitAttempt(quizId, {attemptId, answers})`
- `getAttemptById(attemptId)`

All functions use axios with credentials for session management.

---

## Styling

Uses Tailwind CSS classes:
- `p-6` - padding
- `flex flex-col gap-4` - vertical layout with spacing
- `border rounded` - card style
- `bg-blue-600 text-white` - button colors
- `text-red-600` - error messages
- `font-semibold` - bold text

---

## Error Handling

Common errors handled:
- 401 Unauthorized - redirect to login
- 403 Forbidden - show "not allowed" message
- 404 Not Found - show "not found" message
- Time expired - auto-submit quiz
- No attempts remaining - disable start button
- Invalid access code - show error alert

Most errors show as:
- Alert popup for immediate feedback
- Error message on page for persistent issues
- Disabled buttons when action not allowed
