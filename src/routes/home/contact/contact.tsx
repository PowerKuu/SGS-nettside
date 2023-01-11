import styles from "./contact.module.css"
import { ActionButton } from "../../../components/buttons/buttons"

import phoneIcon from "../../../assets/icons/phone.svg"
import mailIcon from "../../../assets/icons/mail.svg"
import { createSignal } from "solid-js"

export default () => {
  // Refs
  let formElement: any,
      submitElement: any,
      firstnameElement:any, 
      lastnameElement:any, 
      emailElement:any, 
      messageElement:any

  const feedbacks = {
    none: ["", "none"],
    working: ["Sender Skjema...", "var(--contrast-color)"],
    invalid: ["Skjemaet er ugyldig.", "red"],
    success: ["Takk for meldingen din.", "var(--pop-color)"],
    error: ["Feil under sending!", "red"],
  }

  const [getFeedbackMessage, setFeedbackMessage] = createSignal("")
  const [getFeedbackColor, setFeedbackColor] = createSignal("#00")

  function updateFeedback(key: keyof typeof feedbacks) {
    const feedback = feedbacks[key]

    setFeedbackMessage(feedback[0])
    setFeedbackColor(feedback[1])
  }

  async function formSubmit(event: { preventDefault: () => void }) {
    function clearForm() {
      firstnameElement.value = ""
      lastnameElement.value = "" 
      emailElement.value = ""
      messageElement.value = ""
    }

    function handleErrors(response: Response) {
      if (!response.ok) {
          throw Error(response.statusText)
      }
      return response;
    }

    updateFeedback("working")
    event.preventDefault()
    const url = "https://formbold.com/s/3db46"
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        firstname: firstnameElement.value,
        lastname: lastnameElement.value,
        email: emailElement.value,
        message: messageElement.value,
      })
    })
    .then(handleErrors)
    .then(() => {
      updateFeedback("success")
      clearForm()
    })
    .catch(() => {
      updateFeedback("error")
    })
    
  }

  function invalid() {
    updateFeedback("invalid")
  }

  return (
    <div class={styles.contact}>
      <div class={styles.left} id="contactScroll">
        <h2>
          <span>Kontakt</span> oss
        </h2>

        <form ref={formElement} onSubmit={formSubmit}>
          <div class={styles.half}>
            <input
              onInvalid={invalid}
              ref={firstnameElement}
              name="firstname"
              type="text"
              placeholder="Fornavn"
              required
            />
            <input
              onInvalid={invalid}
              ref={lastnameElement}
              name="lastname"
              type="text"
              placeholder="Etternavn"
              required
            />
          </div>

          <div class={styles.full}>
            <input
              onInvalid={invalid}
              ref={emailElement}
              name="email"
              class={styles.mail}
              type="email"
              placeholder="E-post"
              required
            />

            <textarea
              onInvalid={invalid}
              ref={messageElement}
              name="message"
              class={styles.message}
              placeholder="Melding"
              required
            />
          </div>

          <div class={styles.button}>
            <ActionButton onclick={() => submitElement.click()}>
              Send
            </ActionButton> 

            <p style={{ color: getFeedbackColor() }}>{getFeedbackMessage()}</p>
          </div>

          <input ref={submitElement} type="submit" style={{display: "none"}}></input>
        </form>
      </div>

      <div class={styles.right}>
        <div>
          <h3>Gi oss innsikt</h3>
          <p>
            For at vi kan få prosessen til å bli mest mulig effektiv trenger vi
            å vite noen essensielle faktorer og informasjon som målgrupper,
            overordnet budskap, budsjett og evt tidligere kampanjer.
          </p>
        </div>
        <div class={styles.contacts}>
          <h3>Ta kontakt</h3>
          <div>
            <img src={phoneIcon} alt="Mobil icon for SGS markedsføring." />
            <a href="tel:+4791331705">+4791331705</a>
          </div>

          <div>
            <img src={mailIcon} alt="Mail icon for SGS markedsføring." />
            <a href="mailto:post@sgs.marketing">post@sgs.marketing</a>
          </div>
        </div>
      </div>
    </div>
  )
}
