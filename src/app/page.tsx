import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Image src={"/images/img.jpg"} width={250} height={300} alt="test" />
    </div>
  );
}
