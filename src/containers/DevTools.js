import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultPosition="left"
    defaultSize={0.2}
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
)
