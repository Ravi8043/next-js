import Link from "next/link"
import { buttonVariants } from "../ui/button"

export default function Navbar(){
    return(
        <nav className="bg-stone-700 text-whitew-full p-5 flex justify-evenly mb-6">
            <Link href="/" className={buttonVariants({variant:"secondary"})}>Home</Link>
            <Link href="/about" className={buttonVariants()}>About</Link>
        </nav>
    )
}