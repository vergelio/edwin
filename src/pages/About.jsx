const About = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-purple-100">
        <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to the Underwear Web! Our mission is to provide comfort and style
            through high-quality products designed to meet your everyday needs. We
            are committed to sustainability, innovation, and ensuring the perfect fit
            for everyone.
          </p>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            With a team passionate about redefining comfort, we strive to create a
            seamless shopping experience and bring confidence to every individual.
          </p>
          <button className="mt-6 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default About;
  