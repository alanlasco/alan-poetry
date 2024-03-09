import React from "react";
import "../stylesheets/Aboutme.css";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="aboutme-container">
        <div className="aboutme-content">
          <div className="picture-name">
            <img
              className="img-alan"
              src={require(`../images/alan.jpg`)}
              alt=""
            />
          </div>
          <div className="text-container">
            <span className="about-alan">Sobre Alan Lasco</span>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        blanditiis recusandae molestiae quas ipsum saepe. Maiores cupiditate
        deleniti obcaecati voluptatibus. Omnis soluta rem praesentium
        voluptates? Distinctio, magni non! Eius, sint. Molestias alias corrupti
        aut sed a et ipsam suscipit fugiat voluptates deserunt aspernatur, error
        quibusdam mollitia placeat omnis veritatis aliquid laborum modi
        voluptate eos. Incidunt porro sit repudiandae recusandae. Qui. Dolorem
        dolor facere cum quae, a voluptatibus obcaecati. A odit maxime at
        consequuntur cumque! Beatae, error consequuntur quia corrupti facilis
        unde modi, asperiores omnis nam pariatur perspiciatis nemo facere ipsam!
        Mollitia, nobis aperiam! Voluptatem necessitatibus labore, voluptatibus
        numquam consequatur reiciendis vero adipisci officiis sit maiores, natus
        neque distinctio at illo aut exercitationem impedit. Quasi officiis
        ratione totam eaque? Velit, tempore? Amet repellat non, repudiandae,
        perferendis nobis quaerat similique accusamus reiciendis veniam nihil
        necessitatibus neque iusto voluptatem hic suscipit. Nulla deserunt enim
        voluptas excepturi cupiditate sed quia tempora facilis explicabo
        officiis.
      </div>
    </motion.div>
  );
}
export default AboutUs;
