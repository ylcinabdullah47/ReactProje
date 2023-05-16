import React from 'react'

function Navbar() {
    return (
        <div className="navbar">


            <a href='#'>test1</a>
            <a href='#'>test2</a>
            <a href='#'>test3</a>
            <a href='#'>test4</a>


        </div>
    )



}

//BURASI ÖNEMLİ  EXPORT DEFAULT BİR KERE KULLANILIR AMA TEKRAR EXPORT KULLANMAMIZ GEREKTİĞİNDE BU ŞEKİLDE KULLANIYORUZ VE DİĞER SAYFASDA {alt_navbar } şeklinde çağırıyoruz
export const Alt_navbar = () => {
    return (
        <div className='alt_navbar'></div>
    )
}
export default Navbar

// kısayol rfc yazınca çıkıyor yukurıdaki yöntem daha pratik
// import React from 'react'

// export default function navbar() {
//   return (
//     <div>navbar</div>
//   )
// }
