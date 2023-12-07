import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6l"> Your market place for high-quality
          <span className="text-blue-600"> digital assets</span>.
        </h1>
        <p className="mt-6 text-large max-w-prose test-muted-foreground">Welcome to DigitalHippo. Every assest on our
          platform is verified by our team to ensure our
          highest quality standards.
        </p>
        <div className=" "> </div>
      </div>
    </MaxWidthWrapper>
  )
}
