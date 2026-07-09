import { useState, useEffect } from 'react';
import { BookOpen, Code2, Zap, MessageCircle, Terminal } from 'lucide-react';
import { Streamdown } from 'streamdown';

const chapters = [
  { id: 0, title: 'Introduction', section: 'Prelude', path: 'docs/index.md' },
  { id: 1, title: 'Installation', section: 'Getting Started', path: 'docs/getting-started/installation/index.md' },
  { id: 2, title: 'Basic Configuration', section: 'Getting Started', path: 'docs/getting-started/basic-config/index.md' },
  { id: 3, title: 'Shell Basics', section: 'Getting Started', path: 'docs/getting-started/shell-basics/index.md' },
  { id: 4, title: 'Package Management', section: 'Getting Started', path: 'docs/getting-started/package-management/index.md' },
  { id: 5, title: 'Bash Basics', section: 'Shells', path: 'docs/shells/bash-basics/index.md' },
  { id: 6, title: 'Zsh Setup', section: 'Shells', path: 'docs/shells/zsh-setup/index.md' },
  { id: 7, title: 'Oh My Zsh', section: 'Shells', path: 'docs/shells/oh-my-zsh/index.md' },
  { id: 8, title: 'Powerlevel10k', section: 'Shells', path: 'docs/shells/powerlevel10k/index.md' },
  { id: 9, title: 'Zsh Autocomplete', section: 'Shells', path: 'docs/shells/zsh-autocomplete/index.md' },
  { id: 10, title: 'Zsh Plugins', section: 'Shells', path: 'docs/shells/zsh-plugins/index.md' },
  { id: 11, title: 'Fish Setup', section: 'Shells', path: 'docs/shells/fish-setup/index.md' },
  { id: 12, title: 'Fish Autocomplete', section: 'Shells', path: 'docs/shells/fish-autocomplete/index.md' },
  { id: 13, title: 'Starship Prompt', section: 'Shells', path: 'docs/shells/starship-prompt/index.md' },
  { id: 14, title: 'Shell Comparison', section: 'Shells', path: 'docs/shells/shell-comparison/index.md' },
];

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [chapterContent, setChapterContent] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const getSecureContact = () => {
    const p1 = "255";
    const p2 = "796";
    const p3 = "339";
    const p4 = "436";
    return `+${p1}${p2}${p3}${p4}`;
  };

  const handleContact = () => {
    const num = getSecureContact().replace('+', '');
    const text = encodeURIComponent("hello can I know more About Termux Mastery");
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  useEffect(() => {
    const loadChapter = async () => {
      try {
        const path = chapters[selectedChapter].path;
        const response = await fetch(`/${path}`);
        if (response.ok) {
          const content = await response.text();
          setChapterContent(content);
        }
      } catch (error) {
        console.error('Error loading chapter:', error);
      }
    };
    loadChapter();
  }, [selectedChapter]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = chapters[selectedChapter];
  const nextChapter = selectedChapter < chapters.length - 1 ? chapters[selectedChapter + 1] : null;
  const prevChapter = selectedChapter > 0 ? chapters[selectedChapter - 1] : null;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="sticky top-0 z-40 bg-white border-4 border-black neo-shadow mb-8">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-2 border-2 border-black">
              <Terminal className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black animate-neo-loop">Termux Mastery</h1>
              <p className="text-xs font-bold uppercase">By Fahad Mohamed Malibiche from Tanzania</p>
            </div>
          </div>
          <button 
            onClick={handleContact}
            className="neo-button flex items-center gap-2 bg-secondary"
          >
            <MessageCircle className="h-5 w-5" />
            Contact Author
          </button>
        </div>
        <div className="h-4 bg-white border-t-4 border-black overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-80 flex flex-col bg-white border-4 border-black neo-shadow p-6 h-fit lg:sticky lg:top-40 max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 border-b-4 border-black pb-2">
            <BookOpen className="h-6 w-6" />
            Topics
          </h2>
          <div className="space-y-4">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapter(ch.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left p-3 border-2 border-black font-bold transition-all ${
                  selectedChapter === ch.id
                    ? 'bg-primary text-white translate-x-1 translate-y-1 shadow-none'
                    : 'bg-white hover:bg-secondary neo-shadow-hover'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-sm font-black">{String(ch.id).padStart(2, '0')}</span>
                  <span className="uppercase text-xs">{ch.title}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="bg-white border-4 border-black neo-shadow p-6 md:p-12">
            <div className="mb-12">
              <div className="inline-block bg-accent text-white px-3 py-1 border-2 border-black font-black uppercase text-sm mb-4">
                {currentChapter.section}
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                {currentChapter.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm font-bold uppercase">
                <span className="flex items-center gap-2 bg-muted p-2 border-2 border-black">
                  <Code2 className="h-5 w-5" />
                  Topic {String(selectedChapter).padStart(2, '0')}
                </span>
                <span className="flex items-center gap-2 bg-muted p-2 border-2 border-black">
                  <Zap className="h-5 w-5" />
                  {Math.ceil(chapterContent.length / 1000)} min read
                </span>
              </div>
            </div>

            <article className="prose prose-lg max-w-none mb-16">
              <Streamdown>{chapterContent}</Streamdown>
            </article>

            <div className="border-t-4 border-black pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevChapter ? (
                  <button
                    onClick={() => {
                      setSelectedChapter(prevChapter.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="neo-button bg-white text-black text-left"
                  >
                    <span className="text-xs font-black uppercase block mb-1">← Previous</span>
                    <span className="block font-black">{prevChapter.title}</span>
                  </button>
                ) : (
                  <div />
                )}
                {nextChapter ? (
                  <button
                    onClick={() => {
                      setSelectedChapter(nextChapter.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="neo-button bg-primary text-white text-right"
                  >
                    <span className="text-xs font-black uppercase block mb-1 text-white">Next →</span>
                    <span className="block font-black">{nextChapter.title}</span>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <footer className="mt-12 bg-black text-white p-8 border-4 border-black">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-black uppercase">© 2026 Fahad Mohamed Malibiche</p>
          <div className="flex gap-4">
             <button onClick={handleContact} className="font-black uppercase hover:text-secondary">Contact</button>
             <span className="font-black uppercase">Tanzania</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
