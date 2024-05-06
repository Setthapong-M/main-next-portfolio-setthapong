import React from 'react'

function ContentTesting() {
  return (
    <div className='my-20 mx-20 md:grid md:grid-cols-2'>
        <div className='col-start-2 flex flex-col'>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-4xl'>Testing</h1>
                <h2 className='text-2xl'>Usability Testing</h2>
                <p>ในการทดสอบกับผู้ใช้งาน โดยสังเกตุการใช้งานจากการเช้าใจง่าย ไม่ติดขัด จดจำวิธีการใช้งาน ข้อผิดพลาด และความพึงพอใจ โดยเริ่มจากการกำหนดสถานการณ์ 2 รูปแบบ</p>
                <ul className='list-decimal list-inside'>
                    <li className='mb-4'>ผู้ซื้อที่ซื้อของออนไลน์ แล้วแจ้งพ่อค้าว่าขอผ่านกลาง ผ่าน Middleman โดยที่คนซื้อจะสร้างห้องให้ แล้วส่งหมายเลขและรหัสให้พ่อค้าเข้าห้อง</li>
                    <li>ผู้ขายที่ได้รับการแจ้งว่าขอผ่านกลาง ผ่าน Middleman โดยรอให้ผู้ซื้อสร้างห้องและส่งหมายเลขและรหัสให้เพื่อเข้าห้อง</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContentTesting
