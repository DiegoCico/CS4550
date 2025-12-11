import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function QuizAttemptsDao() {

  const findAttemptsForQuiz = (quizId, userId) =>
    model.find({ quiz: quizId, user: userId }).sort({ attemptNumber: -1 });

  const findLatestAttempt = async (quizId, userId) => {
    const attempts = await model
      .find({ quiz: quizId, user: userId })
      .sort({ attemptNumber: -1 })
      .limit(1);

    return attempts.length > 0 ? attempts[0] : null;
  };

  const createAttempt = (attempt) => {
    const newAttempt = { ...attempt, _id: uuidv4() };
    return model.create(newAttempt);
  };

  const countAttempts = (quizId, userId) =>
    model.countDocuments({ quiz: quizId, user: userId });

  const deleteAttemptsForQuiz = (quizId) =>
    model.deleteMany({ quiz: quizId });

  const findAttemptById = (attemptId) =>
    model.findOne({ _id: attemptId });

  return {
    findAttemptsForQuiz,
    findLatestAttempt,
    createAttempt,
    countAttempts,
    deleteAttemptsForQuiz,
    findAttemptById
  };
}
