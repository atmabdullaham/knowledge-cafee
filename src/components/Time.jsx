const Time = ({ readingTime }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-2xl text-center">
      <h2 className="text-2xl font-bold text-blue-800">
        Spent Time on Read: {readingTime}
      </h2>
    </div>
  );
};

export default Time;
