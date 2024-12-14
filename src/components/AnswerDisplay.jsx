import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function AnswerDisplay({ data }) {
  const highlightJawaban = (text) => {
    return text.replace(/(Jawaban)/g, '✅Jawaban');
  };

  return (
    <div className="max-w-4xl mt-4 space-y-4">
      { data
            .split('**Soal')
            .slice(1)
            .map((soal, index) => (
              <SyntaxHighlight
                key={index}
                lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
                language="swift"
                style={darcula}
                wrapLongLines={true}
                className="rounded-xl"
              >
                {`**Soal${highlightJawaban(soal)}`}
              </SyntaxHighlight>
            ))
        }
    </div>
  );
}

export default AnswerDisplay;
