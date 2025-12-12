"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  findQuizById,
  getNextQuestion,
  answerOneQuestion,
  submitAttempt,
} from "../../../../../client";
import { useSelector } from "react-redux";

export default function TakeQuizPage() {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
  const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;
  const attemptId = Array.isArray(params.attemptId) ? params.attemptId[0] : params.attemptId;
  const router = useRouter();

  const currentUser = useSelector((state: any) => state.account.currentUser);

  const [quiz, setQuiz] = useState<any>(null);
  const [mode, setMode] = useState<"FULL" | "ONE">("FULL");
  const [questions, setQuestions] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);

  const [answers, setAnswers] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const timerRef = useRef<any>(null);

  const startTimer = (minutes: number) => {
    if (!minutes) return;

    const ms = minutes * 60 * 1000;
    const end = Date.now() + ms;

    timerRef.current = setInterval(() => {
      const remaining = end - Date.now();
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        alert("Time is up — submitting your quiz.");
        submitFully();
        return;
      }
      setTimeLeft(Math.floor(remaining / 1000));
    }, 1000);
  };

  useEffect(() => {
    const load = async () => {
      const q = await findQuizById(qid as string);
      setQuiz(q);

      if (q.timeLimit && q.timeLimit > 0) startTimer(q.timeLimit);

      const result = await getNextQuestion(qid as string, attemptId as string);

      if (result.mode === "FULL") {
        setMode("FULL");
        setQuestions(result.questions);
      } else {
        setMode("ONE");
        setCurrentQuestion(result.question);
        setIndex(result.index);
      }

      setLoading(false);
    };

    load();

    return () => clearInterval(timerRef.current);
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!currentUser || currentUser.role !== "STUDENT")
    return <div className="p-6 text-red-600">Unauthorized</div>;

  const updateAnswer = (qid: string, value: any) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const submitFully = async () => {
    const formatted = Object.entries(answers).map(([questionId, answer]) => ({
      question: questionId,
      answer,
    }));

    try {
      const result = await submitAttempt(qid as string, {
        attemptId,
        answers: formatted,
      });

      router.push(
        `/Kambaz/Courses/${cid}/Quizzes/${qid}/Attempts/${attemptId}/review`
      );
    } catch (err: any) {
      alert(err?.response?.data?.message || "Submission failed");
    }
  };

  const submitOne = async () => {
    if (!currentQuestion) return;

    const questionId = currentQuestion._id;
    const studentAnswer = answers[questionId];

    if (studentAnswer === undefined) {
      alert("Please select an answer.");
      return;
    }

    try {
      const response = await answerOneQuestion(qid as string, attemptId as string, {
        questionId,
        answer: studentAnswer,
      });

      if (response.done) {
        router.push(
          `/Kambaz/Courses/${cid}/Quizzes/${qid}/Attempts/${attemptId}/review`
        );
        return;
      }

      setIndex(response.index);
      setCurrentQuestion(response.question);
      setAnswers({});
    } catch (err: any) {
      alert(err?.response?.data?.message || "Error submitting answer");
    }
  };

  const renderQuestion = (q: any) => {
    if (!q) return null;

    return (
      <div className="border p-5 rounded bg-white shadow flex flex-col gap-4">
        <h2 className="text-xl font-semibold">{q.title}</h2>

        {q.type === "MULTIPLE_CHOICE" && (
          <div className="flex flex-col gap-2">
            {q.choices.map((choice: any) => (
              <label key={choice._id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q._id}
                  value={choice._id}
                  onChange={(e) =>
                    updateAnswer(q._id, e.target.value)
                  }
                  checked={answers[q._id] === choice._id}
                />
                {choice.text}
              </label>
            ))}
          </div>
        )}

        {q.type === "TRUE_FALSE" && (
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name={q._id}
                value="true"
                onChange={() => updateAnswer(q._id, true)}
                checked={answers[q._id] === true}
              />{" "}
              True
            </label>

            <label>
              <input
                type="radio"
                name={q._id}
                value="false"
                onChange={() => updateAnswer(q._id, false)}
                checked={answers[q._id] === false}
              />{" "}
              False
            </label>
          </div>
        )}

        {q.type === "FILL_IN_BLANK" && (
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Your answer"
            value={answers[q._id] || ""}
            onChange={(e) => updateAnswer(q._id, e.target.value)}
          />
        )}
      </div>
    );
  };


  return (
    <div className="p-6 max-w-3xl flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">{quiz.title}</h1>

      {quiz.timeLimit > 0 && (
        <div className="text-red-600 text-lg font-semibold">
          Time Left: {Math.floor((timeLeft || 0) / 60)}:
          {String((timeLeft || 0) % 60).padStart(2, "0")}
        </div>
      )}

      {mode === "ONE" && (
        <>
          {renderQuestion(currentQuestion)}

          <button
            onClick={submitOne}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {currentQuestion?.index === questions.length - 1
              ? "Submit Quiz"
              : "Next Question"}
          </button>
        </>
      )}

      {mode === "FULL" && (
        <>
          <div className="flex flex-col gap-6">
            {questions.map((q) => (
              <div key={q._id}>{renderQuestion(q)}</div>
            ))}
          </div>

          <button
            onClick={submitFully}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Submit Quiz
          </button>
        </>
      )}
    </div>
  );
}
