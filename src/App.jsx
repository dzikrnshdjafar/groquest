import { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import AnswerDisplay from './components/AnswerDisplay';
import { reqToGroq } from './utils/groq';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateQuestions = async (formValues) => {
    const { subject, difficulty, questionType, questionCount } = formValues;

    // Validasi input
    if (!subject || !difficulty || !questionCount) {
      alert('Mohon pilih semua opsi!');
      return;
    }

    const prompt = `Coba generate soal ${questionType} beserta jawabannya mengenai ${subject} dengan tingkat kesulitan ${difficulty} dengan jumlah ${questionCount} soal dengan bahasa Indonesia dengan format seperti ini **Soal 1**`;

    setLoading(true); // Mulai loading
    try {
      const ai = await reqToGroq(prompt);
      setData(ai); // Setel data ke respons API
    } catch (error) {
      console.error('Error:', error); // Tangani error jika ada
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-3xl w-full mx-auto">
      <h1 className="text-6xl text-emerald font-bold p-4">GENERATOR SOAL ⚙️</h1>
      <QuestionForm onSubmit={handleGenerateQuestions} loading={loading} />
      <AnswerDisplay data={data} />
    </main>
  );
}

export default App;
