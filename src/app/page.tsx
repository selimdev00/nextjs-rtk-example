import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"min-h-screen flex items-center justify-center"}>
      <div className={"flex flex-col gap-2"}>
        <h1>So this is home page</h1>

        <p>Just imagine...</p>

        <div className={"w-[200px] h-[200px] relative"}>
          <Image
            className={"w-full h-full object-contain"}
            src={
              "https://images.pexels.com/photos/18254676/pexels-photo-18254676/free-photo-of-woman-posing-in-a-dress-in-front-of-ancient-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={"Random image from pexels"}
            width={200}
            height={200}
          />
        </div>

        <Link href={"/shop/shoes/jordan"}>Buy brand new Jordan</Link>
      </div>
    </div>
  );
}
