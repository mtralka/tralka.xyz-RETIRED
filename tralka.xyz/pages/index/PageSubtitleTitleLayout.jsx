const PageTitleSubtitleLayout = (props) => (
  <>
    <div h="screen" w="full" z="50">
      <div max-w="sm md:xl" tracking="wide" space="y-3" p="l-20 t-26 md:t-52">
        <p position="relative" font="medium" m="l-1" text="xl md:2xl uppercase">
          {props.subtitle}
        </p>
        <p font="extrabold" text="5xl md:7xl">
          {props.title}
        </p>
      </div>
      {props.children}
    </div>
  </>
);

export default PageTitleSubtitleLayout;
