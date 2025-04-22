import { useState } from "react";

export default function LouesUs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setShowPopup(true);

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-center p-8 rounded-xl shadow-xl border-4 border-pink-500 text-3xl text-red-600">
            חל פדיון
            <button
              onClick={() => setShowPopup(false)}
              className="block mt-6 mx-auto bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700"
            >
              close
            </button>
          </div>
        </div>
      )}
      <h2 className="text-center text-2xl font-bold mt-8">Lou’s U Fully Deployed!</h2>
    </div>
  );
}
