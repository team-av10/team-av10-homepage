import { AceHeading } from '@/components/global/ace-heading'
import { DocCard3d } from '@/components/global/doc-card-3d'
import { FooterComp } from '@/components/global/footer-comp'
import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = {}

const Documentation = (props: Props) => {
  return (
   <main>
    <Navbar/>
     <AceHeading title="Documentations"/>
     <div className="mt-[-350px]">
      <DocCard3d title="Kisaan Sahaayak Dashboard" description="Guide to using our user-friendly, real-time farm monitoring web interface." link="https://docs.google.com/document/d/1RX7qlESx25kq3xh7VdbwB8tII9WrDF23kbQvMRc5N-M/edit?tab=t.0" picture="/dashboard.jpg"/>
      <DocCard3d title="IoT Ground Station" description="Setup and data flow of our field-based environmental sensor system." link="https://docs.google.com/document/d/13JkkUg4uLcLB53SXUHBx-jyHoQi1Wh-NNFFUGKkxKJ4/edit?tab=t.0" picture="/gs.jpg"/>
      <DocCard3d title="Drone" description="Details on drone operations, crop monitoring features, and AI integration." link="https://docs.google.com/document/d/1TH0pRJxJFcyfVOQSR3bi-O2k_2o2udcRQd0Ysp4t96Y/edit?tab=t.0" picture="/drone.jpg"/>
     </div>
   </main>
  )
}

export default Documentation