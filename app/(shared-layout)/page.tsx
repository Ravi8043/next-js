import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1 className="text-3xl mb-6 text-center">Main page</h1>
      <div className="flex justify-center gap-4 p-4 rounded-lg">
        <Link href="/about" className={buttonVariants({variant:"ghost"})}>About</Link>
      <Link href="/about/contact" className={buttonVariants({variant:"ghost"})}>Contact</Link>
      </div>
    </div>
  )
}

export default page
