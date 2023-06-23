import { AiFillCloseCircle } from "react-icons/ai"; 
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  toggleFormVisibility: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ toggleFormVisibility }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };

    try {
      await emailjs.sendForm(
        'service_58prg5n',
        'template_hm5u14h',
        target,
        'YrSRp-N_3eBkb9lrm'
      );
      setSuccessMessage('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Oops! Something went wrong. Please try again later.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        toggleFormVisibility();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleFormVisibility]);


  return (
    <div className="form-container">
      <div className="close-btn" onClick={toggleFormVisibility}>
        <AiFillCloseCircle />
      </div>
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <h2>Let&apos;s chat</h2>
        <p>It will be a pleasure to hear from you! If you have an application you are interested in developing, a feature that you need
          built or a project that needs coding. I&apos;d love to help with it.
        </p>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <style jsx>{`
        .form-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          backdrop-filter: blur(10px);
        }

        .form {
          width: 40%;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          margin-top: 7rem;
          text-align: center;
        }

        .success-message {
          color: var(--brand);
        }

        .error-message {
          color: red;
        }

        h2 {
          color: var(--brand);
          margin: 1rem 0;
          font-size: 5rem;
        }

        p {
          color: var(--background);
          padding-bottom: 1rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        // textarea {
        //   min-height: 150px;
        // }

        button {
          background-color: var(--brand);
          color: #fff;
          border: none;
          font-size: 1.25rem;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          font-weight: 600;
        }

        button:hover {
          background-color: transparent;
          border: 1px solid var(--brand);
          color: var(--brand);
        }

        .close-btn {
          position: absolute;
          top: 14vh;
          left: 70vw;
          font-size: 4rem;
          cursor: pointer;
          color: var(--brand);
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
