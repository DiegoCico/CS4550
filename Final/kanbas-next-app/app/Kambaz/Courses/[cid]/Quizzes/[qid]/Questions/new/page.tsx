"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createQuestionForQuiz } from "../../../../../client";

export default function NewQuestionPage() {
  const { cid, qid } = useParams();
  const router = useRouter();

  const [question, setQuestion] = useState<any>({
    title: "",
    type: "MULTIPLE_CHOICE",
    points: 1,
    choices: [
      { _id: crypto.randomUUID(), text: "", isCorrect: false },
      { _id: crypto.randomUUID(), text: "", isCorrect: false },
    ],
    correctAnswer: true,
    possibleAnswers: [],
    caseSensitive: false,
  });

  // -------------------------
  // Handlers
  // -------------------------
  const handleCreate = async () => {
    if (!question.title.trim()) {
      alert("Please enter a question title");
      return;
    }

    // Validate based on type
    if (question.type === "MULTIPLE_CHOICE") {
      const hasCorrect = question.choices.some((c: any) => c.isCorrect);
      if (!hasCorrect) {
        alert("Please mark at least one choice as correct");
        return;
      }
      const hasText = question.choices.every((c: any) => c.text.trim());
      if (!hasText) {
        alert("Please fill in all choice texts");
        return;
      }
    }

    if (question.type === "FILL_IN_BLANK") {
      if (!question.possibleAnswers || question.possibleAnswers.length === 0) {
        alert("Please provide at least one acceptable answer");
        return;
      }
    }

    await createQuestionForQuiz(qid as string, question);
    router.push(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Questions`);
  };

  const updateField = (field: string, value: any) => {
    setQuestion({ ...question, [field]: value });
  };

  const updateChoice = (index: number, field: string, value: any) => {
    const updated = [...question.choices];
    updated[index] = { ...updated[index], [field]: value };
    setQuestion({ ...question, choices: updated });
  };

  const addChoice = () => {
    setQuestion({
      ...question,
      choices: [
        ...question.choices,
        { _id: crypto.randomUUID(), text: "", isCorrect: false },
      ],
    });
  };

  const deleteChoice = (index: number) => {
    if (question.choices.length <= 2) {
      alert("Must have at least 2 choices");
      return;
    }
    const updated = [...question.choices];
    updated.splice(index, 1);
    setQuestion({ ...question, choices: updated });
  };

  return (
    <div className="p-6 flex flex-col gap-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Add New Question</h1>

      <div>
        <label className="font-semibold block mb-1">Question Title</label>
        <input
          value={question.title}
          onChange={(e) => updateField("title", e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Enter your question here"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">Points</label>
        <input
          type="number"
          min="1"
          value={question.points}
          onChange={(e) => updateField("points", Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="font-semibold block mb-1">Question Type</label>
        <select
          value={question.type}
          onChange={(e) => updateField("type", e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="MULTIPLE_CHOICE">Multiple Choice</option>
          <option value="TRUE_FALSE">True/False</option>
          <option value="FILL_IN_BLANK">Fill in the Blank</option>
        </select>
      </div>

      {question.type === "MULTIPLE_CHOICE" && (
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">Answer Choices</h2>

          {question.choices.map((c: any, index: number) => (
            <div key={c._id} className="border p-3 rounded bg-gray-50">
              <input
                value={c.text}
                onChange={(e) => updateChoice(index, "text", e.target.value)}
                className="border p-2 w-full rounded mb-2"
                placeholder={`Choice ${index + 1}`}
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={c.isCorrect}
                  onChange={(e) =>
                    updateChoice(index, "isCorrect", e.target.checked)
                  }
                />
                Correct Answer
              </label>

              {question.choices.length > 2 && (
                <button
                  onClick={() => deleteChoice(index)}
                  className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm"
                >
                  Delete Choice
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addChoice}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Another Choice
          </button>
        </div>
      )}

      {question.type === "TRUE_FALSE" && (
        <div>
          <label className="font-semibold block mb-2">Correct Answer</label>
          <select
            value={question.correctAnswer ? "true" : "false"}
            onChange={(e) =>
              updateField("correctAnswer", e.target.value === "true")
            }
            className="border p-2 w-full rounded"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      )}

      {question.type === "FILL_IN_BLANK" && (
        <div>
          <label className="font-semibold block mb-1">
            Acceptable Answers (comma separated)
          </label>
          <input
            value={question.possibleAnswers?.join(", ") || ""}
            onChange={(e) =>
              updateField(
                "possibleAnswers",
                e.target.value.split(",").map((a) => a.trim()).filter(a => a)
              )
            }
            className="border p-2 w-full rounded mb-3"
            placeholder="e.g., answer1, answer2, answer3"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={question.caseSensitive}
              onChange={(e) => updateField("caseSensitive", e.target.checked)}
            />
            Case Sensitive
          </label>
        </div>
      )}

      {/* ------------------------- */}
      {/* ACTION BUTTONS */}
      {/* ------------------------- */}
      <div className="flex gap-3">
        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create Question
        </button>

        <button
          onClick={() =>
            router.push(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Questions`)
          }
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
