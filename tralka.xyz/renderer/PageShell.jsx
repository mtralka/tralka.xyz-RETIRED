import React from "react";
// import { Link } from "./Link";
import { slide as Menu } from 'react-burger-menu';
import { menuItems } from "../content/core.json";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div font="subpixel-antialiased">
          {/* <Layout>
            <Sidebar>
              <Logo />
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/about">
                About
              </Link>
            </Sidebar>
            <Content>{children}</Content>
          </Layout> */}
          <Sidebar/>
          <div m="auto">
          
          <Content>{children}</Content>
          
          
          </div>
          
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

// function Layout({ children }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         maxWidth: 900,
//         margin: "auto",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

function Sidebar() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '36px',
      width: '36px',
      marginRight: '20px',
      marginTop: '20px'
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItem: {
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
    <>
      <Menu right
        styles={styles}
        width={ 200 }
        itemListClassName={ "flex flex-col space-y-3 items-end md:items-start" }
        menuClassName={ "bg-cool-gray-600 px-10 pt-12" }
      >
        {menuItems.map((item) => 
          <a
            href={item.link}
            key={item.link}
            h="min-20"
            align="items-center"
            text="2xl"
            font="bold"
          >
            {item.name}
          </a>
        )
        }
      </Menu>
    </>
  );
}

function Content({ children }) {
  return (
    <div
      // h="min-screen"
      style={{
        // padding: 20,
        // paddingBottom: 50,
        // borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

// function Logo() {
//   return (
//     <div
//       style={{
//         marginTop: 20,
//         marginBottom: 10,
//       }}
//     >
//       <a href="/">
//         <img src={logo} height={64} width={64} alt="logo" />
//       </a>
//     </div>
//   );
// }
