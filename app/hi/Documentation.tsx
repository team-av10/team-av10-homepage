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
     <AceHeading title="दस्तावेज़"/>
     <div className="mt-[-350px]">
      <DocCard3d title="किसान सहायक डैशबोर्ड" description="हमारे उपयोग में आसान, रियल-टाइम खेत निगरानी वेब इंटरफ़ेस के उपयोग के लिए मार्गदर्शिका।" link="https://docs.google.com/document/d/1RX7qlESx25kq3xh7VdbwB8tII9WrDF23kbQvMRc5N-M/edit?tab=t.0" picture="/dashboard.jpg"/>
      <DocCard3d title="IoT ग्राउंड स्टेशन" description="खेत में आधारित पर्यावरणीय सेंसर सिस्टम की स्थापना और डेटा प्रवाह की जानकारी।" link="https://docs.google.com/document/d/13JkkUg4uLcLB53SXUHBx-jyHoQi1Wh-NNFFUGKkxKJ4/edit?tab=t.0" picture="/gs.jpg"/>
      <DocCard3d title="ड्रोन" description="ड्रोन के संचालन, फसल निगरानी विशेषताओं और एआई एकीकरण से जुड़ी जानकारी।" link="https://docs.google.com/document/d/1TH0pRJxJFcyfVOQSR3bi-O2k_2o2udcRQd0Ysp4t96Y/edit?tab=t.0" picture="/drone.jpg"/>
     </div>
   </main>
  )
}

export default Documentation