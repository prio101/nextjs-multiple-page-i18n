import Link from "next/link";

const Footer = () => {
  return(
    <>
      <footer className="flex flex-1 justify-center items-center">
        <span className="text-blue-400 font-bold text-base">This is a viable Footer, Trust me. Now Please &nbsp;
          <Link href={'/'} className="text-blue-400"> &larr; Go Home</Link>
        </span>
      </footer>
    </>
  )
}

export default Footer;