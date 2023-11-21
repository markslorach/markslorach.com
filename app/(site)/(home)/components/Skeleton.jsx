const Skeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3
          className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        </ul>
      </div>
      <div>
        <h3
          className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        </ul>
      </div>
      <div>
        <h3
          className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
};

export default Skeleton;
