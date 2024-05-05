import React from 'react'

function ContentOverview() {
  return (
    <div id='content-section' className='my-20 mx-20 md:grid md:grid-cols-2'>
        <div className='md:col-start-2'>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-4xl'>Overview</h1>
                <h2 className='text-2xl'>บริการคนกลางในการซื้อขายออนไลน์</h2>
                <p className='max-w-xl'>ช่วยเป็นคนกลางในการซื้อขายของ การขายของให้กับคนแปลกหน้า ไม่ยากเท่ากับซื้อของจากคนแปลกหน้า แต่คนขายก็ใช่ว่าจะไม่โดนเอาเปรียบ เราเป็นคนกลาง ทำหน้าที่ถือเงินเพ่ือให้คนซื้ัอมีอำนาจในการต่อรองมากขึ้น และให้คนขายมีความหน้าเชื่อถือมากขึ้น</p>
                <div className='flex flex-col md:flex-row gap-y-6'>
                    <div className='max-w-sm'>
                        <h3 className='text-xl mb-2'>ความท้าทาย</h3>
                        <p>ออกแบบผลิตภัณฑ์คนกลางที่ดูแลเงินสำหรับการซื้่อขาย ที่มีความเช่ือถือได้ มีความโปร่งใสในทุกด้าน และแบ่งปัน ประสบการณ์ที่ราบรื่น</p>
                    </div>
                    <div className='max-w-sm'>
                        <h3 className='text-xl mb-2'>การแก้ไขปัญหา</h3>
                        <p>สร้างผลิตภัณฑ์ที่นำผู้ซื้อกับผู้ขายมาเชื่อมต่อกัน ด้วยความน่าเชื่อถือ ที่มากกว่าความเชื่อใจ สร้างมาตรฐานใหม่ ในการซื้อขายออนไลน์</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default ContentOverview