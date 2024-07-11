

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);

  // Gün, ay, yıl, saat ve dakika formatını kısa ve okunabilir şekilde alıyoruz
  const formattedDate = date.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
  });

  return formattedDate.replace(',', ''); // Araya giren virgülü kaldırıyoruz
}
const TimeAndLocation = ({ data }) => {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-xl font-extralight">
                {formatDateTime(data?.location?.localtime)}
            </p>
        </div>
        <div className="flex items-center justify-center my-6">
            <p className="text-3xl font-medium">{data?.location?.name} | {data?.location?.country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation;