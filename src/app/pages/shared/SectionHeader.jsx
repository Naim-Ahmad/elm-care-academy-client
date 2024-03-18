import classes from '@/app/pages/shared/css/sectionHeader.module.css';
import { Typography } from "@/components/MaterialTailwind";

export default function SectionHeader(props) {
  const {title, description} = props;

  return (
    <div className='flex flex-col items-center max-w-xl mx-auto text-center'>
      <Typography as="h2" variant="h2" className={`mb-8 text-2xl md:text-4xl ${classes.title}`}>{title}</Typography>
      <Typography as="p" variant="small">{description}</Typography>
    </div>
  )
}