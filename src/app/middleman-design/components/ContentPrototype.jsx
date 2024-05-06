import React from 'react'

function ContentPrototype() {
    return (
        <div className='my-20 mx-20 md:grid md:grid-cols-2'>
            <div className='col-start-2 flex flex-col'>
                <div className='flex flex-col gap-y-6'>
                    <h1 className='text-4xl'>Prototype</h1>
                    <h2 className='text-2xl'>การออกแบบเพื่อสังคม</h2>
                    <p>เริ่มจากกำหนดเนื้อหาในแพลทฟอร์ม ตามด้วยจัดเรียงตามหมวดหมู่ และทำ site map ก่อนจะเริ่มทำลงใน Figma</p>
                    <p>เริ่มต้นที่ low-fidelity wireframe ร่างลงไอเเพท โดยยึดหลัก Social by design เป็นสิ่งที่ Facebook ใช้ในการดำเนินบริษัท และวลีที่เป็นเเรงบรรดาใจจากหนังสือ Think like zuck บอกว่า “ทำให้เสร็จ ดีกว่าทำให้สมูบูรณ์ แต่ไม่เสร็จ” หลังจากนั้นขึ้นเป็น high-fidelity wireframe</p>
                    <p>ขั้นตอนต่อไปทำ Pattern library เก็บค่าชุดสี ชุดฟอนต์ ไปยัง Local variables ในชั้น Primitive เพื่อทำในชั้น Semantic ในตอนต่อไป โดยในขั้นนี้จะเริ่มจากส่วนของ Atom ไป Molecule และ Organism ใน Molecule จะทำการเก็บค่าของ Desktop และ Mobile แยกกัน เพื่อง่ายต่อการแก้ไข และความเป็นระเบียบ ในการทำ component และ mockup input จะอยู่ในขั้นตอนนี้ หลังจะนั้น นำส่วนของ Molecule มาประกอบเป็น Organism ก่อนนำไปที่ขั้นตอนถัดไปที่ User interface</p>
                    <p>ก่อนที่จะนำ Organism มาจัดหน้า ui จะทำการเก็บค่าชั้น Primitive ให้เป็น Semantic โดยจะเเยกสีเป็นส่วนๆ เพื่อง่ายต่อการปรับแก้ในอนาคต รวมถึงการทำแปลงภาษาให้เป็นภาษาไทย หลังจากนั้น นำ Organism มาประกอบตาม wireframe ที่สร้างไว้</p>
                </div>
            </div>
        </div>
      )
}

export default ContentPrototype