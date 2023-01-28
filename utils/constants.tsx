import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';
import { MdTipsAndUpdates, MdDraw } from 'react-icons/md'

export const topics = [
  {
    name: 'highlights',
    icon: <FaGamepad />,
  },
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'outplays',
    icon: <GiGalaxy />,
  },
  {
    name: 'skins',
    icon: <GiLipstick />,
  },
  {
    name: 'fan arts',
    icon: <MdDraw />,
  },
  {
    name: 'updates',
    icon: <MdTipsAndUpdates />,
  },
  {
    name: 'esports',
    icon: <FaMedal />,
  },
  {
    name: 'development',
    icon: <BsCode />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]