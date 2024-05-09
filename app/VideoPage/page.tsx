import MaxWidthWrapper from "../(components)/MaxWidthWrapper";
import YoutubePlayer from "../(components)/YouTubePlayer";


const Page = () => {

  return (
    <MaxWidthWrapper className="h-screen flex flex-col justify-center items-center">
      <h1 className="tracking-tight font-bold sm:!leading-[4rem] text-gray-900 sm:text-5xl text-4xl text-center">
        Watch this {" "}
        <span className="bg-red-500 text-white px-4 text-nowrap">
          video{" "}
        </span>
      </h1>
      <p className="mt-4 tracking-tight font-bold sm:!leading-[4rem] text-gray-900 sm:text-3xl text-xl text-center">
        To see the entire mechanism of the project
      </p>

      <div className="relative mx-4 rounded-xl aspect-video md:mx-auto max-w-4xl mt-12 p-2 lg:rounded-2xl lg:p-4">
        <YoutubePlayer />
      </div>

    </MaxWidthWrapper>
  )

}

export default Page
