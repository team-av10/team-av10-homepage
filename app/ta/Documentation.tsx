import { AceHeading } from '@/components/global/ace-heading'
import { DocCard3d } from '@/components/global/doc-card-3d'
import Navbar from '@/components/global/Navbar'
import React from 'react'

const Documentation = () => {
  return (
   <main>
    <Navbar/>
     <AceHeading title="கையெழுத்துகள்"/>
     <div className="mt-[-350px]">
      <DocCard3d title="கிசான் ஸஹாயக் டாஷ்போர்டு" description="எங்கள் பயனுள்ள, நேரடி பண்ணை கண்காணிப்பு வலை இடைமுகத்தைப் பயன்படுத்துவதற்கான வழிகாட்டி." link="https://docs.google.com/document/d/1RX7qlESx25kq3xh7VdbwB8tII9WrDF23kbQvMRc5N-M/edit?tab=t.0" picture="/dashboard.jpg"/>
      <DocCard3d title="IoT தரை நிலையம்" description="புலத்தில் உள்ள சுற்றுச்சூழல் சென்சார் அமைப்பின் அமைப்பு மற்றும் தரவு ஓட்டம்." link="https://docs.google.com/document/d/13JkkUg4uLcLB53SXUHBx-jyHoQi1Wh-NNFFUGKkxKJ4/edit?tab=t.0" picture="/gs.jpg"/>
      <DocCard3d title="ட்ரோன்" description="ட்ரோன் செயல்பாடுகள், பயிர் கண்காணிப்பு அம்சங்கள் மற்றும் ஏஐ ஒருங்கிணைப்பு பற்றிய விவரங்கள்." link="https://docs.google.com/document/d/1TH0pRJxJFcyfVOQSR3bi-O2k_2o2udcRQd0Ysp4t96Y/edit?tab=t.0" picture="/drone.jpg"/>
     </div>
   </main>
  )
}

export default Documentation