import './globals.css'; // Убедись, что Tailwind подключен
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 font-sans">
        <nav className="bg-white p-4 shadow-md">
          <ul className="flex space-x-4 justify-center">
            <li><a href="/" className="text-blue-500 hover:text-blue-700">Главная</a></li>
            <li><a href="/portfolio" className="text-blue-500 hover:text-blue-700">Портфолио</a></li>
            <li><a href="/blog" className="text-blue-500 hover:text-blue-700">Блог</a></li>
            <li><a href="/login" className="text-blue-500 hover:text-blue-700">Войти</a></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-white p-4 mt-8 text-center">
          <p>© 2025 Мое портфолио. Все права защищены.</p>
        </footer>
      </body>
    </html>
  );
}