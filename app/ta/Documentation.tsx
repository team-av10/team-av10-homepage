import { AceHeading } from '@/components/global/ace-heading'
import { DocCard3d } from '@/components/global/doc-card-3d'
import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = {}

const Documentation = (props: Props) => {
  return (
   <main>
    <Navbar/>
     <AceHeading title="கையேடுகள்"/>
     <div className="mt-[-350px]">
      <DocCard3d title="கிசான் ஸஹாயக் டாஷ்போர்டு" description="எளிதாக பயன்படுத்தக்கூடிய, நேரடி பண்ணை கண்காணிப்பு இணைய இடைமுகத்தை பயன்படுத்தும் வழிகாட்டி." link="https://docs.google.com/document/d/1RX7qlESx25kq3xh7VdbwB8tII9WrDF23kbQvMRc5N-M/edit?tab=t.0" picture="/dashboard.jpg"/>
      <DocCard3d title="IoT தரை நிலையம்" description="எங்கள் புல அடிப்படையிலான சூழ்நிலை சென்சார் அமைப்பின் அமைப்பு மற்றும் தரவுப் போக்குவரத்து விளக்கம்." link="https://docs.google.com/document/d/13JkkUg4uLcLB53SXUHBx-jyHoQi1Wh-NNFFUGKkxKJ4/edit?tab=t.0" picture="/gs.jpg"/>
      <DocCard3d title="ட்ரோன்" description="ட்ரோன் இயக்கம், பயிர் கண்காணிப்பு அம்சங்கள் மற்றும் செயற்கை நுண்ணறிவு ஒருங்கிணைப்பின் விவரங்கள்." link="https://docs.google.com/document/d/1TH0pRJxJFcyfVOQSR3bi-O2k_2o2udcRQd0Ysp4t96Y/edit?tab=t.0" picture="/drone.jpg"/>
     </div>
   </main>
  )
}

export default Documentation