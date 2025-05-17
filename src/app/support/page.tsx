export default function Support() {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
        <p className="mb-4">Having trouble with Schedule Scanner? Here’s how we can help:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>📸 Make sure your schedule image is clear and not blurry</li>
          <li>🧍 Input your name exactly as it appears on the schedule</li>
          <li>🗓️ You can edit or remove detected events before adding them</li>
          <li>🔒 All data is processed locally and never stored or sent</li>
        </ul>
        <p className="mt-6">
          Still stuck? Email us at{" "}
          <a href="mailto:dathanpompa@gmail.com" className="text-blue-600 underline">
            dathanpompa@gmail.com
          </a>
        </p>
      </main>
    );
  }
  