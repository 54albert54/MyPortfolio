import AnimateTxt from "../ui/AnimateTxt";
import ContactForm from "./ContactForm";

const SendEmil = () => {
  return (
    <section className="mt-20 bg-light w-screen h-screen flex
   sm:items-center flex-col     ">
      <AnimateTxt className={'!text-4xl'}  text={['Send me a email']}/>
      <ContactForm />
    </section>
  );
};

export default SendEmil;
