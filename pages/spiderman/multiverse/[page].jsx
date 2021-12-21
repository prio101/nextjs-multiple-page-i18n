import Link from "next/link";
import Header from "../../header";
import { useRouter } from "next/router";
import { bn, en } from "../../../i18n/i18n";


const Multiverse = (props) => {
  const { locale, locales, defaultLocale } = useRouter();

  let postData = ''

  if(locale == defaultLocale){
    postData = en.multiverse.spiderman.post;
  } else{
    postData = bn.multiverse.spiderman.post;
  }
  
  return(
    <>
      
      <Header/>
      <Link href="/">
        &larr; Go Home
      </Link>
      <h3 className="flex text-base text-red-300 font-bold">Current Locale: {locale}</h3>
      
      <main className={"flex flex-col m-20"}>
        <h1 className={"text-purple-400 font-bold text-3xl"}>
          <a>Diary of a HitchHiker in Galaxy or some weird subdomain</a>
        </h1>

        
        <div className="flex flex-1 flex-col m-20 text-gray-900">
          <h1>{postData}</h1>
        </div>
        
      </main>
    </>
  )
}

export default Multiverse;