

const HorizontalCard = ({title, subtitle,link,...props}) => (
    <>
        <a href={link} w="full max-full sm:max-[26rem] sm:[26rem]" flex="shrink-0">
            <div
                bg="white opacity-40"
                h="auto md:40 min-28"
                w="full max-full md:max-[26rem] md:[26rem]"
                border="rounded-2xl"
                overflow="hidden"
                p="y-6 r-3 l-4"
                display="flex"
                flex="col"
                align="items-center"
                justify="evenly"
                space="y-9"
                cursor="pointer">
                <div w="full" space="y-1">
                    {title &&
                        <p text="2xl md:3xl left" font="bold">
                        { title}
                    </p>
                    }
                    
                    {subtitle &&
                        <p text="lg md:xl gray-800" font="light">
                        { subtitle}
                    </p>
                    }
                </div>
            </div>
        </a>
    </>
  );
  
  export default HorizontalCard;
  


//   <div class="flex justify-evenly items-center space-x-6">
//       <nuxt-link
//         v-for="el in links"
//         :key="el.link"
//         :to="el.link"
//         class="hover:underline"
//       >
//         <div class="flex justify-evenly items-center space-x-1">
//           <Icon v-if="el.icon" :icon="el.icon" class="h-5 w-5" />
//           <p class="font-light">
//             {{ el.text || '' }}
//           </p>
//         </div>
//       </nuxt-link>
//       <nuxt-link :to="cardLink" class="hover:underline">
//         <div class="flex justify-evenly items-center space-x-1">
//           <p class="font-light">Read more</p>
//         </div>
//       </nuxt-link>
//     </div>