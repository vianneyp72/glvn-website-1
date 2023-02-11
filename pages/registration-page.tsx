import NavBar from '../components/NavBar'
import RegForm from '../components/RegForm'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <NavBar />

        {/* Image link below is a placeholder */}
        <Link href="/">
            <Image src="/GLVN_Minimal_small.png" alt="GLVN Icon" width={300} height={200}></Image>
        </Link>

        <RegForm />
    </main>
  )
}
