"use client"

import type React from "react"
import { useState } from "react"

interface Paper {
  id: string
  title: string
  description: string
  sections: Section[]
  totalMarks: number
}

interface Section {
  id: string
  title: string
  instructions: string
  questions: string[]
  marks: number
}

const PaperBuilderApp: React.FC = () => {
  const [papers, setPapers] = useState<Paper[]>([])
  const [currentPaper, setCurrentPaper] = useState<Partial<Paper>>({
    title: "",
    description: "",
    sections: [],
    totalMarks: 0,
  })
  const [currentSection, setCurrentSection] = useState<Partial<Section>>({
    title: "",
    instructions: "",
    questions: [],
    marks: 0,
  })

  const addSection = () => {
    if (currentSection.title && currentSection.marks) {
      const newSection: Section = {
        ...currentSection,
        id: Date.now().toString(),
        questions: currentSection.questions || [],
      } as Section

      setCurrentPaper({
        ...currentPaper,
        sections: [...(currentPaper.sections || []), newSection],
        totalMarks: (currentPaper.totalMarks || 0) + newSection.marks,
      })

      setCurrentSection({
        title: "",
        instructions: "",
        questions: [],
        marks: 0,
      })
    }
  }

  const savePaper = () => {
    if (currentPaper.title && currentPaper.sections && currentPaper.sections.length > 0) {
      const newPaper: Paper = {
        ...currentPaper,
        id: Date.now().toString(),
      } as Paper

      setPapers([...papers, newPaper])
      setCurrentPaper({
        title: "",
        description: "",
        sections: [],
        totalMarks: 0,
      })
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Paper Builder</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Paper Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Paper Title</label>
                <input
                  type="text"
                  value={currentPaper.title}
                  onChange={(e) =>
                    setCurrentPaper({
                      ...currentPaper,
                      title: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter paper title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={currentPaper.description}
                  onChange={(e) =>
                    setCurrentPaper({
                      ...currentPaper,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md h-20"
                  placeholder="Enter paper description"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Add Section</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Section Title</label>
                  <input
                    type="text"
                    value={currentSection.title}
                    onChange={(e) =>
                      setCurrentSection({
                        ...currentSection,
                        title: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Multiple Choice Questions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Marks</label>
                  <input
                    type="number"
                    value={currentSection.marks}
                    onChange={(e) =>
                      setCurrentSection({
                        ...currentSection,
                        marks: Number.parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full p-2 border rounded-md"
                    placeholder="Total marks for section"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Instructions</label>
                <textarea
                  value={currentSection.instructions}
                  onChange={(e) =>
                    setCurrentSection({
                      ...currentSection,
                      instructions: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md h-20"
                  placeholder="Instructions for this section"
                />
              </div>
              <button
                onClick={addSection}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Add Section
              </button>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Paper Preview</h3>
            {currentPaper.title && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg">{currentPaper.title}</h4>
                  <p className="text-gray-600">{currentPaper.description}</p>
                  <p className="text-sm font-medium mt-2">Total Marks: {currentPaper.totalMarks}</p>
                </div>

                {currentPaper.sections &&
                  currentPaper.sections.map((section, index) => (
                    <div key={section.id} className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold">
                        Section {index + 1}: {section.title}
                      </h5>
                      <p className="text-sm text-gray-600">{section.instructions}</p>
                      <p className="text-sm font-medium">Marks: {section.marks}</p>
                    </div>
                  ))}

                <button
                  onClick={savePaper}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Save Paper
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Saved Papers ({papers.length})</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {papers.map((paper, index) => (
              <div key={paper.id} className="p-3 border rounded-md bg-gray-50">
                <h4 className="font-semibold text-sm">{paper.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{paper.description}</p>
                <div className="flex justify-between text-xs">
                  <span>{paper.sections.length} sections</span>
                  <span className="font-bold">{paper.totalMarks} marks</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperBuilderApp
