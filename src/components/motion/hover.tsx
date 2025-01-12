import { Cursor } from "../ui/cursor";

interface HoverProps {
  imageSrc: string;
  altText: string;
  text: string;
}

export function Hover({ imageSrc, altText,text }: HoverProps) {
  return (
    <div className='p-4'>
      <Cursor
        attachToParent
        variants={{
          initial: { height: 0, opacity: 0, scale: 0.3 },
          animate: { height: 'auto', opacity: 1, scale: 1 },
          exit: { height: 0, opacity: 0, scale: 0.3 },
        }}
        transition={{
          type: 'spring',
          duration: 0.3,
          bounce: 0.1,
        }}
        className='overflow-hidden'
        springConfig={{
          bounce: 0.01,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className='h-40 w-40'
        />
      </Cursor>
      <div>{text}</div>
    </div>
  );
}