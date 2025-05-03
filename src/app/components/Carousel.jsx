"use client"
import React from 'react'
import MyBooks from './MyBooks'

function Carousel() {
    let slides = [
        "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187425L.jpg?h=694f517c1ef8b46e0ebbdedef9bb2584&width=169&hight=250",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/084/9786160847297.JPG?h=c2a475841431bb5bbf740ee7a6046ec1&width=145&hight=205",
        "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160846702L.jpg?h=46de3684e7db1feba3e767db7426033c&width=144&hight=209",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/084/9786160843107.JPG?h=3d48347abe559401f3b717ba45ef04aa&width=172&hight=250",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/928/9786169289739.JPG?h=86796a8aff9ca3bb19adbc9e6059d9a2&width=135&hight=209",
        "https://images-se-ed.com/ws/Storage/Originals/978974/401/9789744017178L.jpg?h=2199bf58e5a55f5bd309f3007c464dd9",
        "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162841L.jpg?h=36c2eaf74fd1db73c1d8a521f1367fab",
        "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187333L.jpg?h=c179295305204e80db4edc7956644d4e",
        "https://images-se-ed.com/ws/Storage/Originals/978616/365/9786163651365L.jpg?h=84a6f885477eb1c9f4bb341776fba850",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/942/9786169420033.JPG?h=44acde875335165f2e2730afd1d76f2f&width=134&hight=209",
        "https://images-se-ed.com/ws/Storage/Originals/978616/830/9786168302057L.jpg?h=91b0477c8ba09dc83ba2b796a513348d",
        "https://images-se-ed.com/ws/Storage/Originals/552730/000/5527300001216L.jpg?h=c7b8fd9bffdbe48d0a8a887aded573b9",
        "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352853L.jpg?h=bb70e5174ef85862a770b0f928581e34",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/942/9786169420071.JPG?h=ea1afdbd44fcd6e4530bdda0ea5fcb67&width=141&hight=209",
        "https://images-se-ed.com/ws/Storage/Originals/978616/287/9786162876264L.jpg?h=de7e9f081656ce39d9d5e7a69c2e3b84",
        "https://images-se-ed.com/ws/Storage/Originals/978616/829/9786168293553L.jpg?h=087079b3342fd394a58db32bb2b82aea",
        "https://images-se-ed.com/ws/Storage/Originals/978616/822/9786168224205L.jpg?h=df1e4cf05a52b85ab20a8d156d6f1712",
        "https://images-se-ed.com/ws/Storage/Originals/978616/810/9786168109410L.jpg?h=55f14a4406a0144910e77845fe5d0d74",
        "https://images-se-ed.com/ws/Storage/Originals/978616/783/9786167832166L.jpg?h=8c61357ebfbc8551ba072535b313ff5c",
        "https://images-se-ed.com/ws/Storage/Originals/978616/449/9786164492011L.jpg?h=0f9a5a4203b9545e9c605e2f52b4c03f",
        "https://images-se-ed.com/ws/Storage/Originals/552284/031/5522840317391L.jpg?h=34a222bfa31e7a86ffe7637df0afacac",
        "https://images-se-ed.com/ws/Storage/Originals/978616/183/9786161835194L.jpg?h=643665c22a4f6648ce751edc5691c106",
        "https://images-se-ed.com/ws/Storage/Originals/978616/515/9786165157049L.jpg?h=93d238962b58fd49e24f8ba5816ab40c",
        "https://images-se-ed.com/ws/Storage/Originals/978616/287/9786162870996L.jpg?h=7403a7d9489631660415c9eafa912659",
        "https://images-se-ed.com/ws/Storage/Originals/978616/287/9786162873782L.jpg?h=e3f94271cb922e8f5053788b6d7511a7",
        "https://images-se-ed.com/ws/Storage/Originals/978616/822/9786168224502L.jpg?h=be4982563f3736b45322f20e3e611687",
        "https://images-se-ed.com/ws/Storage/Originals/978616/515/9786165157087L.jpg?h=37a145e5d396b635639cce7cf80bcbe8",
        "https://images-se-ed.com/ws/Storage/Thumbnails2/978616/909/9786169098447.jpg?h=988fd489d52800416d5d1587cca3a16e&width=144&hight=209",
        "https://images-se-ed.com/ws/Storage/Thumbnails/978058/240/9780582402119.gif?h=3ac1119d44f2250a186c17a21d7fadfb&width=136&hight=209",
        "https://images-se-ed.com/ws/Storage/Originals/978616/515/9786165155298L.jpg?h=bc339971db3c36aba5703fa2ce6a0eea",
        "https://images-se-ed.com/ws/Storage/Originals/978616/205/9786162054099L.jpg?h=6ea1d6d112bbe6f4c75db0c996ceeda7",
    ]
  return (
    <div id='books-section' className='bg-green-indust'>
        <div className='mx-auto p-20 pb-20 max-w-screen-xl'>
            <h1 className='text-4xl text-center mb-20 text-black font-medium  '>What I have been reading</h1>
            <MyBooks slides={slides} />
        </div>
    </div>
    
  )
}

export default Carousel