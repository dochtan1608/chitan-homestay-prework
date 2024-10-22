import ReservationCard from "@/app/_components/ReservationCard";
export const metadata = {
  title: "Đặt phòng",
};
export default function Page() {
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Đơn đặt phòng của bạn
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          Bạn chưa có đơn đặt phòng nào cả. Kiểm tra đơn đặt phòng của bạn{" "}
          <a className="underline text-accent-500" href="/cabins">
            tại đây &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
