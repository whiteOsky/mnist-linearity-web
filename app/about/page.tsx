export default function About() {
  return (
    <section className="space-y-6 text-center">
      <h2 className="text-3xl font-semibold">👤 About This Project</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        This project was developed by <b>Jensen</b> as part of a deep learning study inspired by
        <i> "Dive into Deep Learning" (动手学深度学习)</i>.
        The goal is to visualize and quantify the expressive power of linear vs nonlinear neural networks.
      </p>

      <a
        href="https://github.com/whiteOsky/mnist_linearity_project"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        🔗 View Source on GitHub
      </a>
    </section>
  );
}

