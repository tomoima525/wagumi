import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";
import { DISCORD_URL, GITHUB_URL } from "@/home/const/config";
import WagumiImage from "@/home/public/wagumi.png";

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <GlowLogo src={WagumiImage} />
        <FooterLogo discord={DISCORD_URL} github={GITHUB_URL} />
      </div>
    </div>
  );
};

export default IndexPage;
