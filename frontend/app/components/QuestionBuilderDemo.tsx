"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Question {
  id: string
  type: "multiple-choice" | "true-false" | "short-answer"
  question: string
  options?: string[]
  correctAnswer: string
}

export default function QuestionBuilderDemo() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      type: "multiple-choice",
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      id: "2",
      type: "true-false",
      question: "The Earth is flat.",
      correctAnswer: "False",
    },
  ])

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Question Builder</h1>
          <p className="text-gray-600">Remote Microfrontend - Port 3001</p>
        </div>
        <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React + Module Federation</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Create New Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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

            <Button onClick={addQuestion} className="w-full">
              Add Question
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Bank ({questions.length})</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
