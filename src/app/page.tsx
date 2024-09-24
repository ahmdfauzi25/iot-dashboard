import { redirect } from "next/navigation";
import { Footer, Header, Navbar } from "../components";
import DataTableDemo from "../components/DataTable";
import SplineComponent from "../components/SplineComponent";
import readUserSession from "@/actions";

export default async function Home() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/auth");
  }
  return (
    <div className="bg-gradient-to-t from-[#111627] to-[#344378] h-screen">
      <div className="absolute w-full h-full text-white flex flex-col justify-between">
        <div className="flex flex-col">
          <Navbar />
          <div className="mt-8 w-[95%] mx-auto"> {/* Tambahkan mx-auto untuk posisi tengah */}
            {/* <DataTableDemo /> */}
          </div>
          <Header />
        </div>
        
        <Footer />
      </div>
      <SplineComponent/>
    </div>
  );
}