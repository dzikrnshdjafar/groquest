import { useState } from 'react';

function QuestionForm({ onSubmit, loading }) {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionCount, setQuestionCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ subject, difficulty, questionType, questionCount });
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <select
        className="py-2 px-4 rounded-lg bg-slate"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="" disabled>
          Pilih Mata Pelajaran...
        </option>
        {/* Options */}
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Biologi">Biologi</option>
        <option value="Sejarah">Sejarah</option>
        <option value="Informatika">Informatika</option>
        <option value="Pemrograman">Pemrograman</option>
        <option value="Ekonomi">Ekonomi</option>
        <option value="Olahraga">Olahraga</option>
        <option value="Kesehatan">Kesehatan</option>
        <option value="Filsafat">Filsafat</option>
        <option value="Pendidikan Kewarganegaraan">Pendidikan Kewarganegaraan</option>
        <option value="Ilmu Pengetahuan Sosial">Ilmu Pengetahuan Sosial</option>
      </select>

      <select
        className="py-2 px-4 rounded-lg bg-slate"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="" disabled>
          Pilih Tingkat Kesulitan...
        </option>
        <option value="Mudah">Mudah</option>
        <option value="Sedang">Sedang</option>
        <option value="Sulit">Sulit</option>
      </select>

      <select
        className="py-2 px-4 rounded-lg bg-slate"
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
      >
        <option value="" disabled>
          Pilih Jenis Soal...
        </option>
        <option value="Pilihan Ganda">Pilihan Ganda</option>
        <option value="Essay">Essay</option>
      </select>

      <select
        className="py-2 px-4 rounded-lg bg-slate"
        value={questionCount}
        onChange={(e) => setQuestionCount(e.target.value)}
      >
        <option value="" disabled>
          Pilih Jumlah Soal...
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className={`bg-secondary text-xl font-bold rounded-xl p-4 text-neutral ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </form>
  );
}

export default QuestionForm;
