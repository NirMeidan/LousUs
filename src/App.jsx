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

      <section className="bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-1">
        <div className="mx-auto max-w-md text-center text-sm italic text-gray-500 border-2 border-dashed border-gray-300 p-4 mt-4">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-blue-700 text-center">about chanellour lou</h2>
        <p className="text-center">Founded Lou’s U in a backyard Zoom call. Known for her groundbreaking strategy of placing a paw on documents to legally bind students to lifelong tuition.</p>
      </section>

      <section className="bg-purple-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-2">
        <div className="w-64 h-64 border-4 border-dashed border-gray-400 rounded-lg shadow-md object-cover mt-4 float-left mr-6">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-purple-800 text-center">degreez we offer</h2>
        <ul className="list-disc list-inside text-lg text-purple-900">
          <li>bachelor of puppetry science</li>
          <li>master of pawlitical sniffing</li>
          <li>doctor of lougic & butt sniffing theory</li>
          <li>mba in fetchonomics</li>
        </ul>
      </section>

      <section className="bg-yellow-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto -rotate-2">
        <div className="mx-auto max-w-md text-center text-sm italic text-yellow-800 border-2 border-dashed border-yellow-400 p-4 mb-4">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-yellow-900 text-center">loupons™</h2>
        <ul className="list-disc list-inside text-lg text-yellow-800">
          <li>10 loupons = mystery sniff</li>
          <li>20 loupons = honorary diploma printout</li>
          <li>30 loupons = forged signature with real paw ink</li>
        </ul>
        <button onClick={handleClick} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600">
          forge my paw signature
        </button>
      </section>

      <section className="bg-pink-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-3">
        <div className="mx-auto max-w-md text-center text-sm italic text-pink-600 border-2 border-dashed border-pink-300 p-4 mb-4">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-pink-700 text-center">what our aLOUmni are saying</h2>
        <blockquote className="italic mt-4">"the best decisin i made since i ate a shoe." – barc obama</blockquote>
        <blockquote className="italic mt-2">"totally legit. not a <span className='line-through'>scam</span>. i swear." – donald j. trump</blockquote>
        <blockquote className="italic mt-2">"what's the deal with these loupons?!" – jerry seinfurld</blockquote>
        <blockquote className="italic mt-2">"one two three four! lou rocks!" – the ruffmones</blockquote>
      </section>

      <section className="bg-blue-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto -rotate-1">
        <div className="mx-auto max-w-md text-center text-sm italic text-blue-800 border-2 border-dashed border-blue-300 p-4 mb-4">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-blue-800 text-center">tuishun & payments</h2>
        <p className="text-center">Join for $999, 6 tennis balls, or by barking the anthem under a full moon</p>
        <p className="text-xs text-center mt-2">Accepted currencies: duck turtles, bonecoin, crayon checks, lubacoin™, and barkbucks</p>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll now
        </button>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-xl border-4 border-purple-300 max-w-4xl mx-auto rotate-2">
        <div className="mx-auto max-w-md text-center text-sm italic text-gray-600 border-2 border-dashed border-gray-300 p-4 mb-4">
          <img src="https://files.oaiusercontent.com/file_00000000c8f061f6871323e9677a0522/preview" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-purple-700 text-center">honorary diploumas</h2>
        <p className="mb-4 text-lg italic text-center">Proof of 100% real, absolutely not a <span className='line-through'>scam</span>.</p>
        <img src="https://files.oaiusercontent.com/file_00000000564c6230adbfbed9d82aae8b/preview" alt="fake diploma" className="mx-auto w-96 border-4 border-white shadow-md rotate-2" />
      </section>

      <section className="bg-rose-100 p-6 rounded-xl shadow-xl border-4 border-rose-300 max-w-4xl mx-auto rotate-1">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img src="https://files.oaiusercontent.com/file_00000000adc861f7974252becdd47a70/preview" alt="Louie TED Talk" className="w-full h-auto rounded-lg shadow-md" />
          <img src="https://files.oaiusercontent.com/file_0000000091a461f78204e64a257e1fd0/preview" alt="Louie and a suspicious figure" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-rose-700 mb-2 text-center">aLOUmni Hall of Fame</h2>
        <p className="text-lg italic mb-4 text-center">Recognizing legendary graduates who sniffed, forged, and pawed their way to greatness.</p>
        <ul className="list-disc list-inside text-rose-800 text-left max-w-md mx-auto">
          <li>Dr. Paws Barkowitz – first to graduate with honors in Lougic & <span className='line-through'>scam</span>istry</li>
          <li>Barc Obama – founder of LouCare (student vet program)</li>
          <li>Wikileash – exposed the hidden treat tunnels beneath campus</li>
          <li>Duck Turtlestein – invented Loupons™, never paid tuition</li>
          <li>Louie herself – graduated every year since 2019</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-800 mt-12 bg-white p-4 rounded-xl border-t-4 border-red-400 max-w-5xl mx-auto font-mono">
        <p className="italic">&copy; 2025 lou's u. all bark no bite.</p>
        <p className="italic text-red-700 mt-2 text-base">To our beautiful Leilei, happy birthday, we love you!</p>
      </footer>
    </div>
  );
}
