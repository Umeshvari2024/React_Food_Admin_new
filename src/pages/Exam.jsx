import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Exam() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Database", "Language", "Server"],
      answer: "Library",
    },
    {
      question: "Which hook manages state?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Amazon", "Microsoft"],
      answer: "Facebook",
    },
    {
      question: "Which hook is used for API calls?",
      options: ["useState", "useEffect", "useMemo", "useRef"],
      answer: "useEffect",
    },
    {
      question: "React Router is used for?",
      options: ["Routing", "Database", "Authentication", "Testing"],
      answer: "Routing",
    },
    {
      question: "Which company owns GitHub?",
      options: ["Meta", "Google", "Microsoft", "Apple"],
      answer: "Microsoft",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax",
        "JSON XML",
        "Java Extension",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which method is used for lists in React?",
      options: ["forEach", "map", "filter", "find"],
      answer: "map",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Google", "Microsoft", "Apple"],
      answer: "Netscape",
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useEffect",
    },
  ];

  const [studentName, setStudentName] = useState("");
  const [startExam, setStartExam] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    if (startExam && timer > 0 && !showResult) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setShowResult(true);
    }
  }, [timer, startExam, showResult]);

  const nextQuestion = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setSelected("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartExam = () => {
    setStartExam(false);
    setCurrent(0);
    setSelected("");
    setScore(0);
    setShowResult(false);
    setTimer(300);
    setStudentName("");
  };

  const percentage = ((score / questions.length) * 100).toFixed(0);

  if (!startExam) {
    return (
      <div className="container mt-4">
        <div className="card shadow p-4">
          <h2 className="text-center mb-3">
            📝 Online Examination System
          </h2>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <h5>Exam Instructions</h5>

          <ul>
            <li>Total Questions: {questions.length}</li>
            <li>Duration: 5 Minutes</li>
            <li>Each Question = 1 Mark</li>
            <li>No Negative Marking</li>
            <li>Click Next to move forward</li>
          </ul>

          <button
            className="btn btn-primary w-100"
            disabled={!studentName}
            onClick={() => setStartExam(true)}
          >
            Start Exam
          </button>

          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={() => navigate("/dashboard")}
          >
            Back Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="container mt-4">
        <div className="card shadow p-5 text-center">

          <h2>🎉 Exam Completed</h2>

          <h4 className="mt-3">
            Student: {studentName}
          </h4>

          <h3 className="mt-3">
            Score: {score} / {questions.length}
          </h3>

          <h3>{percentage}%</h3>

          <h4
            className={
              percentage >= 50
                ? "text-success"
                : "text-danger"
            }
          >
            {percentage >= 50
              ? "✅ PASS"
              : "❌ FAIL"}
          </h4>

          <div className="mt-4">
            <button
              className="btn btn-success me-2"
              onClick={restartExam}
            >
              Restart Exam
            </button>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">

        <div className="d-flex justify-content-between">
          <h5>
            Question {current + 1} / {questions.length}
          </h5>

          <h5 className="text-danger">
            ⏳ {timer}s
          </h5>
        </div>

        <div className="progress my-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <h4 className="mb-4">
          {questions[current].question}
        </h4>

        {questions[current].options.map((option, index) => (
          <button
            key={index}
            className={`btn w-100 mb-3 ${
              selected === option
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}

        <button
          className="btn btn-success w-100"
          disabled={!selected}
          onClick={nextQuestion}
        >
          {current === questions.length - 1
            ? "Submit Exam"
            : "Next Question"}
        </button>

      </div>
    </div>
  );
}

export default Exam;