import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
                <p className="text-gray-500 mt-4 mb-8">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

