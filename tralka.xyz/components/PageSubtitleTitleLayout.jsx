const PageTitleSubtitleLayout = ({subtitle, title, children, subtitleClasses, ...props}) => (
  <>
    <div h="screen" w="full" z="50" p="l-10 md:l-20 t-26 md:t-52" flex="col" display="flex" {...props}>
      <div max-w="sm md:xl" space="y-3" flex="shrink-0" z="50" >
        <p
          position="relative"
          font="medium tracking-wider"
          m="l-1"
          text="xl md:2xl uppercase"
          className={subtitleClasses}
          >
          {subtitle}
        </p>
        <p font="extrabold " text="5xl md:7xl">
          {title}
        </p>
      </div>
      <div w="full" h="full" p="b-5 t-15 r-10 md:r-20" flex="shrink" >
        {children}
      </div>
      
    </div>
  </>
);

export default PageTitleSubtitleLayout;
