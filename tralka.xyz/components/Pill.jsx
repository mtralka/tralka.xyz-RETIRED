const Pill = ({text, ...props}) => (
    <span
    p="x-3 y-1"
    text="xs md:sm white"
    font="bold tracking-tight"
    bg="indigo-500"
    border="rounded-2xl"
    {...props}
  >
    { text }
  </span>
  );
  
export default Pill;
  

