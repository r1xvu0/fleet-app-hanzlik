export const metadata = {
  title: "Blog - Flotila Praha | Novinky a tipy pro taxi řidiče",
  description: "Aktuální novinky ze světa taxi služeb v Praze. Tipy pro řidiče, změny v aplikacích Bolt a Uber, novinky z flotily. Flotila Praha blog.",
  keywords: "blog taxi Praha, novinky řidič taxi, tipy taxi řidič, Bolt Uber novinky, flotila Praha blog",
  openGraph: {
    title: "Blog - Flotila Praha",
    description: "Aktuální novinky ze světa taxi služeb v Praze",
    url: "http://flotila-praha.eu/blog",
  },
};

import Link from 'next/link';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Nové funkce v aplikaci Bolt pro řidiče 2025",
      excerpt: "Přehled nejnovějších funkcí a vylepšení v aplikaci Bolt, které vám pomohou zvýšit výdělky.",
      date: "2025-01-15",
      author: "Flotila Praha",
      slug: "nove-funkce-bolt-2025",
      category: "Aplikace"
    },
    {
      id: 2,
      title: "Jak maximalizovat výdělky během zimních měsíců",
      excerpt: "Praktické tipy a strategie pro zvýšení příjmů v zimním období v Praze.",
      date: "2025-01-10",
      author: "Flotila Praha", 
      slug: "maximalizovat-vydelky-zima",
      category: "Tipy"
    },
    {
      id: 3,
      title: "Změny v dopravních předpisech pro taxi v roce 2025",
      excerpt: "Přehled aktuálních změn v legislativě týkající se taxi služeb v České republice.",
      date: "2025-01-05",
      author: "Flotila Praha",
      slug: "zmeny-dopravni-predpisy-2025", 
      category: "Legislativa"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Blog Flotila Praha
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-indigo-100">
            Aktuální novinky, tipy a informace pro taxi řidiče
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('cs-CZ')}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors"
                    >
                      Číst více
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nezmeškejte žádné novinky</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Přihlaste se k odběru našeho newsletteru a získejte nejnovější informace přímo do emailu.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Přihlásit se k odběru
          </Link>
        </div>
      </section>
    </>
  );
}