import { FaGithub ,  FaLinkedin } from "react-icons/fa";

const socialInfo = [
    {
        icon: <FaGithub className="w-6 h-6"/>,
        href: "https://github.com/54albert54"
    },
    {
        icon: <FaLinkedin className="w-6 h-6"/>,   // <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 28 28"><g clip-path="url(#clip0_1213_3074)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z" /></g><defs><clipPath id="clip0_1213_3074"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>,
        href: "https://www.linkedin.com/in/angel-bernechea"
    },
]

const Footer = () => (
    <footer>
      <div className="custom-screen pt-16 w-screen mx-auto max-w-[1440px] pl-8">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p className="text-gray-600">{new Date().getFullYear()} &copy; All rights Reserved</p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            {
            socialInfo.map((item, idx) => (
              <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            ))
          }
          </div>
        </div>
      </div>
    </footer>
)

export default Footer