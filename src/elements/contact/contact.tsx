import styles from "./contact.module.css"
import buttons from "../../styles/buttons.module.css"

import phoneIcon from "../../assets/icons/phone.svg"
import mailIcon from "../../assets/icons/mail.svg"
import { createEffect } from "solid-js"

export default () => {
    let form:any

    function formSubmit(event:any){
      event.preventDefault()
      const url = "https://formbold.com/s/9BWD3"
      console.log(event)

      /*
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },

        body: JSON.stringify({
          
        })
      })
      */
    }

    return (
      <div class={styles.contact}>
        <div class={styles.left}>
          <h2>
            <span>Kontakt</span> oss
          </h2>

          <form ref={form}>
            <div class={styles.half}>
              <input name="firstname" type="text" placeholder="Fornavn"/>
              <input name="lastname" type="text" placeholder="Etternavn"/>
            </div>

            <div class={styles.full}>
              <input name="email" class={styles.mail} type="text" placeholder="E-post"/>

              <textarea name="message" class={styles.message} placeholder="Melding"/>
            </div>

            <div class={styles.button}>
              <p class={buttons.action} onclick={() => {
                form.submit()
                console.log(form)
              }}>
                Send
              </p>
            </div>
          </form>
        </div>

        <div class={styles.right}>
            <div>
                <h3>Gi oss insikt</h3>
                <p>
                    For at vi kan få prosessen til å bli mest mulig effektiv trenger vi
                    å vite noen essensiell faktorer og information som målgrupper,
                    overordnet budskap, budsjett og evt tidligere kampanjer.
                </p>
            </div>
            <div class={styles.contacts}>
                <h3>Ta kontakt</h3>
                <div>
                    <img src={phoneIcon} alt=""/>
                    <p>+450505505</p>
                </div>

                <div>
                    <img src={mailIcon} alt=""/>
                    <p>post@sgs.marketing</p>
                </div>
            </div>
        </div>
      </div>
    )
}