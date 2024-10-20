import Counters from "@/app/_components/Counters";
import CabinCard from "@/app/_components/CabinCard";

export const metadata = {
  title: "Phòng",
};

export default function Page() {
  // thay doi canbins
  const cabins = [];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Những căn phòng ấm cúm
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Những căn phòng ấm cúng nhưng sang trọng, nằm ngay tại trung tâm Đà Lạt.
        Hãy tưởng tượng bạn thức dậy với những cảnh đẹp tuyệt vời của núi non,
        dành những ngày của bạn để khám phá những khu rừng rậm xung quanh, hoặc
        chỉ đơn giản là thư giãn trong bồn tắm nước nóng riêng của bạn dưới bầu
        trời đầy sao. Hãy tận hưởng vẻ đẹp của thiên nhiên trong ngôi nhà nhỏ
        của bạn, nơi lý tưởng cho một kỳ nghỉ yên tĩnh và bình yên
      </p>

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
