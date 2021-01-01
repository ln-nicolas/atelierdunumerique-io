import * as React from "react"
import cover from "../images/cover.jpeg"
import Logo from "../images/logowhite.inline.svg"
import ErpIllustration from "../images/erp.inline.svg"
import EshopIllustration from "../images/eshop.inline.svg"
import OpenSourceIllustration from "../images/opensource.inline.svg"
import ProjetIllustration from "../images/projet.inline.svg"

const ArrowDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  )
}

const MailSvgIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
}

const IndexPage = () => {
  return (
    <div>

      <div className="h-screen w-full flex items-center bg-cover bg-center" style={{backgroundImage:`linear-gradient(to bottom,rgba(51, 116, 156, 0.42) 0,rgba(0, 18, 29, 0.8)),url(${cover})`}}>
        <div className="w-full px-4 text-center">
        <div > <Logo className="w-24 h-24 md:w-32 md:h-32 mx-auto" /> </div>
        <div className="px-12 text-center mt-4 text-white text-4xl md:text-5xl font-bold uppercase"> Atelier du Numérique </div>
        <div className="px-2 text-center mt-4 text-white text-lg md:text-2xl font-light"> 
            Expert du Développement Web et Logiciel
        </div>
        <div className="px-2 text-center mt-20 text-white text-lg font-bold"> 
            Qui sommes nous ?
        </div>
        <div className="w-8 h-8 text-white mx-auto mt-20 animate-bounce"> <ArrowDownIcon /> </div>
        </div>
      </div>

      <div className="py-5 px-5 w-full max-w-screen-sm mx-auto md:mt-10 text-center h-96 md:h-96 flex items-center">
        <div>
        <div className="text-2xl md:text-3xl font-bold text-adn-800" > Nous avons ce qu'il vous faut ! </div>
        <div className="text-md mt-2 mb-5 text-gray-700" > 
            Nous sommes expert dans le digital et le web.
            Grâce à nos solutions, nous aidons nos clients à moderniser leur métier pour gagner en efficacité et notoriété.
        </div>
        <a href="#erp" className="px-4 py-2 text-sm font-bold uppercase bg-gray-100 hover:bg-gray-200 focus:outline-none  focus:ring-2  text-adn-700 rounded-2xl"> Découvrir nos services </a>
        </div>
      </div>

      <div className="py-5 px-5 w-full max-w-screen-lg mx-auto" id="erp">
        <div className="text-xl font-bold text-adn-800 md:hidden"> Développement d'application sur mesure </div>
        <div className="md:hidden" > </div>
        <div className="flex flex-col md:flex-row md:mt-10">
          <div className="md:w-1/2 py-10"> <ErpIllustration className="w-full h-56 md:h-96" />  </div>
          <div className="text-md mt-2 mb-5 text-gray-500 md:w-1/2 md:pl-14" > 
              <div className="text-2xl font-bold text-adn-800 hidden md:block mb-2"> Développement d'application sur mesure </div>
              <p>
                Une idée innovante ? Une application mobile ? Un besoin en ERP personnalisé ? Un Chatbot ? N'hésitez pas à nous parler de votre projet !
              </p>
              <ul className="list-disc pl-5 pt-5">
                <li>ERP personnalité avec Module de ventes, facturation, gestion du stock, point de vente, RH, automatisation, et bien plus...</li>
                <li>Développement sur mesure d'applications.</li>
                <li>Qualité garantie pour la maintenabilité et l'évolution du projet</li>
              </ul>
          </div>
        </div>
      </div>


      <div className="py-5 px-5 w-full max-w-screen-lg mx-auto" id="esho">
        <div className="text-xl font-bold text-adn-800 md:hidden"> Réalisation de site internet e-commerce </div>
        <div className="md:hidden" > </div>
        <div className="flex flex-col md:flex-row-reverse md:mt-10">
          <div className="md:w-1/2 py-10"> <EshopIllustration className="w-full h-56 md:h-96" />  </div>
          <div className="text-md mt-2 mb-5 text-gray-500 md:w-1/2 md:px-10" > 
              <div className="text-2xl font-bold text-adn-800 hidden md:block mb-2"> Réalisation de site internet e-commerce </div>
              <p>
              Votre site internet est l'élement clé de votre communication digitale. Il est le reflet numérique de votre activité et nous y accordons le plus grand soin. C'est la plateforme idéale pour attirer de nouveaux clients, et fidéliser votre clientèle.
              <br/>
              Pour atteindre vos objectifs, nous garantissons :
            </p>
            <ul className="list-disc pl-5 pt-5">
              <li>Optimisation de votre référencement sur les moteurs de recherches, en respectant les bonnes pratiques de conception.</li>
              <li>Une navigation adaptée aux smartphones et tablettes.</li>
              <li>Une réalisation dans un style attractif et moderne.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="py-5 px-5 w-full max-w-screen-lg mx-auto" id="opensource">
        <div className="text-xl font-bold text-adn-800 md:hidden"> Culture Open Source </div>
        <div className="md:hidden" > </div>
        <div className="flex flex-col md:flex-row md:mt-10">
          <div className="md:w-1/2 py-10"> <OpenSourceIllustration className="w-full h-40 md:h-64" />  </div>
          <div className="text-md mt-2 mb-5 text-gray-500 md:w-1/2 md:pt-10 md:pl-14" > 
              <div className="text-2xl font-bold text-adn-800 hidden md:block mb-2"> Culture Open Source </div>
              <p>
              Chez ADN nous nous privilégions les solutions dites open-source. Des milliers de développeurs contribuent continuellement à l'amélioration des solutions que nous utilisons chaque jour. Les avantages sont multiples :
              </p>
              <ul className="list-disc pl-5 pt-5">
                <li>Des millions d'utilisateurs à travers le monde. </li>
                <li>Des solutions performantes à moindre coût. </li>
                <li>Des mises à jours d'améliorations régulières et continues. </li>
              </ul>
          </div>
        </div>
      </div>

      

      <div className="py-5 px-5 w-full max-w-screen-lg mx-auto md:pt-16" id="contact">
        <div className="text-xl font-bold text-adn-800 md:hidden"> Vous avez un projet ? Restons en contact !</div>
        <div class="flex flex-col md:flex-row"> 
        <div class="md:w-2/3"> <ProjetIllustration className="w-full h-40 md:h-96 my-10" /> </div>
        <div className="text-md mt-2 mb-5 text-gray-700 md:pl-14"> 
            <div className="text-2xl font-bold text-adn-800 hidden md:block mb-2"> Vous avez un projet ? Restons en contact !</div>
            <p>
              Echangeons autour d'un café <span className="text-gray-500">(ou un thé)</span>. Nous vous répondons dans les plus bref délais.
            </p>
            <form className="w-full max-w-lg mt-10" data-netlify="true" name="contact" method="post" >
              <input type="hidden" name="subject" value="Nouvelle demande de contact depuis atelierdunumerique.io" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Votre Nom
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Numéro de Téléphone <span className="text-gray-500"> (optionnel) </span>
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Votre Message
                  </label>
                  <textarea className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button type="submit" className="flex items-center px-4 py-2 text-sm font-bold uppercase bg-gray-100 hover:bg-gray-200 focus:outline-none  focus:ring-2  text-adn-700 rounded-2xl"> 
                    <div className="w-4 h-4 inline-block mr-1"><MailSvgIcon/></div> <div>Envoyer</div>
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
        </div>
        </div>
      </div>

      <div className="w-full mt-10 py-10 px-20 bg-adn-700">
          <div className="max-w-screen-lg mx-auto">
            <div className="text-white text-lg font-bold"> Contact </div>
            <div className="text-white font-thin"> contact@atelierdunumerique.io </div>
            <div className="text-white font-thin"> +262 693 453 483 </div>
          </div>
      </div>

    </div>
  )
}

export default IndexPage
