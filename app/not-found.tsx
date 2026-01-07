export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white/90 mb-4">404</h1>
        <p className="text-lg md:text-xl text-white/60 mb-8">Page not found</p>
        <a
          href="/"
          className="text-white/80 hover:text-white underline transition-colors"
        >
          Go home
        </a>
      </div>
    </div>
  )
}

