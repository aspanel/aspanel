import { Plus } from "@/components/icons";
import Image from "@/components/ui/Image";
import { admin_dashboard_menus } from "@/utils/lists";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between gap-10 p-6">
      <div className="flex-none w-fit mx-auto">
        <div className="relative w-[250px] h-[60px]">
          <Image src="/assets/logo/logo.png" alt="brand logo" fill />
        </div>
        <div className="h-[2px] mt-1 rounded bg-gradient-to-r to-blue-600 from-pink-400 mx-auto"></div>
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-r to-blue-600 from-pink-400">NodeJS hosting made simple</p>
        <div className="h-[2px] rounded bg-gradient-to-r to-blue-600 from-pink-400 mx-auto"></div>
      </div>

      <div className="flex-grow w-full md:w-[95%] lg:w-[85%] xl:w-[60%]  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:grid-rows-3 gap-10">
        <Link href="/create-website" title="Deploy new website" className="col-span-1 bg-white shadow-xl rounded-xl grid place-content-center transition-all ease-linear duration-[.2s] uppercase hover:scale-[1.05]">
          <Plus className="w-[40px] h-[40px] text-[#6F67D8]" />
        </Link>
        {
          admin_dashboard_menus.map((m, i) => {
            return (
              <Link href={m.href} key={i} title={m.title} className="col-span-1 bg-white shadow-xl rounded-xl grid place-content-center transition-all ease-linear duration-[.2s] uppercase hover:scale-[1.05]">
                {m.label}
              </Link>
            )
          })
        }
      </div>


      <div className="flex items-center justify-center gap-1">
        <span>Made with</span> <span className="text-red-500 text-xl pt-1">&#10084;</span> <span> & NextJS</span>
      </div>
    </main>
  )
}
