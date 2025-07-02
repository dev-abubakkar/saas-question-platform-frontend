"use client"

interface NavigationProps {
  activeApp: string
  setActiveApp: (app: string) => void
}

const Navigation = ({ activeApp, setActiveApp }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "question-builder", label: "Question Builder", icon: "❓" },
    { id: "paper-builder", label: "Paper Builder", icon: "📄" },
    { id: "admin-panel", label: "Admin Panel", icon: "⚙️" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setActiveApp("home")}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              MicroFE Preview
            </button>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveApp(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeApp === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Preview Mode</div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
