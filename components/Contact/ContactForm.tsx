import { ChangeEvent, FormEvent, useEffect, useState, type FC } from "react"

const ContactForm:FC = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [formValid, setFormValid] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  useEffect(() => {
    if (name.length >= 3 && email.length >= 3 && message.length >= 3 && emailPattern.test(email)) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }

  }, [name, email, message])

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.table({ name, email, message })
    const payload = {
      name,
      email,
      message
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*"
      },
      body: JSON.stringify(payload)
    })
    
    if (res.status === 200) {
      setSubmitted(true)
      setName("")
      setEmail("")
      setMessage("")
    }else {
      alert("Something went wrong. Please try again.")
    }

  }

  if(submitted) return (
    <div className="flex flex-col gap-5 my-4">
      <h1 className="ui-2xl font-semibold">
        Thanks for reaching out!
      </h1>
      <p className="text-secondary-body ui-lg">
        I&apos;ll get back to you as soon as possible.
      </p>
    </div>
  )

  return (
    <form className="flex flex-col py-10 self-stretch grow gap-5" onSubmit={handleSubmit}>
      <article className="flex flex-col md:flex-row py-5 gap-7 self-stretch">
        <div className="flex flex-col grow gap-1">
          <label className="ui-xs font-medium">
            Name
          </label>
          <input
            className="ui-sm border-b border-secondary-body bg-transparent"
            type="text"
            name="name"
            placeholder="Your Name Here"
            required
            minLength={3}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col grow gap-1">
          <label className="ui-xs font-medium">
            Email
          </label>
          <input
            className="ui-sm border-b border-secondary-body bg-transparent"
            type="email"
            name="email"
            placeholder="Your Email Here"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </article>

      <article className="flex-grow">
        <div className="flex flex-col gap-1">
          <label className="ui-xs font-medium">
            Message
          </label>
          <textarea
            className="ui-sm border border-secondary-body p-4 bg-transparent h-52 resize-none"
            name="message"
            placeholder="Your Message Here"
            required
            minLength={10}
            value={message}
            onChange={handleMessageChange}
          />
        </div>
      </article>

      <article>
        <button
          className="ui-sm bg-secondary-body font-medium px-8 py-2 rounded-sm btn border-transparent disabled:border-secondary-body"
          type="submit"
          disabled={!formValid}
        >
          Send
        </button>
      </article>
    </form>
  )
}

export default ContactForm