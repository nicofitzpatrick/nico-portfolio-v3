import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico | Web Developer</title>
        <meta
          name="description"
          content="Nico Fitzpatrick's Web Developer portfolio"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen w-full flex-col justify-between bg-black px-5 py-10 lg:px-20 lg:py-20">
        <div className="text-green-700">
          <h1 className="text-[40px] lg:text-[80px]">Nico Fitzpatrick</h1>
          <h2 className="text-[20px] lg:text-[30px]">Web Developer</h2>
          <h3 className="text-[16px] lg:text-[20px]">Auckland, New Zealand</h3>
        </div>
        <div className="flex w-full justify-end">
          <span
            className="h-0 w-0 
            border-b-[75px] border-l-[50px]
            border-r-[50px] border-b-red-500
            border-l-transparent border-r-transparent "
          ></span>
          <span className="block h-10 w-10 rounded-full bg-blue-600 "></span>
        </div>
      </div>
    </>
  );
}
