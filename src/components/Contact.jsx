import { RiFacebookBoxFill,RiInstagramFill,RiTwitterFill  } from "@remixicon/react"

const Contact = () => {
  return (
      <section className="max-w-7xl mx-auto border-b-2 mt-20" id="contact">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">We would love to hear from you! Please reach out with any questions or feedback.</p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input className="border border-gray-300 p-2 w-full" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input className="border border-gray-300 p-2 w-full" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="border border-gray-300 p-2 w-full" id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
          </form>
        </div>
        <div className="flex items-center justify-between mt-8 space-x-4">
          <div className="p-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Our Address</h3>
          <p>123 Main Street</p>
          <p>Anytown, USA</p>
          <p className="mt-2">Phone: (123) 456-7890</p>
          <p className="mt-2">Email: info@example.com</p>
          <p className="mt-2">Website: www.example.com</p>
        </div>
        <div className=" p-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p>Stay connected with us on social media!</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <RiFacebookBoxFill className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <RiInstagramFill className="text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <RiTwitterFill className="text-2xl" />
            </a>
          </div>
          
        </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 text-center ">© 2023 My Company. All rights reserved.</p>
      </section>
  )
}
       
export default Contact
