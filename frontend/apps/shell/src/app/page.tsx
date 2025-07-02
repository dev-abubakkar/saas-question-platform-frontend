import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Microfrontend Dashboard</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to the microfrontend application. Navigate to different modules using the menu above.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/question-builder">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
              <p className="text-sm text-gray-600">
                Build comprehensive question banks with various question types and difficulty levels.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/paper-builder">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
              <p className="text-sm text-gray-600">
                Combine questions to create structured examination papers with custom layouts.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin-panel">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
              <p className="text-sm text-gray-600">
                Administrative tools for user management and system configuration.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
