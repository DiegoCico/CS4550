import QuizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
  const dao = QuizzesDao();

  const requireAuth = (req, res, next) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Unauthorized - Please sign in" });
    }
    next();
  };

  const requireFaculty = (req, res, next) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Unauthorized - Please sign in" });
    }
    if (currentUser.role !== "FACULTY") {
      return res.status(403).json({ message: "Forbidden - Faculty access required" });
    }
    next();
  };

  function filterQuizzesForStudent(quizList) {
    const now = new Date();

    return quizList.filter(q => {
      if (!q.published) return false;

      if (q.availableDate && now < new Date(q.availableDate)) return false;

      if (q.untilDate && now > new Date(q.untilDate)) return false;

      return true;
    });
  }

  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];

    let quizzes = await dao.findQuizzesForCourse(courseId);

    if (currentUser?.role === "FACULTY") {
      return res.json(quizzes);
    }

    quizzes = filterQuizzesForStudent(quizzes);

    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session["currentUser"];
    const quiz = await dao.findQuizById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    if (currentUser?.role === "FACULTY") {
      return res.json(quiz);
    }

    const now = new Date();

    if (!quiz.published) {
      return res.status(403).json({
        message: "This quiz is not published",
        code: "QUIZ_UNAVAILABLE"
      });
    }

    if (quiz.availableDate && now < new Date(quiz.availableDate)) {
      return res.status(403).json({
        message: `Quiz is not available until ${quiz.availableDate}`,
        code: "NOT_AVAILABLE_YET"
      });
    }

    if (quiz.untilDate && now > new Date(quiz.untilDate)) {
      return res.status(403).json({
        message: `Quiz closed on ${quiz.untilDate}`,
        code: "QUIZ_CLOSED"
      });
    }

    return res.json(quiz);
  };

  const createQuizForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quiz = { ...req.body, course: courseId };
    const newQuiz = await dao.createQuiz(quiz);
    res.json(newQuiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const updates = req.body;
    const status = await dao.updateQuiz(quizId, updates);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };

  const publishQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.publishQuiz(quizId);
    res.json(status);
  };

  const unpublishQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.unpublishQuiz(quizId);
    res.json(status);
  };

  app.get("/api/courses/:courseId/quizzes", requireAuth, findQuizzesForCourse);
  app.get("/api/quizzes/:quizId", requireAuth, findQuizById);

  app.post("/api/courses/:courseId/quizzes", requireFaculty, createQuizForCourse);
  app.put("/api/quizzes/:quizId", requireFaculty, updateQuiz);
  app.delete("/api/quizzes/:quizId", requireFaculty, deleteQuiz);
  app.put("/api/quizzes/:quizId/publish", requireFaculty, publishQuiz);
  app.put("/api/quizzes/:quizId/unpublish", requireFaculty, unpublishQuiz);
}
