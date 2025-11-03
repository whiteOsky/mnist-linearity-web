import MotionWrapper from "@/components/MotionWrapper";
import CodeBlock from "@/components/CodeBlock";

const data_iter_code = `
def data_iter(batch_size, features, labels):
    num_examples = len(features)
    indices = list(range(num_examples))
    random.shuffle(indices)
    for i in range(0, num_examples, batch_size):
        batch_indices = torch.tensor(
            indices[i:min(i + batch_size, num_examples)]
        )
        yield features[batch_indices], labels[batch_indices]
`;

const model_code = `
class LinearClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.fc = nn.Linear(784, 10)
    
    def forward(self, x):
        x = self.flatten(x)
        return self.fc(x)
`;

export default function Learn() {
  return (
    <MotionWrapper>
      <section className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">📘 Learn the Code</h1>
        <p className="text-gray-400 max-w-3xl">
          In this section, you can explore and understand the core PyTorch implementation behind
          the MNIST Linearity Project. Click each code block to expand and read with syntax highlighting.
        </p>

        <CodeBlock title="Data Iterator" code={data_iter_code} />
        <CodeBlock title="Linear Model Definition" code={model_code} />

        <p className="text-gray-400 italic">
          More coming soon — including training loop, MLP model, and visualization pipeline.
        </p>
      </section>
    </MotionWrapper>
  );
}

