import Link from 'next/link'
import Header from './header';
import Footer from './footer';



export default function Home() {
 
  

  
  return (
    <div className={"flex flex-1 flex-col items-center justify-center min-h-screen"}>
      
      <Header />

      <main className={"flex flex-col mt-20"}>
        <h1 className={"text-purple-400 font-bold text-3xl"}>
          <a>Diary of a HitchHiker in Galaxy or some weird subdomain</a>
        </h1>

        
        <h2 className='flex flex-1 mt-10 mb-10 text-gray-900 font-bold block'>Posts</h2>

        <div className={"flex flex-1 p-10 w-64 w-auto rounded-md border-gray-300 shadow-lg"}>
        
          <span className={"flex flex-1 flex-col text-pink-400"}>
            <>              
              <Link href="/spiderman/multiverse/1">A Spiderman In multiverse</Link>
            </>            
          </span>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
