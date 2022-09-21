import styles from "./ContactUs.module.scss";


const ContactUs = () =>{
    return(
        <div className={styles.contactus}>
            <h1 className={styles.contactusBgtitle}>
                Contact <br/> Us 
            </h1>
            <div className="container">
                <div className={styles.contactInner}>
                    <form className={styles.contactForm}>
                        <div className={styles.contactField}>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className={styles.contactField}>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className={styles.contactField}>
                            <input type="text" placeholder="Order Number" />
                        </div>
                        <div className={styles.contactField}>
                            <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="TYPE YOUR MESSAGE HERE..."
                            >
                            </textarea>
                        </div>
                        <div className={styles.contactField}>
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default ContactUs;