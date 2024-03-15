import React ,{useEffect} from 'react'
import logo from "../images/Logo_SUM.png"
import { Link } from 'react-router-dom'
const Impressum = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
  return (
    <div className='min-h-[calc(100vh-170px)]'>
          <div className='bg-sum-white fixed left-0 top-0 w-full'>
           <div className=' justify-center flex items-center xl:py-14 xs:py-12 cursor-pointer'><Link to="/"><img  src={logo} className='xl:w-52 xs:w-40 object-contain'/></Link></div>
           <div className='h-[2px] bg-sum-gray'></div>
           </div>
<div className=''>
         <div className=' xs:text-[16px] md:text-[20px] flex justify-center items-start flex-col xs:px-[10%]  xl:px-40 xs:mb-10 xl:mb-24'>
         <h3 className='font-bold xs:text-[15px] md:text-[18px] lg:text-[22px] md:mt-52 xs:mt-48 xl:mt-72'> </h3><br/>
Angaben gemäß § 5 TMG<br/>
BBF BIKE GmbH<br/>
Carenaallee 8<br/>
15366 Hoppegarten<br/>
Tel. +49 3342.354 325<br/>
Fax +49 3342.354 332<br/>
www.bbf-bike.de<br/>
info@bbf-bike.de<br/>
Geschäftsführender Gesellschafter: Hagen Stamm
<h3 className='font-bold xs:text-[15px] md:text-[18px] lg:text-[22px] my-4 text-cp-green'>REGISTERGERICHT</h3>
Ust-ID Nr.: DE 811309641<br/>
Registergericht: Landesgericht Frankfurt/Oder<br/>
Registernummer: HRB 2082 FF<br/>

KONZEPT & LAYOUT
BBF BIKE GmbH

<h3 className='font-bold xs:text-[15px] md:text-[18px] lg:text-[22px] my-4 text-cp-green'>AKTUALISIERUNG/HAFTUNG</h3>
Die BBF BIKE GmbH ist bemüht, für die Richtigkeit und Aktualität aller auf ihrer Domain enthaltenen Informationen und Daten zu sorgen. Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen und Daten ist jedoch ausgeschlossen. In keinem Fall wird für Schäden, die sich aus der Verwendung der abgerufenen Informationen ergeben, eine Haftung übernommen. BBF BIKE GmbH behält sich vor, ohne Ankündigung, Änderungen oder Ergänzungen der bereitgestellten Informationen oder Daten vorzunehmen.

<h3 className='font-bold xs:text-[15px] md:text-[18px] lg:text-[22px] my-4 text-cp-green'>LINKSETZUNG</h3>
Die BBF BIKE GmbH hat auf ihrer Domain Links zu anderen Seiten im Internet gesetzt. Für alle Links gilt: Die BBF BIKE GmbH betont ausdrücklich, dass sie keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten hat. Die BBF BIKE GmbH ist für den Inhalt der Homepages, die mittels eines elektronischen Links erreicht werden, nicht verantwortlich. Sollten durch diese Inhalte Rechte Dritter verletzt sein, so distanziert sich die BBF BIKE GmbH ausdrücklich von den Inhalten dieser Seiten. Diese Erklärung gilt für alle auf www.bbf-bike.de ausgebrachten Links und für alle Inhalte der Seiten, zu denen Links führen.

<h3 className='font-bold xs:text-[15px] md:text-[18px] lg:text-[22px] my-4 text-cp-green'>URHEBERRECHT</h3>
Das Layout der Homepage, die verwendeten Grafiken sowie die Sammlung der Beiträge sind urheberrechtlich geschützt. Die Seiten dürfen nur zum privaten Gebrauch vervielfältigt, vorgenommen und Vervielfältigungsstücke weder verbreitet noch zu öffentlichen Wiedergaben benutzt werden. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textzeilen oder Bildmaterial bedarf der vorherigen Zustimmung der BBF BIKE GmbH. 
    </div>
    </div>

    </div>
  )
}

export default Impressum