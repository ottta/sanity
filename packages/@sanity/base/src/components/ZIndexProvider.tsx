import React, {createContext, useContext} from 'react'
import cssCustomProperties from 'sanity:css-custom-properties'

const defaults = {
  /*
    used by
    - Navbar
  */
  navbar: parseInt(cssCustomProperties['--zindex-navbar'], 10) || 200,
  navbarPopover: parseInt(cssCustomProperties['--zindex-navbar-popover'], 10) || 500000,
  navbarDialog: parseInt(cssCustomProperties['--zindex-navbar-dialog'], 10) || 500001,

  /*
    used by:
    - DefaultPane
  */
  pane: parseInt(cssCustomProperties['--zindex-pane'], 10) || 100,

  /*
    used by:
    - DefaultPane
  */
  paneResizer: parseInt(cssCustomProperties['--zindex-pane-resizer'], 10) || 150,

  /*
    used by:
    - EditItemFoldOut
    - Spinner
    - ConnectorsOverlay
    - tippy.css
    - BaseDateTimeInput
  */
  portal: parseInt(cssCustomProperties['--zindex-portal'], 10) || 200,

  /*
    used by tooltip
  */
  popover: parseInt(cssCustomProperties['--zindex-popover'], 10) || 200,

  /*
    used by google-maps-input
  */
  modal: parseInt(cssCustomProperties['--zindex-modal'], 10) || 200,

  /*
    used for movingItem in:
    packages/@sanity/base/src/styles/layout/helpers.css
  */
  movingItem: parseInt(cssCustomProperties['--zindex-moving-item'], 10) || 10000,

  /*
    used for shadow behind the navbar search, and behind sidemenu
  */
  drawershade: parseInt(cssCustomProperties['--zindex-drawershade'], 10) || 1000000,

  /*
    used for snackbar
  */
  drawer: parseInt(cssCustomProperties['--zindex-drawer'], 10) || 1000001,

  // NOT IN USE
  dropdown: parseInt(cssCustomProperties['--zindex-dropdown'], 10) || 200,
  navbarFixed: parseInt(cssCustomProperties['--zindex-navbar-fixed'], 10) || 1010,
  fullscreenEdit: parseInt(cssCustomProperties['--zindex-fullscreen-edit'], 10) || 1050,
  popoverBackground: parseInt(cssCustomProperties['--zindex-popover-background'], 10) || 1060,
  tooltip: parseInt(cssCustomProperties['--zindex-tooltip'], 10) || 200,
  modalBackground: parseInt(cssCustomProperties['--zindex-modal-background'], 10) || 2000,
  spinner: parseInt(cssCustomProperties['--zindex-spinner'], 10) || 3000,
}

const ZIndexContext = createContext(defaults)

export function useZIndex() {
  return useContext(ZIndexContext)
}

export function ZIndexProvider({children}: {children?: React.ReactNode}) {
  return <ZIndexContext.Provider value={defaults}>{children}</ZIndexContext.Provider>
}
