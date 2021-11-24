import Icon from "./Icon";

const CondensedCardIcon = ({title, icon, ...props}) => (
    <>
    <div
        // h="12 min-12"
        // w="44 min-44"
        w="full"
        h="full"
        bg="white"
        display="flex"
        flex="nowrap"
        align="items-center"
        justify="between"
        shadow="2xl"
        border="rounded-tl-lg rounded-br-lg"
        {...props}
        >
        {icon &&
            <Icon name={icon} h="full" p="2 pl-4" w="full" flex="shrink-[2]"   />
        }
            
        {title &&
            <p
                display="flex"
                flex="grow-[2]"
                align="items-center"
                justify="center"
                w="full" h="full"
                p="2"
                text="lg center"
                font="semibold leading-snug tracking-tight"
                >
                { title}
            </p>
        }
    </div>
    </>
  );
  
  export default CondensedCardIcon;
  
