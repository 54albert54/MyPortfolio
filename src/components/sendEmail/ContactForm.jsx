import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../const/functions";


export default function ContactForm() {
  const [infoEmail , setInfoEmail] = useState({})
  const navigation = useNavigate()

    const addInfo=(e)=>{
      setInfoEmail({
        ...infoEmail,
        [e.target.name]:e.target.value
      })
    }
    const submitData = (e)=>{
      e.preventDefault()
      sendEmail(infoEmail)
      navigation('/')
      
    }
  return (
    <section className="block relative pt-10 rounded-lg bg-gray-500 p-6 w-screen sm:w-[700px] h-auto  max-h-[480px] ">
      <form onSubmit={submitData}>
        {/* <!--Name input--> */}
        <input
          onChange={addInfo}
          type="text"
          name="name"
          placeholder="Name"
          className="pl-6 mb-6 w-full"
          required
        ></input>
        {/* <!--E-mail input--> */}
        <input
          onChange={addInfo}
          type="email"
          name="emailaddress"
          placeholder="Email address"
          className="pl-6 mb-6 w-full"
          required
        ></input>

        {/* <!--Message textarea--> */}
        <div className="relative mb-6">
          <textarea
            onChange={addInfo}
            id="exampleFormControlTextarea13"
            name="Message"
            className="pl-6 pt-1 w-full mb-9 "
            rows={4}
          />
        </div>
        {/* <!--Submit button--> */}
        <div  className="w-1/3 absolute bottom-6">
          <button
            type="submit"
            className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}