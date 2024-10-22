import Image from "next/image";
import image1 from "@/public/aboutdalat-1.jpg";
import image2 from "@/public/aboutdatat-2.jpg";
export const metadata = {
  title: "Về chúng tôi",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Chào mừng đã đến với Chitan Homestay
        </h1>

        <div className="space-y-8">
          <p>
            Nơi mà vẻ đẹp thiên nhiên và cuộc sống thoải mái hòa quyện với nhau
            một cách hoàn hảo. Nằm ẩn mình giữa những ngọn đồi xanh mát của Đà
            Lạt, đây là chốn bình yên dành cho bạn để tạm quên đi những bộn bề
            thường ngày. Không chỉ là những homestay đẹp đẽ, mà còn là sự trải
            nghiệm hòa mình vào không gian yên bình của cao nguyên và tạo nên
            những kỷ niệm đáng nhớ bên người thân yêu.
          </p>
          <p>
            8 căn phòng sang trọng của chúng tôi mang đến cho bạn một không gian
            ấm cúng, sự tự do và bình yên thật sự nằm ở những ngọn đồi bao
            quanh. Hãy dạo bước qua những khu rừng thông xanh tươi, hít thở bầu
            không khí trong lành, và ngắm nhìn bầu trời sao lấp lánh từ bên ánh
            lửa trại ấm áp hay thư giãn trong bồn tắm nước nóng riêng của bạn.
          </p>
          <p>
            Đây là nơi tạo nên những khoảnh khắc đáng nhớ, giữa khung cảnh thiên
            nhiên tuyệt đẹp. Một nơi để bạn chậm lại, thư giãn và tận hưởng niềm
            vui khi được quây quần bên nhau trong không gian thơ mộng của Đà
            Lạt.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Giới thiệu về Chitan Homestay"
          placeholder="blur"
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={image2}
          alt="Gia dinh quan ly 2019"
          fill
          className="object-cover"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Được gia đình tôi quản lý từ năm 2019
        </h1>

        <div className="space-y-8">
          <p>
            Được ông bà chúng tôi sáng lập, nơi đây đã được chăm sóc với tất cả
            tình yêu và sự tận tụy, truyền qua nhiều thế hệ trong gia đình như
            một minh chứng cho sự cam kết của chúng tôi trong việc tạo ra một
            không gian ấm áp và hiếu khách.
          </p>
          <p>
            Qua nhiều năm, chúng tôi đã gìn giữ tinh hoa của Chitan Homestay,
            kết hợp vẻ đẹp trường tồn của núi rừng với sự chăm sóc tận tình mà
            chỉ có một gia đình mới có thể mang lại. Ở đây, bạn không chỉ là một
            vị khách, mà là một thành viên trong gia đình mở rộng của chúng tôi.
            Hãy đến với Chitan Homestay sớm nhé, nơi mà truyền thống hòa quyện
            cùng sự tĩnh lặng, và mỗi lần ghé thăm đều mang lại cảm giác như trở
            về nhà.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Khám phá ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
