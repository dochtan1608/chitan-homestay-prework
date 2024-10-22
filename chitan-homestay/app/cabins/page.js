import Counters from "@/app/_components/Counters";
import CabinCard from "@/app/_components/CabinCard";

export const metadata = {
  title: "Phòng",
};

export default function Page() {
  // thay doi phong
  const cabins = [];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Những căn phòng ấm cúm
      </h1>
      <p className="text-primary-200 text-lg mb-10"></p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
