import { useState } from "react";
import "./App.css";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function calculate(event) {
    event.preventDefault();

    setResult(null);
    setError("");
    setLoading(true);

    try {
      const params = new URLSearchParams({
        a,
        b,
        operation,
      });

      const response = await fetch(
        `http://localhost:8080/api/calculate?${params}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Please check your numbers.");
        return;
      }

      setResult(data.result);
    } catch (error) {
      setError("Cannot connect to Java. Check that the backend is running.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="calculator-page">
      <section className="calculator-card">
        <header className="calculator-header">
          <span className="kicker">Quick calculation</span>
          <h1>Simple Calculator</h1>
          <p>Enter two numbers and choose an operation.</p>
        </header>

        <form className="calculator-form" onSubmit={calculate}>
          <label className="field" htmlFor="first-number">
            <span>First number</span>
          <input
              id="first-number"
            type="number"
            step="any"
            required
            value={a}
            onChange={(event) => setA(event.target.value)}
              placeholder="e.g. 24"
          />
          </label>

          <label className="field" htmlFor="operation">
            <span>Operation</span>
          <select
              id="operation"
            value={operation}
            onChange={(event) => setOperation(event.target.value)}
          >
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (−)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (÷)</option>
          </select>
          </label>

          <label className="field" htmlFor="second-number">
            <span>Second number</span>
          <input
              id="second-number"
            type="number"
            step="any"
            required
            value={b}
            onChange={(event) => setB(event.target.value)}
              placeholder="e.g. 6"
          />
          </label>

          <button className="calculate-button" type="submit" disabled={loading}>
            {loading ? "Calculating..." : "Calculate answer"}
          </button>
        </form>

        <div className={`feedback ${error ? "feedback-error" : ""}`} aria-live="polite">
          {result !== null && (
            <>
              <span className="feedback-label">Your answer</span>
              <strong>{result}</strong>
            </>
          )}
          {error && <p>{error}</p>}
        </div>
      </section>
    </main>
  );
}