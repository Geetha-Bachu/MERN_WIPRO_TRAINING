function Footer() {
  return (
    <footer className="bg-neutral-900 text-amber-50 mt-10">

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-8">

        {/* Address / Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Great Learning</h2>
          <p>Hyderabad, India</p>
          <p>Email: info@greatlearning.com</p>
        </div>

        {/* Google Maps */}
        <div className="w-full md:w-1/2 h-64">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=hyderabad&output=embed"
            className="w-full h-full rounded"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 bg-black text-sm">
        © {new Date().getFullYear()} Great Learning. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
