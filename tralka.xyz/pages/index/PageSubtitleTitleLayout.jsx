const PageTitleSubtitleLayout = (props) => (
  <>
    <div h="screen" w="full" z="50" p="l-10 md:l-20 t-26 md:t-52" flex="col" display="flex">
      <div max-w="sm md:xl" tracking="wide" space="y-3" flex="shrink-0" z="50">
        <p position="relative" font="medium" m="l-1" text="xl md:2xl uppercase">
          {props.subtitle}
        </p>
        <p font="extrabold" text="5xl md:7xl">
          {props.title}
        </p>
      </div>
      <div w="full" h="full" p="b-5 t-15 r-10 md:r-20" flex="shrink">
        {props.children}
      </div>
      
    </div>
  </>
);

export default PageTitleSubtitleLayout;
