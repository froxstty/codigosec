export const initSecurity = () => {
  // 1. Bloquear clique direito (menu de contexto)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // 2. Bloquear atalhos de teclado (Ctrl+C, Ctrl+V, F12, etc)
  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

    // Bloqueia Ctrl+C / Cmd+C (Copiar)
    if (cmdOrCtrl && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
    }
    
    // Bloqueia Ctrl+U / Cmd+U (Código-fonte)
    if (cmdOrCtrl && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
    }
    
    // Bloqueia Ctrl+S / Cmd+S (Salvar página)
    if (cmdOrCtrl && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
    }
    
    // Bloqueia F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
    
    // Bloqueia Ctrl+Shift+I, J, C (DevTools)
    if (cmdOrCtrl && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
      e.preventDefault();
    }
  });

  // 3. Bloquear drag de todas as imagens e links via JS
  document.addEventListener('dragstart', (e) => {
    if (e.target instanceof HTMLImageElement || e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
    }
  });

  // 4. Mecanismo de defesa contra DevTools embutido
  setInterval(() => {
    const before = new Date().getTime();
    // Essa instrução pausa a execução caso o DevTools esteja aberto
    // eslint-disable-next-line no-debugger
    debugger;
    const after = new Date().getTime();
    
    if (after - before > 100) {
      // Significa que o devtools travou a tela no debugger
      console.clear();
      console.log('%c⚠️ Acesso Restrito!', 'background: #b08d57; color: #fff; font-size: 2rem; font-weight: bold; padding: 10px; border-radius: 5px;');
      console.log('%cEsta página está protegida contra inspeção e cópia.', 'color: #1b4332; font-size: 1.2rem; font-weight: bold;');
    }
  }, 1500);

  // Alternativa de detecção por tamanho da janela (caso Desatrapalhem o debugger)
  window.addEventListener('resize', () => {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      console.clear();
    }
  });
};
