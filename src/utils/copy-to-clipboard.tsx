function copyToClipboard(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Проверяем поддержку нового API navigator.clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(resolve)
        .catch(reject);
    } else {
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed'; // Предотвращаем прокрутку до элемента
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          resolve();
        } else {
          reject(new Error('Не удалось скопировать текст'));
        }
      } catch (err) {
        reject(err);
      }

      document.body.removeChild(textArea);
    }
  });
}

export default copyToClipboard
