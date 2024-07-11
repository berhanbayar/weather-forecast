function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);


  const formattedDate = date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formattedDate.replace(',', '');
}
const TimeAndLocation = ({ data }) => {
  return (
    <div className='mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='flex flex-col items-center justify-center my-6 text-center'>
        <p className='text-base sm:text-xl md:text-2xl font-extralight'>
          {formatDateTime(data?.location?.localtime)}
        </p>
      </div>
      <div className='flex flex-col items-center justify-center my-6 text-center'>
        <p className='text-lg sm:text-2xl md:text-3xl font-medium'>
          {data?.location?.name} | {data?.location?.country}
        </p>
      </div>
    </div>

  )
}

export default TimeAndLocation;