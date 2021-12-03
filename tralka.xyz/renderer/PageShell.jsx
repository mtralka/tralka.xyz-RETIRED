import "@fontsource/outfit";
import "@fontsource/outfit/100.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";
import React from "react";
import { slide as Menu } from 'react-burger-menu';
import Icon from "../components/Icon";
import { footerItems, menuItems } from "../content/core.json";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout >
          <Sidebar/>
          <Content>{children}</Content>
          <Footer/>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  return (
    <div
    font="subpixel-antialiased sans"
    m="auto"
    overflow="x-hidden"
    >
      {children}
    </div>
  );
}

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
      h="min-screen"
    >
      {children}
    </div>
  );
}

const Footer = () => (
    <footer
      w="screen"
      h="min-14"
      bg="white"
      display="flex"
      flex="col"
      align="items-center"
      justify="center"
      space="y-4"
      p="y-4"
    >
      <p
        font="bold"  
      >
        {footerItems.text}
      </p>
      {
        footerItems.icons &&
        <div
          space="x-3"
          display="flex"
          
        >
          {footerItems.icons.map((item) => 
            <a href={item.link} key={item.link} p="1">
              <Icon name={item.name} h="6" w="6"  />
            </a>
            
          )}
        </div>
      }
      
    </footer>
  )