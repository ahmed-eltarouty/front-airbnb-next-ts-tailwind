import Link from "next/link";


const Footer = () => {
     const links = [
          {
               title: 'ABOUT',
               links: [
                    'How Airbnb works',
                    'Newsroom',
                    'Investors',
                    'Airbnbn Plus',
                    'Airbnb Luxe',
               ],
          },
          {
               title: 'COMMUNITY',
               links: [
                    'Accessbility',
                    'This is not a real site',
                    'Its a pretty awesome clone',
                    'Referrals accepted',
                    'Papafam',
               ],
          },
          {
               title: 'HOST',
               links: [
                    'Accessbility',
                    'This is not a real site',
                    'Its a pretty awesome clone',
                    'Referrals accepted',
                    'Papafam',
               ],
          },
          {
               title: 'SUPPORT',
               links: [
                    'Accessbility',
                    'This is not a real site',
                    'Its a pretty awesome clone',
                    'Referrals accepted',
                    'Papafam',
               ],
          },
     ];
     return (
          <footer>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
                    {links.map((link, i) => (
                         <div className="space-y-4 text-xs text-gray-800" key={i}>
                              <h5 className="font-bold">{link.title}</h5>
                              {link.links.map((item, n) => <Link href={item} key={n} className="block">{item}</Link>)}

                         </div>
                    ))}
               </div>
          </footer>
     )
}

export default Footer