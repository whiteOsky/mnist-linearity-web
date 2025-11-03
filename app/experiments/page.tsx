import Image from "next/image";

export default function Experiments() {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-semibold mb-6">🔬 Experimental Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Training Curve (MSE)</h3>
          <Image
            src="/assets/linear_curve.png"
            alt="Linear Curve"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Linear Weight Templates</h3>
          <Image
            src="/assets/weights_linear.png"
            alt="Linear Weights"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

