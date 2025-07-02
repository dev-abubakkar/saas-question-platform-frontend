"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const QuestionBuilderApp = dynamic(() => import("questionBuilder/App"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>
  ),
})

export default function QuestionBuilderPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Question Builder</h1>
      <Suspense fallback={<div>Loading Question Builder...</div>}>
        <QuestionBuilderApp />
      </Suspense>
    </div>
  )
}
