import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa6'

export const Header = () => {
    return (
        <header className="w-[100vw] h-[5vh] flex items-center justify-center
         bg-[#EFEFEF] border-b-[1px] border-b-gray-300">
            <ul className="flex gap-6">
                <FaIcons.FaSquareInstagram className="header-icon"/>
            <BsIcons.BsTwitter className="header-icon"/>
            <BsIcons.BsFacebook className="header-icon"/>
            <BsIcons.BsTelegram className="header-icon"/>
        </ul>
        Atendimento Login
        </header>
    )
}