import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
export default function BackToTop() {
  return (
    <div className='bottom-16 fixed right-24'>
    <Link href={'#top'}>
    <button className='p-2 bg-blue-400 w-min rounded-md'>
    <KeyboardArrowUpIcon className='text-white/70'/>
    </button>
    </Link>
    </div>
  )
}
