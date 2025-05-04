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

<div className="overflow-hidden whitespace-nowrap w-full bg-yellow-100 py-2">
		  <p className="marquee text-2xl font-bold text-pink-600">
		     💩 יש לבצע חתימה 💩 🐾 חל פדיון 🐾  חל פדיון 🐾  חל פדיון 🐾 💩 אין כפל לופונים 💩
		  </p>
		</div>

      <section className="bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-1">
        <div className="mx-auto w-full text-center text-sm italic text-gray-500 border-2 border-dashed border-gray-300 p-4 mt-4">
          <img src="/logo.png" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-fuchsia-500 via-lime-400 via-cyan-400 via-amber-500 to-red-600 bg-clip-text text-transparent">
		  <br /><br />ABOUT US<br /><br />
		</h2>
		<img src="/lou.png" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />

        <p className="text-center text-3xl"><br/><br/>This site is absolutely, undeniably very real and most definitely not a scam—it's a fully legitimate, totally trustworthy place that has never, ever even thought about scamming anyone, not even once<br/><br/></p>
      </section>

      <section className="bg-purple-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-2">
        <div className="w-64 h-64 border-4 border-dashed border-gray-400 rounded-lg shadow-md object-cover mt-4 float-left mr-6">
          <img src="/fool.png" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
          <div className="text-xs">(this fool will take the fall)</div>
        </div>
        <h2 className="text-3xl font-bold text-purple-800 text-center">staff</h2>
        <ul className="list-disc list-inside text-lg text-purple-900">
        	<li>Totally Legit!</li>
        	<li>Not a scam!</li>
          <li>Esteemed professors (not at all generated with AI)</li>          
          <li>I like poo 💩</li>
        </ul>
        <br/><br/><br/><br/><br/>
      </section>

      <section className="bg-yellow-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto -rotate-2">
        <div className="mx-auto max-w-md text-center text-sm italic text-yellow-800 p-4 mb-4">
          <img src="/Loupons.png" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold text-yellow-900 text-center">loupons™ - menu</h2><br/>
        <ul className="list-disc list-inside text-lg text-yellow-800">
          <li>You scrach my back - 1 loupon/hr</li>
          <li>You scratch my belly - 5 loupons/hr</li>
          <li>You nap with me - 10 loupons/hr</li>
          <li>I nap with you - 50 loupons/hr</li>
          <li>I lick your nostril - 55 loupons/lick</li>
        </ul>
        <button onClick={handleClick} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600">
          <br/>order now<br/><br/>
        </button>
        <br/>
        <br/>
      </section>
<br/>
      <section className="bg-pink-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto rotate-3">
        <h2 className="text-3xl font-bold text-pink-700 text-center">what our aLOUmni are saying</h2>
        <blockquote className="italic mt-2">"we have the best poo" – donald j. trump</blockquote>
		  <blockquote className="italic mt-2">"This school is top-notch... for me to poop on!" – Triumph the Insult Comic Dog</blockquote>
		  <blockquote className="italic mt-2">"Woof! (Translation: Timmy fell in the well, but I stayed to finish my degree at Loue’s U’s)" – Lassie</blockquote>
		  
		  <blockquote className="italic mt-2">"Much wow. Very diploma. So barkademic." – Doge</blockquote>
		  <blockquote className="italic mt-2">"They teached me real gud. I am smart now. Smort even." – Cheems</blockquote>
		  <blockquote className="italic mt-2">"I only enrolled for the belly rubs, but I left with purpose." – Boo the Pomeranian</blockquote>
		  <blockquote className="italic mt-2">"I barked once and got tenure." – Gabe the Dog</blockquote>
		  <blockquote className="italic mt-2">"Every class ends with a treat. That’s how you know it’s real." – Louie</blockquote>

		  <blockquote className="italic mt-2">"If only I had gone here, I wouldn’t have been caught." – Frank Abagnale Jr.</blockquote>
		  <blockquote className="italic mt-2">"Their fake it 'til you make it' program is truly elite." – Anna Delvey</blockquote>
		  <blockquote className="italic mt-2">"Even *I* believe this school is real. And I lied about a *lot* of stuff." – Elizabeth Holmes</blockquote>
		  <blockquote className="italic mt-2">"Top-tier scamstruction. I’m a proud aLOUmni." – Jordan Belfort</blockquote>
		  <blockquote className="italic mt-2">"A great place to network, mislead, and maybe learn." – Billy McFarland</blockquote>

		  <blockquote className="italic mt-2">"I infiltrated 43 fake universities, but this one tricked *me*—a true masterpiece." – Kitdoga, Scambaiter Extraordinaire</blockquote>

      </section>

      <section className="bg-blue-100 p-6 rounded-xl shadow-xl max-w-4xl mx-auto -rotate-1">
        <div className="mx-auto max-w-md text-center text-sm italic text-blue-800 border-2 border-dashed border-blue-300 p-4 mb-4">
          <img src="/payments.png" alt="Louie with Obama and Trump" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <p className="text-center text-5xl text-red-600 font-bold blink">
		  Join NOW only $18,49.49
		</p>
