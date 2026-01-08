const Footer = () => ( 
  <footer className="footer bg-gray-900/80 border-t border-gray-700 mt-12 py-6 animate-fade-in text-center"> 
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-4 gap-2"> 
      <div> 
        © {new Date().getFullYear()} <span className="font-semibold text-yellow-500">PredictX</span>. All rights reserved. 
      </div> 
      <div className="flex flex-row gap-4 items-center"> 
        <a className="hover:underline hover:text-yellow-400 transition-colors" href="#">Contact</a> 
        <a className="hover:underline hover:text-yellow-400 transition-colors" href="#">Support</a> 
        <a className="hover:underline hover:text-yellow-400 transition-colors" href="#">About</a> 
      </div> 
    </div> 
  </footer> 
); 
 
export default Footer;
