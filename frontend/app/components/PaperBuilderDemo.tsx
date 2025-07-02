"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

export default function PaperBuilderDemo() {
  const [papers, setPapers] = useState<Paper[]>([
    {
      id: "1",
      title: "Mathematics Final Exam",
      description: "Comprehensive mathematics examination covering algebra and geometry",
      sections: [
        {
          id: "1",
          title: "Multiple Choice Questions",
          instructions: "Choose the best answer for each question",
          questions: [],
          marks: 20,
        },
        {
          id: "2",
          title: "Problem Solving",
          instructions: "Show all work for full credit",
          questions: [],
          marks: 30,
        },
      ],
      totalMarks: 50,
    },
  ])

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Paper Builder</h1>
          <p className="text-gray-600">Remote Microfrontend - Port 3002</p>
        </div>
        <div className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">React + Module Federation</div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paper Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <Button onClick={addSection} variant="outline" className="w-full bg-transparent">
                Add Section
              </Button>
            </CardContent>
          </Card>

          {currentPaper.title && (
            <Card>
              <CardHeader>
                <CardTitle>Paper Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg">{currentPaper.title}</h4>
                  <p className="text-gray-600">{currentPaper.description}</p>
                  <p className="text-sm font-medium mt-2">Total Marks: {currentPaper.totalMarks}</p>
                </div>

                {currentPaper.sections &&
                  currentPaper.sections.map((section, index) => (
                    <div key={section.id} className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold">
                        Section {index + 1}: {section.title}
                      </h5>
                      <p className="text-sm text-gray-600">{section.instructions}</p>
                      <p className="text-sm font-medium">Marks: {section.marks}</p>
                    </div>
                  ))}

                <Button onClick={savePaper} className="w-full">
                  Save Paper
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Saved Papers ({papers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {papers.map((paper) => (
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
