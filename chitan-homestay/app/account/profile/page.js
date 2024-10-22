import SelectCountry from "@/app/_components/SelectCountry";
export const metadata = {
  title: "Cập nhật",
};
export default function Page() {
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Cập nhật thông tin của bạn
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Việc cung cấp thông tin sẽ giúp quá trình nhận phòng của bạn diễn ra
        nhanh chóng và suôn sẻ hơn. Hẹn gặp bạn sớm!
      </p>

      <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Họ và tên</label>
          <input className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <label>Địa chỉ Email</label>
          <input className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Bạn đến từ đâu?</label>
            {<img src={countryFlag} alt="Quốc kỳ" className="h-5 rounded-sm" />}
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">Số CCCD</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Cập nhật thông tin
          </button>
        </div>
      </form>
    </div>
  );
}
