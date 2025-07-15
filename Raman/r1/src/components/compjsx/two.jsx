// import "./Two.css";
import "./App.css";


export default function Two() {
  return (
    <div>
      {/* Boxes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-4 rounded-xl shadow-md">
        {/* Box 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">GENESIS</h2>
          <p className="text-gray-700">
            Tailwind CSS isn't one big static stylesheet like other CSS frameworks — it generates CSS based on the classes you actually use.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">VISION</h2>
          <p className="text-gray-700">
            Tailwind CSS enables highly customizable design directly in your markup using utility-first classes.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">MISSION</h2>
          <p className="text-gray-700">
            Using Tailwind, you write less custom CSS and focus on building modern, responsive UI faster than traditional CSS frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
