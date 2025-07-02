"use client"

import type React from "react"
import { useState } from "react"

interface Question {
  id: string
  type: "multiple-choice" | "true-false" | "short-answer"
  question: string
  options?: string[]
  correctAnswer: string
}

const QuestionBuilderApp: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({
    type: "multiple-choice",
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  })

  const addQuestion = () => {
    if (currentQuestion.question && currentQuestion.correctAnswer) {
      const newQuestion: Question = {
        ...currentQuestion,
        id: Date.now().toString(),
      } as Question

      setQuestions([...questions, newQuestion])
      setCurrentQuestion({
        type: "multiple-choice",
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
      })
    }
  }

  const updateOption = (index: number, value: string) => {
    const newOptions = [...(currentQuestion.options || [])]
    newOptions[index] = value
    setCurrentQuestion({ ...currentQuestion, options: newOptions })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Question Builder</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Create New Question</h3>

          <div>
            <label className="block text-sm font-medium mb-2">Question Type</label>
            <select
              value={currentQuestion.type}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  type: e.target.value as Question["type"],
                })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="multiple-choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              <option value="short-answer">Short Answer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Question</label>
            <textarea
              value={currentQuestion.question}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  question: e.target.value,
                })
              }
              className="w-full p-2 border rounded-md h-24"
              placeholder="Enter your question here..."
            />
          </div>

          {currentQuestion.type === "multiple-choice" && (
            <div>
              <label className="block text-sm font-medium mb-2">Options</label>
              {currentQuestion.options?.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  className="w-full p-2 border rounded-md mb-2"
                  placeholder={`Option ${index + 1}`}
                />
              ))}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Correct Answer</label>
            <input
              type="text"
              value={currentQuestion.correctAnswer}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  correctAnswer: e.target.value,
                })
              }
              className="w-full p-2 border rounded-md"
              placeholder="Enter correct answer"
            />
          </div>

          <button
            onClick={addQuestion}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Question
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Question Bank ({questions.length})</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {questions.map((question, index) => (
              <div key={question.id} className="p-3 border rounded-md bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{question.type}</span>
                  <span className="text-xs text-gray-500">#{index + 1}</span>
                </div>
                <p className="text-sm font-medium mb-2">{question.question}</p>
                {question.options && (
                  <ul className="text-xs text-gray-600 space-y-1">
                    {question.options.map((option, idx) => (
                      <li key={idx} className={option === question.correctAnswer ? "font-bold text-green-600" : ""}>
                        {idx + 1}. {option}
                      </li>
                    ))}
                  </ul>
                )}
                {question.type === "short-answer" && (
                  <p className="text-xs text-green-600 font-bold">Answer: {question.correctAnswer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionBuilderApp
