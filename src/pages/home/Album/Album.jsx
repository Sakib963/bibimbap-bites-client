import reunionPic from "../../../assets/images/events/reunion.png"
import birthdayPic from "../../../assets/images/events/birthday.png"
import corporatePic from "../../../assets/images/events/corporate.png"
import karaokePic from "../../../assets/images/events/karaoke.png"
import proposePic from "../../../assets/images/events/propose.png"
import talkingPic from "../../../assets/images/events/talking_employee.png"
const Album = () => {
  return (
    <div className="lg:px-20 px-6 py-20">
      <div className="text-center">
        <h2 className="lg:text-5xl text-2xl font-bold">Feast for the Eyes</h2>
        <p className="lg:text-lg my-4 lg:w-3/4 mx-auto">
          Take a glimpse into our stunning restaurant through our gallery. From
          our elegant decor to the mouthwatering dishes, see what makes our
          restaurant the perfect place to dine and make memories.
        </p>
      </div>
      {/* Photo Album Container */}
      <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:w-3/4 mx-auto">
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={reunionPic}
            alt="reunion"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">Reunion of Friends</h2>
            <p className="text-sm lg:text-base">
              Bring together old friends, families and colleagues who
              haven&apos;t seen each other in a long time. Our cozy and welcoming atmosphere is perfect for
              creating a memorable experience that will bring people together
              and create lasting connections.
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={birthdayPic}
            alt="birthday"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">Birthday Party</h2>
            <p className="text-sm lg:text-base">
              Celebrate your special day with us! Our restaurant is the perfect
              place to host your birthday party. Enjoy our delicious
              food and drinks while our friendly staff ensures that everything
              runs smoothly. Contact us to book your party today!
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={corporatePic}
            alt="corporate"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">corporate Party</h2>
            <p className="text-sm lg:text-base">
              Looking to host a corporate event? Our dedicated event staff will work
              closely with you to ensure everything runs smoothly. Impress your clients and colleagues with a memorable
              dining experience at our restaurant.
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={karaokePic}
            alt="karaoke"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">
              Sing Karaoke & Enjoy
            </h2>
            <p className="text-sm lg:text-base">
              At our restaurant, we offer a fun and unique experience where you
              can sing karaoke and enjoy delicious food with friends and family.
              Our private karaoke rooms are equipped with state-of-the-art sound
              systems and an extensive selection of songs to choose from. Come
              join us for a memorable night out!
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={proposePic}
            alt="propose"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">Date Night</h2>
            <p className="text-sm lg:text-base">
              Experience a romantic dinner with your special someone in our cozy
              and intimate setting. Indulge in our exquisite Korean cuisine
              prepared by our talented chefs, and sip on a glass of wine or a
              delicious cocktail from our bar. Let us set the mood for a perfect
              date night at our restaurant.
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#FF4A22] relative gallery-card text-white">
        {/* Card Image Background */}
          <img
            className="object-cover w-full h-full rounded-lg"
            src={talkingPic}
            alt="talking_employee"
          />
          {/* Card Texts */}
          <div className="w-full h-full absolute top-0 bg-[#ff4a229b] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
            <h2 className="lg:text-2xl font-bold uppercase">Professional Culture</h2>
            <p className="text-sm lg:text-base">
            Professional Culture in our restaurant offers a perfect setting for business meetings and events. Our team ensures prompt service and caters to every requirement, making it an ideal place for professionals to meet and network.
            </p>
            <button className="border-[#FF4A22] border py-3 px-6 rounded-lg hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
