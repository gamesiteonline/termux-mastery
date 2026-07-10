import { useState, useEffect } from 'react';
import { Terminal, MessageCircle, Menu, X, ChevronRight, ChevronLeft, Github } from 'lucide-react';
import { Streamdown } from 'streamdown';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { id: 0, title: 'Introduction', path: 'index.md', slug: '' },
      { id: 1, title: 'Installation', path: 'getting-started/installation/index.md', slug: 'getting-started/installation' },
      { id: 2, title: 'Basic Configuration', path: 'getting-started/basic-config/index.md', slug: 'getting-started/basic-config' },
      { id: 3, title: 'Shell Basics', path: 'getting-started/shell-basics/index.md', slug: 'getting-started/shell-basics' },
      { id: 4, title: 'Package Management', path: 'getting-started/package-management/index.md', slug: 'getting-started/package-management' },
    ]
  },
  {
    title: 'Shells',
    items: [
      { id: 5, title: 'Bash Basics', path: 'shells/bash-basics/index.md', slug: 'shells/bash-basics' },
      { id: 6, title: 'Zsh Setup', path: 'shells/zsh-setup/index.md', slug: 'shells/zsh-setup' },
      { id: 7, title: 'Oh My Zsh', path: 'shells/oh-my-zsh/index.md', slug: 'shells/oh-my-zsh' },
      { id: 8, title: 'Powerlevel10k', path: 'shells/powerlevel10k/index.md', slug: 'shells/powerlevel10k' },
      { id: 9, title: 'Zsh Autocomplete', path: 'shells/zsh-autocomplete/index.md', slug: 'shells/zsh-autocomplete' },
      { id: 10, title: 'Zsh Plugins', path: 'shells/zsh-plugins/index.md', slug: 'shells/zsh-plugins' },
      { id: 11, title: 'Fish Setup', path: 'shells/fish-setup/index.md', slug: 'shells/fish-setup' },
      { id: 12, title: 'Fish Autocomplete', path: 'shells/fish-autocomplete/index.md', slug: 'shells/fish-autocomplete' },
      { id: 13, title: 'Starship Prompt', path: 'shells/starship-prompt/index.md', slug: 'shells/starship-prompt' },
      { id: 14, title: 'Shell Comparison', path: 'shells/shell-comparison/index.md', slug: 'shells/shell-comparison' },
    ]
  },
  {
    title: 'Theming',
    items: [
      { id: 15, title: 'Termux Styling', path: 'theming/termux-styling/index.md', slug: 'theming/termux-styling' },
      { id: 16, title: 'Nerd Fonts', path: 'theming/nerd-fonts/index.md', slug: 'theming/nerd-fonts' },
      { id: 17, title: 'Color Schemes', path: 'theming/color-schemes/index.md', slug: 'theming/color-schemes' },
      { id: 18, title: 'Theme Examples', path: 'theming/theme-examples/index.md', slug: 'theming/theme-examples' },
    ]
  },
  {
    title: 'Automation',
    items: [
      { id: 19, title: 'Termux API', path: 'automation/termux-api/index.md', slug: 'automation/termux-api' },
      { id: 20, title: 'Cron Jobs', path: 'automation/cron-jobs/index.md', slug: 'automation/cron-jobs' },
      { id: 21, title: 'SSH Keys', path: 'automation/ssh-keys/index.md', slug: 'automation/ssh-keys' },
      { id: 22, title: 'Automation Examples', path: 'automation/automation-examples/index.md', slug: 'automation/automation-examples' },
    ]
  }
];

const allItems = navigation.flatMap(group => group.items);

export default function Home() {
  const [selectedId, setSelectedId] = useState(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const found = allItems.find(item => item.slug === path);
    return found ? found.id : 0;
  });
  const [content, setContent] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentItem = allItems.find(item => item.id === selectedId) || allItems[0];

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/_content/${currentItem.path}`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          setContent('# Error\nFailed to load content.');
        }
      } catch (err) {
        setContent('# Error\nAn unexpected error occurred.');
      }
      setIsLoading(false);
      window.scrollTo(0, 0);
      
      // Update URL without reloading
      const url = currentItem.slug === '' ? '/' : `/${currentItem.slug}`;
      window.history.pushState({ id: currentItem.id }, '', url);
    };
    loadContent();
  }, [selectedId]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && typeof event.state.id === 'number') {
        setSelectedId(event.state.id);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleContact = () => {
    const num = "255796339436";
    const text = encodeURIComponent("hello can I know more About Termux Mastery");
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="doc-header">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <Terminal className="text-sky-600" size={24} />
              <span className="font-bold text-slate-900 tracking-tight">Termux Mastery</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleContact}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <MessageCircle size={16} />
              Contact Author
            </button>
            <a href="https://github.com/gamesiteonline/termux-mastery" target="_blank" className="text-slate-400 hover:text-slate-600">
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-10 bg-slate-900/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`doc-sidebar ${isSidebarOpen ? 'translate-x-0 block bg-white' : '-translate-x-full lg:translate-x-0'}`}>
        <nav className="space-y-8">
          {navigation.map((group) => (
            <div key={group.title}>
              <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-900 px-3">
                {group.title}
              </h5>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setSelectedId(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full doc-nav-item ${
                        selectedId === item.id ? 'doc-nav-item-active' : 'doc-nav-item-inactive'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="doc-main">
        <div className="doc-content">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600" />
            </div>
          ) : (
            <div className="animate-fade-in">
              <article className="prose">
                <Streamdown>{content}</Streamdown>
              </article>

              <div className="mt-20 flex items-center justify-between border-t border-slate-200 pt-8">
                {selectedId > 0 ? (
                  <button
                    onClick={() => setSelectedId(selectedId - 1)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    <ChevronLeft size={16} />
                    {allItems[selectedId - 1].title}
                  </button>
                ) : <div />}
                {selectedId < allItems.length - 1 ? (
                  <button
                    onClick={() => setSelectedId(selectedId + 1)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {allItems[selectedId + 1].title}
                    <ChevronRight size={16} />
                  </button>
                ) : <div />}
              </div>
            </div>
          )}
        </div>

        <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-slate-500 font-medium">© 2026 Fahad Mohamed Malibiche</p>
              <p className="text-xs text-slate-400 mt-1">Software Engineer from Tanzania</p>
            </div>
            <div className="flex gap-6">
              <button onClick={handleContact} className="text-sm text-slate-500 hover:text-sky-600 font-medium">Contact</button>
              <a href="#" className="text-sm text-slate-500 hover:text-sky-600 font-medium">Twitter</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
