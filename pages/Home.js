import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts")); // Substitua "posts" pelo nome da sua coleção
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Header />
      
      <main className="container">
        <h1>Bem-vindo ao Nosso Site</h1>
        
        {loading && <p>Carregando dados...</p>}
        
        {error && <p className="error">{error}</p>}
        
        {data.length > 0 && (
          <section className="posts-grid">
            {data.map((item) => (
              <article key={item.id} className="post-card">
                <h2>{item.title || "Sem título"}</h2>
                <p>{item.content || "Sem conteúdo"}</p>
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title || "Imagem do post"} 
                    className="post-image"
                  />
                )}
              </article>
            ))}
          </section>
        )}

        {!loading && data.length === 0 && !error && (
          <p>Nenhum post encontrado.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}