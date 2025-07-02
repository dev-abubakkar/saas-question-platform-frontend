"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "./components/Navigation"
import QuestionBuilderDemo from "./components/QuestionBuilderDemo"
import PaperBuilderDemo from "./components/PaperBuilderDemo"
import AdminPanelDemo from "./components/AdminPanelDemo"

export default function MicrofrontendPreview() {
  const [activeApp, setActiveApp] = useState<string>("home")

  const renderActiveApp = () => {
    switch (activeApp) {
      case "question-builder":
        return <QuestionBuilderDemo />
      case "paper-builder":
        return <PaperBuilderDemo />
      case "admin-panel":
        return <AdminPanelDemo />
      default:
        return <HomePage setActiveApp={setActiveApp} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeApp={activeApp} setActiveApp={setActiveApp} />
      <main className="container mx-auto px-4 py-8">{renderActiveApp()}</main>
    </div>
  )
}

function HomePage({ setActiveApp }: { setActiveApp: (app: string) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Microfrontend Dashboard</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to the microfrontend application preview. This demonstrates how different applications work together
          seamlessly.
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Architecture:</strong> Shell (Next.js) + Remote MFEs (React) with Webpack Module Federation
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setActiveApp("question-builder")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Q</span>
              </div>
              Question Builder
            </CardTitle>
            <CardDescription>Create and manage questions for assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Build comprehensive question banks with various question types and difficulty levels.
            </p>
            <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
              <strong>Port:</strong> 3001 | <strong>Tech:</strong> React + Webpack MF
            </div>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setActiveApp("paper-builder")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              Paper Builder
            </CardTitle>
            <CardDescription>Design and structure examination papers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Combine questions to create structured examination papers with custom layouts.
            </p>
            <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
              <strong>Port:</strong> 3002 | <strong>Tech:</strong> React + Webpack MF
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveApp("admin-panel")}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              Admin Panel
            </CardTitle>
            <CardDescription>Manage users, settings, and system configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Administrative tools for user management and system configuration.
            </p>
            <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
              <strong>Port:</strong> 3003 | <strong>Tech:</strong> React + Webpack MF
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Architecture Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Shell Application (Next.js)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• SSR-enabled host application</li>
              <li>• Dynamic routing to microfrontends</li>
              <li>• Shared navigation and layout</li>
              <li>• Module Federation host configuration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Remote Microfrontends (React)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Independent development and deployment</li>
              <li>• Webpack Module Federation setup</li>
              <li>• Shared React dependencies as singletons</li>
              <li>• Consistent styling with Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
