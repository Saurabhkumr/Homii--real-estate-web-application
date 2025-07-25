import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`${API_URL}/api/user/${listing.userRef}`, {
          credentials: "include",
        });
        console.log(res);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const mailtoLink = `mailto:${landlord?.email}?subject=Regarding ${listing.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-4 mt-10 w-[90%]">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoLink;
            }}
          >
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-slate-700 text-white p-3 uppercase rounded-lg hover:opacity-95"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
}