<p className="text-center text-5xl text-red-600 font-bold blink">
		  Join NOW only $18,49.49
		</p><p className="text-center text-5xl text-red-600 font-bold blink">
		  Join NOW only $18,49.49
		</p>
        <div className="overflow-hidden whitespace-nowrap w-full bg-yellow-100 py-2">
		  <p className="marquee text-2xl font-bold text-pink-600">
		    🐾 Welcome to Lou’s U – All Bark, No Bite – Free Loupons for Enrollment 🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון🐾 חל פדיון
		  </p>
		</div>

        <p className="text-xs text-center mt-2">or duck turtle equivilent</p>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll now
        </button><span> </span>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll now
        </button> <span> </span>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll later
        </button><span> </span>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll now
        </button><span> </span>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll now
        </button> <span> </span>
        <button onClick={handleClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
          enroll later
        </button>
        <br/><br/>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-xl border-4 border-purple-300 max-w-4xl mx-auto rotate-2">
        <h2 className="text-4xl font-bold mb-4 text-purple-700 text-center">honorary diploumas</h2>
        <p className="mb-4 text-lg italic text-center">Proof of 100% real, absolutely not <span className='line-through'>not</span> a <span className='line-through'>scam</span> for sure!</p>
        <div className="flex justify-center gap-4 flex-wrap">
		  <img src="/diplouma1.png" alt="fake diploma" className="w-60 border-4 border-white shadow-md rotate-2" />
		  <img src="/diplouma2.png" alt="fake diploma" className="w-60 border-4 border-white shadow-md rotate-2" />
		  <img src="/diplouma3.png" alt="fake diploma" className="w-60 border-4 border-white shadow-md rotate-2" />
		</div>
      </section>

      <section className="bg-rose-100 p-6 rounded-xl shadow-xl border-4 border-rose-300 max-w-4xl mx-auto rotate-1">
      <h2 className="text-3xl font-bold text-rose-700 mb-2 text-center">Hall of Fame</h2>
        <p className="text-lg italic mb-4 text-center">Recognizing legendary graduates who sniffed, forged, and pawed their way to greatness.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img src="/obama.png" alt="Louie TED Talk" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/ramones.png" alt="Louie and a suspicious figure" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/dylan.png" alt="Louie and a suspicious figure" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        
      </section>

      <footer className="text-center text-sm text-gray-800 mt-12 bg-white p-4 rounded-xl border-t-4 border-red-400 max-w-5xl mx-auto font-mono">
        <p className="italic">&copy; 2025 lou's u's. all bark no bite.</p>
        <p className="italic">louie best dog&trade;</p>
        <p className="italic text-red-700 mt-2 text-base">❤️ To our beautiful LeiLei, happy birthday, we <b>love you!</b> ❤️</p>
      </footer>
    </div>
  );
}
