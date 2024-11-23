import { useState } from 'react';
import { reqToGroq } from './utils/groq';
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(""); 
  const [selectedDifficulty, setSelectedDifficulty] = useState(""); 
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(""); 

  const handleSubmit = async () => {
    // Validasi input
    if (!selectedSubject || !selectedDifficulty || !selectedQuestionCount) {
      alert("Mohon pilih semua opsi!");
      return;
    }

    const prompt = `Coba generate soal beserta jawabannya mengenai ${selectedSubject} dengan tingkat kesulitan ${selectedDifficulty} dengan jumlah ${selectedQuestionCount} soal dengan bahasa Indonesia`;

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
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-4xl text-emerald font-bold p-4">REACT</h1>
      <form className="flex flex-col gap-4 w-full">
        {/* Dropdown Mata Pelajaran */}
        <select
          className="py-2 px-4 rounded-lg"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="" disabled>
            Pilih Mata Pelajaran...
          </option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Biologi">Biologi</option>
          <option value="Sejarah">Sejarah</option>
        </select>

        {/* Dropdown Tingkat Kesulitan */}
        <select
          className="py-2 px-4 rounded-lg"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="" disabled>
            Pilih Tingkat Kesulitan...
          </option>
          <option value="Mudah">Mudah</option>
          <option value="Sedang">Sedang</option>
          <option value="Sulit">Sulit</option>
        </select>

        {/* Dropdown Jumlah Soal */}
        <select
          className="py-2 px-4 rounded-lg"
          value={selectedQuestionCount}
          onChange={(e) => setSelectedQuestionCount(e.target.value)}
        >
          <option value="" disabled>
            Pilih Jumlah Soal...
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        {/* Tombol Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={`bg-teal-500 font-bold rounded-xl p-4 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Loading...' : 'Kirim'}
        </button>
      </form>
      <div className="max-w-xl mt-4">
        <SyntaxHighlight
          lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
          language="swift"
          style={darcula}
          wrapLongLines={true}
        >
          {data}
        </SyntaxHighlight>
      </div>
    </main>
  );
}

export default App;
